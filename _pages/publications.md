---
title: ""
permalink: /publications/
author_profile: true
---

Below is a list of selected publications:

<ul>{% for publication in site.data.publications %}
  <li>
    <strong>{{ publication.title }}</strong><br>
    {{ publication.authors }}<br>
    <em>{{ publication.journal }}</em>, {{ publication.year }}<br>
    {% if publication.link %}
      <a href="{{ publication.link }}" target="_blank">DOI</a>
    {% endif %}
  </li>
{% endfor %}</ul>

<h2>Preprints under review</h2>
<ul>
{% for publication in site.data.preprints %}
  <li style="margin-bottom: 1em;">
    <strong>{{ publication.title }}</strong><br>
    {{ publication.authors }}<br>
    <em>{{ publication.journal }}</em>, {{ publication.year }}<br>
    {% if publication.link %}
      <a href="{{ publication.link }}" target="_blank" rel="noopener noreferrer">DOI</a>
    {% endif %}
  </li>
{% endfor %}
</ul>
