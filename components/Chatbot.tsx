import { useState } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hey there! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: newMessages })
    });

    const data = await res.json();
    setMessages([...newMessages, { role: 'assistant', content: data.reply }]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#C2410C] text-white p-4 rounded-full shadow-lg hover:scale-105 transition"
        >
          💬
        </button>
      )}

      {isOpen && (
        <div className="w-80 h-96 bg-white rounded-xl shadow-xl flex flex-col overflow-hidden animate-fade-in">
          <div className="flex justify-between items-center bg-[#C2410C] text-white px-4 py-2">
            <span>Chat with Vantyx</span>
            <button onClick={() => setIsOpen(false)} className="text-sm">✖</button>
          </div>
          <div className="flex-1 p-4 space-y-2 overflow-y-auto text-left text-sm">
            {messages.map((msg, idx) => (
              <div key={idx} className={msg.role === 'user' ? 'text-right' : 'text-left'}>
                <span className={msg.role === 'user' ? 'bg-[#fcd9c4]' : 'bg-gray-100'}
                      style={{ display: 'inline-block', padding: '8px 12px', borderRadius: '12px', maxWidth: '80%' }}>
                  {msg.content}
                </span>
              </div>
            ))}
          </div>
          <div className="p-3 border-t flex">
            <input
              className="flex-1 border rounded-l px-3 py-1 text-sm focus:outline-none"
              placeholder="Type your question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-[#C2410C] text-white px-4 py-1 rounded-r text-sm hover:opacity-90"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}