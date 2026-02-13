import React from "react";

function PersonCard({ person }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        borderRadius: "10px",
        marginBottom: "15px",
        width: "300px",
        backgroundColor: "#ffffff",
        color: "#000000"   // 👈 text color black
      }}
    >
      <h3 style={{ color: "#000000" }}>{person.getRole()}</h3>
      <p style={{ color: "#000000" }}>{person.getDetails()}</p>
    </div>
  );
}

export default PersonCard;
