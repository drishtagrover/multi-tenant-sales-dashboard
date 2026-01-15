import { NavLink } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"

function Navbar() {
  const { role } = useAuth()

  const linkStyle = ({ isActive }) => ({
    padding: "8px 14px",
    borderRadius: "6px",
    background: isActive ? "#2563eb" : "transparent",
    color: isActive ? "#fff" : "#333"
  })

  return (
    <nav
      style={{
        display: "flex",
        gap: "10px",
        marginBottom: "20px"
      }}
    >
      <NavLink to="/" style={linkStyle}>Dashboard</NavLink>
      <NavLink to="/leads" style={linkStyle}>Leads</NavLink>
      <NavLink to="/calls" style={linkStyle}>Call Logs</NavLink>

      {role === "Admin" && (
        <NavLink to="/settings" style={linkStyle}>Settings</NavLink>
      )}
    </nav>
  )
}

export default Navbar
