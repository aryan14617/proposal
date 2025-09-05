import { useNavigate } from "react-router-dom";

export default function Promised() {
    const navigate = useNavigate();

    return (
        <div className="centered-page">
            <h2>Calmly read following lines.</h2>
            <br />
            <p style={{fontWeight:"bold"}}>
                Okay, so you have promised that you won't be angry. I took this promise so that I don't hurt you unknowningly. I want to tell you that I LIKE YOU since I saw you first time 7-8 years ago. I didn't have the courage to ask this to you directly so I chose this way. I want to ask that &mdash; <br /> <span style={{fontStyle: "italic"}}>Do you also have feelings any for me too?</span></p>
            <br />
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <button style={{backgroundColor: "white", border: "2px solid #007bff", color: "#007bff"}} onClick={() => navigate("/likes")}>Yes!!!</button>
                <button style={{backgroundColor: "white", border: "2px solid black", color: "black"}} onClick={() => navigate("/nolikes")}>No, I don't</button>
            </div>
        </div>
    );
}
