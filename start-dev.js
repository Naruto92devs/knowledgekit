const { execSync } = require('child_process');
const ip = require('ip');

const localIp = ip.address();
const port = 3000;

console.log(`Starting Next.js dev server on http://${localIp}:${port}`);

execSync(`next dev --hostname 0.0.0.0 --port ${port}`, { stdio: 'inherit' });
