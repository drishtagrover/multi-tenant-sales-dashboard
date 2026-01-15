import { useAuth } from "../../context/AuthContext"

function CallLogsList() {
  const { tenant } = useAuth()
  const calls = tenant?.calls || []

  return (
    <div
      style={{
        background: "#ffffff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "16px" }}>
        <h3 style={{ margin: 0 }}>Call Logs</h3>
        <p style={{ margin: 0, color: "#64748b", fontSize: "14px" }}>
          Recent calls for this tenant
        </p>
      </div>

      {/* Table */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse"
        }}
      >
        <thead>
          <tr>
            <th style={thStyle}>Lead Name</th>
            <th style={thStyle}>Date & Time</th>
            <th style={thStyle}>Duration</th>
            <th style={thStyle}>Outcome</th>
          </tr>
        </thead>

        <tbody>
          {calls.length === 0 ? (
            <tr>
              <td colSpan="4" style={emptyStyle}>
                No call logs available
              </td>
            </tr>
          ) : (
            calls.map((call) => (
              <tr key={call.id}>
                <td style={tdStyle}>{call.leadName}</td>
                <td style={tdStyle}>{call.time}</td>
                <td style={tdStyle}>{call.duration}</td>
                <td style={tdStyle}>
                  <span style={getOutcomeBadge(call.outcome)}>
                    {call.outcome}
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}


const thStyle = {
  textAlign: "left",
  padding: "10px",
  background: "#f8fafc",
  borderBottom: "1px solid #e5e7eb",
  fontSize: "13px",
  color: "#475569"
}

const tdStyle = {
  padding: "10px",
  borderBottom: "1px solid #e5e7eb",
  fontSize: "14px"
}

const emptyStyle = {
  padding: "20px",
  textAlign: "center",
  color: "#64748b",
  fontSize: "14px"
}

const getOutcomeBadge = (outcome) => ({
  padding: "4px 10px",
  borderRadius: "999px",
  fontSize: "12px",
  fontWeight: 500,
  background:
    outcome === "Converted"
      ? "#dcfce7"
      : outcome === "Interested"
      ? "#fef3c7"
      : "#e0e7ff",
  color:
    outcome === "Converted"
      ? "#166534"
      : outcome === "Interested"
      ? "#92400e"
      : "#3730a3"
})

export default CallLogsList
