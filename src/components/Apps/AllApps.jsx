import React, { useEffect, useState } from "react";
import useApps from "../../hooks/useApps";
import { FiDownload } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ImageLoader from "../imageLoader";
import loaderImg from "../../assets/logo.png";
import appErrorImage from "../../assets/App-Error.png";
import Button from "../Button/Button";
import { Helmet } from "react-helmet-async";

const AllApps = () => {
  const { apps, loading } = useApps();

  // Navigate to app details or home
  const Navigate = useNavigate();

  // ------------------------
  // Search live functionality
  // ------------------------
  const [search, setSearch] = useState("");
  const [filteredApps, setFilteredApps] = useState(apps); // filtered result state
  const [searchLoading, setSearchLoading] = useState(false); // temp loading while search

  // Handle live search with a small delay
  // Added setTimeout to show loading during typing
  useEffect(() => {
    setSearchLoading(true);
    const delay = setTimeout(() => {
      const results = apps.filter((app) =>
        app.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredApps(results); // update filtered apps
      setSearchLoading(false);
    }, 100);
    return () => clearTimeout(delay);
  }, [search, apps]);

  // Show global loading while fetching apps
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-5xl ">
        L{" "}
        <ImageLoader
          className="loading loading-spinner "
          src={loaderImg}
          alt=""
        />
        ading...
      </div>
    );
  }

  return (
    <div className="bg-[#f5f5f5] py-16">
      <Helmet>
        <title>Hero Store - All Apps</title>
      </Helmet>
      {/* Page Title */}
      <h1 className="md:text-2xl lg:text-4xl font-bold text-center">
        Our All Application
      </h1>
      <p className="text-center mt-4 text-gray-600 text-sm md:text-base">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="container mx-auto">
        {/* Search Input & App Count */}
        <div className="flex justify-between pt-16 px-5 ">
          <div className="hidden md:flex ">
            <h2 className=" text-gray-600 font-bold ">
              ({filteredApps.length}) Apps Found
            </h2>
          </div>
          <div className="relative justify-center mx-auto md:mx-0">
            <input
              type="search"
              placeholder="Search Apps..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-gray-300 rounded-md py-2 px-4 pr-10 focus:outline-none "
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FaSearch />
            </span>
          </div>
        </div>

        {/* Show loading spinner while searching */}
        {searchLoading ? (
          <div className="flex justify-center items-center min-h-[50vh] text-5xl">
            L{" "}
            <ImageLoader
              className="loading loading-spinner "
              src={loaderImg}
              alt=""
            />
            ading...
          </div>
        ) : filteredApps.length === 0 ? (
          // Show not found if no apps match search
          <div className="my-12 space-y-7">
            <img
              className="mx-auto w-[350px]"
              src={appErrorImage}
              alt="appErrorImage"
            />
            <div className="text-center space-y-7">
              <h1 className="font-bold text-4xl">Oops, app not found!</h1>
              <Button onClick={() => Navigate(-1)}>Go Back!</Button>
            </div>
          </div>
        ) : (
          // Show all filtered apps in grid
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-8">
            {filteredApps.map((app) => (
              <div
                onClick={() => Navigate(`/apps-details/${app.id}`)}
                key={app.id}
                className="rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden cursor-pointer  transform hover:-translate-y-1 bg-white"
              >
                {/* Image Section */}
                <div className="w-full aspect-[4/3] bg-gray-200 flex items-center justify-center">
                  {app.image ? (
                    <img src={app.image} alt={app.title} className="w-28" />
                  ) : (
                    <div className="text-gray-400 text-sm">No Image</div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-3 flex flex-col text-center bg-[#fdfdfd]">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-800">
                    {app.title}
                  </h3>

                  <div className="mt-2 flex justify-between gap-2">
                    {/* Downloads */}
                    <div className="flex items-center bg-green-50 text-green-600 px-2 py-1 rounded-md text-xs sm:text-sm font-medium">
                      <FiDownload className="w-4 h-4 mr-1" />
                      {app.downloads}
                    </div>

                    {/* Rating */}
                    <div className="flex items-center bg-orange-50 text-orange-500 px-2 py-1 rounded-md text-xs sm:text-sm font-medium">
                      <AiFillStar className="w-4 h-4 mr-1" />
                      {app.ratingAvg}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllApps;