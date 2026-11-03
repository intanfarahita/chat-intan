'use client';

import { useRef, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function ChatWindow({ messages }: { messages: Message[] }) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div
      ref={scrollContainerRef}
      className="flex-1 overflow-y-auto space-y-4 pr-4 mb-4 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700"
    >
      {messages.length === 0 ? (
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <div className="bg-gradient-to-br from-pink-100 to-fuchsia-100 dark:from-fuchsia-900/70 dark:to-rose-900/60 w-16 h-16 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-pink-200/60 dark:shadow-fuchsia-950/40">
              <i className="fas fa-sparkles text-3xl text-pink-500 dark:text-pink-300"></i>
            </div>
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Selamat datang di Intan AI!</h2>
            <p className="text-gray-600 dark:text-pink-100/70 max-w-sm">
              Halo.. Saya Intan, asisten AI yang siap menemani Anda.<br>
              </br>
              Tanyakan apa saja dan mari mulai berbincang!
            </p>
          </div>
        </div>
      ) : (
        messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 animate-fadeIn ${message.role === 'user' ? 'flex-row-reverse' : ''
              }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-white shrink-0 ${message.role === 'user'
                ? 'bg-slate-700 dark:bg-slate-600'
                : 'bg-gradient-to-br from-pink-500 to-fuchsia-600 dark:from-pink-500 dark:to-fuchsia-700'
                }`}
            >
              <i
                className={`fas text-xs ${message.role === 'user' ? 'fa-user' : 'fa-robot'
                  }`}
              ></i>
            </div>
            <div
              className={`max-w-[80%] px-4 py-3 rounded-2xl ${message.role === 'user'
              ? 'bg-gradient-to-br from-pink-500 to-fuchsia-600 text-white rounded-tr-none shadow-md shadow-pink-200/40 dark:shadow-fuchsia-950/40'
              : 'bg-white dark:bg-[#2b1838] text-gray-900 dark:text-pink-50 rounded-tl-none border border-pink-100 dark:border-fuchsia-900/60 shadow-sm'
                }`}
            >
              <div className="text-sm leading-relaxed whitespace-pre-wrap break-words">
                {message.role === 'assistant' ? (
                  <ReactMarkdown
                    components={{
                      h1: ({ node, ...props }) => (
                        <h1 className="text-xl font-bold mt-2 mb-1" {...props} />
                      ),
                      h2: ({ node, ...props }) => (
                        <h2 className="text-lg font-bold mt-2 mb-1" {...props} />
                      ),
                      h3: ({ node, ...props }) => (
                        <h3 className="text-base font-bold mt-1 mb-1" {...props} />
                      ),
                      ul: ({ node, ...props }) => (
                        <ul className="list-disc list-inside my-0 space-y-0" {...props} />
                      ),
                      ol: ({ node, ...props }) => (
                        <ol className="list-decimal list-inside my-0 space-y-0" {...props} />
                      ),
                      li: ({ node, ...props }) => <li className="ml-1 leading-snug [&>p]:mb-0 [&>p]:inline" {...props} />,
                      strong: ({ node, ...props }) => (
                        <strong className="font-bold text-pink-700 dark:text-pink-200" {...props} />
                      ),
                      p: ({ node, ...props }) => <p className="mb-2 last:mb-0 leading-snug" {...props} />,
                    }}
                  >
                    {message.content
                      // Collapse 3+ newlines to max 2 (prevent huge gaps)
                      .replace(/\n{3,}/g, '\n\n')
                      // Force single newline before any list marker (Markdown, Digit, or Bullet Char) to ensure tight lists
                      .replace(/\n+(?=[-•*] |\d+\.)/g, '\n')}
                  </ReactMarkdown>
                ) : (
                  message.content
                )}
              </div>
              <p
                className={`text-xs mt-2 ${message.role === 'user'
                  ? 'text-pink-100'
                  : 'text-gray-500 dark:text-gray-400'
                  }`}
              >
                {new Date(message.timestamp).toLocaleTimeString('id-ID', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
            </div>
          </div>
        ))
      )}
      <div ref={messagesEndRef} />
    </div>
  );
}
