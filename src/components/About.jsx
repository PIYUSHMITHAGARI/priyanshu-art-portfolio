import React from "react";
import "./About.css";
function About() {
    return (
        <div className="about-container">

            {/* Profile Section */}
            <div className="profile-section">
                <img
                    src="/images/profile.jpeg"
                    alt="Priyanshu Mithagari"
                    className="profile-img"
                />

                <h2>Priyanshu Mithagari</h2>

                <p className="artist-title">
                    Fine Artist | Portraits & Landscapes
                </p>
            </div>

            {/* Awards Section */}
            <div className="section">
                <h2>Awards</h2>

                <div className="card">
                    <img src="/images/award1.jpeg" alt="" />
                    <p>2024 : 1st prize in state level landscape competition at shivaji vidyapeeth- kolhapur.</p>
                </div>

                <div className="card">
                    <img src="/images/award2.jpeg" alt="award" />
                    <p>2025 : Best landscape award in Annual Art exhibition of decad college-Devrukh
                        (2024-25).</p>
                </div>
            </div>

            {/* Experience Section */}
            <div className="section">
                <h2>Experience</h2>

                <div className="card">
                    <img src="/images/exp1.1.jpeg" alt="experience" />
                    <p>Selected for the 2025 Nehru Centre Art Gallery Portrait Workshop.
                        The experience challenged me to capture human expression and form in real-time under professional lighting. It remains a definitive milestone that refined my approach to realistic portraiture.</p>
                </div>

                <div className="card">
                    <img src="/images/exp1.2.jpeg" alt="experience" />
                    <p>We were conducted our first group exhibition at nehru centre art gallery in 2026

                        Hosting our first exhibition at the Nehru Centre Art Gallery was a huge dream come true. Seeing people walk in and enjoy what we created together as a group is a feeling I will never forget."</p>
                </div>
                <div className="card">
                    <img src="/images/exp3.jpeg" alt="experience" />
                    <p>​"A major highlight of my journey was in 2025, when my painting was selected for the prestigious Monsoon Show at Jehangir Art Gallery."</p>
                </div>
            </div>

        </div>
    );
}

export default About;