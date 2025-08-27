import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Div } from "./sections/Div";
import { DivWrapper } from "./sections/DivWrapper";
import { MacbookPro } from "./sections/MacbookPro";
import { MacbookProWrapper } from "./sections/MacbookProWrapper";
import { OverlapWrapper } from "./sections/OverlapWrapper";
import { VersionDark } from "./sections/VersionDark";

export const RubifiLconcept = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    navigate('/', { state: { scrollTo: sectionId } });
  };

  const scrollToTop = () => {
    navigate('/');
  };

  const navigateToRubToken = () => {
    navigate('/rub-token');
  };

  return (
    <div className="bg-[#0c0c0c] grid justify-items-center [align-items:start] w-screen">
      <div className="bg-[#0c0c0c] overflow-hidden w-[1512px] h-[4540px] relative">
        {/* Navigation Bar */}
        <div className="fixed w-[1120px] h-[66px] top-[42px] left-1/2 -translate-x-1/2 bg-[#0c0c0c] rounded-full overflow-hidden border border-solid border-black flex items-center justify-between px-8 z-50">
          <div className="flex items-center gap-2 cursor-pointer" onClick={scrollToTop}>
            <img
              className="w-[23px] h-[23px]"
              alt="Group"
              src="https://c.animaapp.com/0wz25X7o/img/group-4@2x.png"
            />
            <div className="[font-family:'ITC_Avant_Garde_Gothic_Pro-Bold',Helvetica] font-bold text-[#bdffba] text-xl tracking-[0] leading-[23px] whitespace-nowrap">
              RubiFi
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div 
              className="[font-family:'ITC_Avant_Garde_Gothic_Pro-Medium',Helvetica] font-medium text-[#bdffba] text-base tracking-[-0.48px] leading-[19.3px] whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => scrollToSection('how-it-works')}
            >
              How It Works
            </div>

            <div 
              className="[font-family:'ITC_Avant_Garde_Gothic_Pro-Medium',Helvetica] font-medium text-[#bdffba] text-base tracking-[-0.48px] leading-[19.3px] whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => scrollToSection('why-rubifi')}
            >
              Why RubiFi
            </div>

            <div 
              className="[font-family:'ITC_Avant_Garde_Gothic_Pro-Medium',Helvetica] font-medium text-[#bdffba] text-base tracking-[-0.48px] leading-[19.3px] whitespace-nowrap border-b-2 border-[#bdffba]"
            >
              RUB Token
            </div>

            <div 
              className="[font-family:'ITC_Avant_Garde_Gothic_Pro-Medium',Helvetica] font-medium text-[#bdffba] text-base tracking-[-0.48px] leading-[19.3px] whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => scrollToSection('ecosystem')}
            >
              Partners
            </div>

            <div 
              className="[font-family:'ITC_Avant_Garde_Gothic_Pro-Medium',Helvetica] font-medium text-[#bdffba] text-base tracking-[-0.48px] leading-[19.3px] whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => scrollToSection('security')}
            >
              Security
            </div>

            <div 
              className="[font-family:'ITC_Avant_Garde_Gothic_Pro-Medium',Helvetica] font-medium text-[#bdffba] text-base tracking-[-0.48px] leading-[19.3px] whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => scrollToSection('community')}
            >
              Community
            </div>
          </div>

          <div className="w-[129px] h-10 bg-[#bdffba] rounded-full flex items-center justify-center">
            <div className="[font-family:'ITC_Avant_Garde_Gothic_Pro-Demi',Helvetica] font-normal text-black text-sm text-center tracking-[0] leading-[14px] whitespace-nowrap">
              Launch App
            </div>
          </div>
        </div>

        <VersionDark />
        <MacbookPro />
        <OverlapWrapper />
        <MacbookProWrapper />
        <DivWrapper />
        <Div />
      </div>
    </div>
  );
};
