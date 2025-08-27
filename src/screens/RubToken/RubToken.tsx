import React from "react";

export const RubToken = (): JSX.Element => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="bg-[#bdffba] min-h-screen w-screen">
      {/* Navigation Bar */}
      <div className="fixed w-[1120px] h-[66px] top-[42px] left-1/2 transform -translate-x-1/2 bg-[#0c0c0c] rounded-full overflow-hidden border border-solid border-black flex items-center justify-between px-8 z-50">
        <div className="flex items-center gap-2 cursor-pointer" onClick={navigateToHome}>
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
            onClick={navigateToHome}
          >
            How It Works
          </div>

          <div 
            className="[font-family:'ITC_Avant_Garde_Gothic_Pro-Medium',Helvetica] font-medium text-[#bdffba] text-base tracking-[-0.48px] leading-[19.3px] whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity"
            onClick={navigateToHome}
          >
            Why RubiFi
          </div>

          <div className="[font-family:'ITC_Avant_Garde_Gothic_Pro-Medium',Helvetica] font-medium text-[#bdffba] text-base tracking-[-0.48px] leading-[19.3px] whitespace-nowrap border-b-2 border-[#bdffba]">
            RUB Token
          </div>

          <div 
            className="[font-family:'ITC_Avant_Garde_Gothic_Pro-Medium',Helvetica] font-medium text-[#bdffba] text-base tracking-[-0.48px] leading-[19.3px] whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity"
            onClick={navigateToHome}
          >
            Partners
          </div>

          <div 
            className="[font-family:'ITC_Avant_Garde_Gothic_Pro-Medium',Helvetica] font-medium text-[#bdffba] text-base tracking-[-0.48px] leading-[19.3px] whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity"
            onClick={navigateToHome}
          >
            Security
          </div>

          <div 
            className="[font-family:'ITC_Avant_Garde_Gothic_Pro-Medium',Helvetica] font-medium text-[#bdffba] text-base tracking-[-0.48px] leading-[19.3px] whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity"
            onClick={navigateToHome}
          >
            Community
          </div>
        </div>

        <div className="w-[129px] h-10 bg-[#bdffba] rounded-full flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
          <div className="[font-family:'ITC_Avant_Garde_Gothic_Pro-Demi',Helvetica] font-normal text-black text-sm text-center tracking-[0] leading-[14px] whitespace-nowrap">
            Launch App
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-[150px] px-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="[font-family:'ITC_Avant_Garde_Gothic_Pro-Demi',Helvetica] font-normal text-[#0c0c0c] text-[65.8px] tracking-[-1.97px] leading-[73px] mb-6">
              RUB Token
            </h1>
            <p className="[font-family:'Instrument_Serif',Helvetica] font-normal text-[#0c0c0c] text-3xl tracking-[-0.90px] leading-10 max-w-4xl mx-auto">
              The native utility token powering the RubiFi ecosystem, enabling governance, rewards, and exclusive access to premium market making strategies.
            </p>
          </div>

          {/* Token Stats Section */}
          <div className="bg-[#0c0c0c] rounded-[20px] p-12 mb-16">
            <h2 className="[font-family:'ITC_Avant_Garde_Gothic_Pro-Demi',Helvetica] font-normal text-[#bdffba] text-[40px] tracking-[-1.20px] leading-[47px] text-center mb-12">
              Token Overview
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="[font-family:'ITC_Avant_Garde_Gothic_Pro-Demi',Helvetica] font-normal text-[#bdffba] text-2xl mb-2">
                  Total Supply
                </div>
                <div className="[font-family:'Instrument_Serif',Helvetica] font-normal text-[#bdffba] text-lg">
                  1,000,000,000 RUB
                </div>
              </div>
              
              <div className="text-center">
                <div className="[font-family:'ITC_Avant_Garde_Gothic_Pro-Demi',Helvetica] font-normal text-[#bdffba] text-2xl mb-2">
                  Network
                </div>
                <div className="[font-family:'Instrument_Serif',Helvetica] font-normal text-[#bdffba] text-lg">
                  Hyperliquid L1
                </div>
              </div>
              
              <div className="text-center">
                <div className="[font-family:'ITC_Avant_Garde_Gothic_Pro-Demi',Helvetica] font-normal text-[#bdffba] text-2xl mb-2">
                  Token Type
                </div>
                <div className="[font-family:'Instrument_Serif',Helvetica] font-normal text-[#bdffba] text-lg">
                  Utility & Governance
                </div>
              </div>
            </div>
          </div>

          {/* Utility Section */}
          <div className="mb-16">
            <h2 className="[font-family:'ITC_Avant_Garde_Gothic_Pro-Demi',Helvetica] font-normal text-[#0c0c0c] text-[40px] tracking-[-1.20px] leading-[47px] text-center mb-12">
              Token Utility
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-[20px] p-8 border border-[#0c0c0c]">
                <h3 className="[font-family:'ITC_Avant_Garde_Gothic_Pro-Demi',Helvetica] font-normal text-[#0c0c0c] text-2xl mb-4">
                  Governance Rights
                </h3>
                <p className="[font-family:'Instrument_Serif',Helvetica] font-normal text-[#0c0c0c] text-lg leading-7">
                  RUB token holders can participate in protocol governance, voting on key decisions including vault parameters, fee structures, and ecosystem upgrades.
                </p>
              </div>
              
              <div className="bg-white rounded-[20px] p-8 border border-[#0c0c0c]">
                <h3 className="[font-family:'ITC_Avant_Garde_Gothic_Pro-Demi',Helvetica] font-normal text-[#0c0c0c] text-2xl mb-4">
                  Fee Discounts
                </h3>
                <p className="[font-family:'Instrument_Serif',Helvetica] font-normal text-[#0c0c0c] text-lg leading-7">
                  Stake RUB tokens to receive reduced management fees across all RubiFi vaults, with higher stakes unlocking greater discounts.
                </p>
              </div>
              
              <div className="bg-white rounded-[20px] p-8 border border-[#0c0c0c]">
                <h3 className="[font-family:'ITC_Avant_Garde_Gothic_Pro-Demi',Helvetica] font-normal text-[#0c0c0c] text-2xl mb-4">
                  Exclusive Access
                </h3>
                <p className="[font-family:'Instrument_Serif',Helvetica] font-normal text-[#0c0c0c] text-lg leading-7">
                  Premium vault strategies and early access to new market making opportunities are reserved for RUB token holders with minimum stake requirements.
                </p>
              </div>
              
              <div className="bg-white rounded-[20px] p-8 border border-[#0c0c0c]">
                <h3 className="[font-family:'ITC_Avant_Garde_Gothic_Pro-Demi',Helvetica] font-normal text-[#0c0c0c] text-2xl mb-4">
                  Yield Boosting
                </h3>
                <p className="[font-family:'Instrument_Serif',Helvetica] font-normal text-[#0c0c0c] text-lg leading-7">
                  Earn additional rewards on your vault deposits by staking RUB tokens, with boost multipliers based on your stake duration and amount.
                </p>
              </div>
            </div>
          </div>

          {/* Tokenomics Section */}
          <div className="bg-[#0c0c0c] rounded-[20px] p-12 mb-16">
            <h2 className="[font-family:'ITC_Avant_Garde_Gothic_Pro-Demi',Helvetica] font-normal text-[#bdffba] text-[40px] tracking-[-1.20px] leading-[47px] text-center mb-12">
              Token Distribution
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#bdffba] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="[font-family:'ITC_Avant_Garde_Gothic_Pro-Bold',Helvetica] font-bold text-[#0c0c0c] text-lg">40%</span>
                </div>
                <div className="[font-family:'ITC_Avant_Garde_Gothic_Pro-Demi',Helvetica] font-normal text-[#bdffba] text-lg mb-2">
                  Community Rewards
                </div>
                <div className="[font-family:'Instrument_Serif',Helvetica] font-normal text-[#bdffbacc] text-sm">
                  Liquidity mining, staking rewards, and ecosystem incentives
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-[#bdffba] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="[font-family:'ITC_Avant_Garde_Gothic_Pro-Bold',Helvetica] font-bold text-[#0c0c0c] text-lg">25%</span>
                </div>
                <div className="[font-family:'ITC_Avant_Garde_Gothic_Pro-Demi',Helvetica] font-normal text-[#bdffba] text-lg mb-2">
                  Team & Advisors
                </div>
                <div className="[font-family:'Instrument_Serif',Helvetica] font-normal text-[#bdffbacc] text-sm">
                  4-year vesting with 1-year cliff
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-[#bdffba] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="[font-family:'ITC_Avant_Garde_Gothic_Pro-Bold',Helvetica] font-bold text-[#0c0c0c] text-lg">20%</span>
                </div>
                <div className="[font-family:'ITC_Avant_Garde_Gothic_Pro-Demi',Helvetica] font-normal text-[#bdffba] text-lg mb-2">
                  Treasury
                </div>
                <div className="[font-family:'Instrument_Serif',Helvetica] font-normal text-[#bdffbacc] text-sm">
                  Protocol development and partnerships
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-[#bdffba] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="[font-family:'ITC_Avant_Garde_Gothic_Pro-Bold',Helvetica] font-bold text-[#0c0c0c] text-lg">15%</span>
                </div>
                <div className="[font-family:'ITC_Avant_Garde_Gothic_Pro-Demi',Helvetica] font-normal text-[#bdffba] text-lg mb-2">
                  Public Sale
                </div>
                <div className="[font-family:'Instrument_Serif',Helvetica] font-normal text-[#bdffbacc] text-sm">
                  Initial distribution to early supporters
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mb-16">
            <h2 className="[font-family:'ITC_Avant_Garde_Gothic_Pro-Demi',Helvetica] font-normal text-[#0c0c0c] text-[40px] tracking-[-1.20px] leading-[47px] mb-6">
              Get RUB Tokens
            </h2>
            <p className="[font-family:'Instrument_Serif',Helvetica] font-normal text-[#0c0c0c] text-xl tracking-[-0.60px] leading-8 mb-8 max-w-2xl mx-auto">
              Start earning rewards and participating in governance by acquiring RUB tokens through our platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="w-[200px] h-12 bg-[#0c0c0c] rounded-[32px] flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity mx-auto sm:mx-0">
                <div className="[font-family:'ITC_Avant_Garde_Gothic_Pro-Book',Helvetica] font-normal text-[#bdffba] text-base tracking-[-0.48px] leading-[19.3px] whitespace-nowrap">
                  Buy RUB Tokens
                </div>
              </div>
              
              <div className="w-[200px] h-12 bg-white border-2 border-[#0c0c0c] rounded-[32px] flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors mx-auto sm:mx-0">
                <div className="[font-family:'ITC_Avant_Garde_Gothic_Pro-Book',Helvetica] font-normal text-[#0c0c0c] text-base tracking-[-0.48px] leading-[19.3px] whitespace-nowrap">
                  View Whitepaper
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#0c0c0c] py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-8 md:mb-0">
              <img
                className="w-8 h-8"
                alt="Group"
                src="https://c.animaapp.com/0wz25X7o/img/group-1@2x.png"
              />
              <div className="[font-family:'ITC_Avant_Garde_Gothic_Pro-Demi',Helvetica] font-normal text-[#bdffba] text-2xl tracking-[0] leading-[normal]">
                RubiFi
              </div>
            </div>
            
            <div className="flex items-center gap-8">
              <div className="[font-family:'ITC_Avant_Garde_Gothic_Pro-Book',Helvetica] font-normal text-[#bdffbacc] text-base tracking-[0] leading-[normal] cursor-pointer hover:text-[#bdffba] transition-colors">
                Documentation
              </div>
              <div className="[font-family:'ITC_Avant_Garde_Gothic_Pro-Book',Helvetica] font-normal text-[#bdffbacc] text-base tracking-[0] leading-[normal] cursor-pointer hover:text-[#bdffba] transition-colors">
                Terms of Service
              </div>
              <div className="[font-family:'ITC_Avant_Garde_Gothic_Pro-Book',Helvetica] font-normal text-[#bdffbacc] text-base tracking-[0] leading-[normal] cursor-pointer hover:text-[#bdffba] transition-colors">
                Privacy Policy
              </div>
            </div>
          </div>
          
          <div className="border-t border-[#bdffbacc] mt-8 pt-8 text-center">
            <p className="[font-family:'ITC_Avant_Garde_Gothic_Pro-Book',Helvetica] font-normal text-[#bdffbacc] text-sm tracking-[0] leading-[normal]">
              © 2025 RubiFi All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
