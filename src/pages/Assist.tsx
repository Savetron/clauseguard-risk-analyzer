
import React, { useState } from 'react';
import { useI18n } from '@/contexts/i18n-context';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
};

const Assist = () => {
  const { t } = useI18n();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: t('assist.startPrompt'),
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim() || isLoading) return;
    
    const userMessage: Message = {
      id: Date.now(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    // TODO integrate backend
    // Mock AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: Date.now(),
        text: `This is a simulated response to: "${input}"`,
        sender: 'ai',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 flex">
        <div className="container mx-auto px-6 flex flex-col h-full">
          <div className="flex-grow overflow-y-auto flex flex-col space-y-4 pb-20">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`max-w-3xl ${
                  message.sender === 'user' ? 'self-end' : 'self-start'
                }`}
              >
                <div
                  className={`p-4 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-black text-white ml-8'
                      : 'bg-white shadow-md mr-8'
                  }`}
                >
                  <p>{message.text}</p>
                </div>
                <div
                  className={`text-xs text-gray-500 mt-1 ${
                    message.sender === 'user' ? 'text-right' : 'text-left'
                  }`}
                >
                  {message.timestamp.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="self-start max-w-3xl">
                <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-2">
                  <div className="h-2 w-2 bg-gray-500 rounded-full animate-pulse"></div>
                  <div className="h-2 w-2 bg-gray-500 rounded-full animate-pulse delay-150"></div>
                  <div className="h-2 w-2 bg-gray-500 rounded-full animate-pulse delay-300"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <div className="container mx-auto">
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t('assist.placeholder')}
              className="flex-grow resize-none"
              rows={1}
            />
            <Button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="bg-black text-white hover:opacity-90"
            >
              <Send size={18} />
              <span className="sr-only">{t('assist.sendButton')}</span>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Assist;
