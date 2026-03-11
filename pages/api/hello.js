// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    name: "Tarmac API",
    message: "Hello from the Tarmac API!",
    timestamp: new Date().toISOString(),
  });
}
