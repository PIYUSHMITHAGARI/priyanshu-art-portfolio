import React from "react";
import "./Footer.css";

import {
    FaInstagram,
    FaWhatsapp,
    FaEnvelope,
} from "react-icons/fa";

function Footer() {
    const phoneNumber = "918180068563";

    const message =
        "Hello Priyanshu, I am interested in your artwork.";

    return (
        <footer className="footer">

            <div className="footer-left">
                <h3>
                    © {new Date().getFullYear()} Priyanshu Mithagari.
                    All Rights Reserved.
                </h3>
            </div>

            <div className="footer-right">

                <a
                    href="https://instagram.com/_priyanshu_1309"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagram />
                </a>

                <a
                    href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                        message
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaWhatsapp />
                </a>

                <a href="mailto:priyanshumithagari@gmail.com">
                    <FaEnvelope />
                </a>

            </div>

        </footer>
    );
}

export default Footer;