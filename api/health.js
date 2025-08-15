export default function handler(req, res) {
  res.status(200).json({
    status: 'online',
    service: 'Ultron API',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    version: '1.0.0'
  });
}
