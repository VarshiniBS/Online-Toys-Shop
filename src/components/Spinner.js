import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Spinner = ({ path = "login" }) => {
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const Location = useLocation();
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 &&
      navigate(`/${path}`, {
        state: Location.pathname,
      });
    return () => clearInterval(interval);
  }, [count, navigate, Location, path]);
  return (
    <>
      <div class="d-flex justify-content-center">
        <h1 className="Text-center">redirecting in {count} second(s)</h1>
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Spinner;
