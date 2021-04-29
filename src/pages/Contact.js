import React from "react";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";
import ButtonsBottom from "../components/ButtonsBottom";
import Logo from "../components/Logo";
import CopyToClipboard from "react-copy-to-clipboard";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";

const Contact = () => {
  const variants = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0.4,
      x: -300,
    },
  };
  const transition = {
    ease: [0.3, 0.87, 0.73, 0.9],
    duration: 0.6,
  };

  return (
    <main>
      <Mouse />
      <motion.div
        className="contact"
        initial="out"
        animate="in"
        exit="out"
        variants={variants}
        transition={transition}
      >
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>adresse</h4>
              <p>15 av de s codeurs</p>
              <p>33000 Bordeaux</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>téléphone</h4>
              <CopyToClipboard text="0606060607" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => {
                    alert("Téléphone copié !");
                  }}
                >
                  0606060607
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>email</h4>
              <CopyToClipboard
                email="swann-symfony@gmail.com"
                className="hover"
              >
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => {
                    alert("Email copié !");
                  }}
                >
                  swann-symfony@gmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
          <div className="credits">
            <p>swann-martin learningReact - 2021</p>
          </div>
        </div>
        <ButtonsBottom left={"/project-4"} />
      </motion.div>
    </main>
  );
};

export default Contact;
