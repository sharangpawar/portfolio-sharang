import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./ContactMe.css";
import axios from "axios";
import { toast } from "react-toastify";
import imgBack from "../../../src/images/mailz.jpeg";
import load1 from "../../../src/images/load2.gif";

const ContactMe = (props) => {
  const [typeEffect] = useTypewriter({
    words: ["et In Touch With Me"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const res = await axios.post(`/contact`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets keep in touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">G{typeEffect}</h2>
          <a href="https://www.linkedin.com/in/sharangdhar-pawar/">
            <i className="fa fa-linkedin-square"></i>
          </a>
          <a href="https://www.facebook.com/people/Sharangdhar-Pawar/pfbid0uh2ctoPxVoqCgL6ZgBLTtYzVzND6Jv61sn2bo11xQRC6msrB9HaAnoWU2SCbiFd9l/">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="https://instagram.com/sharangpawar11?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://github.com/sharangpawar">
            <i className="fa fa-github-square"></i>
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send you Email here</h4>
            <img src={imgBack} alt="Image not found" />
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} />

            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleEmail} value={email} />

            <label htmlFor="message">Message</label>
            <textarea type="text" onChange={handleMessage} value={message} />

            <div className="send-btn">
              <button type="submit">
                Send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="image not found" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
