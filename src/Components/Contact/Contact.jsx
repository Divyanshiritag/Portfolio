import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "e99c6085-0bc7-42b5-b3de-4cf221787eb7");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };


  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>divyanshi2030@gmail.com</p>
            </div>
            {/* <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>9457194980</p>
            </div> */}
            {/* <div className="contact-detail">
              <img src={linkein} alt="" />
              <p>https://www.linkedin.com/in/divyanshi-agarwal-416387242/</p>
            </div> */}
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
        <label htmlFor="">Your Name</label>
        <input type="text" placeholder="Enter Your Name" name="name" />
        <label htmlFor="">Your Email</label>
        <input type="email" placeholder="Enter Your Email" name="email" />
        <label htmlFor="">Write your message here</label>
        <textarea name="message" rows={8} placeholder="Enter Your Message"></textarea>
        <button type="submit" className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
