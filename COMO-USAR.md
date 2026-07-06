# 📖 CÓMO USAR ESTE SITIO

## 🚨 IMPORTANTE — Cómo VER el sitio correctamente

Si abrís los archivos HTML sueltos, se ven "vacíos" o rotos. **No lo son.** Cada HTML tiene 800-1000 palabras de contenido real y links a estilos + imágenes.

Para ver el sitio bien tenés que:

### Opción A — Doble click en `index.html` (más fácil)
1. Descargá **toda la carpeta `piu-bella-spa/`** completa
2. Descomprimila si viene en ZIP
3. Doble click en `index.html` — se abre en el navegador con el diseño completo
4. Los links a las páginas internas (Marcela, Epigenética, etc.) también funcionan

### Opción B — Usar VS Code + Live Server (recomendado si vas a editar)
1. Abrí la carpeta en VS Code
2. Instalá la extensión "Live Server"
3. Click derecho en `index.html` → "Open with Live Server"
4. Se abre en el navegador y se actualiza automáticamente cuando editás

### Opción C — Subir a hosting (ver más abajo)

---

## 📸 DÓNDE VAN LAS FOTOS

Cada carpeta dentro de `img/` tiene un archivo **`README.md`** que te dice qué fotos van, con qué nombre, dimensiones y calidad.

**Ejemplo:** Si querés sumar más fotos del viaje a Japón:
1. Abrí la carpeta `img/viajes/`
2. Leé el `README.md` de esa carpeta
3. Copiá tus fotos con los nombres que dice el README (ej: `japon-1.jpg`, `japon-2.jpg`)
4. Listo — ya se ven en el sitio

**No hace falta editar el HTML** si respetás los nombres del README.

---

## 📊 FOTOS QUE YA ESTÁN CARGADAS (versión final)

### `img/hero/`
- `hero-bg.jpg` — Imagen científica de belleza epigenética (fondo del hero)

### `img/marcela/`
- `marcela-portrait.jpg` — Nueva foto sonriendo en evento (foto principal)
- `marcela-charla-negocio.jpg` — Charla de negocios (versión grande)
- `marcela-charla.jpg` — Foto anterior (backup)
- `marcela-principal.jpg` — Foto promocional Nu Skin (backup)

### `img/noticias/`
- `dr-hector-romero.jpg` — **FOTO REAL** del Dr. Hector Romero dando la charla
- `charla-epigenetica-1.jpg` — Beauty Focus Collagen+ en la charla
- `charla-epigenetica-2.jpg` — LumiSpa
- `charla-epigenetica-3.jpg` — Dispositivo ageLOC

### `img/viajes/`
- `japon-hero.jpg` — Templo Senso-ji (Tokio)
- `japon-thumb.jpg` — Versión chica del templo

### `img/capacitacion/`
- `dia-maquillaje.jpg` — Día de maquillaje / taller práctico

### `img/productos/`
- `collagen-plus.jpg`, `lumispa.jpg`, `ageloc.jpg`

### `img/piel/`
- `dispositivo-ageloc.jpg`

### `img/logo/`
- `logo.jpeg` + `logo-web.jpg`

---

## 🎯 DÓNDE APARECE CADA FOTO EN EL SITIO

| Foto | Aparece en |
|------|-----------|
| `hero/hero-bg.jpg` | Fondo cinematográfico del hero principal (index) |
| `marcela/marcela-portrait.jpg` | Sección "Sobre Marcela" (index) + página Marcela |
| `marcela/marcela-charla-negocio.jpg` | Página interna Marcela (segunda foto) |
| `noticias/dr-hector-romero.jpg` | Card destacada de novedades (index) + página Epigenética (foto principal) |
| `noticias/charla-epigenetica-1.jpg` | Galería página Epigenética |
| `noticias/charla-epigenetica-2.jpg` | Galería página Epigenética + card lateral novedades |
| `noticias/charla-epigenetica-3.jpg` | Página Epigenética + card lateral novedades |
| `viajes/japon-hero.jpg` | Página Viaje a Japón (foto grande) |
| `capacitacion/dia-maquillaje.jpg` | Página Capacitación |
| `productos/collagen-plus.jpg` | Card "Autonomía" en index |
| `productos/lumispa.jpg` | Card "Mentoría" en index |
| `productos/ageloc.jpg` | Card "Escalabilidad" en index |
| `piel/dispositivo-ageloc.jpg` | Sección "Ciencia de la piel" (index) + página Cuidado piel |

---

## ➕ CARPETAS QUE ESPERAN MÁS FOTOS (opcional)

- **`img/testimonios/`** — Fotos de las personas que dejan testimonios (Valentina R., Dra. Carolina M., Martín L.). Cuadradas 600x600px. Ver README dentro.
- **`img/equipo/`** — Fotos grupales del equipo. Ver README dentro.
- **`img/capacitacion/`** — Podés sumar más fotos de capacitaciones (además de la de maquillaje). Ver README dentro.
- **`img/viajes/`** — Podés sumar más fotos de Japón o viajes anteriores. Ver README dentro.

Cuando sumes fotos con los nombres que dicen los READMEs, después me avisás y las conecto a las páginas.

---

## 🚀 CÓMO PUBLICAR ONLINE (para que la vea todo el mundo)

### Opción rápida y gratis — Netlify Drop
1. Andá a https://app.netlify.com/drop
2. Arrastrá la carpeta `piu-bella-spa/` completa a la ventana
3. En 30 segundos te da una URL tipo `https://piubellaspa-xxxxx.netlify.app`
4. Podés cambiar el subdominio en la configuración

### Opción profesional — Tu propio dominio
1. Comprá un dominio (ej: `piubellaspa.com` en Nic.ar o Namecheap)
2. Contratá hosting (Hostinger, GoDaddy, Bluehost — hay planes desde 3 USD/mes)
3. Subí la carpeta por FTP a `public_html/`
4. Configurá el DNS del dominio hacia el hosting

### Opción gratis con dominio propio — GitHub Pages
1. Creá cuenta en GitHub
2. Creá un repo llamado `piu-bella-spa`
3. Subí los archivos
4. Activá GitHub Pages en Settings
5. Podés conectar tu dominio propio después

---

## 🛠️ ANTES DE PUBLICAR — REEMPLAZOS OBLIGATORIOS

Abrí todos los archivos HTML (index + 5 de paginas/) y usá "Buscar y reemplazar" (Ctrl+H):

| ❌ Placeholder actual | ✅ Reemplazá por |
|---|---|
| `5491100000000` | Tu WhatsApp real (código país + número, sin +, sin espacios) |
| `contacto@piubellaspa.com` | Tu email real |
| `piubellaspa` (para Instagram) | Tu @ real |

**En VS Code:** Ctrl+Shift+H busca y reemplaza en TODOS los archivos a la vez.

---

## ❓ ¿Necesitás cambiar algo?

Los textos están en los HTML como texto plano — se editan con cualquier editor (Notepad, VS Code, Sublime Text, etc.). Cada sección tiene comentarios `<!-- NOMBRE -->` para encontrarlas fácil.

Si querés que yo edite algo, decime qué página + qué sección + qué cambio.
