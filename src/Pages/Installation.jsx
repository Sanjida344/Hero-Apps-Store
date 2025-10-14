import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import useApps from "../hooks/useApps";
import InstallationApps from "./InstallationApps";
import { getStoredInstalledApps, removeInstalledLS } from "../Utility/AddToLS";
import loaderImg from "../assets/logo.png";
import appErrorImage from "../assets/App-Error.png";
import ImageLoader from "../components/imageLoader";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
const Installation = () => {
  // Navigate to all apps
  const navigate = useNavigate();

  const { apps, loading } = useApps();
  //state set installedApps Data
  const [installedApps, setInstalledApps] = useState([]);
  // get installed apps from localStorage and set to state
  useEffect(() => {
    const storedApps = getStoredInstalledApps();
    const myApps = apps.filter((app) => storedApps.includes(app.id));
    setInstalledApps(myApps);
  }, [apps]);
  //sort set readList Book Data
  const [sort, setSort] = useState("");

  //sort function
  const handleSort = (type) => {
    const sortedList = [...installedApps];
    setSort(type);
    if (type === "High") {
      sortedList.sort((a, b) => b.size - a.size);
    } else if (type === "Low") {
      sortedList.sort((a, b) => a.size - b.size);
    }
    setInstalledApps(sortedList);
  };

  //uninstall Apps function
  const handleUninstallApp = (id) => {
    removeInstalledLS(id);
    setInstalledApps((prevList) => prevList.filter((app) => app.id !== id));
  };

  //loading spinner
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-5xl">
        L{" "}
        <ImageLoader
          className="loading loading-spinner w-2"
          src={loaderImg}
          alt=""
        />
        ading...
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 lg:px-12">
      <Helmet>
        <title>Hero Store - Installed Apps</title>
      </Helmet>
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 ">
          <div className="mx-auto">
            <h2
              className="text-center text-xl md:text-2xl lg:text-4xl font-bold py-3
            "
            >
              My Installation Apps
            </h2>
            <p className="text-gray-500 text-sm sm:text-base text-center w-full md:w-3/4 lg:w-2/3 mx-auto">
              "Discover all your installed apps and stay updated with the latest
              trending applications developed by us. Manage, explore, and enjoy
              your apps effortlessly!"
            </p>
          </div>
        </div>

        {/* Title */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            {installedApps.length} Apps Found
          </h2>

          {/* Sort By Dropdown */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
              Sort By: {sort ? sort : "Select"}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <button onClick={() => handleSort("High")}>High - Low </button>
              </li>
              <li>
                <button onClick={() => handleSort("Low")}>Low - High</button>
              </li>
            </ul>
          </div>
        </div>

        {/* App List */}
        {installedApps.length === 0 ? (
          // Show not found if no apps match search
          <div className="my-12 space-y-7">
            <img
              className="mx-auto w-[350px]"
              src={appErrorImage}
              alt="appErrorImage"
            />
            <div className="text-center space-y-7">
              <h1 className="font-bold text-4xl">Oops, app not found!</h1>
              <Button onClick={() => navigate("/")}>Go Home!</Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {installedApps.map((app) => (
              <InstallationApps
                handleUninstallApp={handleUninstallApp}
                key={app.id}
                app={app}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Installation;