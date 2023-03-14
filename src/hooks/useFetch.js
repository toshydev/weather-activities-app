import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState();

  useEffect(() => {
    async function startFetching() {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setData(data);
        } else {
          throw new Error("Response is not ok!");
        }
      } catch {
        console.log("Error!");
      }
    }
    const intervalID = setInterval(() => {
      startFetching();
    }, 5000);

    return () => clearInterval(intervalID);
  }, [url]);
  return data;
}
