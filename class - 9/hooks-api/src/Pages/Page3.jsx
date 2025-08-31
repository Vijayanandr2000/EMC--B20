import React, { useContext } from "react";
import { GlobalContext1 } from "../Context";

const Page3 = () => {
  const { name } = useContext(GlobalContext1);
  return <div>Page3 name = {name}</div>;
};

export default Page3;
