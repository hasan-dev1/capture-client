import { useEffect } from "react";
import { useState } from "react";

const useLoadData = (load) => {
  const [homeLoading, setHomeLoading] = useState(true)
  const [loadedData, setLoadedData] = useState([]);

  useEffect(() => {
    fetch(`${load}`)
      .then((res) => res.json())
      .then((data) => {
        setHomeLoading(false)
        setLoadedData(data);
      });
  }, []);

  return {loadedData, homeLoading};
};
export default useLoadData;
