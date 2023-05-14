import React, { useState } from 'react'
import Gp from '../Icons/Group 20.png'
import Clk from '../Icons/IconCLock.png'
import TV from '../Icons/TVIcon.png'
import Cap from '../Icons/CapIcon.png'
import Ads from '../Icons/ADSIcon.png'
import icon1 from '../Icons/Icon 1.png'
import icon2 from '../Icons/Icon 2.png'
import alertClock from '../Icons/AlertClock.png'
import Rozarpay from '../Icons/Frame 12537.png'
import Rs from '../Icons/rs.png'



const Home = () => {
    const [selectedPlan, setSelectedPlan] = useState("");
    const [subscriptionFee, setSubscriptionFee] = useState(0);
    const [isOfferExpired, setIsOfferExpired] = useState(true);

    const handlePlanChange = (e) => {
        setSelectedPlan(e.target.value);
        setSubscriptionFee(parseInt(e.target.getAttribute("data-price")));
    };

    const handleProceedToPay = () => {
        // Handle payment processing logic here
        console.log("Proceed to pay:", selectedPlan, subscriptionFee);
    };
    return (
      <div className="flex justify-between mb-10 mx-20 mt-12">
        <div className="text-white   w-2/4 h-auto  text-3xl ">
          <h1 className="text-5xl font-semibold mb-10 ">
            Access curated courses worth
            <div className="flex justify-start items-center my-5">
              <img src={Rs} alt="" className="w-40 h-12  mr-3 " />
              <p className="mb-3">
                at just <span className="text-blue-500">₹ 99</span> per year!
              </p>
            </div>
          </h1>
          <div className="flex justify-start items-center my-5">
            <img src={Gp} alt="" className="w-10 h-10 mr-5" />
            <p>
              <span className="text-blue-500">100+</span> Job relevant courses{" "}
            </p>
          </div>
          <div className="flex justify-start  items-center">
            <img src={Clk} alt="icon" className="w-10 h-10 mr-5" />
            <p>
              <span className="text-blue-500">20,000+</span> Hours of content
            </p>
          </div>
          <div className="flex justify-start items-center my-5">
            <img src={TV} alt="icon" className="w-10 h-10 mr-5" />
            <p>
              <span className="text-blue-500">Exclusive</span> webinar access
            </p>
          </div>

          <div className="flex justify-start items-center">
            <img src={Cap} alt="icon" className="w-10 h-10 mr-5" />
            <p>
              Scholarship worth <span className="text-blue-500">₹94,500</span>
            </p>
          </div>
          <div className="flex justify-start items-center my-5">
            <img src={Ads} alt="icon" className="w-10 h-10 mr-5" />
            <p>
              {" "}
              <span className="text-blue-500">Ad Free </span> learning
              experience
            </p>
          </div>
        </div>

        {/* ===================Code for form tepmlate goes from here==================== */}
        <div className="container bg-white w-auto h-full  rounded-lg ">
          <div className="flex justify-evenly text-center pt-3">
            <div className="flex flex-col justify-center items-center">
              <img className="w-10 h-10" src={icon1} alt="icon1" />
              <a href="#">Sign Up</a>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img className="w-10 h-10" src={icon2} alt="icon2" />
              <a href="#">Subscribe</a>
            </div>
          </div>
          <h2 className="text-xl text-center font-semibold mt-4">
            Select your subscription plan
          </h2>
          <div className="flex flex-col myclass ">
            <div className="flex flex-col justify-center">
              <label className="relative  bg-slate-200 text-slate-400 border-2 border-gray-300 flex items-center m-4 px-4 py-3  rounded-md">
                {isOfferExpired && (
                  <span className="absolute text-center top-0 left-14 bg-red-500 text-white text-xs px-2 w-32 rounded-b">
                    Offer Expired
                  </span>
                )}

                <input
                  type="radio"
                  value="12MonthBasic"
                  data-price="10"
                  checked={selectedPlan === "12MonthBasic"}
                  className="hidden"
                />
                <span className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center mr-2">
                  {true && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-slate-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <circle cx="10" cy="10" r="9" fill="gray-300" />
                    </svg>
                  )}
                </span>
                <span className="mr-32 font-semibold">
                  12 Months Subscription
                </span>
                <div className="flex flex-col justify-end items-end text-sm ">
                  <span>Total ₹99</span>
                  <span className=" text-xs">₹8 /mo</span>
                </div>
              </label>
              <label
                className="relative flex bg-green-100 success-border  items-center mx-4 px-4 py-3  rounded-md"
                style={{ Color: "" }}
              >
                {true && (
                  <span className="absolute text-center top-0 left-14  w-32 bg-green-500 text-white text-xs px-2  rounded-b ">
                    Recommended
                  </span>
                )}
                <input
                  type="radio"
                  value="12MonthRecommended"
                  data-price="10"
                  onChange={handlePlanChange}
                  checked={selectedPlan === "12MonthRecommended"}
                  className="hidden"
                />
                <span className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center mr-2">
                  {selectedPlan === "12MonthRecommended" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 success rounded-full text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 10a1 1 0 011.414 0l2.647 2.647 5.647-5.646a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </span>
                <span className="mr-32  font-semibold">
                  12 Months Subscription{" "}
                </span>
                <div className="flex flex-col justify-end items-end text-sm text-gray-500">
                  <span>Total ₹179</span>
                  <span className=" text-xs">₹10 /mo</span>
                </div>
              </label>
              <label className="relative flex items-center mx-4 my-4 px-4 py-3 border-2 border-gray-300 rounded-md">
                <input
                  type="radio"
                  value="6Month"
                  data-price="60"
                  onChange={handlePlanChange}
                  checked={selectedPlan === "6Month"}
                  className="hidden"
                />
                <span className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center mr-2">
                  {selectedPlan === "6Month" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 success text-white rounded-full"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 10a1 1 0 011.414 0l2.647 2.647 5.647-5.646a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </span>
                <span className="mr-32  font-semibold">
                  6 Months Subscription{" "}
                </span>
                <div className="flex flex-col justify-end  items-end text-sm text-gray-500">
                  <span className="">Total ₹149</span>
                  <span className=" text-xs">₹25 /mo</span>
                </div>
              </label>
              <label className="relative flex items-center mx-4 px-4 py-3 border-2 border-gray-300 rounded-md">
                <input
                  type="radio"
                  value="3Month"
                  data-price="40"
                  onChange={handlePlanChange}
                  checked={selectedPlan === "3Month"}
                  className="hidden"
                />
                <span className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center mr-2">
                  {selectedPlan === "3Month" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 success text-white rounded-full"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 10a1 1 0 011.414 0l2.647 2.647 5.647-5.646a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </span>
                <span className="mr-32 font-semibold ">
                  3 Months Subscription
                </span>
                <div className="flex flex-col justify-end items-end text-sm text-gray-500">
                  <span>Total ₹99</span>
                  <span className=" text-xs">₹33 /mo</span>
                </div>
              </label>

              {/* <!-- Repeat the same pattern for other checkboxes --> */}
            </div>

            <div className="text-center mt-8 mx-4">
              <hr className="border border-gray-300" />

              <div className="flex justify-between mx-4 my-3">
                <span className=""> Subscription Fee</span>
                <span className="font-semibold">
                  {/* ₹ {subscriptionFee ? `${subscriptionFee}` : "18,500"} */}
                  ₹ 18,500
                </span>
              </div>

              <div className="flex  justify-between text-red-600 px-4 py-2 box ">
                <div className="flex flex-col  justify-start items-start ">
                  <span className="font-roboto font-semibold text-lg">
                    Limited time offer
                  </span>
                  <p className="flex items-center">
                    <img src={alertClock} alt="alertclock" className="mr-2" />
                    <span className="text-xs">
                      Offer valid till 25th March 2023
                    </span>
                  </p>
                </div>
                <span className="font-semibold">-₹ 18,401</span>
              </div>

              <div className="flex justify-around my-3">
                <p className="mr-12">
                  <span className="font-semibold text-lg"> Total</span> (Incl.
                  of 18% GST)
                </p>
                <span className="font-semibold text-2xl">
                  ₹ {subscriptionFee ? `${subscriptionFee}` : "149"}
                </span>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-8">
              <button
                className="px-4 py-2 mr-2 w-52 text-red-500   font-bold rounded-md"
                style={{ border: "2px solid #F77171" }}
              >
                CANCEL
              </button>
              <button
                className="px-4 py-2 success w-52 text-white font-bold rounded-md"
                onClick={handleProceedToPay}
              >
                PROCEED TO PAY
              </button>
            </div>
            <div className="flex items-start mx-4 my-4">
              <img src={Rozarpay} alt="Rozarpay" className="w-28  h-10" />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home
