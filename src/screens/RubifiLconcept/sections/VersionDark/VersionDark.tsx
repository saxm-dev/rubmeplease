import React from "react";

export const VersionDark = (): JSX.Element => {
  return (
    <div className="absolute w-[1512px] h-[406px] top-[694px] left-0 bg-[#0c0c0c]">
      <div className="absolute top-[108px] left-[98px] [font-family:'ITC_Avant_Garde_Gothic_Pro-Demi',Helvetica] font-normal text-[#bdffba] text-2xl tracking-[0] leading-[normal]">
        RubiFi
      </div>

      <p className="absolute w-[393px] top-[154px] left-[98px] [font-family:'ITC_Avant_Garde_Gothic_Pro-Book',Helvetica] font-normal text-[#bdffbacc] text-base tracking-[0] leading-[normal]">
        Be a market maker with RubiFi. <br />A market place for market making.
      </p>

      <div className="absolute top-[154px] left-[916px] [font-family:'ITC_Avant_Garde_Gothic_Pro-Book',Helvetica] font-normal text-[#bdffbacc] text-base tracking-[0] leading-[normal] whitespace-nowrap">
        Documentation
      </div>

      <div className="absolute top-[154px] left-[1067px] [font-family:'ITC_Avant_Garde_Gothic_Pro-Book',Helvetica] font-normal text-[#bdffbacc] text-base tracking-[0] leading-[normal] whitespace-nowrap">
        Terms of Service
      </div>

      <div className="absolute top-[154px] left-[1218px] [font-family:'ITC_Avant_Garde_Gothic_Pro-Book',Helvetica] font-normal text-[#bdffbacc] text-base tracking-[0] leading-[normal] whitespace-nowrap">
        Privacy Policy
      </div>

      <img
        className="absolute w-[1316px] h-px top-[295px] left-[98px]"
        alt="Footer line"
        src="https://c.animaapp.com/0wz25X7o/img/footer-line.svg"
      />

      <p className="absolute top-[328px] left-[98px] [font-family:'ITC_Avant_Garde_Gothic_Pro-Book',Helvetica] font-normal text-[#bdffbacc] text-sm tracking-[0] leading-[normal]">
        © 2025 RubiFi All rights reserved.
      </p>

      <button className="all-[unset] box-border top-[214px] left-[98px] absolute w-[129px] h-10 bg-[#bdffba] rounded-full">
        <div className="absolute w-[83px] h-3.5 top-[13px] left-[22px] [font-family:'ITC_Avant_Garde_Gothic_Pro-Demi',Helvetica] font-normal text-black text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
          Launch App
        </div>
      </button>

      <img
        className="absolute w-8 h-8 top-[59px] left-[98px]"
        alt="Group"
        src="https://c.animaapp.com/0wz25X7o/img/group-1@2x.png"
      />

      <div className="absolute top-80 left-[1271px] flex items-center gap-4">
        <a 
          href="https://discord.gg/BRX4Gx8ccB" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <svg
            className="w-[22px] h-[22px] fill-[#bdffba]"
            viewBox="0 0 24 24"
            alt="Discord"
          >
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
          </svg>
        </a>
        <a 
          href="https://x.com/RubiFi_HL" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <svg
            className="w-[22px] h-[22px] fill-[#bdffba]"
            viewBox="0 0 24 24"
            alt="X (Twitter)"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
      </div>
    </div>
  );
};
