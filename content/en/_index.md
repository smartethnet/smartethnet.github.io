---
title: "Rustun - AI-Driven Intelligent VPN Tunnel"
description: "High-performance VPN tunnel implementation written in Rust, featuring automatic path selection and smart routing capabilities"
---

## 🌐 Rustun

**AI-Driven Intelligent VPN Tunnel**

An AI-driven intelligent VPN tunnel built with Rust, featuring automatic path selection and smart routing capabilities. **100% Open Source** under MIT License.

**Status: Beta** 🚧

## ✨ Key Features

- 🔓 **Open Source** - MIT License, completely free and transparent, code auditable
- ⚡ **Simple & Fast** - One command to start: `./client -s SERVER:8080 -i client-001`
- 🏢 **Multi-Tenant** - Cluster-based isolation for multiple teams or business units
- 🔐 **Secure Encryption** - ChaCha20-Poly1305 (default), AES-256-GCM, XOR/Plain options
- 🚀 **Dual-Path P2P** - IPv6 direct connection + STUN hole punching with auto-fallback to relay
- 🌐 **Smart Routing** - Automatic path selection: IPv6 (lowest latency) → STUN (NAT traversal) → Relay
- 🌍 **Cross-Platform** - Linux, macOS, Windows with pre-built binaries

## 🚀 Deployment Options

Rustun offers two deployment options to suit your needs:

### 🏠 Self-Hosted (Recommended for Full Control)

Deploy Rustun on your own infrastructure for complete control and privacy.

**Benefits:**
- ✅ Complete data sovereignty - your data stays on your servers
- ✅ Full customization - configure everything to your needs
- ✅ No vendor lock-in - 100% open source
- ✅ Cost-effective - no subscription fees
- ✅ Enterprise-ready - suitable for production environments

**Quick Start:**

```bash
# One-click server installation
curl -fsSL https://raw.githubusercontent.com/smartethnet/rustun/main/install.sh | sudo bash

# Configure
sudo vim /etc/rustun/server.toml
sudo vim /etc/rustun/routes.json

# Start service
sudo systemctl start rustun-server
sudo systemctl enable rustun-server
```

**Learn More:** [Self-Hosted Setup Guide](https://github.com/smartethnet/rustun#installation)

### ☁️ Official Service (Managed Solution)

Use our managed Rustun service with no server deployment required. Enjoy hassle-free deployment and professional support through visual management dashboard and AI-powered interactive management.

**Benefits:**
- ✅ No server deployment required - start using immediately
- ✅ Visual management dashboard - intuitive web interface for network management
- ✅ AI-powered interactive management - intelligent assistance for configuration and troubleshooting
- ✅ Zero maintenance - we handle server management
- ✅ Professional support - expert assistance when needed
- ✅ High availability - redundant infrastructure

**Get Started:** [Visit Official Service](https://rustun.beyondnetwork.cn)

## 🚀 Quick Start (Self-Hosted)

### One-Click Installation

**Server Installation:**

```bash
# Automatically installs the latest version
curl -fsSL https://raw.githubusercontent.com/smartethnet/rustun/main/install.sh | sudo bash

# Configure
sudo vim /etc/rustun/server.toml
sudo vim /etc/rustun/routes.json

# Start service
sudo systemctl start rustun-server
sudo systemctl enable rustun-server
```

### Download Pre-built Binaries

Download from [GitHub Releases](https://github.com/smartethnet/rustun/releases/latest)

**Available Platforms:**
- **Linux**: x86_64 (glibc/musl), ARM64 (glibc/musl)
- **macOS**: Intel (x86_64), Apple Silicon (ARM64)
- **Windows**: x86_64 (MSVC)

**Each release includes:**
- `server` - VPN server binary
- `client` - VPN client binary
- `server.toml.example` - Server configuration template
- `routes.json.example` - Routes configuration template

### Connect a Client

```bash
# Basic connection
sudo ./client -s SERVER_IP:8080 -i client-001

# With custom encryption
./client -s SERVER:8080 -i client-001 -c chacha20:my-secret-key

# Enable P2P mode
./client -s SERVER:8080 -i client-001 --enable-p2p
```

## 🚀 P2P Direct Connection

Enable P2P for direct peer-to-peer connections with automatic intelligent path selection:

```bash
./client -s SERVER:8080 -i client-001 --enable-p2p
```

### Connection Strategy

Rustun uses a three-tier intelligent routing strategy:

1. **🌐 IPv6 Direct Connection** (Primary Path)
   - Lowest latency, highest throughput
   - Works when both peers have global IPv6 addresses
   - Automatic connection establishment

2. **🔄 STUN Hole Punching** (Secondary Path)
   - NAT traversal for IPv4 networks
   - Works across most NAT types
   - Automatic fallback when IPv6 unavailable

3. **📡 Relay Mode** (Fallback)
   - Via server when P2P fails
   - Guaranteed connectivity
   - Automatic failover

## 🏢 Multi-Tenant Isolation

Rustun supports cluster-based multi-tenancy for complete network isolation between different teams or business units.

### How It Works

- Each client belongs to a **cluster**
- Clients can only communicate with peers in the same cluster
- Different clusters use separate IP ranges
- Perfect for isolating production, staging, and development environments

## 💼 Use Cases

Rustun is designed for various networking scenarios:

- **🏢 Remote Office Connectivity** - Connect multiple office locations with site-to-site VPN
- **👨‍💻 Secure Remote Work** - Enable secure remote access for employees working from home
- **🔀 Multi-Environment Isolation** - Separate networks for production, staging, and development
- **🤖 IoT Device Management** - Securely connect and manage IoT devices across locations
- **🎮 Gaming Server Network** - Low-latency network for game servers across regions
- **☁️ Hybrid Cloud Connectivity** - Connect on-premise infrastructure with cloud resources
- **🔐 Zero Trust Network** - Build a zero-trust network with peer isolation

## 🔓 Why Open Source?

Rustun is **100% open source** because we believe in:

- **Transparency** - Code is auditable, no hidden backdoors
- **Security** - Community review makes software more secure
- **Freedom** - No vendor lock-in, you own your infrastructure
- **Innovation** - Community contributions drive continuous improvement
- **Trust** - Open development builds user confidence

**View the source code:** [GitHub Repository](https://github.com/smartethnet/rustun)

## 📚 Documentation

For detailed documentation, visit:
- [GitHub README](https://github.com/smartethnet/rustun#readme)
- [Protocol Documentation](https://github.com/smartethnet/rustun/blob/main/PROTOCOL.md)
- [Build Guide](https://github.com/smartethnet/rustun/blob/main/BUILD.md)
- [Contributing Guide](https://github.com/smartethnet/rustun/blob/main/CONTRIBUTING.md)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](https://github.com/smartethnet/rustun/blob/main/CONTRIBUTING.md) for details.

## 📞 Contact

- Issues: [GitHub Issues](https://github.com/smartethnet/rustun/issues)
- Discussions: [GitHub Discussions](https://github.com/smartethnet/rustun/discussions)
- Official Service: [Visit Official Service](https://rustun.beyondnetwork.cn)

---

**Note**: This is an experimental project. Use at your own risk in production environments.
