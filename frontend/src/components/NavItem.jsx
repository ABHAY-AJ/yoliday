import React from "react";

function NavItem({ icon, label, active = false }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "12px 24px",
        backgroundColor: active ? "rgba(255, 255, 255, 0.3)" : "transparent",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
      }}
      onMouseEnter={(e) => {
        if (!active) e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
      }}
      onMouseLeave={(e) => {
        if (!active) e.currentTarget.style.backgroundColor = "transparent";
      }}
    >
      <div style={{ marginRight: "12px" }}>{icon}</div>
      <span>{label}</span>
    </div>
  );
}

export default NavItem;
