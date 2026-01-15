import { useAuth } from "../context/AuthContext"

function Dashboard() {
  const { tenant } = useAuth()

  const totalLeads = tenant?.leads?.length || 0
  const convertedLeads =
    tenant?.leads?.filter((lead) => lead.status === "Converted").length || 0
  const totalCalls = tenant?.calls?.length || 0

  return (
    <div>
      <h2 style={{ marginBottom: "16px" }}>Overview</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "16px"
        }}
      >
        <SummaryCard
          title="Total Leads"
          value={totalLeads}
          color="#2563eb"
        />

        <SummaryCard
          title="Converted Leads"
          value={convertedLeads}
          color="#16a34a"
        />

        <SummaryCard
          title="Total Calls"
          value={totalCalls}
          color="#7c3aed"
        />
      </div>
    </div>
  )
}

/*Card Component*/

function SummaryCard({ title, value, color }) {
  return (
    <div
      style={{
        background: "#ffffff",
        padding: "20px",
        borderRadius: "14px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
      }}
    >
      <p style={{ margin: 0, color: "#64748b", fontSize: "14px" }}>
        {title}
      </p>
      <h2 style={{ margin: "8px 0 0", color }}>{value}</h2>
    </div>
  )
}

export default Dashboard
