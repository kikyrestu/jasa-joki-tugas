'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaFilter, FaPaperPlane, FaCircle } from 'react-icons/fa';
import AdminNav from '@/components/AdminNav';
import { getChatRooms, sendMessage, subscribeToChatRoom } from '@/lib/firebase';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function ChatPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [chatRooms, setChatRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const messagesEndRef = useRef(null);

  // Redirect ke login jika belum login
  useEffect(() => {
    if (!loading && !user) {
      router.push('/admin');
    }
  }, [user, loading, router]);

  useEffect(() => {
    const loadChatRooms = async () => {
      if (user) {
        const rooms = await getChatRooms();
        setChatRooms(rooms);
      }
    };

    loadChatRooms();
  }, [user]);

  useEffect(() => {
    if (selectedRoom) {
      // Subscribe to messages for selected room
      const unsubscribe = subscribeToChatRoom(selectedRoom.id, (updatedMessages) => {
        setMessages(updatedMessages);
        // Scroll to bottom on new messages
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      });

      return () => unsubscribe();
    }
  }, [selectedRoom]);

  // Tampilkan loading saat mengecek auth
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-slate-400">Loading...</div>
      </div>
    );
  }

  // Jika belum login, tidak perlu render apapun karena useEffect akan redirect
  if (!user) {
    return null;
  }

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedRoom) return;

    try {
      await sendMessage(selectedRoom.id, {
        text: newMessage,
        sender: 'admin',
        timestamp: new Date(),
      });
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Gagal mengirim pesan');
    }
  };

  // Filter chat rooms based on search and status
  const filteredRooms = chatRooms.filter(room => {
    const matchesSearch = !searchQuery || 
      room.customerName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || room.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-slate-900">
      <AdminNav />
      
      <main className="fixed inset-0 top-16 p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto h-full">
          <div className="flex flex-col lg:flex-row gap-6 h-full">
            {/* Chat List */}
            <div className="lg:w-80 flex flex-col h-full overflow-hidden">
              {/* Header */}
              <div className="flex-shrink-0 mb-4">
                <h1 className="text-2xl font-bold text-slate-100 font-[var(--font-space)]">
                  Live Chat
                </h1>
                <p className="text-slate-400 text-sm mt-1">
                  Kelola percakapan dengan client
                </p>
              </div>

              {/* Filters */}
              <div className="glass-card p-3 mb-4">
                <div className="space-y-3">
                  {/* Search */}
                  <div className="relative">
                    <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Cari chat..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-slate-700/50 rounded-lg border border-slate-600 text-slate-200 focus:outline-none focus:border-amber-500 text-sm"
                    />
                  </div>

                  {/* Status Filter */}
                  <div className="relative">
                    <FaFilter className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <select
                      value={filterStatus}
                      onChange={(e) => setFilterStatus(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-slate-700/50 rounded-lg border border-slate-600 text-slate-200 focus:outline-none focus:border-amber-500 appearance-none text-sm"
                    >
                      <option value="all">Semua Status</option>
                      <option value="active">Active</option>
                      <option value="pending">Pending</option>
                      <option value="closed">Closed</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Chat Rooms List */}
              <div className="flex-1 overflow-y-auto space-y-2">
                {filteredRooms.map((room) => (
                  <motion.button
                    key={room.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => setSelectedRoom(room)}
                    className={`w-full p-3 rounded-xl transition-colors ${
                      selectedRoom?.id === room.id
                        ? 'bg-amber-500/10 border border-amber-500/20'
                        : 'glass-card hover:bg-slate-800/80'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center text-white font-medium">
                        {room.customerName[0]}
                      </div>
                      <div className="flex-1 min-w-0 text-left">
                        <div className="flex items-center justify-between">
                          <h3 className="text-slate-200 font-medium truncate">
                            {room.customerName}
                          </h3>
                          <span className={`flex items-center text-xs ${
                            room.status === 'active' ? 'text-green-400' :
                            room.status === 'pending' ? 'text-amber-400' :
                            'text-slate-400'
                          }`}>
                            <FaCircle className="w-2 h-2 mr-1" />
                            {room.status}
                          </span>
                        </div>
                        <p className="text-sm text-slate-400 truncate">
                          {room.lastMessage || 'No messages yet'}
                        </p>
                        <div className="text-xs text-slate-500 mt-1">
                          {format(room.lastActivity, 'HH:mm', { locale: id })}
                        </div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Chat Window */}
            <div className="flex-1 glass-card flex flex-col">
              {selectedRoom ? (
                <div className="h-full flex flex-col">
                  {/* Chat Header */}
                  <div className="p-4 border-b border-slate-700/50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center text-white font-medium">
                          {selectedRoom.customerName[0]}
                        </div>
                        <div>
                          <h3 className="text-slate-100 font-medium">
                            {selectedRoom.customerName}
                          </h3>
                          <div className="text-sm text-slate-400">
                            {selectedRoom.email}
                          </div>
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        selectedRoom.status === 'active' ? 'bg-green-500/10 text-green-400' :
                        selectedRoom.status === 'pending' ? 'bg-amber-500/10 text-amber-400' :
                        'bg-slate-500/10 text-slate-400'
                      }`}>
                        {selectedRoom.status}
                      </span>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((message, index) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex ${message.sender === 'admin' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`max-w-[80%] ${
                          message.sender === 'admin'
                            ? 'bg-amber-500/10 text-amber-100'
                            : 'bg-slate-700/50 text-slate-200'
                        } rounded-2xl px-4 py-2`}>
                          <p className="text-sm">{message.text}</p>
                          <div className="text-xs mt-1 opacity-60">
                            {format(message.timestamp, 'HH:mm', { locale: id })}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Message Input */}
                  <div className="p-4 border-t border-slate-700/50">
                    <form onSubmit={handleSendMessage} className="flex gap-2">
                      <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Ketik pesan..."
                        className="flex-1 px-4 py-2 bg-slate-700/50 rounded-lg border border-slate-600 text-slate-200 focus:outline-none focus:border-amber-500"
                      />
                      <button
                        type="submit"
                        disabled={!newMessage.trim()}
                        className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg text-white font-medium hover:from-amber-600 hover:to-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <FaPaperPlane />
                      </button>
                    </form>
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center text-slate-400">
                  Pilih chat untuk memulai percakapan
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 