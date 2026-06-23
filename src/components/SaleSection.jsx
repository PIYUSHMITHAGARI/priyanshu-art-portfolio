import "./SaleSection.css";

function SaleSection() {
    return (
        <div className="showcase-section">

            <div className="showcase-header">
                <h1>Artwork Showcase</h1>

                <p>
                    Explore a curated collection of original artworks, each reflecting
                    creativity, emotion, and artistic expression. Every piece is
                    handcrafted with passion and is available for collectors,
                    art enthusiasts, and those who appreciate unique creations.
                </p>
            </div>

            <div className="showcase-container">

                {/* Artwork 1 */}
                <div className="showcase-card">
                    <img src="/images/art1.jpg" alt="Artwork 1" />

                    <div className="card-content">
                        <h3>wings of hope</h3>

                        <p>
                            "The bird on her finger becomes a symbol of hope and aspiration. Through innocence and belief, she prepares to let her dreams spread their wings and fly." ✨🕊️
                        </p>

                        <a
                            href={`https://wa.me/918180068563?text=${encodeURIComponent(
                                "Hello! I am interested in wings of hope."
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button>Enquire About This Artwork</button>
                        </a>
                    </div>
                </div>

                {/* Artwork 2 */}
                <div className="showcase-card">
                    <img src="/images/art2.jpg" alt="Artwork 2" />

                    <div className="card-content">
                        <h3>Quite trust</h3>

                        <p>
                            "In a moment of quiet trust, innocence meets nature. The painting reflects a gentle connection built through care, patience, and understanding."
                        </p>

                        <a
                            href={`https://wa.me/918180068563?text=${encodeURIComponent(
                                "Hello! I am interested in Quite trust."
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button>Enquire About This Artwork</button>
                        </a>
                    </div>
                </div>

                {/* Artwork 3 */}
                <div className="showcase-card">
                    <img src="/images/art3.jpg" alt="Artwork 3" />

                    <div className="card-content">
                        <h3>Lost in the happiness</h3>

                        <p>
                            "Lost in the happiness of the present moment, she dances with innocence and freedom. The painting reflects pure joy untouched by life's worries."
                        </p>

                        <a
                            href={`https://wa.me/918180068563?text=${encodeURIComponent(
                                "Hello! I am interested in Lost in the happiness."
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button>Enquire About This Artwork</button>
                        </a>
                    </div>
                </div>

                {/* Artwork 4 */}
                <div className="showcase-card">
                    <img src="/images/art4.jpg" alt="Artwork 4" />

                    <div className="card-content">
                        <h3>Innocence</h3>

                        <p>
                            "A portrait of pure innocence, where a child's gentle spirit and a blooming lotus symbolize hope, purity, and the beauty of an untroubled heart." 🌸
                        </p>

                        <a
                            href={`https://wa.me/918180068563?text=${encodeURIComponent(
                                "Hello! I am interested in Innocence."
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button>Enquire About This Artwork</button>
                        </a>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default SaleSection;