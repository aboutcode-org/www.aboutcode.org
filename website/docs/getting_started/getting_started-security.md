# Security
Software security is a very broad domain. The AboutCode commmunity has focused
on the identification, reporting, triage and remediation of open source 
vulnerabilities because this fits with our core expertise in software
identification and SCA (Software Composition Analysis). We are, however, 
expanding our scope for software security with the recent addition of the 
**atom** and **chen** project to the AboutCode community, but most of our tools
 and data are related to software vulnerabilities. See also [atom and chen join AboutCode](https://aboutcode-org.github.io/www.aboutcode.org/blog/atom-chen-aboutcode).

Note that AboutCode tools and data for software vulnerabilities expect that 
software will be identified with a [PURL (Package-URL)](https://package-url.github.io/www.packageurl.org/docs/purl/purl-spec-introduction).

## Identify vulnerabilities
For the basic use case of identifying software vulnerabilities, AboutCode 
offers the VulnerableCode tools and data, the DejaCode application, ScanCode 
tools, and the PURL standard.

- [VulnerableCode](https://vulnerablecode.readthedocs.io/en/latest/) provides
a robust set of tools to build and access a database of known software 
vulnerabilities from upstream and downstream public data sources. The 
VulnerableCode tools collect, aggregate and correlated vulnerabilities and 
maps them to package versions using PURL. 

    AboutCode hosts the public [VCIO](https://public2.vulnerablecode.io/) 
    database with a Web UI for queries and an API. Access is free but there 
    are some restrictions on the frequency and volume of API requests. You can
     use the VulnerableCode tools to build, maintain and 
    use (Web UI and APIs) your own private VCIO database.

- [DejaCode](https://dejacode.readthedocs.io/en/latest/) integrates software
vulnerability information from **VulnerableCode** and displays it for Products
(inventory or SBOM items), Components and Packages. In each case there is a 
button to display only items with a known vulnerability. For each vulnerable 
Package DejaCode shows you the vulnerabilities that affect that
Package along with information about Exploitability, Severity, Risk and 
Package version(s) that fix the Vulnerability. DejaCode also provides reports
with this information.

- [ScanCode.io](https://scancodeio.readthedocs.io/en/latest/) After you run a 
scan that identifies software Package you can run the add-on pipeline 
`find_vulnerabilities` to add vulnerability data from **VulnerableCode** to 
your Scan project. Then you can view the vulnerability data in the UI, export
it (JSON, XLSX, SPDX, CDX and other formats) or pull it from the API.

## Manage risk with aggregated vulnerability data 
[VulnerableCode](https://vulnerablecode.readthedocs.io/en/latest/) provides
tools to create and maintain a database of known software vulnerabilities
from public sources up and down the software supply chain. When evaluating the
vulnerabilities for a package (or a single vulnerability) you will need 
information from upstream FOSS projects and downstream projects and distros 
that include software from upstream. For example, there may be significant 
differences in [CVSS](https://www.first.org/cvss/) Severity scores provided by
different organizations With a **VulnerableCode** database like 
[VCIO](https://public2.vulnerablecode.io/) you can see the aggregated Severity
 information for each vulnerability in one place or pull it with the API for 
use in other systems.

## Triage vulnerabilities
One of the most complex tasks for managing vulnerabilities is to determine
which vulnerabilities require your attention and in which order. [VulnerableCode](https://vulnerablecode.readthedocs.io/en/latest/) provides three key metrics for each 
vulnerability to assist with this triage:
- _Exploitability_: Exploitability indicates the likelihood that a 
vulnerability in a software package could be used by malicious actors to 
compromise systems, applications, or networks. This metric is determined 
automatically based on the discovery of known exploits.
- _Weighted Severity_: Weighted severity is the highest value calculated by 
multiplying each severity report by its corresponding weight, divided by 10.
- _Risk_: Risk expressed as a number ranging from 0 to 10. It is calculated by
 multiplying the weighted severity and exploitability values, capped at a 
maximum of 10.

## Report exploitability with VEX
A key new regulatory requirement for software publishers is to provide 
documentation about whether a vulnerability affects a product or component. 
The primary format for this information is VEX (Vulnerability Exploitability 
eXchange). VEX focuses on whether a vulnerability in a component can actually 
be exploited in a specific context. 

There are several evolving VEX specifications including:
- [CSAF](https://docs.oasis-open.org/csaf/csaf/v2.0/os/csaf-v2.0-os.html) from
 OASIS Open
- [CycloneDX VEX](https://cyclonedx.org/capabilities/vex/) from the CycloneDX 
project
- [OpenVEX](https://openssf.org/projects/openvex/) from OpenSSF. It is not 
clear which of these specifications will become primary, but they all cover 
similar data.

[DejaCode](https://dejacode.readthedocs.io/en/latest/) provides a Product 
(inventory or SBOM) feature to record the essential VEX data such as:
- Status; The current state of an occurrence of a vulnerability, after 
automated or manual analysis.
- Justification: The rationale for why the impact analysis state was asserted.
- Responses: Can Not Fix, Rollback, Update, Will Not Fix, Workaround Available
- Reach: Whether the vulnerability is reachable in the context of a package in
 the product being analyzed.

From **DejaCode** you can easily xport VEX information in CSAF, CycloneDX or 
OpenVEX format.



