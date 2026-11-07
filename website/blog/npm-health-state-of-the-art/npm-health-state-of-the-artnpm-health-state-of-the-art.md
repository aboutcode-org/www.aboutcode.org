---
slug: npm-health-state-of-the-art
title: State of the art of project health metrics for npm packages
authors: [dicortazar,canasdiaz,adaaaam]
tags: [npm,health]
hide_table_of_contents: false
---

This document provides a framework for evaluating and understanding the health of open source projects. Given the ubiquity of open source components in modern software supply chains, it is increasingly important to find viable ways of measuring such health.

There are several open source initiatives looking at this problem from different perspectives:

* **Improving internal processes at organizations** to account for the health of components and systems they rely on.  
* **Maturity models built by open source foundations** assess the health of their projects and enable third parties to trust the software, particularly since these frameworks are usually aligned with the standards and practices within such foundations.  
* **Open source health initiatives are** applied to a wider set of open source projects and ecosystems, and are independent of any specific open source foundation's practices or corporate expectations.

All of the three perspectives consider health as part of the journey. This analysis of the state of the art of project health focuses on the npm ecosystem, which has its own peculiarities. The npm ecosystem is a high-churn ecosystem where project sustainability and health are just as problematic as the technical aspects (vulnerabilities, technical debt, etc.), especially given that each project's governance structure must be able to handle the volume of pull requests and automated issue reports common in the JavaScript world.

Some papers focus on the understanding of dependencies in the npm space. Ahmed et al. discuss the existing technical lag within npm packages.[^1] The focus of this publication is not the current health of a specific package, but rather the time it takes for that package to be updated in the corresponding dependency tree: “We found that a large number of packages suffer from technical lag, where their outdated dependencies are several months behind the latest release.”

## Improving internal processes at organizations

This includes ones that improve the internal processes at corporations when using open source as the [Open Chain standards](https://openchainproject.org/get-started), those creating specific maturity models per vertical, such as the [FINOS Foundation Open Source Maturity Model](https://osr.finos.org/docs/bok/osmm/introduction), and more generic ones like the [Open Source Good Governance Initiative](https://www.ow2.org/view/OSS_Governance/) and the [TODO Group](https://www.linuxfoundation.org/research/the-evolution-of-the-open-source-program-office-ospo).

Older, but well-established maturity models for processes are related to the Capability Maturity Model Integration ([CMMI](https://en.wikipedia.org/wiki/Capability_Maturity_Model_Integration)), which is used as a starting point for others, such as OpenBRR or QSoS.[^2] These are almost deprecated nowadays, but they were the starting point for maturity-related discussions in the corporate space.

A more general and academic approach to how organizations are approaching the topic of health can be seen in Linaker’s paper titled “Assessing open source software health in organizations’ intake processes: A qualitative study on the practitioners’ perspective”.[^3]

## Maturity models built by open source foundations

Well-known examples are related to well-established open source foundations, such as the Eclipse Foundation, the Apache Software Foundation, or the Cloud Native Computing Foundation.

Their focus is to grow every new project to a common, shared base level of trust and maturity, making it easier for other members to adopt such technology. This typically includes diversity of organizations contributing to the project, adoption of the project processes and workflows, intellectual property requirements, licenses, and transparency in its operations.

1. [Apache Software Foundation Maturity Model](https://community.apache.org/apache-way/apache-project-maturity-model.html): The foundation has three levels of maturity for projects: starting as incubating, then moving to top-level projects, and finally, if abandoned or not used, marked with an archived status. They focus on code, licenses and copyright, releases, quality, community, consensus building, independence, and trademark and branding. The process is a self-assessment process, with tools to assist in the process.

2. [Eclipse Foundation Development Process](https://www.eclipse.org/projects/dev_process/#6_Development_Process): This workflow includes a proposal reviewed by a formal review that includes the Project Management Committee, the Eclipse Management Organization, and input from the community. The main focus is having open, transparent, and demonstrable operations; community building; intellectual property processes; technical viability; and independence and vendor neutrality. In a mature phase, the Foundation expects the project to fully comply with the Eclipse Development Process.

3. [Cloud Native Computing Foundation (CNCF) Project Lifecycle:](https://contribute.cncf.io/projects/lifecycle/) The goal of this multi-stage evaluation is to ensure cloud native projects meet defined standards of maturity, security, and production readiness for adopters. It includes the criteria for each stage and the process for transitioning between levels. The four stages are:

   1. Sandbox \- Experimental or innovative projects early in their development.  
   2. Incubation \- Projects gaining adoption, focusing on improving stability and maturity.  
   3. Graduated \- Highly mature, robust projects whose adopters have demonstrated their production-readiness by their deployment to production environments.  
   4. Archived \- Inactive or low-activity projects that are no longer supported by the foundation or are not recommended for use due to a variety of factors 

   CNCF provides an application process to grow from one step to another, which is publicly available and transparent. The project itself applies to any of the levels, and a group of experts reviews the application and the requirements. The adoption level of the technology is a strong requirement, including interviewing existing end-users.

## Open source health initiatives

The most innovative work in identifying open source health is happening in Community Health Analytics for Open Source Software (CHAOSS) and Open Source Security Foundation (OpenSSF), both "community-led" forums hosted under the umbrella of the Linux Foundation. CHAOSS is the only community focused on growing a body of knowledge around the health of open source. This initiative started in September 2017 and was founded as a new working group including universities, corporations, and open source foundations by the Linux Foundation. CHAOSS provides [metrics](https://chaoss.community/kbtopic/all-metrics/), [metrics models](https://chaoss.community/kbtopic/all-metrics-models/), and [software](https://chaoss.community/software/) to advance the understanding of open source health.

[GrimoireLab](https://chaoss.github.io/grimoirelab/) and [Augur](https://github.com/augurlabs/augur) (now forked by Red Hat and called [CollectOSS](https://github.com/chaoss/CollectOSS)) are the two most prominent open source tools to gather, analyze, and compose open source health information and trends.

GrimoireLab covers the most used pieces of infrastructure in open source, including source code management systems with Git or Mercurial; issue tracking systems like Bugzilla, Jira, GitHub, or Gitlab; review processes such as Gerrit, Gitlab, or GitHub; and communication channels like mailing lists or Slack channels. It takes care of the identities and affiliations of developers, storing and tracking the affiliation changes over time. The technology is flexible enough to add other semi-structured data sources through data analytics. A good example is the Linux Kernel, where code review takes place in mailing lists.

The new version of GrimoireLab, in development, is growing its scalability, now supporting 100,000 Git repositories and allowing users to query datasets through a REST API for events and metric/risk models. This new version allows an event channel for any data source and project of interest. It is similar to the GitHub events API, but expanded to any project or data source out of the GitHub ecosystem. This allows the ingestion of massive SBOMs for health analysis.

Augur focuses on GitHub and partially on GitLab repositories, with high scalability as a main focus. It gathers structured trace data into a strict relational database schema, making it ideal for custom data science tasks, complex querying, and machine learning. Its approach allows other types of analysis like licenses, software effort through COCOMO models, and includes the analysis of OpenSSF Scorecard information. Augur has included the detection of unusual behaviours in communities by analyzing outliers. This scales up to 100,000 Git repositories and provides a front-end built for data scientists in collaboration with other third-party developers called 8Knot.

Recently, one of Augur's core developers rewrote the project from scratch using the AI tool Claude Code, naming the new version Aveloxis. Meanwhile, the rest of the core team forked and rebranded the project as CollectOSS to remain at CHAOSS. Key adopters and contributors continue to use the original CHAOSS-hosted version.

OpenSSF was formed in 2020 to focus on software security under the umbrella of the Linux Foundation. One project named OpenSSF Scorecard is becoming the de facto standard for automating and quantifying the security health of open source projects. It checks for vulnerabilities affecting different parts of the software supply chain, including source code, build, dependencies, testing, and project [maintenance](https://scorecard.dev/#the-checks). OpenSSF Scorecard gives a project a score from 0 to 10 for each check, that is then aggregated into a single score.

## Commercial alternatives

Several organizations provide health evaluation, inspired by the initiatives previously mentioned. Some provide reports, while others provide a score.

### Bitergia

The European company creates in-depth reports for open source projects focusing on the health, sustainability, and maintainability of the project and community. This is an open source solution relying on GrimoireLab, part of the CHAOSS project. These reports look at 8 metrics as the collaboration between corporate players, assessment of the community activity, the contributors' dynamics and collaboration, the detection of silos in the development, and the evolution of each of the components' health. 

### Endor Labs

The company computes scores, but rather than compressing all that information into a single score, they compute Package Scores across four categories: Activity, Popularity, Quality, and Security.[^4] The scores for each category range between 0 and 10\. For example, a score of 5 indicates inconclusive analysis and the package is neutral. A score higher than 5 indicates that the package has more positive factors than negative ones, while a score lower than 5 indicates negative factors. A score of 10 indicates that the package meets all the positive conditions, while a score of 0 indicates that the package meets all the negative conditions.

### LFX Insights

The platform LFX Insights is developed and maintained by the Linux Foundation to provide health metrics to its members. Currently, it tracks all the projects under the umbrella of the Linux Foundation exclusively, and it is included in their roadmap to track the most critical projects of the OSS ecosystem. Their definition of a critical project mainly relies on the number of contributors to the project and the number of dependents of the project. LFX Insights provides a Project Health Score based on four aspects: contributor’s base, popularity, development activity, and security. At the same time, those aspects use metrics defined by the CHAOSS project. 

Although the new version of the software published by the Foundation is open source (previously called crowd.dev), it heavily relies on closed solutions such as TinyBird to deal with the data flow or Octolens for getting data from social network platforms. It also collects data from open source platforms such as [ecosyste.ms](http://ecosyste.ms), which is used to provide metadata about the packages’ downloads and dependencies.

### OpenText

The OpenText Core SCA's Open-Source Health Metrics evaluates packages using three different angles: Contributors, Popularity, and Security.[^5]

### Socket.dev

Socket scores packages across several categories, with alert severity playing a major role. The categories are Vulnerability, Supply Chain Risk, Quality, Maintenance, and License. Each type of alert (Critical, High, Medium, or Low) affects the score differently through normalization functions and soft caps. Package scores are also influenced by project attributes like popularity, size, and maintenance activity.[^6] 

### Snyk

Snyk calculates a "Package Health Score" (out of 100\) based on four main categories: Maintenance, Popularity, Security, and Community.[^7] Each category contributes to the overall score, enabling developers to evaluate various aspects of an open source package. 

[^1]:   Zerouali, A., Constantinou, E., Mens, T., Robles, G., González-Barahona, J. (2018). An Empirical Analysis of Technical Lag in npm Package Dependencies. In: Capilla, R., Gallina, B., Cetina, C. (eds) New Opportunities for Software Reuse. ICSR 2018\. Lecture Notes in Computer Science(), vol 10826\. Springer, Cham. https\://doi.org/10.1007/978-3-319-90421-4\_6  


[^2]:  Jean-Christophe Deprez and Simon Alexandre. 2008\. Comparing Assessment Methodologies for Free/Open Source Software: OpenBRR and QSOS. In Proceedings of the 9th international conference on Product-Focused Software Process Improvement (PROFES '08). Springer-Verlag, Berlin, Heidelberg, 189–203. https\://doi.org/10.1007/978-3-540-69566-0\_17

[^3]:  Linåker, J., Olsson, T. & Papatheocharous, E. Assessing open source software health in organizations’ intake processes: A qualitative study on the practitioners’ perspective. Empir Software Eng 31, 105 (2026). https\://doi.org/10.1007/s10664-026-10846-y

[^4]:  https\://docs.endorlabs.com/scan/sca/scores/repository-scores

[^5]:  https\://docs.debricked.com/product/project-health

[^6]:  https\://docs.socket.dev/docs/package-scores

[^7]:  https\://docs.snyk.io/scan-with-snyk/snyk-open-source/manage-vulnerabilities/snyk-vulnerability-database\#package-health-score

## Want to get involved?
Use and contribute to HealthyCode: https://github.com/aboutcode-org/healthycode

Join the AboutCode [Slack](https://join.slack.com/t/aboutcode-org/shared_invite/zt-31uzazd7l-tBHcqKUKkX6jUEPRLswiNw)
or [Gitter](https://app.gitter.im/#/room/#aboutcode-org_discuss:gitter.im) to chat with the community.
