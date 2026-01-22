# Software identification
One of the biggest and least appreciated challenges for managing open source
and other third-party software is to identify software that you use in a 
standard way that will be recognized by your suppliers, customers and staff. 
This challenge is particularly painful in the domain of software supply chain
security where all participants need to use a common software identifier in 
order to accomplish any other tasks.

Commercial software suppliers, of course, each have a set of software 
identifiers for their own products but these only work within their 
particular customer base. There have been two prominent attempts to 
standardize software identifiers for proprietary software - CPE (Common 
Platform Ennumeration) and SWID (SoftWare IDentification). Neither has been
successful and neither was suitable for open source software which now 
represents approximately 80% of software in use according to most surveys.

The AboutCode team identified this problem in 2018 in the context of working
on our ScanCode and VulnerableCode projects. The solution was and is the PURL (Package-URL) specification which has become the most widely used software
identifier for open source software. PURL is now an Ecma standard - [ECMA-427](https://ecma-tc54.github.io/ECMA-427/), and it is on a fast track to become 
an ISO standard. 

Our team also identified a related problem - after you have a standard way
to identify software packages, what is a standard way to compare software
package versions to determine whether a reported vulnerability affects the 
version that you use. Our solution is the VERS (VErsion Range Specifier) 
specification which will be submitted to Ecma as a standard in 2026.

See https://package-url.github.io/www.packageurl.org/ for more 
information about PURL and VERS.

## Identify software packages and components
For the basic use case of identifying software packages and components, 
AboutCode offers the DejaCode and ScanCode tools, the PURLDB database and the PURL standard. 

- [DejaCode](https://dejacode.readthedocs.io/en/latest/) is an enterprise-level
application to automate managing your software assets including license 
compliance and security vulnerabilities. DejaCode embeds ScanCode.io for core
scanning functions and uses VulnerableCode data for vulnerability reporting. DejaCode includes a database of licenses, components and packages, and SBOMs. 
It is also where you can set and apply your license and vulnerability risk policies. DejaCode is designed for integration with GitHub, GitLab, JIRA and other software development platforms. You normally run DejaCode as a Docker
container.

- [ScanCode.io](https://scancodeio.readthedocs.io/en/latest/) is an 
application to scan codebases, packages, containers or other software collections. ScanCode.io uses a specific pipeline for scanning or analyzing 
each software target and provides a database with UI and API access to your scans. ScanCode.io is usually a good place to get started in the AboutCode ecosystem. You normally run ScanCode.io as a Docker container. 

- [ScanCode Toolkit](https://scancode-toolkit.readthedocs.io/en/stable/) is a 
library (and command line utility) that provides the scanning engine for 
ScanCode.io. Its primary functions are to identify:
  - Software licenses based on matching license notices and texts to the 
[ScanCode LicenseDB](https://scancode-licensedb.aboutcode.org/help.html)
  - Software origin based on copyright or author notices, email addresses, URLs and other clues
  - Software codebase structure including directories and files with exentensive file information such as size, MIME type, file type, programming language,
  checksums (MD5,SHA1,SHA256,SHA512) and more

- [PURLDB](https://purldb.readthedocs.io/en/stable/) provides tools to create and manage a database of package metadata keyed by PURL. You can use PURLDB 
data via API to enrich your package and SBOM data in DejaCode, ScanCode.io., 
or your own application. The AboutCode team also currently hosts a public [PURLDB](https://public.purldb.io/api/) service with REST API.


## Identify software dependencies

## Consume or produce SBOMs

## Analyze containers 

## Match binaries to sources

