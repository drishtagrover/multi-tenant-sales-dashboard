import { createContext, useContext, useState } from "react"
import { tenants } from "../data/tenants"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [tenantId, setTenantId] = useState("orgA")
  const [role, setRole] = useState("Admin")

  const tenant = tenants[tenantId]

  const switchTenant = (id) => {
    setTenantId(id)
  }

  const switchRole = (role) => {
    setRole(role)
  }

  return (
    <AuthContext.Provider
      value={{
        tenant,
        tenantId,
        role,
        switchTenant,
        switchRole
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
