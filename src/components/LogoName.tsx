"use client"

import { firaMono } from "@/lib/fontsConfig";
import Link from "next/link";
import { useState } from "react";

export default function LogoName() {
  const [text, setText] = useState('{ }')

  const delays = [
    '{  }',
    '{ M }',
    '{ MF }',
    '{ MFo }',
    '{ MFon }',
    '{ MFont }',
    '{ MFonto }',
    '{ MFontov }',
    '{ MFontova }'
  ];

  const handleMouseEnter = async () => {
  
    for (let i = 0; i < delays.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 25));
      setText(delays[i]);
    }
  }

  const handleMouseLeave = async () => {
    const reversedDelays = delays.reverse()
  
    for (let i = 0; i < reversedDelays.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 25));
      setText(reversedDelays[i]);
    }
  }

  return (
    <Link href={'/'}>
      <div className="flex items-center justify-center w-52 text-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <span className={`text-xl font-medium cursor-pointer transition duration-300 ${firaMono.className}`}>
          {text}
        </span>
      </div>
    </Link>
  )
}