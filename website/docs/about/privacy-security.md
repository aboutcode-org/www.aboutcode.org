---
sidebar_position: 6
title: Privacy & Security
---

# Privacy & Security

## Does ScanCode Work Completely Offline?

**Yes.** ScanCode Toolkit operates completely offline and does NOT send signatures or source code to any third-party systems. Your code remains on-premise at all times.

### Key Points

- ✅ **No Data Transmission** - ScanCode does not "phone home" or send your code anywhere
- ✅ **Air-Gapped Compatible** - Can run in completely isolated networks
- ✅ **Local Processing** - All scanning happens on your local machine
- ✅ **On-Premise Guarantee** - Source code never leaves your environment

## Optional Network Access

### Version Check (Optional)

ScanCode Toolkit has an **optional** feature that queries `pypi.org` to check for newer versions. This can be disabled.

**To disable version checking:**

```bash
scancode --no-check-for-updates [other options] <input>
```

This ensures zero network activity during scans.

## Air-Gapped Deployments

### ScanCode Toolkit

ScanCode Toolkit works completely air-gapped out of the box. Simply:

1. Install ScanCode on your on-premise system
2. Run scans with `--no-check-for-updates` flag
3. No internet connection required

### ScanCode.io

**ScanCode.io** scans code locally on your installation, completely air-gapped by default.

The default installation comes pre-configured for testing with public APIs:
- [VulnerableCode Public API](https://public.vulnerablecode.io/)
- [PurlDB and MatchCode Public API](https://public.purldb.io/api/)

**For air-gapped deployments:**

1. Install VulnerableCode and PurlDB locally
2. Configure ScanCode.io to use your local instances
3. Disable public API access in settings

### VulnerableCode (Local Deployment)

VulnerableCode continuously imports data from vulnerability databases and package registries.

**Air-gapped setup options:**

1. **No Importers** - Disable data importers (no external data, minimal functionality)
2. **Database Sync** - Import database from a network-connected system and transfer to air-gapped environment

**Steps for air-gapped sync:**

```bash
# On internet-connected system
# 1. Deploy VulnerableCode and run importers
# 2. Export database

# Transfer database backup to air-gapped network

# On air-gapped system
# 3. Import database backup
# 4. Use VulnerableCode without internet access
```

### PurlDB and MatchCode (Local Deployment)

PurlDB and MatchCode download packages from registries for fingerprinting to enable code matching.

**Air-gapped deployment:**

Similar to VulnerableCode, you can:
1. Sync package data from a network-connected environment
2. Transfer to your air-gapped network
3. Run matching operations locally

### DejaCode

DejaCode runs completely locally and integrates with:
- ScanCode.io (local installation)
- VulnerableCode (local installation)
- PurlDB (local installation)

Configure all integrations to point to your local deployments for full air-gapped operation.

## Summary

| Tool | Offline by Default | Air-Gapped Compatible | Notes |
|------|-------------------|----------------------|-------|
| **ScanCode Toolkit** | ✅ Yes | ✅ Yes | Use `--no-check-for-updates` flag |
| **ScanCode.io** | ✅ Yes | ✅ Yes | Configure local API endpoints |
| **VulnerableCode** | ⚠️ Requires data | ✅ Yes | Sync database from connected system |
| **PurlDB/MatchCode** | ⚠️ Requires data | ✅ Yes | Sync package data from connected system |
| **DejaCode** | ✅ Yes | ✅ Yes | Configure local integrations |

## Compliance & Security

### Data Privacy

- **Source code never leaves your infrastructure**
- No telemetry or analytics collection
- No cloud dependencies for core functionality
- Full control over all data processing

### Network Isolation

All AboutCode tools can operate in:
- Air-gapped environments
- Private networks
- Isolated subnets
- Offline systems

### Configuration for Maximum Security

For organizations with strict security requirements:

1. **Disable all external API calls**
2. **Run local instances of all services**
3. **Use `--no-check-for-updates` flag**
4. **Configure firewall rules to block outbound connections**
5. **Sync databases from a separate secured network**

## Frequently Asked Questions

### Q: Does ScanCode send my code to third parties?

**A: No.** ScanCode processes everything locally and never transmits your source code.

### Q: Can I use ScanCode without internet access?

**A: Yes.** ScanCode Toolkit works completely offline with the `--no-check-for-updates` flag.

### Q: What about vulnerability data?

**A: For air-gapped setups,** deploy VulnerableCode locally and sync the database from a network-connected system periodically.

### Q: Do I need to configure anything for offline use?

**A: For ScanCode Toolkit, no additional configuration needed.** Just use the `--no-check-for-updates` flag. For other tools, configure local API endpoints.

### Q: How do I keep data current in air-gapped environments?

**A: Use database backups.** Export data from a network-connected instance and import to your air-gapped deployment.

## Additional Resources

- [ScanCode Toolkit Documentation](https://scancode-toolkit.readthedocs.io/)
- [ScanCode.io Documentation](https://scancodeio.readthedocs.io/)
- [VulnerableCode Documentation](https://vulnerablecode.readthedocs.io/)
- [Deployment Guides](https://aboutcode.readthedocs.io/)

## Need Help?

If you have questions about deploying AboutCode tools in secure or air-gapped environments:

- Join our [Slack](https://join.slack.com/t/aboutcode-org/shared_invite/zt-1paqwxccw-IuafuiAvYJFkTqGaZsC1og)
- Ask on [Gitter](https://app.gitter.im/#/room/#aboutcode-org_discuss:gitter.im)
- Open an [issue on GitHub](https://github.com/aboutcode-org/www.aboutcode.org/issues)
