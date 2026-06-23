
import { useParams, useNavigate } from "react-router-dom";
import "./paintingdetails.css";
function Paintingdetails({ paintings, deletePaintings }) {
    const phoneNumber = "8180068563"; // 👉 replace with your number (with country code)
    const message = "Hello, bhaiya painter! I am interested in your artwork. Can we discuss more?";
    const { id } = useParams();
    const pr = paintings.find((p) => p.id === Number(id))
    if (!pr) {
        return <h2> Painting not found </h2>
    };

    const navigate = useNavigate();


    return (
        <>
            <div className="painting-details">
                <div className="painting-card">
                    <img src={pr.image} alt={pr.title} />
                    <div className="painting-info">
                        <h3>{pr.title}</h3>
                        <p>{pr.description}</p>
                        <p>{pr.price}</p>

                        <button onClick={() => navigate(-1)}>Go Back</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Paintingdetails;