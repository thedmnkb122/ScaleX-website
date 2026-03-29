"use client";

import React from "react";
import { cn } from "@/lib/utils";

// Real platform SVG logos
const MetaLogo = () => (
  <svg viewBox="0 0 36 36" fill="none" className="w-7 h-7">
    <path d="M18 3C9.716 3 3 9.716 3 18s6.716 15 15 15 15-6.716 15-15S26.284 3 18 3z" fill="#1877F2"/>
    <path d="M19.748 23.4h-3.496v-8.25h-1.75v-2.8h1.75v-1.575c0-2.31 1.05-3.675 3.675-3.675h2.275v2.8h-1.4c-1.05 0-1.05.385-1.05 1.12V12.35h2.52l-.28 2.8h-2.24V23.4z" fill="white"/>
  </svg>
);

const GoogleLogo = () => (
  <svg viewBox="0 0 36 36" fill="none" className="w-7 h-7">
    <path d="M18 3C9.716 3 3 9.716 3 18s6.716 15 15 15 15-6.716 15-15S26.284 3 18 3z" fill="white"/>
    <path d="M27.6 18.2c0-.6-.05-1.2-.15-1.75H18v3.3h5.4a4.6 4.6 0 01-2 3.05v2.5h3.2c1.9-1.75 3-4.3 3-7.1z" fill="#4285F4"/>
    <path d="M18 28c2.7 0 4.95-.9 6.6-2.45l-3.2-2.5c-.9.6-2.05.95-3.4.95-2.6 0-4.8-1.75-5.6-4.15H9.1v2.55A9.98 9.98 0 0018 28z" fill="#34A853"/>
    <path d="M12.4 19.85a6 6 0 010-3.7V13.6H9.1a10 10 0 000 8.8l3.3-2.55z" fill="#FBBC05"/>
    <path d="M18 11.95c1.45 0 2.75.5 3.775 1.475l2.825-2.825C22.95 8.9 20.7 8 18 8a9.98 9.98 0 00-8.9 5.6l3.3 2.55c.8-2.4 3-4.15 5.6-4.15z" fill="#EA4335"/>
  </svg>
);

const TikTokLogo = () => (
  <svg viewBox="0 0 36 36" fill="none" className="w-7 h-7">
    <rect width="36" height="36" rx="18" fill="black"/>
    <path d="M22.5 8h-3.2v13.3a3.05 3.05 0 01-3.05 3.05 3.05 3.05 0 01-3.05-3.05 3.05 3.05 0 013.05-3.05c.3 0 .58.04.85.1V15.1a6.3 6.3 0 00-.85-.06 6.25 6.25 0 00-6.25 6.25 6.25 6.25 0 006.25 6.25 6.25 6.25 0 006.25-6.25V14.2a9.4 9.4 0 005.5 1.75v-3.2a6.2 6.2 0 01-5.5-4.75z" fill="white"/>
  </svg>
);

const YouTubeLogo = () => (
  <svg viewBox="0 0 36 36" fill="none" className="w-7 h-7">
    <rect width="36" height="36" rx="18" fill="#FF0000"/>
    <path d="M27.5 13.5s-.25-1.75-1-2.5c-.95-1-2.02-1.005-2.5-1.065C21.5 9.75 18 9.75 18 9.75s-3.5 0-6 .185c-.48.06-1.55.065-2.5 1.065-.75.75-1 2.5-1 2.5S8.25 15.5 8.25 17.5v1.87c0 2 .25 4 .25 4s.25 1.75 1 2.5c.95 1 2.2.97 2.75 1.075C14 27.155 18 27.19 18 27.19s3.503-.005 6.003-.19c.48-.06 1.55-.075 2.5-1.075.75-.75 1-2.5 1-2.5s.25-2 .25-4V17.5c-.003-2-.253-4-.253-4zM15.75 21.5v-7l6.75 3.5-6.75 3.5z" fill="white"/>
  </svg>
);

const InstagramLogo = () => (
  <svg viewBox="0 0 36 36" fill="none" className="w-7 h-7">
    <defs>
      <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%">
        <stop offset="0%" stopColor="#fdf497"/>
        <stop offset="5%" stopColor="#fdf497"/>
        <stop offset="45%" stopColor="#fd5949"/>
        <stop offset="60%" stopColor="#d6249f"/>
        <stop offset="90%" stopColor="#285AEB"/>
      </radialGradient>
    </defs>
    <rect width="36" height="36" rx="18" fill="url(#ig-grad)"/>
    <rect x="9" y="9" width="18" height="18" rx="5" stroke="white" strokeWidth="2" fill="none"/>
    <circle cx="18" cy="18" r="4.5" stroke="white" strokeWidth="2" fill="none"/>
    <circle cx="23.5" cy="12.5" r="1" fill="white"/>
  </svg>
);

const SnapchatLogo = () => (
  <svg viewBox="0 0 36 36" fill="none" className="w-7 h-7">
    <rect width="36" height="36" rx="18" fill="#FFFC00"/>
    <path d="M18 8c-2.8 0-5.1 2.3-5.1 5.1v.9c-.4.05-.8.05-1.05-.05-.4-.15-.75.15-.75.55 0 .4.3.7.7.7.3 0 .7-.05 1.1-.15v.5c-.5.8-1.55 1.65-2.75 2.05-.3.1-.5.4-.4.7.1.3.4.5.7.4.2-.05.4-.15.6-.2-.1.35.05.75.4.9.6.25 1.3.35 2 .35.2.45.5.9.9 1.25.8.7 1.9 1.1 3.15 1.1 1.25 0 2.35-.4 3.15-1.1.4-.35.7-.8.9-1.25.7 0 1.4-.1 2-.35.35-.15.5-.55.4-.9.2.05.4.15.6.2.3.1.6-.1.7-.4.1-.3-.1-.6-.4-.7-1.2-.4-2.25-1.25-2.75-2.05v-.5c.4.1.8.15 1.1.15.4 0 .7-.3.7-.7 0-.4-.35-.7-.75-.55-.25.1-.65.1-1.05.05v-.9C23.1 10.3 20.8 8 18 8z" fill="#1A1A1A"/>
  </svg>
);

const XLogo = () => (
  <svg viewBox="0 0 36 36" fill="none" className="w-7 h-7">
    <rect width="36" height="36" rx="18" fill="black"/>
    <path d="M20.3 16.6L27 9h-1.6l-5.8 6.5L15 9H9l7 9.8L9 27h1.6l6.1-6.9 4.9 6.9H28L20.3 16.6zm-2.2 2.5l-.7-1L10.8 10.2h2.4l4.5 6.3.7 1 5.9 8.4h-2.4l-4.8-6.8z" fill="white"/>
  </svg>
);

const platforms = [
  { Logo: MetaLogo, bg: "bg-[#1877F2]", name: "Meta Ads" },
  { Logo: GoogleLogo, bg: "bg-white", name: "Google Ads" },
  { Logo: TikTokLogo, bg: "bg-black", name: "TikTok Ads" },
  { Logo: YouTubeLogo, bg: "bg-[#FF0000]", name: "YouTube Ads" },
  { Logo: InstagramLogo, bg: "bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600", name: "Instagram Ads" },
  { Logo: SnapchatLogo, bg: "bg-[#FFFC00]", name: "Snapchat Ads" },
  { Logo: XLogo, bg: "bg-black", name: "X Ads" },
];

export const SpinningLogos: React.FC = () => {
  const radiusToCenterOfIcons = 180;
  const iconWrapperWidth = 60;
  const ringPadding = 40;
  const toRadians = (deg: number) => (Math.PI / 180) * deg;

  return (
    <div className="flex justify-center items-center min-h-[600px] bg-black p-8 overflow-hidden">
      <div
        style={{
          width: radiusToCenterOfIcons * 2 + iconWrapperWidth + ringPadding,
          height: radiusToCenterOfIcons * 2 + iconWrapperWidth + ringPadding,
        }}
        className="relative rounded-full border border-white/10 bg-white/[0.02]"
      >
        {/* Spinning ring */}
        <div className="absolute inset-0 animate-[spin-slow_20s_linear_infinite]">
          {platforms.map((platform, index) => {
            const angle = (360 / platforms.length) * index;
            return (
              <div
                key={index}
                style={{
                  top: `calc(50% - ${iconWrapperWidth / 2}px + ${radiusToCenterOfIcons * Math.sin(toRadians(angle))}px)`,
                  left: `calc(50% - ${iconWrapperWidth / 2}px + ${radiusToCenterOfIcons * Math.cos(toRadians(angle))}px)`,
                  width: iconWrapperWidth,
                  height: iconWrapperWidth,
                }}
                className={cn(
                  "absolute flex items-center justify-center rounded-full shadow-lg border-2 border-white/20 animate-[spin-reverse_20s_linear_infinite]",
                  platform.bg
                )}
                title={platform.name}
              >
                <platform.Logo />
              </div>
            );
          })}
        </div>

        {/* Center ScaleX logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-full w-3/5 h-3/5 shadow-2xl overflow-hidden">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: "url(/logo.png)",
                backgroundSize: "140%",
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
