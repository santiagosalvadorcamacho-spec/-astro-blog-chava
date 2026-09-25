---
layout: ../../layouts/MarkdownPostLayout.astro
title: Mi cuarto post
author: Chava
description: "¡Este post aparece solo en la lista!"
image:
    url: "https://docs.astro.build/default-og-image.png"
    alt: "La palabra astro sobre una ilustración de planetas y estrellas."
pubDate: 2026-09-25
tags: ["astro", "logros"]
---
Ya aprendí a crear componentes (Header, Footer, Social y Menú) y layouts (BaseLayout y MarkdownPostLayout). Ahora mi página de Blog genera la lista de posts sola: este post aparece ahí sin que yo edite `blog.astro`, porque `import.meta.glob()` lee todos los archivos de la carpeta `posts/`.