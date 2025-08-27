import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Div } from "./sections/Div";
import { DivWrapper } from "./sections/DivWrapper";
import { Frame } from "./sections/Frame";
import { FrameWrapper } from "./sections/FrameWrapper";
import { MacbookPro } from "./sections/MacbookPro";
import { MacbookProWrapper } from "./sections/MacbookProWrapper";
import { OverlapWrapper } from "./sections/OverlapWrapper";
import { VersionDark } from "./sections/VersionDark";

export const RubifiLconcept = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToRubToken = () => {
    navigate('/rub-token');
  };

  // Handle scrolling when navigating back from other pages
  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        scrollToSection(location.state.scrollTo);
      }, 100);
    }
  }, [location.state]);
  return (
    <div
      className="bg-[#bdffba] grid justify-items-center [align-items:start] w-screen"
      data-model-id="1:4"
    >
      <div className="bg-[#bdffba] w-[1512px] h-[5860px] relative">
        <Frame />
        <MacbookPro />
        <div className="absolute w-[1512px] h-[982px] top-0 left-0">
          <MacbookProWrapper />
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
                className="[font-family:'ITC_Avant_Garde_Gothic_Pro-Medium',Helvetica] font-medium text-[#bdffba] text-base tracking-[-0.48px] leading-[19.3px] whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity"
                onClick={navigateToRubToken}
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
        </div>

        <DivWrapper />
        <FrameWrapper />
        <OverlapWrapper />
        <div className="absolute w-[1512px] h-[1100px] top-[4760px] left-0">
          <Div />
          <VersionDark />
        </div>
      </div>
    </div>
  );
};
