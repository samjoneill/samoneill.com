---
title: My considered use of generative AI in front-end development
metaTitle: My considered use of generative AI in front-end development | Writing
date: 2026-02-19
---

As a developer working in a design consultancy - where we're ultimately in the business of offering as much value to our clients as possible within a fixed budget/time frame - generative AI presents an interesting conundrum (as it should for anyone, might I add). It's a technology that offers utility, yet sharply divides opinion over the ethics, risks, and consequences of its use.

In its infancy, I experimented with it, and was disappointed with the results. Moreover, I take care in my work and the thought of relinquishing some level of control over it to a machine made me feel uncomfortable. At this early stage, the "benefits" were easy enough to ignore. I placed myself firmly in the anti-AI camp.

As it evolved and became more commonplace, I kept abreast of its developments. The buzz around the technology and the rate at which it was being worked on made that unavoidable. Over time, some potential use cases began to emerge.

I began to see ways in which I could employ AI in my professional work. Ways that I felt could introduce efficiencies that would allow me to reallocate time within projects to more novel challenges faced by our clients.

Further experiments ensued as time passed. Often times, the tech just didn't hit the mark. Verbose code that lacked finesse. Hallucinations aplenty. Accessibility pitfalls throughout, even when specifically prompted to adhere to the [WCAG](https://clearleft.com/thinking/applying-the-four-principles-of-accessibility#entry:88153@1:url) guidelines. The list goes on.

But once in a while, it saved me a _bunch_ of time. On several occasions, I found myself with some grunt work to do. Unavoidable tasks, but ones that would be tedious and time consuming. With increasing frequency, I thought "a-ha, here's something a robot can do for me". Over time, I began to habitually gravitate towards AI for these kinds of tasks. The penny didn't drop suddenly. It was gradual. But sure enough, AI earned its place in my armoury.

All of this being said, I have ethical concerns about AI. Environmental worries, too. I can't in good conscience blindly use a tool that is both detrimental to the planet while failing to represent the original creators of the source material that it regurgitates.

Balancing the tension between the advantages of AI against the impacts of its use is a challenge. I realise I'll be upsetting some people by using it at all. That being said, after some time and consideration I arrived at the following set of three rules to ask myself that encourage me to use AI judiciously.

## Rule #1

> *Use AI only for tasks you already know how to do, on occasions when the time that would be spent completing the task can be better spent on other problems.*

This is, to me, the most important of the three rules. #2 and #3 build upon this. If the above isn't true, I go about the task without AI interference/assistance.

To break this down, the first part: "*Use AI only for tasks you already know how to do*", sets a guardrail that ensures I don't loose the skill of researching, experimenting with, and understanding new tools and methodologies as they are introduced. If I were to rely on AI to solve new or atypical problems that arise, my skillset would narrow relative to the latest capabilities of the web. The risk of doing the inverse of this is very apparent and is why I think early-career developers should be very cautious when using generative AI in their work.

As mentioned above, we're in the business of exchanging time for value. That's where the second part of the phrase - "*on occasions when the time that would be spent completing the task can be better spent on other problems*" - comes in. Often in our projects, there are more problems to solve than time allows. Sensible use of AI can - and in my experience, has - freed up capacity to tend to a client's additional desires.

## Rule #2

> *When using AI, provide the chosen tool with something you've made as an input along with a specific prompt.*

Once I've established that the first rule is being adhered to, I then get to the point of actually using AI, and doing so with good intention.

To enable this, I find that it's best to ask an AI tool to debug, refactor or otherwise improve some code you've already written to perform a task, rather than create from scratch. This mitigates against introducing slop to my work.

In my front-end development work, this results in prompts often being paired with an attached file or code snippet. Some recent example prompts include:

- *I have an SVG containing a world map. Each `<path>` represents a country. Please add a data attribute - `data-country-code` - to each path in the attached file (`world-map.svg`) containing the A-2 code for that country.*
- *Please refactor the attached CSS file (`a-component.css`) so all the media queries are mobile first (`min-width`).*

I'll stretch my interpretation of this rule when it comes to documentation, for example:

- "*Based on the attached `package.json` file, please generate a README file outlining the tech stack, system requirements and developer tools for this project.*".

Here, I am asking it produce something new, but I'm still giving it *something* that lends context to the problem. I find this sort of use of AI is particularly useful when inheriting legacy, undocumented code written by other developers.

## Rule #3

> *Always comprehensively review the output from an AI tool for quality.*

Building upon the first two rules, the third ensures that I must be able to interpret, understand and fix any issues in the output produced by an AI tool. If I can't, I didn't have a sufficient understanding of the problem and how to solve it to qualify the use of AI in the first place.

Doing this is also so important because while generative AI tools have improved, they aren't perfect, so taking a moment to review and tidy up any generated code is an essential step to take before including it in a production codebase.

<hr>

These rules aren't perfect or exhaustive. They're a useful guide, but sometimes an activity can meet all three criteria, and I'll still forego the use of AI. They are also specifically catered to the context of production-quality client work. AI has utility in other contexts - such as aggregating baseline information about something new during research or rapidly producing prototype code - where I may choose to relax these rules.

The important message, I think, is that we all take a moment to pause before firing up ChatGPT, Claude, or whichever tool you prefer to use, and ask if its really necessary.

AI offers a lot of gimmicks that do nothing for me personally, but I'm pleased to have found a way to use it amongst a suite of tools in a way that lets me get some value from it, and dedicate more time to crafting solutions to the problems faced by our clients.
