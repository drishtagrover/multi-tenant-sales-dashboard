import { useAuth } from "../context/AuthContext"

function Settings() {
  const { tenant, role } = useAuth()

  if (role !== "Admin") {
    return null
  }

  return (
    <div>
      <h2 style={{ marginBottom: "16px" }}>Settings</h2>

      <div
        style={{
          background: "#ffffff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
          marginBottom: "16px"
        }}
      >
        <h4 style={{ marginTop: 0 }}>Organization Details</h4>

        <SettingRow label="Organization Name" value={tenant.name} />
        <SettingRow label="Tenant ID" value={tenant.id} />
      </div>

      <div
        style={{
          background: "#ffffff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
        }}
      >
        <h4 style={{ marginTop: 0 }}>Permissions</h4>

        <SettingRow label="Admin Access" value="Full Access" />
        <SettingRow label="Agent Access" value="View Only" />
      </div>
    </div>
  )
}

/*Reusable Row*/

function SettingRow({ label, value }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 0",
        borderBottom: "1px solid #e5e7eb",
        fontSize: "14px"
      }}
    >
      <span style={{ color: "#64748b" }}>{label}</span>
      <strong>{value}</strong>
    </div>
  )
}

export default Settings
