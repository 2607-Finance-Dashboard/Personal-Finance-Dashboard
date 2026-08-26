import React from "react";

function LandingPage({ onGetStarted }) {
  return (
    <div className="min-h-screen bg-[#f5f6f8] text-[#20242a] flex flex-col overflow-hidden">

      
      <header className="bg-white border-b border-gray-200 px-6 md:px-12 lg:px-20 py-5 flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#20242a]">
            FinTrack
          </h1>

          <p className="text-xs md:text-sm text-gray-500 mt-1">
            Personal Finance Dashboard
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-sm text-gray-500">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          Simple. Smart. Financial.
        </div>
      </header>


    
      <main className="flex-1">

      
        <section className="relative px-6 py-20 md:py-28 text-center">

          
          <div className="absolute top-16 left-[-80px] w-48 h-48 bg-emerald-100/60 rounded-full blur-3xl"></div>

          <div className="absolute bottom-10 right-[-80px] w-56 h-56 bg-gray-200/70 rounded-full blur-3xl"></div>

          <div className="relative max-w-4xl mx-auto">

            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-7 shadow-sm">
              <span className="w-2 h-2 bg-gray-500 rounded-full"></span>

              <span className="text-sm font-medium text-gray-600">
                Take control of your finances
              </span>
            </div>


            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-[#20242a] max-w-4xl mx-auto">
              Take control of your money.
            </h2>


            <p className="text-gray-600 text-base md:text-lg leading-8 max-w-2xl mx-auto mt-7">
              FinTrack helps you manage your finances, track your spending,
              create savings goals, and understand where your money goes.
            </p>


            
            <div className="mt-10 flex justify-center">

              <button
                onClick={onGetStarted}
                className="
                  group
                  relative
                  bg-gray-600
                  hover:bg-gray-700
                  text-white
                  font-bold
                  text-base
                  md:text-lg
                  px-9
                  py-4
                  rounded-xl
                  shadow-lg
                  shadow-emerald-600/25
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  hover:shadow-emerald-600/30
                  active:translate-y-0
                  focus:outline-none
                  focus:ring-4
                  focus:ring-emerald-200
                "
              >
                <span className="flex items-center gap-3">
                  Get Started

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </button>

            </div>

            <div className="mt-12 flex justify-center">
              <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-5 py-3 shadow-sm">

                <div className="flex -space-x-1">
                  <div className="w-7 h-7 rounded-full bg-emerald-100 border-2 border-white"></div>
                  <div className="w-7 h-7 rounded-full bg-gray-200 border-2 border-white"></div>
                  <div className="w-7 h-7 rounded-full bg-emerald-200 border-2 border-white"></div>
                </div>

                <span className="text-xs md:text-sm text-gray-500">
                  Your finances, all in one place.
                </span>

              </div>
            </div>

          </div>
        </section>


        
        <section className="max-w-6xl mx-auto px-6 pb-20">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            
            <div className="
              group
              bg-white
              border
              border-gray-200
              rounded-2xl
              p-7
              min-h-[220px]
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-xl
              hover:border-emerald-100
            ">

              <div className="
                w-12
                h-12
                rounded-xl
                bg-emerald-50
                flex
                items-center
                justify-center
                text-2xl
                mb-6
                transition-transform
                duration-300
                group-hover:scale-110
              ">
                📊
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Track Transactions
              </h3>

              <p className="text-gray-500 text-sm leading-7">
                Keep track of your income and expenses in one simple place.
              </p>

            </div>


            
            <div className="
              group
              bg-white
              border
              border-gray-200
              rounded-2xl
              p-7
              min-h-[220px]
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-xl
              hover:border-emerald-100
            ">

              <div className="
                w-12
                h-12
                rounded-xl
                bg-emerald-50
                flex
                items-center
                justify-center
                text-2xl
                mb-6
                transition-transform
                duration-300
                group-hover:scale-110
              ">
                🎯
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Set Financial Goals
              </h3>

              <p className="text-gray-500 text-sm leading-7">
                Create goals and stay motivated as you work towards them.
              </p>

            </div>


            <div className="
              group
              bg-white
              border
              border-gray-200
              rounded-2xl
              p-7
              min-h-[220px]
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-xl
              hover:border-emerald-100
            ">

              <div className="
                w-12
                h-12
                rounded-xl
                bg-emerald-50
                flex
                items-center
                justify-center
                text-2xl
                mb-6
                transition-transform
                duration-300
                group-hover:scale-110
              ">
                💰
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Manage Your Budget
              </h3>

              <p className="text-gray-500 text-sm leading-7">
                Understand your spending and make better financial decisions.
              </p>

            </div>

          </div>

        </section>

      </main>


      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 text-center">
        <p className="text-sm text-gray-500">
          FinTrack – Your money, made simple.
        </p>
      </footer>

    </div>
  );
}

export default LandingPage;