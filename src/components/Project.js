import React from "react";
import { useState } from "react";
import { projectsData } from "../data/projectsData";
import { motion } from "framer-motion";

const Project = (props) => {
  const [currentProject] = useState(projectsData);
  const project = currentProject[props.projectNumber];

  // random background circles

  let left = Math.floor(Math.random() * 200 + 700) + "px";
  let top = Math.floor(Math.random() * 200 + 150) + "px";
  let size = "scale(" + Math.random() + 0.7 + ")";

  // animation of pages

  const transition = {
    ease: [0.03, 0.87, 0.74, 0.9],
    duration: 0.6,
  };

  const pageTransition = {
    initial: {
      opacity: 0,
      transition: { duration: 0.8 },
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0.4,
      transition: { duration: 0.35 },
      x: 800,
    },
  };
  let plusMinus = Math.random() > 0.4 ? 1 : -1;
  let imgX = Math.random() * 350 * +plusMinus;
  let imgY = Math.random() * 120 * +plusMinus;
  const imgAnim = {
    initial: {
      opacity: 0,
      x: imgX,
      y: imgY,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <motion.div
      className="project-main"
      intial="intial"
      animate="visible"
      exit="exit"
      variants={pageTransition}
      transition={transition}
    >
      <div className="project-content">
        <h1>{project.title}</h1>
        <ul className="languages">
          {project.languages.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
      <motion.div
        className="img-content"
        initial="initial"
        animate="visible"
        variants={imgAnim}
        transition={{ duration: 1.2 }}
      >
        <div className="img-container hover">
          <span>
            <h3>{project.title}</h3>
            <p>{project.infos}</p>
          </span>
          <img src={project.img} alt={project.title} />
        </div>
        <div className="button-container">
          <a href={project.link} target="-blank" rel="noopener noreferrer">
            <span className="button">voir le site</span>
          </a>
        </div>
      </motion.div>
      <span
        className="random-circle"
        style={{ left, top, transform: size }}
      ></span>
    </motion.div>
  );
};

export default Project;
