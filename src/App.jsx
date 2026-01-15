import { useAuth } from "./context/AuthContext"

function App() {
  const { tenant, role, switchTenant, switchRole } = useAuth()

  return (
    <div style={{ padding: "20px" }}>
      <h1>Multi-Tenant Sales Dashboard</h1>

      <p><strong>Tenant:</strong> {tenant.name}</p>
      <p><strong>Role:</strong> {role}</p>

      <div style={{ marginTop: "10px" }}>
        <button onClick={() => switchTenant("orgA")}>Org A</button>
        <button onClick={() => switchTenant("orgB")} style={{ marginLeft: "8px" }}>
          Org B
        </button>
      </div>

      <div style={{ marginTop: "10px" }}>
        <button onClick={() => switchRole("Admin")}>Admin</button>
        <button onClick={() => switchRole("Agent")} style={{ marginLeft: "8px" }}>
          Agent
        </button>
      </div>
    </div>
  )
}

export default App

