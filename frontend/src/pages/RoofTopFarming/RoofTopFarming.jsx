import React from "react";
import wastephoto from "../../assets/KitchenWasteAssets/watseg.jpg";
import fohor from "../../assets/KitchenWasteAssets/fohor1.jpg";
import cookingasfamily from "../../assets/KitchenWasteAssets/cookingasfamily.jpg";
import packet from "../../assets/KitchenWasteAssets/packet.jpg";
import rightarrow from "../../assets/KitchenWasteAssets/rightarrow.svg";
import fruits from "../../assets/KitchenWasteAssets/fruits.jpg";

import saveplanet from "../../assets/KitchenWasteAssets/saveplanet.jpg";
import garbagewaste from "../../assets/KitchenWasteAssets/garbagewaste.jpg";
import rooftop from "../../assets/KitchenWasteAssets/rooftop.jpg";
import { Link } from "react-router-dom";

const RoofTopFarming = () => {
  return (
    <div className="max-container padding-container">
      <section className="problem-section  py-10">
        <div className="container mx-auto">
          <div className="text-container text-center mb-8">
            <h1 className="font-bold text-3xl text-[#2AAA8A]">The Problem</h1>
            <p className="regular-20">
              According to the UN report, in urban areas of Nepal, an average
              household wastes about 79 kg of food every year, which has a
              significant impact on the economy and the environment.
            </p>
          </div>
          <div className="flex justify-between gap-5 items-center">
            <div className="w-1/2">
              <img
                src={wastephoto}
                alt=""
                className="w-full h-full object-cover mb-2"
              />
              <p className="text-center">
                Kathmandu valley produces 1,200 metric tons of garbage on a
                daily basis which at least 200 trucks laden with waste from the
                valley ferry waste on a daily basis.
              </p>
            </div>
            <div className="w-1/2">
              <img
                src={fohor}
                alt=""
                className="w-full h-full object-cover mb-2"
              />
              <p className="text-center">
                The current waste management in Nepal is linear, as more than
                90% is disposed of landfills and open dump.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="problem-section  py-10">
        <div className="container mx-auto">
          <div className="text-container text-center mb-8 flex flex-col gap-2">
            <h1 className="font-bold text-3xl text-[#2AAA8A]">The Solution</h1>
            <p className="regular-20 text-center">
              To overcome such problem, instead of throwing leftovers and scraps
              in the trash, composting allows you to turn kitchen waste into
              fertilizer.
            </p>
            <img
              src={cookingasfamily}
              alt=""
              className=" h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#2AAA8A]">
        <div className="container mx-auto">
          <h1 className="font-bold text-3xl text-center text-white">
            What is Kitchen Waste Fertilizer?
          </h1>
          <p className="text-center regular-20 py-6 text-white">
            Kitchen compost is an organic fertilizer which can be made from
            kitchen waste or scraps.{" "}
          </p>
          <div className="flex justify-around items-center py-10">
            <img src={fruits} alt="" className="h-[200px] w-[200px]" />
            <img src={rightarrow} alt="" className="h-[200px] w-[200px]" />
            <img src={packet} alt="" className="h-[200px] w-[200px]" />
          </div>
        </div>
      </section>

      <section className="py-10">
        <div>
          <h1 className="text-center text-3xl font-bold text-[#2AAA8A]">
            Benefits of Kitchen Waste Fertilizer
          </h1>
          <div className="flex justify-around items-center mt-5">
            <div>
              <p className="text-center regular-20 py-5">Clean Environment</p>
              <img src={saveplanet} alt="" className="h-[400px] w-[400px]" />
            </div>
            <div>
              <p className="text-center regular-20 py-5">
                Reduce Land Field Waste
              </p>
              <img src={garbagewaste} alt="" className="h-[400px] w-[400px]" />
            </div>
            <div>
              <p className="text-center regular-20 py-5">
                Promotes Rooftop Gardening Practices
              </p>
              <img src={rooftop} alt="" className="h-[400px] w-[400px]" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#2AAA8A]">
        <div>
          <h1 className="text-center text-3xl font-bold text-white">
            Art of Kitchen Waste Composting
          </h1>
          <div className="py-5">
            <div className="flex justify-around items-center py-5">
              <div>
                <img src="" alt="" />
                <p>hello</p>
              </div>
              <div>
                <img src="" alt="" />
                <p>hello</p>
              </div>
              <div>
                <img src="" alt="" />
                <p>hello</p>
              </div>
            </div>

            <div className="flex justify-around items-center py-5">
              <div>
                <img src="" alt="" />
                <p>hello</p>
              </div>
              <div>
                <img src="" alt="" />
                <p>hello</p>
              </div>
              <div>
                <img src="" alt="" />
                <p>hello</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="py-10 text-center">
          Now lets use this compost in our{" "}
          <Link className="p-1 rounded-lg bg-[#2AAA8A] text-white" to="/rooftop-farming">rooftop farming.</Link>
        </div>
      </section>
    </div>
  );
};

export default RoofTopFarming;
