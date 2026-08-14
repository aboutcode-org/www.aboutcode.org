---
slug: vcio-v3-migration-completed
title: VulnerableCode V3 API migration is completed
authors: [tg1999]
tags: [vcio, vulnerabilities, advisories, purl, api]
hide_table_of_contents: false
---

# VulnerableCode API Deprecation and V3 Introduction

The AboutCode team has released v40.0.0 https://github.com/aboutcode-org/vulnerablecode/releases/tag/v40.0.0 with the the V3 VulnerableCode API which replaces "vulnerabilities" with "advisories". Prior to this release we reported vulnerabilities for each PURL (Package-URL) where a vulnerability combined multiple advisories. With the new advisory model each advisory is reported individually which provides more granular data and makes it easier for you to prioritize data sources that you trust more.

With this release the VulnerableCode V1 and V2 APIs have been deprecated along with the corresponding vulnerability-based data. You can download the V1/V2 vulnerability data from: https://github.com/aboutcode-org/vulnerablecode/releases/tag/vcio-v1. This is a final data archive for the old data structure.

Refer to https://public.vulnerablecode.io/api/docs/ and https://vulnerablecode.readthedocs.io/en/latest/api_v3_usage.html to understand the latest V3 API usage.
