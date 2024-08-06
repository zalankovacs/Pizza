import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
          officiis sunt accusamus? Voluptatum adipisci tenetur fuga animi
          consectetur aliquam exercitationem fugiat suscipit, ad quas ex nulla
          repellat dolorum dignissimos veritatis. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quo, voluptatibus unde minus debitis
          officia alias distinctio maxime necessitatibus a laborum tenetur nam
          obcaecati eligendi consequuntur aliquid repellendus. Qui, consequatur
          quia!
        </p>
      </div>
    </div>
  );
};

export default About;
