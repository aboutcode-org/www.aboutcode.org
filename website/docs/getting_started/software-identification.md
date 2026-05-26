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
Platform Enumeration) and SWID (SoftWare IDentification). Neither has been
successful and neither was suitable for open source software which now 
represents approximately 80% of software in use according to most surveys.

## Package-URL

The AboutCode team identified this problem in 2018 in the context of working
on our ScanCode and VulnerableCode projects. The solution was and is the PURL 
(Package-URL) specification which has become the most widely used software
identifier for open source software. PURL is now an Ecma standard - [ECMA-427]
(https://ecma-tc54.github.io/ECMA-427/), and it is on a fast track to become 
an ISO standard. 

Our team also identified a related problem - after you have a standard way
to identify software packages, what is a standard way to compare software
package versions to determine whether a reported vulnerability affects the 
version that you use? Our solution is the VERS (VErsion Range Specifier) 
specification which will be submitted to Ecma as a standard in 2026.

See the [Package-URL website](https://package-url.github.io/www.packageurl.org/) 
for more information about PURL and VERS.

See the Package-URL (PURL) projects section of the Home page for more 
information about AboutCode tools that provide PURL- and VERS-specific 
capabilities.

## Identify software packages and components
For the basic use case of identifying software packages and components, 
AboutCode offers the DejaCode application, ScanCode tools, the PURLDB database
 and the [PURL standard](https://package-url.github.io/www.packageurl.org/docs/purl/purl-spec-introduction). 

- [DejaCode](https://dejacode.readthedocs.io/en/latest/) is an enterprise-level
application to automate managing your software assets including license 
compliance and security vulnerabilities. DejaCode embeds ScanCode.io for core
scanning functions and uses VulnerableCode data for vulnerability reporting. 
DejaCode includes a database of licenses, components and packages, and SBOMs. 
It is also where you can set and apply your license and vulnerability risk 
policies. DejaCode is designed for integration with GitHub, GitLab, JIRA and 
other software development platforms. You normally run DejaCode as a Docker
container.

- [ScanCode.io](https://scancodeio.readthedocs.io/en/latest/) is an 
application to scan codebases, packages, containers or other software 
collections. ScanCode.io uses a specific pipeline for scanning or analyzing 
each software target and provides a database with UI and API access to your 
scans. ScanCode.io is usually a good place to get started in the AboutCode 
ecosystem. You normally run ScanCode.io as a Docker container. You can export
scan data in many formats including: JSON, XLSX, CycloneDX SBOM, SPDX SBOM, or  
an attribution-notice.

- [ScanCode Toolkit](https://scancode-toolkit.readthedocs.io/en/stable/) is a 
library (and command line utility) that provides the scanning engine for 
ScanCode.io. Its primary functions are to identify:
  - Software licenses based on matching license notices and texts to ScanCode
  license detection rules 
  - Software origin based on copyright or author notices, email addresses, 
  URLs and other clues
  - Software codebase structure including directories and files with extensive
   file information such as size, MIME type, file type, programming language,
  checksums (MD5,SHA1,SHA256,SHA512) and more

- [ScanCode LicenseDB](https://scancode-licensedb.aboutcode.org/index.html)
provides license text and metadata for 2,470 open source and other third-party 
licenses (and growing). Each license has an SPDX license identifier using the 
`Licenseref-scancode` namespace for licenses that are not yet included in the
SPDX License List.

- [PURLDB](https://purldb.readthedocs.io/en/stable/) provides tools to create 
and manage a database of package metadata keyed by PURL. You can use PURLDB 
data via API to enrich your package and SBOM data in DejaCode, ScanCode.io, 
or your own application. The AboutCode team also currently hosts a public 
[PURLDB](https://public.purldb.io/api/) service with REST API.

## Analyze containers 
The analysis of containers to produce inventories or SBOMs for the software
contents has become a very common and high priority task due to the high and 
increasing volume of software deployed on containers and the large volume of
software deployed in most containers. For this use case, the primary AboutCode
tools and data are:

- [ScanCode.io](https://scancodeio.readthedocs.io/en/latest/) provides the 
`analyze_docker_image` pipeline for container analysis. This will produce a
software inventory for Resources (all files), Packages (package metadata),
Dependencies (from package manifest files). The scan data also includes 
detailed information about image layers and their file content.

    If you conclude that the ScanCode.io inventory is accurate, you can 
    export the data in CycloneDX or SPDX SBOM format, or in JSON or XLSX format
    for use in another application. 

    If you need to update or enhance the scan data before you produce an SBOM, 
    DejaCode provides several options.
    
- [DejaCode](https://dejacode.readthedocs.io/en/latest/) is highly integrated
with ScanCode so that you can easily import ScanCode scan data from ScanCode
Toolkit or ScanCode.io into DejaCode as a **Product**. In DejaCode, you can 
then:
    
    - Enrich the package data from PURLDB
    - Apply your license usage policies
    - Apply your vulnerability risk policies
    - Update the Product package and component data as needed
    - Generate an SBOM in CycloneDX or SPDX format
    - Generate an attribution notice

- [container-inspector](https://github.com/aboutcode-org/container-inspector/blob/main/README.rst) 
is a static analysis tool to analyze the structure of software components in a
 container image. container-inspector is used in the ScanCode.io 
 `analyze_docker_image` pipeline for the layer analysis,
but you can also use it as a command line utility.

## Consume or produce SBOMs
The EU CRA (Cyber Resilience Act) and other regulatory initiatives have 
dramatically raised the importance of SBOMs (Software Bills of Materials) for 
compliance with security risk management laws and regulations. A key challenge
 in using SBOMs is the reliable identification of software packages so that 
 someone else in your software supply chain (upstream or downstream) will 
 recognize the same package identity. The PURL (Package-URL) standard 
 [ECMA-427](https://ecma-tc54.github.io/ECMA-427/) provides the most popular 
 solution.

**DejaCode** and **ScanCode.io** both provide full capabilities to import or 
export SBOMs in CycloneDX or SPDX format using PURL as the standard software 
identifier.

## Match binaries to source
One of the most difficult software identification tasks is to match the 
"binary" files that you distribute or deploy (on a device or the cloud) to the
 corresponding "source" files from your development/build systems. In the 
AboutCode community we consider binary-source matching to be a subset of the 
much larger domain of matching "deploy" files to "devel" files. This matching 
challenge includes:

- [ScanCode.io](https://scancodeio.readthedocs.io/en/latest/) supports 
"deploy-to-devel" matching with the `map_deploy_to_develop` pipeline.
This pipeline currently handles:

  - Matching Linux ELF, Windows, MacOS or Rust binaries to source
  - Matching Go binaries to source
  - Matching Java `jar` or `class` files to corresponding Java, Kotlin or 
  Scala source files
  - Matching minified JavaScript to corresponding TS or JS files
  - And other use cases

- [MatchCode Toolkit](https://github.com/aboutcode-org/matchcode-toolkit/blob/main/README.rst) 
is a Python library that provides the file and directory fingerprinting 
functionality for ScanCode Toolkit and ScanCode.io using the HaloHash 
algorithm. You can use the **MatchCode Toolkit** as a library.

- ScanCode uses several AboutCode libraries to analyze "deploy" files 
including:
   - [binary-inspector](https://github.com/aboutcode-org/binary-inspector/blob/main/README.rst) 
   extracts symbols from binaries in ELF, Mach-O, WinPe and
   other formats
   - [elf-inspector](https://github.com/aboutcode-org/elf-inspector/blob/main/README.rst) 
   collects data from ELF binaries
   - [go-inspector](https://github.com/aboutcode-org/go-inspector/blob/main/README.rst) 
   extracts dependencies and symbols from Go binaries
   - [rust-inspector](https://github.com/aboutcode-org/rust-inspector/blob/main/README.rst) 
   extracts dependencies and symbols from Rust binaries
   - [source-inspector](https://github.com/aboutcode-org/source-inspector/blob/main/README.rst) 
   collects code symbols, strings and comments from source files

   These are all Python utilities that can also be used independently.

## Identify software dependencies
There are many use cases that require the identification of package software 
dependencies including:
  - Identifying the licenses and vulnerabilities from package dependencies 
  before you select a software package to use it in your product or project.
   - Identifying package version dependencies before you upgrade a package.
   - Reporting package dependencies with their licenses or vulnerabilities in 
   an SBOM or other document.

**ScanCode Toolkit** and **ScanCode.io** both collect and report package
dependency data from package manifest and dependency lock files (e.g., 
package.json or package-lock.json for npm. The reported package data includes 
the scope of a dependency and related attributes (runtime, optional, pinned, 
direct). Scancode uses many AboutCode libraries and utilities to identify 
software package dependencies including:

- [dependency inspector](https://github.com/aboutcode-org/dependency-inspector/blob/main/README.rst) 
is a command line tool to generate package lockfiles and parsable package 
manifests to make it easy to collect resolved dependencies and accurate 
metadata for a project. It uses the standard package management tool for each 
package type or ecosystem.
- [nuget-inspector](https://github.com/aboutcode-org/nuget-inspector/blob/main/README.rst) 
is a utility to resolve .NET or nuget package dependencies independently of a 
dotnet SDK installed on the computer used to run the **nuget-inspector**.
- [python-inspector](https://github.com/aboutcode-org/python-inspector/blob/main/README.rst) 
is a utility to resolve PyPI package dependencies and query PyPI 
to enrich package metadata.








