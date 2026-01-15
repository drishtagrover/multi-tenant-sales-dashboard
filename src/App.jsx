import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"
import { useAuth } from "./context/AuthContext"
import Navbar from "./components/common/Navbar"

function App() {
  const { tenant, role, switchTenant, switchRole } = useAuth()

  return (
    <BrowserRouter>
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "20px" }}>
    <Navbar />
      <div style={{ padding: "20px" }}>
        <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px"
  }}
>
  <div>
    <h1 style={{ margin: 0 }}>Sales Dashboard</h1>
    <p style={{ margin: 0, color: "#666" }}>
      {tenant.name} · {role}
    </p>
  </div>
</div>


        <div style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>
  <button onClick={() => switchTenant("orgA")}>Org A</button>
  <button onClick={() => switchTenant("orgB")}>Org B</button>
</div>

<div style={{ display: "flex", gap: "10px" }}>
  <button onClick={() => switchRole("Admin")}>Admin</button>
  <button onClick={() => switchRole("Agent")}>Agent</button>
</div>


        <hr />
        
        <AppRoutes />
      </div>
      </div>
    </BrowserRouter>
  )
}

export default App


