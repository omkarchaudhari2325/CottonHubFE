import React from "react";
import omkarImg from "../assets/developers_images/new.jpg"
import aviImg from "../assets/developers_images/avi-modified.png"
import sumitImg from "../assets/developers_images/sumit-modified.png"
import anilImg from "../assets/developers_images/anil-modified.png"
import { useState,useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import reactImg from "../assets/technology_images/react.png"
import flaskImg from "../assets/technology_images/flask.png"
import nodeImg from "../assets/technology_images/node.png"
import tailwindImg from "../assets/technology_images/tailwind.webp"
import mongoImg from "../assets/technology_images/mongo.jpg"
import deepImg from "../assets/technology_images/deep.webp"


const TeamMemberCard = ({ name, role, description ,contact,email,image}) => {

  const { login, setLogin } = useContext(AuthContext);
  const { data, setData } = useContext(AuthContext);
  const isDashboardValid = async () => {
    try {
      // const token = localStorage.getItem("userDataToken");
      const response = await axios.get(
        "http://localhost:3000/api/v1/get-token"
      );
      const data = response.data;
      // setLoginData(data);
      setData(data);
      setLogin(true);
    } catch (err) {
      console.error("Error fetching user data:", err);
      // setLoginData(null);
      setData(null);
      // setIsLoggedIn(false);
      setLogin(false);
    }
  };

  useEffect(() => {
    isDashboardValid();
  }, []);
  return (

    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
      <img src={image} height={250} width={250} className="rounded-full"  alt="demo" />
      <h3 className="text-xl font-bold mt-4 mb-1 text-blue-800">{name}</h3>
      <p className="text-gray-900 mb-4 font-semibold">{role}</p>
      <div>
      <p className="text-gray-700 mb-1">{description}</p>
      <p className="text-gray-700"> Contact : +91 {contact}</p>
      <p className="text-gray-700">Email id : {email}</p>

      </div>

    </div>
  );
};
const TechnologyCard = ({ technology, description,image }) => {
  return (
    <div className="bg-white max-w-[1200px] mx-auto shadow-md rounded-lg p-6 flex flex-col items-center">
      {/* Placeholder for image */}

      <div className="w-36 h-36 mb-4">
        <img src={image} alt="tech_img"  />
      </div>
      <h3 className="text-xl font-bold mb-2">{technology}</h3>
      <p className="text-lg text-center text-gray-600">{description}</p>
    </div>
  );
};
const About = () => {
  return (
    <div className="max-w-[1200px] mx-auto mt-32">
      <div className="flex-1 bg-white shadow-lg rounded-md shadow-green-50 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Cotton's Hub
            </h2>
            <hr className="mt-6 mb-2 h-0.5 bg-gray-200 w-6/12 mx-auto" />
            <p className="mt-3 max-w-2xl mx-auto text-xl text-green-700 font-bold sm:mt-4">
              Welcome to Cotton's Hub, your premier destination for cotton plant
              disease detection using cutting-edge deep learning technology.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Our Mission
                </h3>
                <p className="mt-2 text-gray-800 text-justify ">
                  At Cotton Hub, our mission is to revolutionize the cotton
                  industry by leveraging the power of machine learning to detect
                  and mitigate diseases affecting cotton plants. We are
                  committed to providing farmers with innovative solutions that
                  empower them to identify and address potential threats to
                  their crops swiftly and effectively. By harnessing
                  cutting-edge technology, we aim to enhance crop resilience,
                  improve yield quality, and contribute to the sustainability of
                  cotton cultivation practices worldwide.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Our Vision
                </h3>
                <p className="mt-2 text-gray-800 text-justify">
                  Our objective at Cotton Hub is clear: to develop and deploy
                  advanced machine learning algorithms capable of accurately
                  detecting and diagnosing various diseases impacting cotton
                  plants. Through extensive research, data analysis, and
                  collaboration with industry experts, we strive to create
                  robust detection systems that enable early intervention and
                  prevention of disease outbreaks. By achieving this objective,
                  we aim to minimize crop losses, optimize resource utilization,
                  and support the long-term viability of cotton farming
                  communities.
                </p>
              </div>
            </div>
          </div>

          {/* Placeholder for images */}
          <div className="mt-10">
            <h3 className="text-xl font-bold  text-gray-900">Our Team</h3>
            <p className="mt-2 text-black">
              Meet the talented individuals behind Cotton's Hub who are dedicated
              to revolutionizing cotton plant disease detection.
            </p>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <TeamMemberCard
                  name="Omkar Chaudhari"
                  role="Lead Developer"
                  description="Omkar is good at Web Deveopment and have contributed on the UI part of the project and model part as well."
                  contact = "9730687707"
                  email = "chaudhariomkar369@gmail.com"
                  image = {omkarImg}
                />
                <TeamMemberCard
                  name="Sumit Chaskar"
                  role="Developer"
                  description="Sumit has handled most of the part of the Deep learning and prepared the model."
                  contact = "7708301982"
                  email = "sumitchaskar2000@gmail.com"
                  image={sumitImg}
                />
                {/* Add more team member cards here */}
              </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <TeamMemberCard
                  name="Avinash Baikare"
                  role="Developer"
                  description="Avinash worked on the UI part as well as the documentation of the project."
                  contact = "7499747397"
                  email = "c@gmail.com"
                  image={aviImg}
                />
                <TeamMemberCard
                  name="Anil Gujar"
                  role="Developer"
                  description="Anil has good hands on machine learning and deep learning and assisted while preparing the model of the project."
                  contact = "8766817157"
                  email = "anil@gmail.com"
                  image={anilImg}
                />
                {/* Add more team member cards here */}
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-medium text-gray-900">
              Technologies Used
            </h3>
            <p className="mt-2 text-gray-600 ">
              Learn more about the advanced deep learning technology powering
              our disease detection system.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <TechnologyCard
                technology="Deep Learning"
                description="Utilized for advanced pattern recognition and data analysis, enabling accurate disease detection."
                image = {deepImg}
              />
              <TechnologyCard
                technology="React"
                description="A JavaScript library for building user interfaces, providing a fast and efficient development experience."
                image = {reactImg}
              />
              <TechnologyCard
                technology="Node.js"
                description="A JavaScript runtime built on Chrome's V8 JavaScript engine, allowing scalable and efficient server-side applications."
                image = {nodeImg}
              />
              <TechnologyCard
                technology="MongoDB"
                description="A NoSQL database used for storing and managing data, offering flexibility and scalability for modern applications."
                image = {mongoImg}
              />
              <TechnologyCard
                technology="Flask"
                description="A lightweight web framework for Python, ideal for building RESTful APIs and web applications with simplicity and flexibility."
                image = {flaskImg}
              />
              <TechnologyCard
                technology="Tailwind CSS"
                description="A utility-first CSS framework that enables rapid UI development by providing pre-designed building blocks and utility classes."
                image={tailwindImg}
              />
            </div>
            {/* Placeholder for technology details */}
            {/* Add your technology details here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
