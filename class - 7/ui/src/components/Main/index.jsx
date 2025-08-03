import React from "react";
import "./Main.css";
const Main = (props) => {
  const { MainContent } = props;

  return (
    <main>
      {MainContent.map((data, idx) => {
        let odd = idx % 2 !== 0;
        return (
          <>
            <section className={`${odd ? "reverse" : ""}`}>
              <div className="left">
                <h1>{data.title}</h1>
                <h3>{data.description}</h3>
              </div>
              <div className="right">
                <img src={data.img} alt="" />
              </div>
            </section>
            <hr />
          </>
        );
      })}
    </main>
  );
};

export default Main;
