---
layout: page
permalink: /marginalia/
title: marginalia
description: a little of what I read, watch, and listen to...
nav: false # surfaced via the "more" dropdown (_pages/dropdown.md), not as a top-level item
---

<!-- _pages/marginalia.md — data lives in _data/favorites.yml -->

{% assign fav = site.data.favorites %}

<div class="marginalia">

{% if fav.books and fav.books.size > 0 %}
<section class="fav-section">
  <h2 class="fav-section-title"><span class="fav-section-icon">📚</span>Books that stuck with me</h2>
  {% if fav.books.size > 10 %}<input type="checkbox" id="books-toggle" class="fav-toggle-cb" hidden>{% endif %}
  <div class="fav-books">
    {% for b in fav.books %}
    {% assign cover = b.cover %}
    {% if cover == nil and b.isbn %}{% assign cover = b.isbn | prepend: 'https://covers.openlibrary.org/b/isbn/' | append: '-L.jpg?default=false' %}{% endif %}
    <div class="fav-book{% if forloop.index0 >= 10 %} fav-extra{% endif %}">
      {% if b.url %}<a href="{{ b.url }}" class="fav-book-cover fav-cover-frame" target="_blank" rel="noopener">{% else %}<div class="fav-book-cover fav-cover-frame">{% endif %}
        <span class="fav-cover-fallback">{{ b.title }}</span>
        {% if cover %}<img class="fav-cover-img" loading="lazy" alt="{{ b.title }} cover" src="{{ cover }}" onerror="this.remove();">{% endif %}
      {% if b.url %}</a>{% else %}</div>{% endif %}
      <div class="fav-book-meta">
        <div class="fav-book-title">{{ b.title }}</div>
        <div class="fav-book-author">{{ b.author }}</div>
      </div>
    </div>
    {% endfor %}
  </div>
  {% if fav.books.size > 10 %}
  <label for="books-toggle" class="fav-more-toggle">
    <span class="fav-more-show">Show all {{ fav.books.size }} books</span>
    <span class="fav-more-hide">Show fewer</span>
  </label>
  {% endif %}
</section>
{% endif %}

{% if fav.papers and fav.papers.size > 0 %}
<section class="fav-section">
  <h2 class="fav-section-title"><span class="fav-section-icon">📄</span>Papers worth revisiting</h2>
  <ul class="fav-papers">
    {% for p in fav.papers %}
    <li class="fav-paper">
      {% if p.url %}<a href="{{ p.url }}" class="fav-paper-title" target="_blank" rel="noopener">{{ p.title }}</a>{% else %}<span class="fav-paper-title">{{ p.title }}</span>{% endif %}
      {% if p.authors %}<span class="fav-paper-authors">{{ p.authors }}</span>{% endif %}
    </li>
    {% endfor %}
  </ul>
</section>
{% endif %}

{% if fav.movies and fav.movies.size > 0 %}
<section class="fav-section">
  <h2 class="fav-section-title"><span class="fav-section-icon">🎬</span>Films I could rewatch forever</h2>
  <div class="fav-movies fav-shelf">
    {% for m in fav.movies %}
    <div class="fav-movie">
      {% if m.url %}<a href="{{ m.url }}" class="fav-movie-poster fav-cover-frame" target="_blank" rel="noopener">{% else %}<div class="fav-movie-poster fav-cover-frame">{% endif %}
        <span class="fav-cover-fallback">{{ m.title }}</span>
        {% if m.poster %}<img class="fav-cover-img" loading="lazy" alt="{{ m.title }} poster" src="{{ m.poster }}" onerror="this.remove();">{% endif %}
      {% if m.url %}</a>{% else %}</div>{% endif %}
      <div class="fav-movie-meta">
        <div class="fav-movie-title">{{ m.title }}{% if m.year %} <span class="fav-movie-year">{{ m.year }}</span>{% endif %}</div>
        {% if m.director %}<div class="fav-movie-director">{{ m.director }}</div>{% endif %}
        {% if m.note %}<div class="fav-note">{{ m.note }}</div>{% endif %}
      </div>
    </div>
    {% endfor %}
  </div>
</section>
{% endif %}

{% if fav.songs and fav.songs.size > 0 %}
<section class="fav-section">
  <h2 class="fav-section-title"><span class="fav-section-icon">🎧</span>Here's a mixtape of what I like</h2>
  <div class="fav-songs">
    {% for s in fav.songs %}
    <div class="fav-song" data-term="{{ s.artist }} {{ s.title }}">
      {% if s.spotify %}<a href="{{ s.spotify }}" class="fav-song-cover fav-cover-frame" target="_blank" rel="noopener">{% else %}<div class="fav-song-cover fav-cover-frame">{% endif %}
        <span class="fav-cover-fallback fav-cover-fallback-note">♪</span>
        <img class="fav-cover-img" loading="lazy" alt="{{ s.album }} cover" {% if s.cover %}src="{{ s.cover }}"{% endif %} onerror="this.remove();">
      {% if s.spotify %}</a>{% else %}</div>{% endif %}
      <div class="fav-song-meta">
        <div class="fav-song-title">{{ s.title }}</div>
        <div class="fav-song-artist">{{ s.artist }}</div>
        {% if s.album %}<div class="fav-song-album">{{ s.album }}</div>{% endif %}
        {% if s.note %}<div class="fav-note">{{ s.note }}</div>{% endif %}
      </div>
    </div>
    {% endfor %}
  </div>
</section>
{% endif %}

{% if fav.quotes and fav.quotes.size > 0 %}
<section class="fav-section">
  <h2 class="fav-section-title"><span class="fav-section-icon">❝</span>Lines I keep coming back to</h2>
  <div class="fav-quotes">
    {% for q in fav.quotes %}
    <blockquote class="fav-quote">
      <p class="fav-quote-text">{{ q.text }}</p>
      <footer class="fav-quote-attr">{{ q.author }}{% if q.source %}<span class="fav-quote-source">{{ q.source }}</span>{% endif %}</footer>
    </blockquote>
    {% endfor %}
  </div>
</section>
{% endif %}

</div>

<script>
  // Song album art loads from Apple's keyless iTunes Search API. It needs
  // JSONP (the endpoint isn't CORS-friendly for fetch). A manual `cover:`
  // wins and skips the lookup; any failure just leaves the ♪ tile in place.
  (function () {
    function jsonp(url, cb) {
      var name = 'favCb_' + Math.random().toString(36).slice(2);
      var script = document.createElement('script');
      var done = function () { try { delete window[name]; } catch (e) { window[name] = undefined; } script.remove(); };
      window[name] = function (data) { try { cb(data); } catch (e) {} done(); };
      script.onerror = done;
      script.src = url + '&callback=' + name;
      document.body.appendChild(script);
    }

    document.addEventListener('DOMContentLoaded', function () {
      document.querySelectorAll('.fav-song').forEach(function (el) {
        var img = el.querySelector('.fav-cover-img');
        var term = el.getAttribute('data-term');
        if (!img || img.getAttribute('src') || !term) return; // manual cover, or nothing to search
        jsonp('https://itunes.apple.com/search?limit=1&entity=song&term=' + encodeURIComponent(term), function (d) {
          var r = (d && d.results) || [];
          if (r[0] && r[0].artworkUrl100) img.src = r[0].artworkUrl100.replace('100x100', '600x600');
        });
      });
    });
  })();
</script>
