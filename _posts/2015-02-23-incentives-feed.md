---
permalink: "incentives-feed.html"
layout: default
title: Incetives Feed
published: true
--- 


<div id="block-menu-menu-testimonials-chose-usa" class="block block-menu">
  <h2>Incetives Feed</h2>

  <div class="content">
    <ul class="menu">
 {% assign sorted_pages = (site.categories.investment-incentives | sort: title) %}
  {% for post in sorted_pages %}
  <li class="leaf"><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a> - {{ post.tags }}</li>
   {% endfor %}
</ul>  </div>
</div>
