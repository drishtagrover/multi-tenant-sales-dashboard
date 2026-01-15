import { useAuth } from "../../context/AuthContext"

function CallLogsList() {
  const { tenant } = useAuth()
  const calls = tenant.calls

  return (
    <div>
      <h3>Call Logs</h3>

      <table border="1" cellPadding="8" style={{ marginTop: "12px" }}>
        <thead>
          <tr>
            <th>Lead Name</th>
            <th>Date & Time</th>
            <th>Duration</th>
            <th>Outcome</th>
          </tr>
        </thead>

        <tbody>
          {calls.length === 0 ? (
            <tr>
              <td colSpan="4">No call logs available</td>
            </tr>
          ) : (
            calls.map((call) => (
              <tr key={call.id}>
                <td>{call.leadName}</td>
                <td>{call.time}</td>
                <td>{call.duration}</td>
                <td>{call.outcome}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default CallLogsList
