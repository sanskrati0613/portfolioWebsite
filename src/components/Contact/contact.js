import './contact.css';
import linkedinIcon from '../../assets/linkedin.png';
import instagramIcon from '../../assets/instagram.png';
import githubIcon from '../../assets/github.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

const sendEmail = async (e) => {
  e.preventDefault();

  const formData = {
    from_name: form.current.from_name.value,
    from_email: form.current.from_email.value,
    message: form.current.message.value,
  };

  try {
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const data = await res.json();
    alert(data.message || "Message sent!");
    e.target.reset();
  } catch (error) {
    console.error("Error sending message:", error);
    alert("Failed to send message.");
  }
};

    
    return (
        <div id='contactPage'>

            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your name' name='from_name' />
                    <input type="text" className="email" placeholder='Your Email' name='from_email' />
                    <textarea name="message" placeholder='Your Message' rows={5} className='msg' ></textarea>
                    <button type="submit" value="Send" className='submitBtn'>Submit</button>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/sanskrati-jain-295b65271" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinIcon} alt="LinkedIn" className="link" />
                        </a>
                        <a href="https://www.instagram.com/trivia_noon/" target="_blank" rel="noopener noreferrer">
                            <img src={instagramIcon} alt="Instagram" className="link" />
                        </a>
                        <a href="https://github.com/sanskrati0613" target="_blank" rel="noopener noreferrer">
                            <img src={githubIcon} alt="GitHub" className="link" />
                        </a>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Contact;