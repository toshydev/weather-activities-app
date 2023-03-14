import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState();

  useEffect(() => {
    async function startFetching() {
      try {
        const response = await fetch(url);
        console.log(response);
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
    startFetching();
  }, [url]);
  return data;
}
