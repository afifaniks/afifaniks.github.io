---
layout: page
permalink: /publications/
title: publications
description: A collection of my research articles...
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<div class="pub-stats">
  <span class="pub-stat-badge pub-type-j">J</span> {{ site.data.pub_counts.J }} journals &ensp;
  <span class="pub-stat-badge pub-type-c">C</span> {{ site.data.pub_counts.C }} conferences &ensp;
  <span class="pub-stat-badge pub-type-p">P</span> {{ site.data.pub_counts.P }} posters &ensp;
  <span class="pub-stat-badge pub-type-t">T</span> {{ site.data.pub_counts.T }} thesis
</div>

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>
