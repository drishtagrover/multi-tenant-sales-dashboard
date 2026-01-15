import { useState, useEffect } from "react"
import { useAuth } from "../../context/AuthContext"

function LeadsList() {
  const { tenant, role } = useAuth()
  const [statusFilter, setStatusFilter] = useState("All")
  const [leads, setLeads] = useState([])

  useEffect(() => {
    if (tenant?.leads) {
      setLeads(tenant.leads)
      setStatusFilter("All")
    }
  }, [tenant])

  const filteredLeads =
    statusFilter === "All"
      ? leads
      : leads.filter((lead) => lead.status === statusFilter)

  const getBadgeStyle = (status) => ({
    padding: "4px 10px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: 500,
    background:
      status === "Converted"
        ? "#dcfce7"
        : status === "Contacted"
        ? "#fef3c7"
        : "#e0e7ff",
    color:
      status === "Converted"
        ? "#166534"
        : status === "Contacted"
        ? "#92400e"
        : "#3730a3"
  })

  return (
    <div
      style={{
        background: "#ffffff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px"
        }}
      >
        <h3 style={{ margin: 0 }}>Leads</h3>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          style={{
            padding: "6px 10px",
            borderRadius: "6px",
            border: "1px solid #d1d5db"
          }}
        >
          <option value="All">All Status</option>
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Converted">Converted</option>
        </select>
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
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Phone</th>
            <th style={thStyle}>Status</th>
          </tr>
        </thead>

        <tbody>
          {filteredLeads.length === 0 ? (
            <tr>
              <td colSpan="3" style={emptyStyle}>
                No leads found
              </td>
            </tr>
          ) : (
            filteredLeads.map((lead) => (
              <tr key={lead.id}>
                <td style={tdStyle}>{lead.name}</td>
                <td style={tdStyle}>{lead.phone}</td>
                <td style={tdStyle}>
                  {role === "Admin" ? (
                    <select
                      value={lead.status}
                      onChange={(e) =>
                        setLeads((prev) =>
                          prev.map((l) =>
                            l.id === lead.id
                              ? { ...l, status: e.target.value }
                              : l
                          )
                        )
                      }
                      style={{
                        padding: "4px 8px",
                        borderRadius: "6px",
                        border: "1px solid #d1d5db"
                      }}
                    >
                      <option value="New">New</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Converted">Converted</option>
                    </select>
                  ) : (
                    <span style={getBadgeStyle(lead.status)}>
                      {lead.status}
                    </span>
                  )}
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

export default LeadsList
