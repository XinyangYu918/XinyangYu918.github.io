---
title: "Publications"
permalink: /publications/
author_profile: true
---

Below is a list of selected publications.

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
