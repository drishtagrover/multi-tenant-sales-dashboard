import { Routes, Route, Navigate } from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import Leads from "../pages/Leads"
import CallLogs from "../pages/CallLogs"
import Settings from "../pages/Settings"
import { useAuth } from "../context/AuthContext"

const AppRoutes = () => {
  const { role } = useAuth()

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/leads" element={<Leads />} />
      <Route path="/calls" element={<CallLogs />} />

      {/* Admin Protected Route */}
      <Route
        path="/settings"
        element={
          role === "Admin" ? <Settings /> : <Navigate to="/" replace />
        }
      />
    </Routes>
  )
}

export default AppRoutes
