import React from "react";

export const OverlapWrapper = (): JSX.Element => {
  return (
    <div id="ecosystem" className="h-[702px] top-[4058px] absolute w-[1512px] left-0 bg-[#bdffba]">
      <div className="relative h-[658px] top-11">
        <p className="absolute w-[900px] top-[42px] left-28 [font-family:'ITC_Avant_Garde_Gothic_Pro-Demi',Helvetica] font-normal text-[#0c0c0c] text-[40px] tracking-[-1.20px] leading-[79.2px] whitespace-nowrap">
          Democratizing Access to Market Making Firms
        </p>

        <div className="inline-flex items-center justify-center gap-2.5 p-2.5 absolute top-[180px] left-[102px]">
          <p className="relative w-[645px] mt-[-1.00px] [font-family:'Instrument_Serif',Helvetica] font-normal text-[#0c0c0c] text-3xl tracking-[-0.90px] leading-10">
            <span className="tracking-[-0.27px]">
              RubiFi offers a variety of vaults managed by external market making firms. Our partnered firms empower user capital to gain exposure to strategies executed on Hyperliquid and beyond. Their expertise delivers liquidity, stability, and institutional grade execution and infrastructure to the RubiFi ecosystem.
              <br />
              <br />
              Learn more about our partners{" "}
            </span>

            <span className="tracking-[-0.27px] underline">here</span>

            <span className="tracking-[-0.27px]">.</span>
          </p>
        </div>

        <div className="absolute w-[1512px] h-[227px] top-[431px] left-0 bg-[linear-gradient(180deg,rgba(189,255,186,0)_0%,rgba(189,255,186,1)_100%)]" />

        <img
          className="absolute w-[782px] h-[658px] top-0 left-[730px]"
          alt="Group"
          src="https://c.animaapp.com/0wz25X7o/img/group-2-1.png"
        />

        <div className="absolute w-[1512px] h-[227px] top-[431px] left-0 bg-[linear-gradient(180deg,rgba(189,255,186,0)_0%,rgba(189,255,186,1)_100%)]" />
      </div>
    </div>
  );
};
