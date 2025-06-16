import React from 'react';
import Navbar from '../ui/Navbar';
import Draweru from '../ui/Drawe2';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen w-screen  flex flex-col justify-center text-black">
      
      <header className="w-full">
        <Navbar />
     </header>

      <main className="flex flex-col flex-grow items-center justify-center w-full">
        <Draweru />
        {children}
        
      </main>
    </div>
  
  );
}