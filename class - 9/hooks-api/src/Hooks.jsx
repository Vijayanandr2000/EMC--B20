import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";

const Hooks = () => {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    console.log("Mounted...!", inputRef.current);
    inputRef.current.focus();

    return () => {
      console.log("Unmounted...!");
    };
  }, [count]);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const data = useMemo(() => ["vijay", "vijayanand", "ravi"], []);

  return (
    <>
      <h1 onClick={handleClick}>{count}</h1>
      <input type="text" ref={inputRef} />
    </>
  );
};

export default Hooks;
