import React from "react";

export const OverlapWrapper = (): JSX.Element => {
  return (
    <div className="h-[702px] top-[2415px] left-0 absolute w-[1512px] bg-[#0c0c0c]">
      <div className="relative h-[674px] top-7">
        <div className="absolute w-[1512px] h-[674px] top-0 left-0">
          <img
            className="absolute w-[1017px] h-[674px] top-0 left-[495px]"
            alt="Group"
            src="https://c.animaapp.com/met2o61eP4vKWi/img/group-1171276436.png"
          />

          <p className="absolute w-[731px] top-[58px] left-28 [font-family:'ITC_Avant_Garde_Gothic_Pro-Demi',Helvetica] font-normal text-[#bdffba] text-[40px] tracking-[-1.20px] leading-[79.2px]">
            Staking Tiers for Discounted Fees
          </p>

          <p className="absolute w-[688px] top-32 left-28 [font-family:'Instrument_Serif',Helvetica] font-normal text-[#bdffba] text-3xl tracking-[-0.90px] leading-10">
            The more $RUB you stake, the less you pay.
            <br /> Unlock exclusive fee discounts through tiered
            staking—rewarding loyal holders with better rates, premium access,
            and unmatched efficiency.
          </p>

          <div className="top-[447px] absolute w-[1512px] h-[227px] left-0 bg-[linear-gradient(180deg,rgba(12,12,12,0)_0%,rgba(12,12,12,1)_100%)]" />
        </div>

        <div className="w-44 h-11 top-[282px] left-28 rounded-[35.11px] absolute bg-[#bdffba] overflow-hidden">
          <div className="absolute w-[101px] top-3 left-[37px] [font-family:'ITC_Avant_Garde_Gothic_Pro-Book',Helvetica] font-normal text-[#0c0c0c] text-[17.6px] text-center tracking-[-0.53px] leading-[21.2px] whitespace-nowrap">
            Learn More
          </div>
        </div>
      </div>
    </div>
  );
};
