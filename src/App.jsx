import { useState } from 'react';

export default function RikaChatMaker() {
  const [messages, setMessages] = useState([
    { sender: 'friend', text: 'ආයුබෝවන්! 😊' },
    { sender: 'you', text: 'RIKA CHAT MAKER එකට සුභ ආරම්භයක්! 🚀' },
  ]);
  const [input, setInput] = useState('');
  const [sender, setSender] = useState('you');

  const sendMessage = () => {
    if (input.trim() === '') return;
    setMessages([...messages, { sender, text: input }]);
    setInput('');
  };

  return (
    <div className="min-h-screen bg-[url('https://i.ibb.co/9yZ9Nmm/anime-bg.jpg')] bg-cover bg-center flex items-center justify-center p-4 text-white">
      <div className="w-full max-w-md backdrop-blur-lg bg-black/40 rounded-2xl shadow-lg p-4">
        <h1 className="text-3xl font-bold text-center mb-4">🌸 RIKA CHAT MAKER 🌸</h1>

        <div className="flex flex-col gap-2 max-h-96 overflow-y-auto mb-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`rounded-xl px-3 py-2 max-w-[80%] text-sm font-medium shadow-md ${
                msg.sender === 'you'
                  ? 'self-end bg-pink-200 text-black'
                  : 'self-start bg-blue-200 text-black'
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <select
            className="text-black rounded-lg px-2 py-1"
            value={sender}
            onChange={(e) => setSender(e.target.value)}
          >
            <option value="you">You</option>
            <option value="friend">Friend</option>
          </select>

          <input
            className="flex-1 p-2 rounded-lg text-black"
            placeholder="Message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />

          <button
            className="bg-green-500 px-3 py-1 rounded-xl text-white font-bold hover:bg-green-600"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
