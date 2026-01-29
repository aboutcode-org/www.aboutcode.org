# Compliance
Compliance with licenses for third-party software is a very broad topic which was historically separated into two distinct domains:
- Licenses for commercial software products where a purchasing department or
similar organization has the primary responsiblity for negotiating license 
terms and conditions and an IT group has primary responsibility for tracking compliance with the license (e.g, number of seats, etc.). Commercial license
agreements are private (although the supplier may make standard license 
agreement text available publicly).
- Licenses for open source software where anyone in an organization can 
acquire and use the software. Someone using open source software may be 
required to agree to license terms when downloading the software, but there is normally no contract or other agreement recorded in the organization. Many organizations today have created an OSPO (Open Source Program Office) or 
similar group to track compliance with open source licenses. Open source licenses are public but there are typically no counter-signed license 
agreements.

In both domains legal staff have typically been responsible for setting 
policies and monitoring compliance with those policies.

For modern software development the boundary between commercial and open 
source licenses has become fuzzy with the increasing use of so-called "dual"
licenses (with a choice of commercial or open source license for the same software), "source available" licenses (which have characteristics of both
commercial and open source licenses) and various pseudo-open source licenses.
The reality for modern software development is that you need to identify the
specific license terms and conditions for any third-party software that you 
use and report it in SBOMs and other documentation

## Identify licenses for software and for data
The first task for license compliance is to identify and document all third-party software that you use - regardless of whether the usage is 
internal- only or external to your organization. 

ScanCode from AboutCode is the industry-leading software scanning tool
and it is embedded in many open source SCA (Software Composition Analysis) projects including [FOSSology](https://www.fossology.org/) and [ORT](https://oss-review-toolkit.org/ort/). ScanCode is also embedded in many commercial 
SCA products. There are three primary ScanCode projects:
- [ScanCode Toolkit](https://scancode-toolkit.readthedocs.io/en/stable/) is a set of code scanning tools that detect the origin (copyrights, authors, URLs, etc.) and license for any type of sofware. It uses a robust set of rules to detect more than 2,400 licenses and also clues to partial license text. You can use the Toolkit as a library or command line utility.
- [ScanCode.io](https://scancodeio.readthedocs.io/en/latest/) is an 
application (Web UI and API) where you can run standard or custom pipelines to
identify licenses, copyrights, packages, dependencies and vulnerabilities. It also has pipelines to match deployment "binaries" (compiled or interpreted) to 
corresponding source. You normally run ScanCode.io as a Docker container.
- [ScanCode LicenseDB](https://scancode-licensedb.aboutcode.org/) is the 
reference database for the 2400 licenses detected by ScanCode. It is limited 
to public license texts but not to only those licenses that meet the OSI definition of open source. ScanCode's objective is to identify licenses regardless of whether they are open source, proprietary or in-between. Each 
license in the LicenseDB is labelled with a License Category, such as 'Copyleft', 'Permissive' or 'Public Domain'.

There are also other [AboutCode projects](/#scancode-projects) that are components or extensions of ScanCode.

## Apply license usage policies
The only feasible way to automate license compliance for third-party software
is to define and apply license policies that are easy for anyone in your 
organization to recognize. 

[DejaCode](https://dejacode.readthedocs.io/en/latest/) incorporates a 
License Library including the current **ScanCode LicenseDB** data and any licenses that you choose to add to the Library. The **DejaCode** license 
management features include:
- _License conditions_ document standard license terms and conditions like specific attribution or redistribution obligations, patent-related conditions, warranty disclaimers, usage restrictions and more.
- _License profiles_ provide an easy way to group a set of commonly recurring
_License conditions_ for license review and assigning a usage policy.
- _License usage policies_ allow to define any number of license policies. A 
common approach is to start with a simple set of policies like 'Recommended', 'Approved', Restricted', and 'Prohibited'. Later you can refine your approach 
to define more granular policies, such as more granular policies for 
internal-only versus external use.

In **DejaCode** you can define _License usage policies_ at the component,
package, product-component or product-package levels. Both **ScanCode Toolkit** and **ScanCode.io** can apply license policies that you create in **DejaCode** (or some other system that can define comparable policies). A license policy 
is documented in a YAML file.

## Produce SBOMs 
Two primary use cases for an SBOM (Software Bill of Materials) are license 
compliance and vulnerability risk management. License compliance is a strong
use case for an SBOM because license data are much less volatile than 
vulnerability data. 

- [DejaCode](https://dejacode.readthedocs.io/en/latest/) provides features to
import, edit and export SBOMs in CycloneDX (versions 1.6, 1.5 or 1.4) or SPDX format (version 2.3). For CycloneDX you also have an option to export a 
combined SBOM + VEX document. SBOM data are stored in **DejaCode** Products.
A Product can be third-party or first-party (or second-party:customer). You
can define a Product at any level - e.g. some may be at a component or assembly level. You can experiment with the Product/SBOM features with a free [DejaCode trial account](https://public.dejacode.com/account/register/)
- [ScanCode.io](https://scancodeio.readthedocs.io/en/latest/) provides 
features to import and export SBOMs in CycloneDX (version 1.7, 1.6, 1.5 or 
1.4) or SPDX format (version 2.3 or 2.2). You can use the `'load_sbom` 
pipeline to load one more SBOMs as a Project and use `add-on` pipelines to 
enrich the data before you export it as an SBOM. You can also export Project data in JSON or XLSX format. If you need to edit an SBOM, you should use **DejaCode** instead of **ScanCode.io**

## Automate compliance
Two common and key obligations for compliance with open source software 
licenses are:

### Attribution
Almost all open source licenses, except for "Public Domain", require some form
of attribution in source code, derivative works or documentation (or all of these) if you distribute the open source software in your products or 
otherwise. It is usually simpler to provide attribution generously for any 
open source software that you distribute rather than try to track and comply with more granular attribution obligations. 

- [DejaCode](https://dejacode.readthedocs.io/en/latest/) provides a highly
customizable feature to generate an Attribution Notice. You can customize the
document format (Jinja2 template) for your organization and fine-tune the 
Notice contents when you generate a Notice for a Product.
- [ScanCode.io](https://scancodeio.readthedocs.io/en/latest/) can generate an
Attribution Notice for a Project using an HTML template that you can customize
directly in **ScanCode.io** settings.
- [AboutCode Toolkit](https://aboutcode.readthedocs.io/projects/aboutcode-toolkit/en/latest/) is a set of command line tools to document the provenance of your code and generate Attribution Notices. You can generate an Attribution Notice from ABOUT files (small YAML files) inside a codebase or 
from JSON, CSV or XLSX input files.

### Redistribution
Some open source licenses require that you offer to redistribute source code 
for an open source project - these are typically called "Copyleft" licenses.
If you distribute open source software under a Copyleft license there are two
common obligations:
- You make an offer in your Attribution Notice to redistribute the source code.
- You are prepared to redistribute that source code on request - this often
includes an obligation to provide instructions and tools to build from source.
You can use *DejaCode** to track Product packages or components that are subject to source redistribution obligations and their deployment/distribution
status. **DejaCode** also provides reports to create a source redistribution
checklist in case you receive a request for source.


