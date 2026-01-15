import { useState, useEffect } from "react"
import { useAuth } from "../../context/AuthContext"

function LeadsList() {
  const { tenant, role } = useAuth()
  console.log("TENANT OBJECT:", tenant)
  const [statusFilter, setStatusFilter] = useState("All")
  const [leads, setLeads] = useState([])

  useEffect(() => {
    setLeads(tenant.leads)
  }, [tenant])

 

  const filteredLeads =
    statusFilter === "All"
      ? leads
      : leads.filter((lead) => lead.status === statusFilter)

  return (
    <div>
      <h3>Leads</h3>

      <label>
        Filter by status:{" "}
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Converted">Converted</option>
        </select>
      </label>

      <table border="1" cellPadding="8" style={{ marginTop: "12px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {filteredLeads.length === 0 ? (
            <tr>
              <td colSpan="3">No leads found</td>
            </tr>
          ) : (
            filteredLeads.map((lead) => (
              <tr key={lead.id}>
                <td>{lead.name}</td>
                <td>{lead.phone}</td>
                <td>
                  {role === "Admin" ? (
                    <select
                      value={lead.status}
                      onChange={(e) => {
                        setLeads((prev) =>
                          prev.map((l) =>
                            l.id === lead.id
                              ? { ...l, status: e.target.value }
                              : l
                          )
                        )
                      }}
                    >
                      <option value="New">New</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Converted">Converted</option>
                    </select>
                  ) : (
                    lead.status
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

export default LeadsList
