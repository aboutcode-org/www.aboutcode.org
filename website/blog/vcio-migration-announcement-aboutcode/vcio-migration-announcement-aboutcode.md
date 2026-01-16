---
slug: vcio-migration-announcement-aboutcode
title: VulnerableCode API Deprecation and V3 Introduction
authors: [tg1999]
tags: [vcio, vulnerabilities, advisories, purl, api]
hide_table_of_contents: false
---

# VulnerableCode API Deprecation and V3 Introduction

VulnerableCode (public.vulnerablecode.io) is planning to deprecate V1 and V2 API by the end of Q2 2026 (June 20, 2026) with the V3 API and UI to be introduced by the end of January 2026.

---

## Why this new API

The existing V1 and V2 APIs are both based on the “vulnerabilities” model, designed to aggregate information from multiple advisory sources based on identifiers and aliases. Due to the combination of various sources, it is difficult to determine which source is correct and this may result in data from one source overwriting data from another source.

---

## What to expect from this new API and UI

Moving forward, VulnerableCode will report “advisories” for packages and not “vulnerabilities”.

Currently if a package has 4 advisories and those 4 advisories were correlated with each other by their aliases and identifiers, we report a single vulnerability affecting that package. The new approach in V3 will report 4 individual advisories.

The new “advisories” model introduces an Advisory ID (AVID) for each advisory in VulnerableCode. An AVID will have different components like the source and the natural unique identifier used at that source. So for example if we are importing an advisory from “nodejs_security_wg” and it’s identified by its ID “123”, the AVID will be “nodejs_security_wg/123”.

---

## Plan and Timeline

We are planning to complete the following tasks by the end of January 2026:

- Redesigning the API and UI  
- Migrating our existing data sources  
- Documenting the V3 API and the new UI  

---

## Current Status

https://public2.vulnerablecode.io/v2 uses the new advisory based UI and  
https://public2.vulnerablecode.io/api/v3/ uses new API, but it is still under development and not ready for production use.

---

## Migration Progress

You can track the progress of migration here:  
https://github.com/orgs/aboutcode-org/projects/52/views/48
