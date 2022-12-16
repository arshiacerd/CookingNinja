import React, { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState("");
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  var response, jsonData;
  const handleClick = async () => {
    setIsPending(true);
    const controller = new AbortController();


    try {
      response = await fetch(url, { signal: controller.signal });
      console.log(response);

      if (!response.ok) {
        throw new Error("Not found");
      }

      jsonData = await response.json();

      setData(jsonData);
      setIsPending(false);
    } catch (err) {
      setIsPending(false);
      setError("could not fetch data");
      console.log("could not fetch data: ", err );
    }

    // return jsonData;
  };

  useEffect(() => {
    const controller = new AbortController();
    handleClick();
    return () => {
      controller.abort();
    };
  }, [url]);
  return { data, isPending, error };
};
