import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CustomerLogin({ setUser }) {
    const [form, setForm] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (form.email === "user@gmail.com" && form.password === "1234") {
            setUser({ role: "customer", email: form.email });
            alert("Customer Login Successful");
            navigate("/");
        } else {
            alert("Invalid Customer Credentials");
        }
    };

    return (
        <div>
            <h2>Customer Login</h2>

            <form onSubmit={handleSubmit}>
                <input name="email" placeholder="User Email" onChange={handleChange} />
                <br /><br />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                <br /><br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default CustomerLogin;