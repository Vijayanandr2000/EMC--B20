import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTETZfgQC9Xt8dU8Lyimp_aGfVEHwB3EBOt1g&s"
        alt="foodImage"
      />

      <div className="imageContent">
        <h1>Publish your passions, your way</h1>
        <p>Create a unique and beautiful blog easily.</p>
        <button>Create Your Blog</button>
      </div>
    </section>
  );
};

export default Hero;
