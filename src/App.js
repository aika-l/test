import "./styles.css";
import { useState, useEffect } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

export default function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <PacmanLoader color={"#EEDD11"} loading={loading} size={60} />
      ) : (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0w-6e-P3APKEFwhCPL8sMweIZmy5y1EFc3Q&usqp=CAU"
          alt="packman game"
        />
      )}
    </div>
  );
}
