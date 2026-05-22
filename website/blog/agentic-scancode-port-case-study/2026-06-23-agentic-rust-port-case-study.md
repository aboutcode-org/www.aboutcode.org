---
slug: agentic-scancode-port-case-study
title: An AI agent ported our codebase from Python to Rust
authors: [pombredanne]
tags: [scancode, rust, agent, genai]
hide_table_of_contents: false
---

# An AI agent ported our codebase from Python to Rust

## A case study, not an isolated incident

ScanCode detects licenses, copyrights, package dependencies, vulnerabilities, and a few more things in both source code and binary files. The use cases include license and security compliance and software supply chain management. It is the product of over a decade of careful design, architecture, and testing by an open source community of over 700 contributors, supporting more than 40,000 automated tests covering license detection alone, and over 90,000 automated tests overall.

![Agentic ScanCode port case study](agentic-scancode-port-case-study.svg)

<!-- truncate -->

The core module is ScanCode Toolkit, the industry-leading open source code scanning engine. In early 2026, an agentic LLM system ported ScanCode Toolkit, from Python to Rust, published the derived results under a name that infringed the ScanCode trademark, stripped copyright and license notices from both ScanCode and third-party code we vendored and carefully attributed, and started an outreach campaign, without ever engaging the AboutCode community.

This incident is not isolated. AboutCode (and many other open source projects) are experiencing a steady influx of AI-generated issues and pull requests that are superficially plausible, templated, often duplicating existing reports, and almost never grounded in actual use of the software. Maintainers across the open source ecosystem call this AI slop. It consumes human triage time, degrades signal in issue trackers, and erodes the social contract between users, contributors, and maintainers. The porting incident described in this post is the same phenomenon at a larger scale and with higher stakes.

This article documents what happened technically, what it reveals about the current state of AI-assisted development, and what the open source community needs to do when dealing with AI-generated code.

## What the agent did

The porting was driven by an LLM orchestration harness (using OpenCode and an OpenClaw-vibe coded OpenCode plugin). The agent's approach was straightforward: take a mature, well-tested Python codebase and refactor it in Rust. This is not an independent rewrite or inspired by ScanCode as it claims. It is a mechanical translation and it is exactly the kind of task LLMs are well-suited for.

Why? Code translation is fundamentally like a language translation task, and Large Language Models (LLMs) were originally designed for such language tasks. The extensive ScanCode test suite provided the specification and the guide rails. The agent did not need to understand the algorithms; it only needed to produce code that passed the tests.

This is worth repeating: A comprehensive test suite, decent documentation, and curated datasets is what makes automated porting possible. It is also what makes a codebase easier to replicate without understanding it.

The agent's initial approach, using an existing Rust license-detection library, failed to match ScanCode's output quality. The agent then did what any translator would do when a loose paraphrase fails: it copied the original more closely. The final port reproduces ScanCode's core algorithms, code organization, and data-driven architecture in Rust, not because the agent understood them, but because it had enough training data and test feedback to converge on equivalent code.

## Performance claims

The Rust port published a "benchmark" that claimed 10x to 100x improvements in performance. Many benchmarks are fundamentally flawed because they are designed to document and assert their own tool's feature or performance superiority to help sell or promote that tool.

Compiled Rust is capable of outperforming interpreted Python. In the published "benchmarks", the Rust port runs faster than ScanCode, but when checked it returns incorrect results, missing detections and skipping files. ScanCode runs the standard ScanCode test suite faster than the Rust port, even though the Rust port covers fewer tests. After applying optimization similar to what the Rust port did, ScanCode runs as fast or faster than the Rust port, while maintaining correctness, and attribution.

Testing correctness or speed on a subset does not equate with superiority on the whole.

This also demonstrates a core problem of AI-assisted software development. The agents replicated ScanCode's structure well enough to pass some tests, but not well enough to pass all tests. The port applied performance optimizations and caching strategies to appear faster, but sacrificing critical data correctness and completeness.

## License and copyright failures

ScanCode is Apache-2.0 licensed. The Apache open source license is among the most permissive available, with minimal requirements:

1. Retain the original NOTICE file.
2. Preserve license and copyright headers, including in modified files.
3. Note changes made to modified files.
4. Do not reuse the project name without permission.

The port violated all four requirements. Requirements 1 and 4 were partially corrected after ScanCode maintainers reached out. Requirements 2 and 3 were not.

This impacts more than ScanCode itself and its authors and contributors. ScanCode incorporates code from dozens of other open source projects, each with its own license and copyright. We track all of this meticulously with origin files, per-file copyright headers, and attribution notices. The agent stripped all of it, extending the license violations to every upstream project whose code passed through ScanCode into the port. Note also that the Apache license is not graduated: you either comply or you are not licensed. As of this publication, the port is not compliant.

The irony is not subtle. ScanCode is the product of the collective expertise of the compliance community, and is a tool that the industry uses to detect exactly this kind of license and copyright violation.

## LLMs do not track provenance

The most important technical observation is not about speed or correctness. It is about attribution.

LLMs, by design, do not track provenance. When an agent translates code, it produces output. It does not record that the output derives from a specific file, authored by a specific contributor, under a specific license. That metadata is not part of the model's output representation.

This is a structural problem, not a configuration issue. Agents copying from open source projects will strip attribution by default unless explicit post-processing steps are added to detect and preserve license headers and carefully track the code origin and license. No such steps were taken here. The result is that LLM-assisted porting, as currently practiced, is a plagiarism pipeline with no attribution layer.

This obfuscation is not always passive. In reviewing the commit history and structure of the Rust port, there is evidence that the agent actively worked to distance the output from its source, either directly or steered through prompting. Variable names were changed, comments were rewritten or stripped, additional references to ported code lines added, and the claim of an "independent rewrite merely inspired by ScanCode" was baked into the project's framing from the start, based on evidence found in the generated code and the issue tracker.

Prompting for originality does not produce originality. The agent was following instructions. If you prompt an agent to produce an "original implementation", it will generate whatever surface-level variation possible while the code underneath remains derived from the original project. It produces the appearance of originality, which is a worse outcome than straightforward copying because it is harder to detect.

The same dynamic occurs at a smaller scale in everyday AI-assisted development. When a developer uses a code generation tool to produce a utility function, a parser, or a data structure, the generated code may closely reproduce implementation patterns from open source code present in the model's training data, without any indication of that lineage. Most developers do not know to check for this. Most tools do not flag it.

This is a warning to both sides of the AI-assisted development discussion. For open source developers, your licenses and your contributors' credits are invisible to the agent. For developers producing AI-generated code, the output your tools produce may carry unresolved obligations to authors whose work was used without attribution.

## This is a case study, not an isolated incident

This episode is not primarily about one project or one set of actors. It is a preview of a pattern that will repeat across the open source ecosystem.

The specific conditions that made ScanCode a target are the same conditions that characterize most successful open source projects: a mature codebase, comprehensive tests, plenty of documentation, lots of curated content, large downstream user base, an active community, and a well-known and trusted name. The tools and techniques used are becoming routine with AI-generated commits, contributions, and rewrites: agentic orchestration, automated issue crawling, and targeted community outreach.

The human and social dimensions of this incident are as important, if not more important, as the technical ones. The agent crawled ScanCode's issue tracker and implemented old, outdated or incorrect features, such as a three-year-old feature request for yum database support, a tool that Fedora deprecated a decade ago and whose repository was archived in March 2026. The agent also reported the development of new features, but these features already exist in other AboutCode open source projects.

This is what automated development without community context produces: technically functional work that is socially and strategically incoherent, creating mostly useless or redundant technical debt and bypassing the ecosystem domain expertise and collective wisdom needed to select which feature to implement.

This is one of the less-discussed costs of AI slop at scale. It is not just noise, it is misdirected effort that consumes real resources on both sides. Maintainers spend time triaging and closing low-quality issues. Automated systems spend compute implementing stale or irrelevant features. Neither produces value. And the accumulated technical debt in cluttered issue trackers, undiscovered license violations, and replicated but misunderstood code falls on human maintainers to clean up.

The community outreach campaign by the Rust port team contacting users to suggest replacing ScanCode reflects the same absence of community understanding. The Rust port developers never engaged ScanCode's public community channels, weekly meetings, or chatting with maintainers, until that campaign began. An automated system optimizing for adoption does not naturally model the trust relationships and collaborative norms that open source communities are built on.

## Feedback for the community

The path forward is not to litigate this one case. The path forward is to develop best practices.

Benchmark suites and clear performance profiles matter more than ever, both to guide legitimate contributors and to provide ground truth against inflated claims. License compliance tooling, including tools like ScanCode, should be routinely applied to AI-generated contributions. Attribution gaps are not always intentional; they are often invisible without explicitly checking. And we are building more open source tools to help ensure open source authors are properly credited for their work.

To open source maintainers, you should care for and protect the integrity of your brand, copyright, and license. With the cost of code generation reaching zero, this is your key asset.

To developers using agentic coding tools, license and copyright compliance does not happen automatically.

If your tooling generates code ported from or inspired by existing projects, you are responsible for the output's obligations. Build attribution checking into your workflow, not as an afterthought.

AI and ML practitioners and enthusiasts, please understand that the open source projects you train on, benchmark against, and port from are maintained by communities. These communities are composed of people, and have norms, governance structures, contribution pathways, and years of accumulated context and domain expertise.

Participating in these communities, before, during, and after building on their work, is not a formality. It is how the ecosystem that enables your work is sustained. The performance gains available in ScanCode come from that community's accumulated expertise.

## Onwards and upwards: Taking the high road

The open source community's response to AI-generated code cannot be purely defensive. We need to develop shared norms for attribution in agent-assisted development, better tooling for detecting and flagging provenance gaps, and clearer frameworks for what constitutes a derivative work versus an independent implementation.

We also need practitioners on both sides of this conversation, open source maintainers and AI engineers, to work together to build those frameworks. That is harder than forking and porting a repository. It is also the only approach that scales.

Building those frameworks begins with the next conversation, and that conversation is open to everyone.

P.S. Detecting this kind of AI-assisted obfuscated porting is exactly the problem that motivated our recent AI-Generated Code Search project, now integrated into AboutCode MatchCode code matching engine. MatchCode is designed to identify code that has been structurally reproduced across language boundaries. This matches not just token-level similarity but also algorithmic and architectural similarities using fingerprints. If you are a maintainer concerned that your project may have been ported or replicated without attribution, it is worth joining us so we can assist you in running your codebase through MatchCode as a baseline. The tool exists precisely because provenance questions like this one are becoming more common. This is not a silver bullet, but it can help.
