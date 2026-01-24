---
slug: what-is-a-dual-license-anyway
title: What is a Dual License Anyway?
authors: [team]
tags: [dual license]
hide_table_of_contents: false
---

Make it easier for users and remove the word “Dual” from your software project notice vocabulary.

![dual_licensing-1](dual_licensing-1.png)

“This project is licensed under a Dual License of BSD and GPL.”

What does “Dual” mean in this context? In a practical sense, it means you have to dig more deeply into the licensing for that project to figure out what this license statement means:

- Both the BSD AND GPL apply? (conjunctive)
- Or choose between BSD OR GPL? (disjunctive)
- Which version of BSD?
- And which version of GPL?

Typically, but not always, this example statement means that you have a choice of BSD-3-Clause OR GPL 2.0 or later because these are the most common versions of those licenses. As the consumer of the software project you must conclude that interpretation and choice, usually after exploring the other license notices in the project files. You must declare that choice in the attribution of your project(s) or product(s) that use that software.

But doesn’t “Dual” mean “consisting of two parts”? Well, yes, that is true in standard English usage, but in the historical practice of many open source projects, this term is ambiguously applied. This wreaks havoc on license detection programs, and creates more busy-work for anyone wanting to use the “Dual-licensed” software.

If you are publishing an open source project, you may of course declare that the project code is under one license, and the project documentation is under another license, and the sample files are under another license. That makes perfect sense, especially if you do not use the word “Dual”. In fact, it would be best to remove the word “Dual” from your project notice vocabulary altogether. If you are publishing a project under a choice of licenses, you should probably indicate what the default license is in case the user of your software does not understand that a stated license conclusion is necessary, and you should avoid referring to that choice as a “Dual” license.

The best solution is to use a standard license expression which explicitly states whether the relationship between two licenses is “AND” or “OR”. The most common syntax for license expressions is from the SPDX v2.3 specification. There are many examples from the [SPDX license list](https://spdx.org/licenses/) or the [ScanCode LicenseDB](https://scancode-licensedb.aboutcode.org/index.html). License identification precision provides the clarity that potential users of your software need to be compliant with the licensing terms.

## Dual FOSS/Proprietary Licenses

An increasingly common occurrence in software project licensing is the statement that a project is dual-licensed under a FOSS license and a commercial alternative. This usually means there is a choice between the two licenses, and again the word “dual” is misleading because it makes no sense for both the FOSS license (especially a copyleft license) and the commercial alternative to apply simultaneously and equally. Also note that in such cases, the commercial alternative is often a requirement if the usage of the software goes beyond certain restrictions (e.g. number of users, deployment on a public network, embedding in a commercial product, etc.). Any license notices of this kind should be carefully reviewed to avoid legal risks.

## Recommended Approach

The best practice for a multiple license use case is to state a valid license expression using the correct operator and standard license identifiers. Some examples:

- /* SPDX-License-Identifier: BSD-3-Clause OR GPL-2.0-or-later */

- /* SPDX-License-Identifier: BSD-3-Clause AND MIT */

- /* SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-scancode-commercial-license */

You can, of course, provide additional explanatory text, remembering always to avoid the inappropriate use of the word “dual”.

More details about license expression syntax are provided in [SPDX’s docs](https://spdx.github.io/spdx-spec/v2.3/SPDX-license-expressions/).

Additional Reading

The following links provide varying perspectives on “dual” licensing:

- [Dual Licensing: Having Your Cake and Eating It Too](https://www.linuxinsider.com/story/dual-licensing-having-your-cake-and-eating-it-too-38172.html)
- [What’s up with these new not-open source licenses? | The GitHub Blog](https://github.blog/2021-03-18-whats-up-with-these-new-not-open-source-licenses/)
