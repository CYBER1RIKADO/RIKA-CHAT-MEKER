import { useState, useEffect, useRef } from 'react';
import './index.css';

export default function RikaChatMaker() {
  const [messages, setMessages] = useState([
    { sender: 'friend', text: 'ආයුබෝවන්! 😊' },
    { sender: 'you', text: 'RIKA CHAT MAKER එකට සුභ ආරම්භයක්! 🚀' }
  ]);
  const [input, setInput] = useState('');
  const [sender, setSender] = useState('you');
  const messagesEndRef = useRef(null);

  const sendMessage = () => {
    if (input.trim() === '') return;
    setMessages([...messages, { sender, text: input }]);
    setInput('');
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="min-h-screen bg-[url('https://i.ibb.co/9yZ9Nmm/anime-bg.jpg')] bg-cover bg-center flex items-center justify-center p-4 text-white">
      <div className="w-full max-w-md backdrop-blur-lg bg-black/50 rounded-3xl shadow-xl p-6">
        <h1 className="text-4xl font-extrabold text-center mb-6 font-serif drop-shadow-lg">
          🌸 RIKA CHAT MAKER 🌸
        </h1>

        <div className="flex flex-col gap-3 max-h-[400px] overflow-y-auto mb-6 px-2">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`rounded-2xl px-4 py-3 max-w-[75%] text-base font-medium shadow-md ${
                msg.sender === 'you'
                  ? 'self-end bg-pink-300 text-black'
                  : 'self-start bg-blue-300 text-black'
              }`}
            >
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="flex items-center gap-3">
          <select
            className="text-black rounded-lg px-3 py-2 font-semibold"
            value={sender}
            onChange={(e) => setSender(e.target.value)}
          >
            <option value="you">You</option>
            <option value="friend">Friend</option>
          </select>

          <input
            className="flex-1 p-3 rounded-xl text-black text-lg font-medium"
            placeholder="Message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />

          <button
            className="bg-green-500 hover:bg-green-600 transition text-white font-bold px-5 py-3 rounded-2xl shadow-lg"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
                }
