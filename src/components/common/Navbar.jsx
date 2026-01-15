import { Link } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"

function Navbar() {
  const { role } = useAuth()

  return (
    <nav style={{ marginBottom: "16px" }}>
      <Link to="/" style={{ marginRight: "12px" }}>
        Dashboard
      </Link>

      <Link to="/leads" style={{ marginRight: "12px" }}>
        Leads
      </Link>

      <Link to="/calls" style={{ marginRight: "12px" }}>
        Call Logs
      </Link>

      {role === "Admin" && (
        <Link to="/settings">
          Settings
        </Link>
      )}
    </nav>
  )
}

export default Navbar
