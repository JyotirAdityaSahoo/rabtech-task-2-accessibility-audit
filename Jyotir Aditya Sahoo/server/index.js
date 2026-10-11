// Minimal server boundary skeleton.
// Replace with Express/Fastify/etc. for the production implementation.

const services = [
  {
    id: "resident-certificate",
    name: "Resident Certificate",
    department: "Revenue & Disaster Management",
    status: "available"
  },
  {
    id: "income-certificate",
    name: "Income Certificate",
    department: "Revenue & Disaster Management",
    status: "available"
  }
];

console.log("Server skeleton ready.");
console.log(JSON.stringify({ services }, null, 2));
