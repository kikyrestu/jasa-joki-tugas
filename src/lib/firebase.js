import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, query, orderBy, serverTimestamp, onSnapshot, deleteDoc, doc, updateDoc, where, setDoc } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Initialize Analytics only on client side
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Collection references
const testimonialCollection = collection(db, 'testimonials');
const chatRoomsCollection = collection(db, 'chatRooms');

// Rate limiting configuration
const MAX_LOGIN_ATTEMPTS = 3;
const LOCKOUT_TIME = 15 * 60 * 1000; // 15 menit dalam milliseconds

// Simpan attempt di memory (dalam production sebaiknya gunakan Redis/database)
let loginAttempts = {};

// Auth functions
export const loginAdmin = async (email, password) => {
  try {
    // Validasi email admin
    const allowedEmail = process.env.NEXT_PRIVATE_ADMIN_EMAIL;
    if (email !== allowedEmail) {
      throw new Error('Unauthorized access attempt');
    }

    // Cek jika IP/email sedang dalam cooldown period
    const attemptKey = email.toLowerCase();
    const currentAttempt = loginAttempts[attemptKey] || { count: 0, timestamp: 0 };
    const now = Date.now();

    if (currentAttempt.count >= MAX_LOGIN_ATTEMPTS) {
      const timeLeft = LOCKOUT_TIME - (now - currentAttempt.timestamp);
      if (timeLeft > 0) {
        const minutesLeft = Math.ceil(timeLeft / 60000);
        throw new Error(`Terlalu banyak percobaan login. Silakan coba lagi dalam ${minutesLeft} menit.`);
      } else {
        // Reset jika cooldown sudah selesai
        delete loginAttempts[attemptKey];
      }
    }

    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    
    // Reset login attempts jika berhasil
    delete loginAttempts[attemptKey];
    
    // Set session cookie
    document.cookie = `admin_session=${userCredential.user.uid}; path=/; max-age=86400; secure; samesite=strict`;
    
    return userCredential.user;
  } catch (error) {
    console.error('Error logging in:', error);

    // Update login attempts jika gagal
    const attemptKey = email.toLowerCase();
    const currentAttempt = loginAttempts[attemptKey] || { count: 0, timestamp: Date.now() };
    
    loginAttempts[attemptKey] = {
      count: currentAttempt.count + 1,
      timestamp: Date.now()
    };

    if (error.message === 'Unauthorized access attempt') {
      throw new Error('Akses tidak diizinkan');
    }
    
    // Tampilkan pesan sisa percobaan
    const attemptsLeft = MAX_LOGIN_ATTEMPTS - loginAttempts[attemptKey].count;
    if (attemptsLeft > 0) {
      throw new Error(`Login gagal. Sisa ${attemptsLeft} percobaan sebelum akun terkunci.`);
    } else {
      throw new Error('Terlalu banyak percobaan login. Silakan coba lagi dalam 15 menit.');
    }
  }
};

export const logoutAdmin = async () => {
  try {
    await signOut(auth);
    // Hapus session cookie
    document.cookie = 'admin_session=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
  } catch (error) {
    console.error('Error logging out:', error);
    throw error;
  }
};

export const subscribeToAuthState = (callback) => {
  return onAuthStateChanged(auth, callback);
};

// Testimonial functions
export const addTestimonial = async (testimonialData) => {
  try {
    const docRef = await addDoc(testimonialCollection, {
      ...testimonialData,
      createdAt: serverTimestamp(),
      likes: 0,
      status: 'pending' // Default status for new testimonials
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding testimonial:', error);
    throw error;
  }
};

export const deleteTestimonial = async (testimonialId) => {
  try {
    const testimonialRef = doc(db, 'testimonials', testimonialId);
    await deleteDoc(testimonialRef);
  } catch (error) {
    console.error('Error deleting testimonial:', error);
    throw error;
  }
};

export const updateTestimonial = async (testimonialId, updateData) => {
  try {
    const testimonialRef = doc(db, 'testimonials', testimonialId);
    await updateDoc(testimonialRef, updateData);
  } catch (error) {
    console.error('Error updating testimonial:', error);
    throw error;
  }
};

export const getTestimonials = async () => {
  try {
    const q = query(testimonialCollection, orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate()
    }));
  } catch (error) {
    console.error('Error getting testimonials:', error);
    throw error;
  }
};

// Subscribe to testimonials (realtime)
export const subscribeToTestimonials = (callback) => {
  const q = query(testimonialCollection, orderBy('createdAt', 'desc'));
  return onSnapshot(q, (snapshot) => {
    const testimonials = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate()
    }));
    callback(testimonials);
  });
};

// Chat Room functions
export const getChatRooms = async () => {
  try {
    const q = query(chatRoomsCollection, orderBy('lastActivity', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      lastActivity: doc.data().lastActivity?.toDate(),
      createdAt: doc.data().createdAt?.toDate()
    }));
  } catch (error) {
    console.error('Error getting chat rooms:', error);
    throw error;
  }
};

export const subscribeToChatRoom = (roomId, callback) => {
  const messagesRef = collection(db, 'chatRooms', roomId, 'messages');
  const q = query(messagesRef, orderBy('createdAt', 'asc'));
  
  return onSnapshot(q, (snapshot) => {
    const messages = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate()
    }));
    callback(messages);
  });
};

export const sendMessage = async (roomId, messageData) => {
  try {
    const messagesRef = collection(db, 'chatRooms', roomId, 'messages');
    const roomRef = doc(db, 'chatRooms', roomId);

    // Add message
    await addDoc(messagesRef, {
      ...messageData,
      createdAt: serverTimestamp()
    });

    // Update room's last activity
    await updateDoc(roomRef, {
      lastActivity: serverTimestamp(),
      lastMessage: messageData.text
    });
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};

// Add new chat message (for client)
export const addChatMessage = async (messageData) => {
  try {
    // Create a unique room ID based on user's name (for simplicity)
    const roomId = messageData.name.toLowerCase().replace(/\s+/g, '-');
    const roomRef = doc(db, 'chatRooms', roomId);
    const messagesRef = collection(db, 'chatRooms', roomId, 'messages');
    
    // Create or update chat room
    await setDoc(roomRef, {
      customerName: messageData.name,
      status: 'active',
      createdAt: serverTimestamp(),
      lastActivity: serverTimestamp(),
      lastMessage: messageData.text
    }, { merge: true });

    // Add message
    const docRef = await addDoc(messagesRef, {
      ...messageData,
      createdAt: serverTimestamp(),
      isAdmin: false
    });
    return docRef.id;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};

// Subscribe to chat messages for specific user
export const subscribeToChatMessages = (userName, callback) => {
  const roomId = userName.toLowerCase().replace(/\s+/g, '-');
  const roomRef = collection(db, 'chatRooms', roomId, 'messages');
  const q = query(roomRef, orderBy('createdAt', 'asc'));
  
  return onSnapshot(q, (snapshot) => {
    const messages = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate()
    }));
    callback(messages);
  });
}; 