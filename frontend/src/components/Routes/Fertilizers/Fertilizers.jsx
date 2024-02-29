import React from "react";
import "./Fertilizers.scss"

const Fertilizers = () => {
  return (
    <div id="fertilizer">
      {/* <h2 className="text-center text-gray-700 p-4">Available Fertilizers</h2> */}
      <h3 className='text-center my-5 text-[#2AAA8A] font-semibold p-4 text-3xl'><a href="">Available Fertilizers</a></h3>
      
      <div className="max-w-[1140px] m-auto w-full md:grid grid-cols-3 p-4 gap-x-[30px]">
        <div class=" w-65 transform overflow-hidden bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 border-white shadow-lg hover:shadow-lg">
          <img
            class="h-48 w-full object-cover object-center"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnRU66DuYtZsB7GTx4hc_JxoDC1OxUIyQjvQ&usqp=CAU"
            alt="Product Image"
          />
          <div class="p-4">
            <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">
              Urea Mal
            </h2>
            <p class="mb-2 text-base dark:text-gray-300 text-gray-700">
              Surya Kirana Store - Kailali
              <br />
              <h2>Number: 9812345678</h2>
            </p>
            <div class="flex items-center">
              <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                Rs1800.00
              </p>
              <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
                Rs1855.00
              </p>
              <p class="ml-auto text-base font-medium text-green-500">5% off</p>
            </div>
          </div>
        </div>

        <div class="w-65 transform overflow-hidden bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 border-white shadow-lg hover:shadow-lg">
          <img
            class="h-48 w-full object-cover object-center"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAYXswPm1Y-hQYw131qrdquZPNsGT6A9kAng&usqp=CAU"
            alt="Product Image"
          />
          <div class="p-4">
            <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">
              Compost
            </h2>
            <p class="mb-2 text-base dark:text-gray-300 text-gray-700">
              Ram Krishi Farm - Bhaktapur
              <br />
              <h2>Number: 9818345678</h2>
            </p>
            <div class="flex items-center">
              <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                Rs1200.00
              </p>
              <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
                Rs1455.00
              </p>
              <p class="ml-auto text-base font-medium text-green-500">
                18% off
              </p>
            </div>
          </div>
        </div>

        <div class="w-65 transform overflow-hidden bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 border-white shadow-lg hover:shadow-lg">
          <img
            class="h-48 w-full object-cover object-center"
            src="https://modernfarmer.com/wp-content/uploads/2022/05/shutterstock_1704550846.jpg"
            alt="Product Image"
          />
          <div class="p-4">
            <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">
              Phosphorus Fertilizer
            </h2>
            <p class="mb-2 text-base dark:text-gray-300 text-gray-700">
              Jhapa Mal Uddhyog
              <br />
              <h2>Number: 9722345678</h2>
            </p>
            <div class="flex items-center">
              <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                Rs2000.00
              </p>
              <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
                Rs1880.00
              </p>
              <p class="ml-auto text-base font-medium text-green-500">8% off</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fertilizers;
