const logs = [];

export function logEvent(type, details) {
  const timestamp = new Date().toISOString();
  logs.push({ timestamp, type, details });
  // Could add extra logic like showing logs in UI or saving
}

export function getLogs() {
  return logs;
}
