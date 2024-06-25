import React, { useState } from "react";
import TabPortfolio from "../components/TabPortfolio";
import { mobile, website, desktop } from "../projects";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTab = (index) => {
    setActiveTab(index);
  };
  return (
    <section
      id="Portfolio"
      className="flex flex-col gap-10 min-h-[100vh] text-center"
    >
      <span className="text-3xl font-bold uppercase my-10">Portfolio</span>

      {/* selection tab */}
      <div className="mb-16">
        <ul className="flex gap-10 justify-center">
          <li
            onClick={() => {
              handleTab(1);
            }}
            className={
              activeTab === 1
                ? "text-xl cursor-pointer border-b-4 rounded-xl pb-2 border-purple"
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
                ? "text-xl cursor-pointer border-b-4 rounded-xl pb-2 border-purple"
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
                ? "text-xl cursor-pointer border-b-4 rounded-xl pb-2 border-purple"
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
  );
};

export default Portfolio;
