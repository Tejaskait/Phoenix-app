import React from 'react';

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-between border-t-2 bg-white">
      {/* Main Content Section */}
      <div className="flex flex-col items-start justify-center px-10 py-20">
        <h1
          className="font-fgsemibold text-[72px] leading-[1.1] tracking-tight"
          style={{
            letterSpacing: '-0.02em', // Adjusts kerning for a clean look
            lineHeight: '80px', // Matches the vertical spacing
          }}
        >
          WE CREATE <br />
          EYE-OPENING <br />
          SOLUTIONS
        </h1>
        
      </div>

      {/* Footer Section */}
      <div className="flex justify-between items-center w-full px-10 py-4 border-t text-sm font-nmregular">
        <p className="text-[16px] leading-[24px]">For public and private companies</p>
        <p className="text-[16px] leading-[24px]">From the first pitch to IPO</p>
        <div>
        <button
          className="flex items-center gap-2 border rounded-full px-6 py-3 text-sm font-nmregular hover:bg-gray-100 transition-all duration-300"
          style={{ fontSize: '14px', lineHeight: '20px' }}
        >
          START THE PROJECT
          <span>➔</span>
          </button>
        </div>
       
      </div>
    </div>
  );
}
