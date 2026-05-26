# CRAVEX

The EU’s Cyber Resilience Act (CRA) aims to enhance the cybersecurity of 
products with digital elements, ensuring that hardware and software sold in 
the EU are designed with strong security measures. It stipulates that manufacturers remain responsible for cybersecurity throughout a product lifecycle.

The AboutCode [CRAVEX](https://nlnet.nl/project/CRAVEX/#) (Cyber Resilience Application for Vulnerability Exploitability Exchange) project was designed
to make it easier for any organization to efficiently comply with the emerging CRA and other regulatory requirements and improve its overall security posture. A primary goal for **CRAVEX** is to provide an open source
solution for small- and medium-size enterprises (SMEs).

## Key CRA Provisions
At a summary level, the key CRA provisions include:

- **Cybersecurity**: Manufacturers must ensure that products with digital elements meet essential cybersecurity requirements, including risk 
assessments, security-by-design practices, and vulnerability management.
- **Vulnerability Reporting**: Manufacturers are required to report any actively exploited vulnerabilities to the European Union Agency for Cybersecurity (ENISA) within 24 hours.
- **Security Updates**: Manufacturers must provide timely and effective security updates to address vulnerabilities.
- **Documentation**: Manufacturers must provide documentation and certification to demonstrate compliance with CRA requirements.
- **Enforcement**: The CRA includes penalties for non-compliance.

The most challenging CRA requirements for most organizations are those for
timely reporting and remediation of actively exploited vulnerabilities in a product. At a minimum this will require organizations to:

- Create and maintain an accurate and current SBOM for each digital product (by version)
- Rapidly create and publish a VEX (Vulnerability Exploitability eXchange) document for any actively exploited vulnerability that affects a product

The AboutCode focus for CRA compliance functions and features is the [**DejaCode**](https://dejacode.readthedocs.io/en/latest/reference-3-cravex.html) application. 

## Software Bills of Materials (SBOMs)
Most modern product SBOMs are composed of some combination of:

- First-party code: Software created and owned by your organization.
- Open source code: Software acquired from an open source project and subject
to an open source license.
- Third-party proprietary code: Software acquired from a supplier that is subject to a proprietary license. In most cases today this code will include embedded open source software or have dependencies on open source software.

_NB: The CRA regulations apply to any code that you distribute. They do not normally apply to tools and other software for internal use-only._

In recent history, the focus for SBOMs has been open source software, but an accurate SBOM must include all first-party and third-party code in a product. 
This means that you need to request accurate and current SBOMs from your
proprietary software suppliers and have tools that enable you to import and manage third-party SBOMs into your SBOM management system. 

[DejaCode](https://dejacode.readthedocs.io/en/latest/) provides robust features to import, edit and export SBOMs in CycloneDX (versions 1.6, 1.5 or 1.4) or SPDX format (version 2.3). For CycloneDX you also have an option to export a combined SBOM + VEX document. 
- SBOM data are stored in **DejaCode** Products. 
- You can also import scan data from [**ScanCode.io**](https://scancodeio.readthedocs.io/en/latest/) to create packages in **DejaCode**, enrich the package metadata, and assign them to a Product.
- The primary software identifier in **DejaCode** is [PURL (Package-URL)](https://package-url.github.io/www.packageurl.org/docs/purl/purl-spec-introduction). 
- You can experiment with the Product/SBOM features with a free [DejaCode trial account](https://public.dejacode.com/account/register/)

As you change software in your products you need to update the corresponding Product in **DejaCode** for each Product or SBOM version.

## Vulnerability identification
After you have created an SBOM for each Product in [DejaCode](https://dejacode.readthedocs.io/en/latest/) you can quickly identify current applicable vulnerabilities for a Product using the dynamic **DejaCode** integration with [**VulnerableCode**](https://vulnerablecode.readthedocs.io/en/latest/). **DejaCode** displays vulnerabilities for Products, Components and Packages. In each case there is an option to display only items with a known vulnerability. DejaCode also provides reports with this information.

## Vulnerability analysis and triage
One of the most complex tasks for managing vulnerabilities is to determine
which vulnerabilities require your attention and in which order. For each vulnerability **DejaCode** provides three key metrics to support your analysis and triage:
- _Exploitability_: Exploitability indicates the likelihood that a 
vulnerability in a software package could be used by malicious actors to 
compromise systems, applications, or networks. This metric is determined 
automatically based on the discovery of known exploits.
- _Weighted Severity_: Weighted severity is the highest value calculated by 
multiplying each severity report by its corresponding weight, divided by 10.
- _Risk_: Risk expressed as a number ranging from 0 to 10. It is calculated by
 multiplying the weighted severity and exploitability values, capped at a 
maximum of 10.

**DejaCode** also shows you known Package version(s) that fix a vulnerability.

## VEX reporting
The standard format for reporting your analysis of exploitable vulnerabilities is VEX (Vulnerability Exploitability eXchange). There are currently three evolving VEX specifications:
- [CSAF](https://docs.oasis-open.org/csaf/csaf/v2.0/os/csaf-v2.0-os.html) from
 OASIS Open
- [CycloneDX VEX](https://cyclonedx.org/capabilities/vex/) from the CycloneDX 
project
- [OpenVEX](https://openssf.org/projects/openvex/) from OpenSSF

It is not clear which of these specifications will become primary, but they all cover similar data.

**DejaCode** provides a Product feature to record essential VEX data such as:
- Status: The current state of an occurrence of a vulnerability, after 
automated or manual analysis.
- Justification: The rationale for why the impact analysis state was asserted.
- Responses: Can Not Fix, Rollback, Update, Will Not Fix, Workaround Available
- Reach: Whether the vulnerability is reachable in the context of a package in
the product being analyzed.

You can easily export VEX information from **DejaCode** in CSAF, CycloneDX or 
OpenVEX format.

## Integration with software development tools
A key requirement for efficient compliance with CRA or similar regulations is integration with your software development tools. 

- **DejaCode** provides built-in integration with issue trackers: Forgejo, GitHub, GitLab, JIRA, SourceHut. This is a two-way integration where your issue tracker is primary and the issue data is shown in **DejaCode** Requests.

- **ScanCode.io** provides built-in integration with:
   - CI/CD tools: GitHub Actions, GitLab, and Jenkins. This integration enables you to include **ScanCode.io** scans in your CI/CD pipelines or based on an event such as a commit.
   - SCA tools: Anchore, cyclonedx-gomod, OSS Review Toolkit (ORT), OSV scanner, OWASP depscan, Microsoft sbom-tool, and Trivy. The primary functionality is to generate a CycloneDX SBOM from the SCA tool and load the SBOM into **ScanCode.io**.

_NB: All integrations also offer a "generic" template that you can adapt for integration with other similar tools._

## Coming soon
We are working on a new [CRAVEX 2 Code Reachability](https://nlnet.nl/project/CRAVEX2-codereachability/) project to make vulnerability triage faster and more efficient. The two major enhancements are:

- A rule-based system to automatically filter or rerank vulnerabilities in the context of a managed application, system or device. This will integrate the emerging SSVC scoring for decision tree-driven automation.

- Vulnerable code "reachability" to determine if the code impacted by a CVE is present, used and exploitable in a product. This will integrate and extend the features of other FOSS projects such as [BANG](https://github.com/armijnhemel/binaryanalysis-ng). 

The **CRAVEX** projects are funded through the [NGI0 Entrust Fund](https://nlnet.nl/NGI0/), a fund established by NLnet with financial support from the European Commission's Next Generation Internet programme, under the aegis of DG Communications Networks, Content and Technology under grant agreement No 101069594.
