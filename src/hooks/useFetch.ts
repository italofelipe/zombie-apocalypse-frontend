import { useEffect, useState } from "react";
import { axiosGet } from "../services";

const useFetch = () => {
  const [data, setData] = useState<Survivors[]>([]);
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axiosGet<
      [
        {
          id: string;
          name: string;
          skills: Skills[];
          isInfected: boolean;
          gender: "male" | "female";
        }
      ]
    >({
      path: "/survivors",
    })
      .then((response) => {
        setData([...response.data]);
      })
      .catch((err) => {
        console.log("There was an error: ", err);
        setError(error);
      })
      .finally(() => setLoading(false));
  }, [error]);
  return { data, error, loading };
};

export default useFetch;
