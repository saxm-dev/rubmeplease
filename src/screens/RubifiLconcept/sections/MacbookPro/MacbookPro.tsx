import React from "react";

export const MacbookPro = (): JSX.Element => {
  return (
    <div className="h-[890px] top-[982px] absolute w-[1512px] left-0 bg-[#bdffba]">
      <div className="relative h-[804px] top-[86px]">
        <div className="absolute w-[1512px] h-[804px] top-0 left-0">
          <img
            className="absolute w-[475px] h-[778px] top-[26px] left-[1037px]"
            alt="Group"
            src="https://c.animaapp.com/0wz25X7o/img/group-2.png"
          />

          <img
            className="absolute w-[475px] h-[777px] top-[27px] left-0"
            alt="Group"
            src="https://c.animaapp.com/0wz25X7o/img/group-3.png"
          />

          <div className="absolute w-[869px] h-[501px] top-[228px] left-[321px] bg-[#0c0c0c] rounded-[20px] border-[15px] border-solid border-[#0000004c]" />

          <p className="absolute top-0 left-[460px] [font-family:'ITC_Avant_Garde_Gothic_Pro-Demi',Helvetica] font-normal text-[#0c0c0c] text-[40px] tracking-[-1.20px] leading-[79.2px] whitespace-nowrap">
            Your Gateway to Market Making
          </p>

          <p className="absolute top-10 left-[336px] [font-family:'Instrument_Serif',Helvetica] font-normal text-[#0c0c0c] text-3xl tracking-[-0.90px] leading-[79.2px] whitespace-nowrap">
            Deposit in one click, access pro strategies, and track your
            yield—all from a simple dashboard.
          </p>
        </div>

        <div className="absolute w-40 h-10 top-[121px] left-[676px] bg-[#0c0c0c] rounded-[32px] overflow-hidden">
          <div className="w-[92px] top-[11px] left-[34px] text-base tracking-[-0.48px] leading-[19.3px] absolute [font-family:'ITC_Avant_Garde_Gothic_Pro-Book',Helvetica] font-normal text-[#bdffba] whitespace-nowrap">
            Launch App
          </div>
        </div>
      </div>
    </div>
  );
};
