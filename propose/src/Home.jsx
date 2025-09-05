import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="centered-page">
            <h1>Thanks for giving your time</h1>
            <br />
            <br />
            <p style={{ fontWeight: "bold" }}>
                Before we proceed, I want a little promise that you will not be angry on me and will not tell anybody about it
            </p>
            <br />
            <br />
            <p>
                Choose wisely and with cool mind <br /> 👇
            </p>
            <br />
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <button onClick={() => navigate("/promised")}>I promise</button>
                <button onClick={() => navigate("/notsure")}>Not sure</button>
            </div>
        </div>
    );
}
