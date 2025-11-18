# 🛠️ Developer Utils Toolkit

A collection of lightweight utilities and automation scripts to streamline your development workflow.

## 📋 Available Tools

### 🔄 Log Rotation (`log-rotate.js`)
Automated log file management utility that monitors and rotates log files when they exceed size limits.

**Usage:**
```bash
npm run rotate
```

**Features:**
- Monitors multiple log files simultaneously
- Configurable size thresholds
- Automatic compression and archiving
- Detailed execution reports

### 🔧 Configuration Validator (`config-check.js`)
Validates application configuration files and identifies potential issues.

**Usage:**
```bash
npm run check
```

**Features:**
- Multi-format support (JSON, YAML, ENV)
- Issue detection and recommendations
- Health score reporting
- Warning and error classification

### 🏥 Health Monitor (`health-monitor.js`)
System health monitoring utility that checks service availability and performance.

**Usage:**
```bash
npm run monitor
```

**Features:**
- Service availability checks
- Response time monitoring
- Status categorization (healthy/degraded/error)
- Overall health percentage calculation

### 🚀 Run All Tools
Execute all utilities in sequence:

```bash
npm run all
```

## 📊 Automation Status

| Tool | Last Run | Status | Issues |
|------|----------|--------|--------|
| Log Rotate | 2025-11-18 12:38:15 | ✅ Success | 1 |
| Config Check | 2025-11-18 15:27:35 | 🟡 Degraded | 2 |
| Health Monitor | 2025-11-18 12:05:30 | ✅ Success | 2 |

*Last updated: 2025-11-18 15:27:35 UTC*

## 🔧 Installation

```bash
# Clone the repository
git clone https://github.com/username/dev-utils-toolkit.git

# Navigate to project directory
cd dev-utils-toolkit

# Install dependencies (if any)
npm install

# Run a specific tool
npm run rotate
```

## 📈 Recent Activity

- **2025-01-13**: Enhanced health monitoring with degraded status detection
- **2025-01-12**: Added configuration validation warnings
- **2025-01-11**: Improved log rotation compression efficiency
- **2025-01-10**: Fixed timestamp formatting in all utilities

## 🤝 Contributing

Feel free to submit issues and pull requests to improve these utilities!

## 📄 License

MIT License - see LICENSE file for details.