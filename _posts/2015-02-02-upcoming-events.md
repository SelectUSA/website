---
permalink: "upcoming-events.html"
layout: default
title: Upcoming Events
published: true
--- 

<div class="view view-upcoming-events view-id-upcoming_events view-display-id-page_1 advanced-filtered-search view-dom-id-1">
{% for post in site.categories.events reversed %}
{% capture nowunix %}{{site.time  | date: '%s'}}{% endcapture %}
{% capture posttime %}{{post.date | date: '%s'}}{% endcapture %}
{% if posttime > nowunix %}
    {% capture currentdate %}{{post.date | date: " %B, %Y"}}{% endcapture %}
    {% if currentdate != thedate %}
    <h3><span class="date-display-single">  {{ currentdate }}
    {% capture thedate %}{{currentdate}}{% endcapture %} </span></h3>
    {% endif %}
     {% capture thecycle %}{% cycle 'odd', 'even' %}{% endcapture %}
        {% if thecycle == 'odd' %}
          <div class="views-row-2 views-row-even views-row-last">
        {% else %}
          <div class="views-row-1 views-row-odd views-row-first views-row-first">
        {% endif %}
 
      <div class="views-field-title">
          <span class="field-content">
              <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
          </span>
      </div>
      <div class="views-field-field-date-1-value">
          <span class="field-content">
            <span class="date-display-start">
              {{post.date-display-start}} 
            </span>
             {% if post.date-display-end == post.date-display-start %}
             {% else %}
            <span class="date-display-separator"> - </span>
            <span class="date-display-end">
              {{post.date-display-end}}
            </span>
            {% endif %}
          </span>
      </div>
    <div class="views-field-field-location-value">
          <span class="field-content">
            {{post.location-value}}
          </span>
    </div>
  </div>
  {% else %} {% endif %}
{% endfor %}
</div>
