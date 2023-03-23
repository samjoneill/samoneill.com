---
title: Writing
layout: base.njk
---

# Writing

{% for page in collections.writing %}
- [{{ page.data.title }}]({{ page.url }})
{%- endfor %}
