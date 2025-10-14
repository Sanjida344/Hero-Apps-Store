import React from "react";
import useApps from "../../hooks/useApps";
import { GoDownload } from "react-icons/go";
import { FcRating } from "react-icons/fc";
import DefaultApps from "./DefaultApps";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import loaderImg from "/logo.png";
import ImageLoader from "../imageLoader";

const Apps = () => {
  const { apps, loading } = useApps();

  // Optimized with useMemo
  const defaultApps = React.useMemo(() => 
    [...apps]
      .sort((a, b) => b.downloads - a.downloads)
      .slice(0, 8),
    [apps]
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-5xl">
        L{" "}
        <img 
          src={loaderImg} 
          alt="Loading" 
          className="loading loading-spinner w-8 h-8 mx-2"
        />
        ading...
      </div>
    );
  }

  return (
    <div className="py-8 bg-[#f5f5f5]">
      <h1 className="text-xl font-bold md:text-2xl lg:text-4xl text-center">
        Trending Apps
      </h1>
      <p className="text-center text-sm md:text-base p-2">
        Explore All Trending Apps on the Market developed by us.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-8 container mx-auto">
        {defaultApps.map((app) => (
          <DefaultApps apps={app} key={app.id} />
        ))}
      </div>
      <Button className="mx-auto block">
        <Link to={"/apps"}>Show All</Link>
      </Button>
    </div>
  );
};

export default Apps;