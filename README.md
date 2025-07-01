
# WPChamp – The Open Privacy Map for WordPress

**WPChamp** is an open-source project that maps how popular WordPress plugins, themes, and services collect and handle Personally Identifiable Information (PII) and Protected Health Information (PHI). Inspired by [OpenPIIMap](https://github.com/openpiimap), it provides a structured, machine-readable registry to support privacy compliance, anonymization, and data risk scoring.

## 🔍 What It Does

- Catalogs plugins and themes in YAML format, detailing their handling of PII (e.g., emails, IPs, names, user agents)
- Flags risky data practices and non-compliance with GDPR, HIPAA, CCPA, and other regulations
- Provides masking recommendations and legal citations
- Powers WPChamp tools: WordPress plugin scanner, online risk score generator, and Intelation integrations

## 📦 Use Cases

- **Site owners**: Know what PII your plugins collect and how to mitigate risks
- **Plugin developers**: Document privacy practices transparently
- **Compliance teams**: Automate checks for WordPress environments
- **Researchers**: Analyze ecosystem-wide PII trends

## 📁 Repository Structure

```
/data/
  plugins/
    contact-form-7.yaml
    woocommerce.yaml
  themes/
    astra.yaml
  hosts/
    wpengine.yaml

schemas/
  plugin.schema.yaml

country-index.json    # Optional, if geo-mapping is included
README.md
LICENSE
```

## 🤝 Contributing

We welcome contributions from developers, privacy advocates, and plugin authors. Check out [`CONTRIBUTING.md`](./CONTRIBUTING.md) for guidelines.

---

Want to scan your own WordPress site? [Coming soon at wpchamp.com](https://wpchamp.com)
