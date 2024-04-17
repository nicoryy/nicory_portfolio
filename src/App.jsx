import GotoBtn from "./components/GotoBtn";
import Nav from "./components/Nav";
import profile from "../assets/profile20000.png";
import TabPortfolio from "./components/TabPortfolio";
import { mobile, website, desktop } from "./projects";
import React, { useState } from "react";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import imgmobile from "../assets/mobile.png";
import react from "../assets/atom.png";
import node from "../assets/node-js.png";
import tail from "../assets/icons8-tailwind-css-512.png";
import express from "../assets/icons8-expresso-js-512.png";
import python from "../assets/python.png";
import mongodb from "../assets/icons8-mongodb-512.png";
import native from "../assets/development.png";
import js from "../assets/js.png";

function App() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTab = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <section className="bg-[#170a1a] sm:px-20 max-xs:px-5  selection:bg-pink-500 selection:text-red-300">
        <Nav />

        <main className="text-white">
          {/* // WELCOME SECTION */}
          <section
            className="h-[calc(100vh-120px)] flex 
            flex-col pb-10
            items-start justify-center
            "
          >
            <h2 className="text-gray-600 font-bold sm:text-5xl 2xs:text-3xl">
              I'm a
            </h2>

            <h1
              id="#Welcome"
              className='font-bold sm:text-7xl 2xs:text-5xl tracking-wider after:content-["."]'
            >
              Full Stack <br />
              Website <br />
              Developer
            </h1>

            <GotoBtn class="my-10" goto="#Portfolio">
              Previous Project
            </GotoBtn>

            <img
              src={imgmobile}
              alt="img mobile"
              className="absolute size-[30rem] right-0 lg:mr-[25%] sm:-right-64 2xs:max-lg:hidden object-contain animate-waving"
            />
          </section>

          {/* ABOUT ME SECTION  */}
          <section
            className="min-h-[100vh] flex lg:flex-row sm:flex-col
          justify-center items-center lg:gap-40 2xs:flex-col
          "
          >
            <section className="">
              <img
                src={profile}
                alt="perfil_photo"
                className="drop-shadow-3xl"
              />
            </section>

            <section className="flex flex-col lg:max-w-[40%] sm:max-w-[80%] gap-5">
              <span
                id="About"
                className="font-bold text-3xl lg:text-left 
              sm:text-center uppercase"
              >
                About Me
              </span>

              <span className="text-justify text-gray-300">
                I am a student of Mechatronics Engineering at the Federal
                Institute of Education, Science, and Technology of Ceará (IFCE),
                with a passion for technology and development. As a full-stack
                developer, I have experience and skills in React, React Native,
                JavaScript, Python, and Node.js. Throughout my academic and
                professional journey, I have constantly sought to enhance my
                skills and knowledge, both in theory and in practice. I am
                always open to new learning opportunities and collaboration,
                eager to tackle future challenges and continue growing as a
                professional.
              </span>

              <section className="flex gap-10 justify-between 2xs:gap-2">
                <GotoBtn goto="#contact" class="px-[15%]">
                  Hire
                </GotoBtn>

                <GotoBtn
                  goto="https://www.linkedin.com/in/nicoryy"
                  class="px-[15%] "
                >
                  Resume
                </GotoBtn>
              </section>
            </section>
          </section>

          {/* PORTFOLIO SECTION */}
          <section
            id="Portfolio"
            className="flex flex-col gap-10 min-h-[100vh] text-center"
          >
            <span className="text-3xl font-bold uppercase my-10">
              Portfolio
            </span>

            {/* selection tab */}
            <div className="mb-16">
              <ul className="flex gap-10 justify-center">
                <li
                  onClick={() => {
                    handleTab(1);
                  }}
                  className={
                    activeTab === 1
                      ? "text-xl cursor-pointer border-b-4 rounded-xl pb-2 border-purple-800"
                      : "text-xl cursor-pointer"
                  }
                >
                  Mobile App
                </li>
                <li
                  onClick={() => {
                    handleTab(2);
                  }}
                  className={
                    activeTab === 2
                      ? "text-xl cursor-pointer border-b-4 rounded-xl pb-2 border-purple-800"
                      : "text-xl cursor-pointer"
                  }
                >
                  Website
                </li>
                <li
                  onClick={() => {
                    handleTab(3);
                  }}
                  className={
                    activeTab === 3
                      ? "text-xl cursor-pointer border-b-4 rounded-xl pb-2 border-purple-800"
                      : "text-xl cursor-pointer hidden"
                  }
                >
                  Desktop
                </li>
              </ul>
            </div>

            {activeTab === 1 ? (
              <TabPortfolio data={mobile} />
            ) : activeTab === 2 ? (
              <TabPortfolio data={website} />
            ) : (
              <TabPortfolio data={desktop} />
            )}
          </section>

          {/* SERVICES SECTION */}
          <section id="Services" className=" mb-10 mt-20">
            <p className="text-3xl uppercase text-center font-bold">Services</p>

            <Cards />
          </section>

          {/* EXPERIENCE SECTION */}
          <section id="Experience" className="text-center my-20">
            <p className="font-bold text-3xl uppercase mb-32"> experiences</p>
            <ul className="grid place-items-center md:grid-cols-4 2xs:grid-cols-2 gap-20">
              <li className="flex flex-col gap-2 items-center">
                <img className="size-16" src={react} alt="reactimg" />
                <p className="text-gray-400 text-xl">React.Js</p>
              </li>
              <li className="flex flex-col gap-2 items-center">
                <img className="size-16" src={node} alt="reactimg" />
                <p className="text-gray-400 text-xl">Node.Js</p>
              </li>
              <li className="flex flex-col gap-2 items-center">
                <img className="size-16" src={express} alt="reactimg" />
                <p className="text-gray-400 text-xl">Express.Js</p>
              </li>
              <li className="flex flex-col gap-2 items-center">
                <img className="size-16" src={mongodb} alt="reactimg" />
                <p className="text-gray-400 text-xl">MongoDb</p>
              </li>
              <li className="flex flex-col gap-2 items-center">
                <img className="size-16" src={python} alt="reactimg" />
                <p className="text-gray-400 text-xl">Python</p>
              </li>
              <li className="flex flex-col gap-2 items-center">
                <img className="size-16" src={native} alt="reactimg" />
                <p className="text-gray-400 text-xl">React Native</p>
              </li>
              <li className="flex flex-col gap-2 items-center">
                <img className="size-16" src={tail} alt="reactimg" />
                <p className="text-gray-400 text-xl">Tailwind Css</p>
              </li>
              <li className="flex flex-col gap-2 items-center">
                <img className="size-16" src={js} alt="reactimg" />
                <p className="text-gray-400 text-xl">JavaScript</p>
              </li>
            </ul>
          </section>
        </main>
        <Footer />
      </section>
    </>
  );
}

export default App;
