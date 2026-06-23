import { Link } from "react-router-dom";
import "./Home.css";
function Home({ paintings, addCart }) {

    return (

        <>
            {/* 🔥 NEW HEADER SECTION */}
            <div className="hero-section">
                <div className="hero-content">
                    <h1>Priyanshu Mithagari</h1>
                    <p>
                        Passionate artist creating unique and meaningful artwork.
                        Exploring creativity through colors, emotions, and imagination.
                    </p>
                </div>
            </div>

            {/* EXISTING CODE (UNCHANGED) */}
            <div className="painting-list">
                {paintings.map((p) =>
                (
                    <div key={p.id}>
                        <img src={p.image} alt={p.title} />
                        <h3>{p.title}</h3>
                        <p>{p.description}</p>

                        <div>
                            <button><Link to={`/paintingdetails/${p.id}`}>View Details</Link></button>
                            {/* <button onClick={() => addCart(p)}>Add To Cart</button> */}
                        </div>
                    </div>
                )
                )}
            </div>
        </>
    )
}

export default Home;