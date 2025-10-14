import { Slide, Zoom, toast } from "react-toastify";

//  Get Installed Apps From LocalStorage
const getStoredInstalledApps = () => {
  const installedApps = localStorage.getItem("Installed Apps");
  if (installedApps) {
    return JSON.parse(installedApps);
  }
  return [];
};

//  LocalStorage Set Installed Apps
const addToInstalledLS = (id) => {
  const installedApps = getStoredInstalledApps();

  if (installedApps.includes(id)) {
    toast.warn("This App already  in Installed!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      theme: "dark",
      transition: Slide,
    });
  } else {
    installedApps.push(id);
    localStorage.setItem("Installed Apps", JSON.stringify(installedApps));

    toast.success("Installed Apps successfully!", {
      position: "top-right",
      autoClose: 2000,
      theme: "colored",
      transition: Zoom,
    });
  }
};
//  Remove Installed LS
const removeInstalledLS = (id) => {
  const installedApps = getStoredInstalledApps();
  const newInstalledApps = installedApps.filter((appId) => appId !== id);

  if (installedApps.length === newInstalledApps.length) {
    toast.info("This App is not in the list!", {
      position: "top-right",
      autoClose: 2000,
      theme: "dark",
      transition: Zoom,
    });
  } else {
    localStorage.setItem("Installed Apps", JSON.stringify(newInstalledApps));
    toast.success("App Uninstalled successfully!", {
      position: "top-right",
      autoClose: 2000,
      theme: "light",
      transition: Zoom,
    });
  }
};

export { getStoredInstalledApps, addToInstalledLS, removeInstalledLS };