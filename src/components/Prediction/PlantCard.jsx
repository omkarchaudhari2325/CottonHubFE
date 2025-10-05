import React from "react";
import { IoPaperPlane } from "react-icons/io5";
import { FaCottonBureau } from "react-icons/fa";
import { GiCottonFlower } from "react-icons/gi";
import { GiPlantsAndAnimals } from "react-icons/gi";
import { PiLadderDuotone, PiPlantFill, PiPottedPlantFill } from "react-icons/pi";
import { TbPlant2 } from "react-icons/tb";

import demoImg from "../../assets/cotton.png";
const PlantCard = () => {
  return (
    <div className="grid grid-cols-3 gap-x-24 gap-y-20 px-4 py-3 border-t-transparent bg-transparent border-gray-200 mt-7">
      <div className="relative  flex flex-col mt-6 text-gray-700 bg-white shadow-md rounded-xl w-96 transition-transform transform hover:scale-105 h-[70vh] items-center justify-center  cursor-pointer ">
        <div className="p-6 flex flex-col justify-center items-center">
        <TbPlant2 size={50} color="black" className="mb-6" />

          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 ">
            Cotton Disease Prediction
          </h5>
          <p className="block font-sans text-base antialiased leading-relaxed text-inherit text-justify ">
            Cotton disease prediction using machine learning or deep learning involves training models to identify and classify diseases affecting cotton plants. Effective pest control is crucial in cotton farming to protect crops from damage and maximize yield. Machine learning techniques can be employed to develop predictive models for pest infestations,
          </p>
        </div>
        <div className="p-6 pt-0">
          <a href="#" className="inline-block">
            <button
              className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
              type="button">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
              </svg>
            </button>
          </a>
        </div>
      </div>

      <div className="relative flex flex-col mt-6 text-gray-700  bg-white shadow-lg bg-clip-border rounded-xl w-96 transition-transform transform hover:scale-105 h-[70vh] items-center justify-center cursor-pointer">
        <div className="p-6 flex flex-col justify-center items-center">
        <GiCottonFlower size={50} color="black" className="mb-6" />
          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Pest Control in Cotton Farming
          </h5>
          <p className="block font-sans text-base antialiased leading-relaxed text-inherit text-justify">
            Effective pest control is crucial in cotton farming to protect crops from damage and maximize yield. Machine learning techniques can be employed to develop predictive models for pest infestations, enabling farmers to implement targeted pest management strategies and minimize the use of chemical pesticides, thereby promoting sustainable and environmentally friendly farming practices.
          </p>
        </div>
        <div className="p-6 pt-0">
          <a href="#" className="inline-block">
            <button
              className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
              type="button">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
              </svg>
            </button>
          </a>
        </div>
      </div>

      <div className="relative flex flex-col mt-6 text-gray-700  bg-white shadow-md bg-clip-border rounded-xl w-96 transition-transform transform hover:scale-105 h-[70vh] items-center justify-center cursor-pointer">
      <div className="p-6 flex flex-col justify-center items-center">
        <FaCottonBureau size={50} color="black" className="mb-6" />
          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Climate Adaptation Strategies for Cotton Farming
          </h5>
          <p className="block font-sans text-base antialiased leading-relaxed text-inherit text-justify">
            Climate change poses significant challenges to cotton farming, affecting weather patterns, water availability, and pest dynamics. Machine learning models can analyze historical climate data and predict future climate trends, enabling farmers to develop adaptive strategies such as crop diversification, water conservation techniques, and resilient farming practices to mitigate the impacts of climate change and ensure...
          </p>
        </div>
        <div className="p-6 pt-0">
          <a href="#" className="inline-block">
            <button
              className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
              type="button">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
              </svg>
            </button>
          </a>
        </div>
      </div>

      <div className="relative flex flex-col mt-6 text-gray-700 border bg-white shadow-md bg-clip-border rounded-xl w-96 transition-transform transform hover:scale-105 h-[70vh] items-center justify-center cursor-pointer">
      <div className="p-6 flex flex-col justify-center items-center">
        <GiPlantsAndAnimals size={50} color="black" className="mb-6" />
          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
             Monitoring Health for Cotton Cultivation
          </h5>
          <p className="block font-sans text-base antialiased leading-relaxed text-inherit text-justify">
            Maintaining soil health is essential for sustainable cotton cultivation. Machine learning algorithms can analyze soil samples to assess nutrient levels, pH balance, and moisture content, providing valuable insights for farmers to optimize fertilizer application, irrigation schedules, and soil management practices, thereby enhancing crop productivity and environmental sustainability.
          </p>
        </div>
        <div className="p-6 pt-0">
          <a href="#" className="inline-block">
            <button
              className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
              type="button">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
              </svg>
            </button>
          </a>
        </div>
      </div>

      <div className="relative flex flex-col mt-6 text-gray-700 border bg-white shadow-md bg-clip-border rounded-xl w-96 transition-transform transform hover:scale-105 h-[70vh] items-center justify-center cursor-pointer">
      <div className="p-6 flex flex-col justify-center items-center">
        <PiPlantFill size={50} color="black" className="mb-6" />
          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Sustainable Cotton Cultivation Practices
          </h5>
          <p className="block font-sans text-base antialiased leading-relaxed text-inherit text-justify">
            Sustainable cotton cultivation practices aim to minimize environmental impact and promote social responsibility throughout the supply chain. Machine learning algorithms can analyze production processes and supply chain data to identify opportunities for improving resource efficiency, reducing waste, and enhancing labor conditions. Adopting sustainable practices benefits both farmers and consumers by ensuring the long-term viab...
          </p>
        </div>
        <div className="p-6 pt-0">
          <a href="#" className="inline-block">
            <button
              className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
              type="button">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
              </svg>
            </button>
          </a>
        </div>
      </div>

      <div className="relative flex flex-col mt-6 text-gray-700 border bg-white shadow-md bg-clip-border rounded-xl w-96 transition-transform transform hover:scale-105 h-[70vh] items-center justify-center cursor-pointer">
      <div className="p-6 flex flex-col justify-center items-center">
        <PiPottedPlantFill size={50} color="black" className="mb-6" />
          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
             Analysis for Cotton Disease
          </h5>
          <p className="block text-justify font-sans text-base antialiased leading-relaxed text-inherit">
            Market trends analysis provides valuable insights into the dynamics of the cotton industry, including demand patterns, price fluctuations, and consumer preferences. Machine learning algorithms can analyze large datasets from various sources such as trade reports, consumer surveys, and social media trends to identify market trends and anticipate future developments. This information enables stakeholders to make informed decisions regarding production planning..
          </p>
        </div>
        <div className="p-6 pt-0">
          <a href="#" className="inline-block">
            <button
              className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
              type="button">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
