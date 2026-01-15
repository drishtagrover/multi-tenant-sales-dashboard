export const tenants = {
  orgA: {
    id: "orgA",
    name: "Organization A",
    leads: [
      { id: 1, name: "Rahul Sharma", phone: "9876543210", status: "New" },
      { id: 2, name: "Anita Verma", phone: "9123456780", status: "Contacted" }
    ],
    calls: [
      {
        id: 1,
        leadName: "Rahul Sharma",
        time: "2025-01-10 10:30",
        duration: "5m",
        outcome: "Interested"
      }
    ]
  },

  orgB: {
    id: "orgB",
    name: "Organization B",
    leads: [
      { id: 1, name: "Aman Gupta", phone: "9000000000", status: "Converted" }
    ],
    calls: [
      {
        id: 1,
        leadName: "Aman Gupta",
        time: "2025-01-09 16:00",
        duration: "3m",
        outcome: "Converted"
      }
    ]
  }
}
