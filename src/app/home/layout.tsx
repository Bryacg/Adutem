import React from 'react';
import Navbar from '../ui/Navbar';
import Draweru from '../ui/Drawe2';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen w-screen  flex flex-col items-center justify-center text-black">
      
      <header className="w-full">
        <Navbar />
     </header>
      <main className="flex flex-col gap-8 items-center sm:items-start w-screen">
        
        {children}
        <Draweru />
      </main>
    </div>
  
  );
}