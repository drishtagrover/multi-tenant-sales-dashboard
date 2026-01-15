import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"
import { useAuth } from "./context/AuthContext"
import Navbar from "./components/common/Navbar"

function App() {
  const { tenant, role, switchTenant, switchRole } = useAuth()

  return (
    <BrowserRouter>
    <Navbar />
      <div style={{ padding: "20px" }}>
        <h1>Multi-Tenant Sales Dashboard</h1>

        <p><strong>Tenant:</strong> {tenant.name}</p>
        <p><strong>Role:</strong> {role}</p>

        <div>
          <button onClick={() => switchTenant("orgA")}>Org A</button>
          <button onClick={() => switchTenant("orgB")} style={{ marginLeft: 8 }}>
            Org B
          </button>
        </div>

        <div style={{ marginTop: 8 }}>
          <button onClick={() => switchRole("Admin")}>Admin</button>
          <button onClick={() => switchRole("Agent")} style={{ marginLeft: 8 }}>
            Agent
          </button>
        </div>

        <hr />
        
        <AppRoutes />
      </div>
    </BrowserRouter>
  )
}

export default App


