---

permalink: "blog-posts.html"

layout: sidebar

title: SelectUSA Leadership

section: reading-room

published: true

---

## Blog Posts

<div id="block-menu-menu-testimonials-chose-usa" class="block block-menu" ><h2>Blog</h2> 

<div class="view view-upcoming-events view-id-upcoming_events view-display-id-page_1 advanced-filtered-search view-dom-id-1">
{% for post in site.categories.blog  %}
{% capture nowunix %}{{site.time  | date: '%s'}}{% endcapture %}
{% capture posttime %}{{post.date | date: '%s'}}{% endcapture %}
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
              {{post.date | date: '%B %d, %Y' }} 
            </span>
          </span>
      </div>
  </div>
{% endfor %}
  </div>  </div>
