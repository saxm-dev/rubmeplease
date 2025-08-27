import React from "react";

export const FrameWrapper = (): JSX.Element => {
  return (
    <div id="security" className="absolute w-[1512px] h-[707px] top-[3351px] left-0 bg-[#0c0c0c] overflow-hidden">
      <div className="absolute w-[819px] h-[120px] top-[63px] left-[346px]">
        <div className="absolute top-0 left-[172px] [font-family:'ITC_Avant_Garde_Gothic_Pro-Demi',Helvetica] font-normal text-[#bdffba] text-[40px] text-center tracking-[-1.20px] leading-[79.2px] whitespace-nowrap">
          Audited. Secured. Trusted.
        </div>

        <p className="absolute top-10 left-0 [font-family:'Instrument_Serif',Helvetica] font-normal text-[#bdffba] text-3xl tracking-[-0.90px] leading-[79.2px] whitespace-nowrap">
          RubiFi is fully audited and continuously monitored to ensure the
          highest level of security.
        </p>
      </div>

      <div className="w-40 h-10 top-[184px] left-[675px] bg-[#bdffba] rounded-[32px] absolute overflow-hidden">
        <div className="absolute w-[92px] top-[11px] left-[34px] [font-family:'ITC_Avant_Garde_Gothic_Pro-Book',Helvetica] font-normal text-[#0c0c0c] text-base text-center tracking-[-0.48px] leading-[19.3px] whitespace-nowrap">
          View Audits
        </div>
      </div>

      <div className="absolute w-[1512px] h-[416px] top-[294px] left-0">
        <img
          className="absolute w-[1512px] h-[413px] top-0 left-0"
          alt="Group"
          src="https://c.animaapp.com/0wz25X7o/img/group-1171276439.png"
        />

        <img
          className="absolute w-[556px] h-[404px] top-[9px] left-[478px]"
          alt="Group"
          src="https://c.animaapp.com/0wz25X7o/img/group-1171276440.png"
        />

        <div className="h-[338px] top-[78px] bg-[linear-gradient(180deg,rgba(12,12,12,0)_0%,rgba(12,12,12,1)_100%)] absolute w-[1512px] left-0" />
      </div>
    </div>
  );
};
