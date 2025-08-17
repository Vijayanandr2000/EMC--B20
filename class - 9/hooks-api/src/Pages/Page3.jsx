import React, { useContext } from "react";
import { GlobalContext } from "../Wrapper";

const Page3 = () => {
  const { name, age } = useContext(GlobalContext);
  console.log("data", name, age);
  return <div>Page3 = {name}</div>;
};

export default Page3;
