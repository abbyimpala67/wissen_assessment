import React from "react";
import { useSelector } from "react-redux";

const Home = ({ name }) => {
  const state = useSelector((state) => state);
  console.log("state", state);
  return <h1>Hello {name}!</h1>;
};
export default Home; 
