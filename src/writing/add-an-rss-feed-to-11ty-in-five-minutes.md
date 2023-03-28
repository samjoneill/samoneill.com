---
title: Add an RSS feed to your Eleventy website in five minutes
---

I was having a conversation with my colleague [Jeremy Keith](https://adactio.com)
yesterday, wherein he submitted a feature request for this website – an RSS feed.
I promised to take a look at the earliest convenience.

This site is built using [Eleventy](https://www.11ty.dev/) – a new (to me) tool.
A quick Google search and I quickly realised that fulfilling Jeremy's request
would be light work. Here's how I did it, and how you too can add an RSS feed to
your Eleventy website in a matter of minutes.

To create the feed, we'll use the first party [Eleventy RSS plugin](https://www.npmjs.com/package/@11ty/eleventy-plugin-rss) which can be installed via NPM:

```sh
npm install @11ty/eleventy-plugin-rss --save-dev
```

Next, add the plugin to Eleventy via your config file. This will most likely be
named `.eleventy.js`:

```js
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
};
```

Finally, we need to create the feed. The Eleventy RSS plugin works by processing
a Nunjucks (`.njk`) file into an XML (`.xml`) file. So, lets create a file in
our source directory, ensuring it uses the `.njk` file extension so that the
plugin can do its thing. For me, I created a file named `feed.njk` in the root
of my source directory.

Once I'd created the file, I first populated the [Front Matter](https://www.11ty.dev/docs/data-frontmatter/)
of the file.

```json
---json
{
  "permalink": "feed.xml",
  "eleventyExcludeFromCollections": true,
  "metadata": {
    "title": "Sam O'Neill",
    "subtitle": "Welcome to the online home of Sam O'Neill, a Brighton-based design engineer.",
    "language": "en",
    "url": "https://samoneill.com/",
    "author": {
      "name": "Sam O'Neill"
    }
  }
}
---
```

This contains metadata, which is used to populate the respective tags in the XML
file itself, as well as the useful `eleventyExcludeFromCollections` declaration
which prevents the feed file itself from showing up on any collections pages.
This would be useful if perhaps you had multiple collections on your site, each
with their own RSS feed file living within the collections directory.

Finally, we need to create the feed template by adding the following after the
Front Matter that we have just populated.

{%- raw -%}
```xml
<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xml:base="{{ metadata.url }}">
  <title>{{ metadata.title }}</title>
  <subtitle>{{ metadata.subtitle }}</subtitle>
  <link href="{{ permalink | absoluteUrl(metadata.url) }}" rel="self"/>
  <link href="{{ metadata.url }}"/>
  <updated>{{ collections.writing | getNewestCollectionItemDate | dateToRfc3339 }}</updated>
  <id>{{ metadata.url }}</id>
  <author>
    <name>{{ metadata.author.name }}</name>
  </author>
  {%- for post in collections.writing | reverse %}
  {%- set absolutePostUrl = post.url | absoluteUrl(metadata.url) %}
  <entry>
    <title>{{ post.data.title }}</title>
    <link href="{{ absolutePostUrl }}"/>
    <updated>{{ post.date | dateToRfc3339 }}</updated>
    <id>{{ absolutePostUrl }}</id>
    <content xml:lang="{{ metadata.language }}" type="html">{{ post.templateContent | htmlToAbsoluteUrls(absolutePostUrl) }}</content>
  </entry>
  {%- endfor %}
</feed>
```
{% endraw %}

In this instance, I wanted a generate a feed from the "writing" collection on my
site, so you'll notice the use of `collections.writing` in the feed template
above. Make sure to change that so it matches the collection that you want a
feed for.

Your final feed file should look [something like this](https://github.com/samjoneill/samoneill.com/blob/main/src/feed.njk).

At this point, you should be able to run your `--serve` command and have a feed
at `http://localhost:8080/feed.xml`.

The final step, is to add your `link` tag to the `<head>` of your website for
autodiscovery of your new RSS feed:

```html
<link rel="alternate"
  href="/feed.xml"
  type="application/atom+xml"
  title="Sam O'Neill's Blog" />
```

And that's it.
