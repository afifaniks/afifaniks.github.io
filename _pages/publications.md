---
layout: page
permalink: /publications/
title: publications
description: A collection of my research articles...
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

{% assign pc_j = site.data.pub_counts.J | default: 0 %}
{% assign pc_c = site.data.pub_counts.C | default: 0 %}
{% assign pc_p = site.data.pub_counts.P | default: 0 %}
{% assign pc_t = site.data.pub_counts.T | default: 0 %}
{% assign pc_total = pc_j | plus: pc_c | plus: pc_p | plus: pc_t %}

<div class="pub-overview">
  <div class="pub-overview-total">
    <span class="pub-overview-num">{{ pc_total }}</span>
    <span class="pub-overview-label">publications</span>
  </div>
  <div class="pub-overview-chart">
    <div class="pub-mix-bar" role="img" aria-label="{{ pc_c }} conferences, {{ pc_j }} journals, {{ pc_p }} posters, {{ pc_t }} thesis">
      {% if pc_c > 0 %}<span class="pub-mix-seg pub-mix-c" style="flex-grow: {{ pc_c }};" title="{{ pc_c }} conferences"></span>{% endif %}
      {% if pc_j > 0 %}<span class="pub-mix-seg pub-mix-j" style="flex-grow: {{ pc_j }};" title="{{ pc_j }} journals"></span>{% endif %}
      {% if pc_p > 0 %}<span class="pub-mix-seg pub-mix-p" style="flex-grow: {{ pc_p }};" title="{{ pc_p }} posters"></span>{% endif %}
      {% if pc_t > 0 %}<span class="pub-mix-seg pub-mix-t" style="flex-grow: {{ pc_t }};" title="{{ pc_t }} thesis"></span>{% endif %}
    </div>
    <div class="pub-mix-legend">
      {% if pc_c > 0 %}<span class="pub-mix-key"><i class="pub-mix-dot pub-mix-c"></i>{{ pc_c }} Conferences</span>{% endif %}
      {% if pc_j > 0 %}<span class="pub-mix-key"><i class="pub-mix-dot pub-mix-j"></i>{{ pc_j }} Journals</span>{% endif %}
      {% if pc_p > 0 %}<span class="pub-mix-key"><i class="pub-mix-dot pub-mix-p"></i>{{ pc_p }} Posters</span>{% endif %}
      {% if pc_t > 0 %}<span class="pub-mix-key"><i class="pub-mix-dot pub-mix-t"></i>{{ pc_t }} Thesis</span>{% endif %}
    </div>
  </div>
</div>

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>
