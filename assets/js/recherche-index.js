---
permalink: /assets/js/recherche-index.js
---
window.INDEX_ARTICLES = [
{% for post in site.posts %}
  {
    titre: {{ post.title | jsonify }},
    url: {{ post.url | relative_url | jsonify }},
    parcours: {{ site.parcours[post.parcours].nom | jsonify }},
    rubrique: {{ site.parcours[post.parcours].rubriques[post.rubrique].nom | default: "" | jsonify }},
    sous_rubrique: {{ post.sous_rubrique | default: "" | jsonify }},
    tags: {{ post.tags | default: empty_array | jsonify }},
    couleur: {{ site.parcours[post.parcours].couleur | jsonify }}
  }{% unless forloop.last %},{% endunless %}
{% endfor %}
];
