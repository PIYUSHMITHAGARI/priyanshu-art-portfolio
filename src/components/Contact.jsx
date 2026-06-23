import React from "react";
import "./Contact.css";
import { FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";

function Contact() {
    const phoneNumber = "8180068563"; // 👉 replace with your number (with country code)
    const message = "Hello, bhaiya painter! I am interested in your artwork. Can we discuss more?";

    return (
        <div className="contact-container">

            <h3>Contact Me</h3>

            <div className="contact-grid">

                <div className="contact-card">
                    <FaPhone className="contact-icon" />
                    <h3>Phone</h3>
                    <p>+91 8180068563</p>
                </div>

                <div className="contact-card">
                    <FaEnvelope className="contact-icon" />
                    <h3>Email</h3>
                    <p>priyanshumithagari@gmail.com</p>
                </div>

                <div className="contact-card">
                    <FaWhatsapp className="contact-icon" />
                    <h3>WhatsApp</h3>


                    <a
                        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                            message
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="whatsapp-btn">
                            Message on WhatsApp
                        </button>
                    </a>

                </div>

            </div>

        </div>
    );
}

export default Contact;