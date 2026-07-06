# 🌸 PIU BELLA SPA — Sitio web

Sitio web multi-página construido para **Marcela Viviana Miron**  
Directora Nu Skin Enterprises INC · Contadora Pública · Jefa de Sistemas

---

## 📁 Estructura del proyecto

```
piu-bella-spa/
│
├── index.html                    ← Página principal (hero cinematográfico)
├── styles.css                    ← Todos los estilos
├── main.js                       ← Scripts (scroll reveal, nav, contadores)
├── README.md                     ← Este archivo
│
├── paginas/                      ← Páginas internas
│   ├── marcela.html              ← Sobre Marcela
│   ├── epigenetica.html          ← Charla del Dr. Hector Romero
│   ├── cuidado-piel.html         ← Ciencia de la piel
│   ├── capacitacion.html         ← Programa completo
│   └── japon.html                ← Viaje de éxito
│
└── img/                          ← Todas las imágenes
    ├── logo/                     ← Logo (README interno)
    ├── hero/                     ← Imagen del hero (README interno)
    ├── marcela/                  ← Fotos de Marcela (README interno)
    ├── productos/                ← Fotos de productos (README interno)
    ├── piel/                     ← Fotos de cuidado facial (README interno)
    ├── noticias/                 ← Fotos de eventos (README interno)
    ├── capacitacion/             ← 📌 VACÍA - sumar fotos
    ├── viajes/                   ← 📌 VACÍA - sumar fotos de Japón
    ├── testimonios/              ← 📌 VACÍA - sumar fotos de personas
    ├── equipo/                   ← 📌 VACÍA - sumar fotos grupales
    └── placeholders/             ← Referencias visuales (no tocar)
```

---

## 🖼️ Cómo sumar fotos

**Cada carpeta dentro de `img/` tiene su propio README.md** explicando:
- Qué fotos van ahí
- Nombres de archivo sugeridos
- Dimensiones ideales
- Formato y peso máximo

**Solo abrí el README de la carpeta que corresponda y seguí las indicaciones.**

### Fotos que YA están cargadas:
✅ `img/logo/logo.jpeg` + `logo-web.jpg`  
✅ `img/hero/hero-bg.jpg` (Marcela con Nu Skin)  
✅ `img/marcela/marcela-principal.jpg` + `marcela-charla.jpg`  
✅ `img/productos/collagen-plus.jpg`, `lumispa.jpg`, `ageloc.jpg`  
✅ `img/piel/dispositivo-ageloc.jpg`  
✅ `img/noticias/charla-epigenetica-1.jpg`, `-2.jpg`, `-3.jpg`

### Carpetas que necesitan fotos (opcional):
📌 `img/capacitacion/`  
📌 `img/viajes/` (fotos de Japón le darían mucho impacto a esa página)  
📌 `img/testimonios/`  
📌 `img/equipo/`

---

## 🔧 Antes de publicar — CAMBIÁ ESTO:

Buscá y reemplazá en **TODOS los archivos** (index.html + los 5 archivos en paginas/):

| Buscar | Reemplazar por |
|--------|----------------|
| `5491100000000` | Tu número de WhatsApp real (con código de país, sin +) |
| `contacto@piubellaspa.com` | Tu email real |
| `piubellaspa` (Instagram) | Tu @ de Instagram real |

**Truco:** Podés usar VS Code, Sublime Text o cualquier editor con "Buscar y reemplazar en todos los archivos" (Ctrl+Shift+H).

---

## 🚀 Cómo publicar

### Opción 1 — Subir a hosting con FTP
Subí la carpeta completa `piu-bella-spa/` a la raíz de tu hosting (public_html o similar).

### Opción 2 — GitHub Pages (gratis)
1. Creá un repo en GitHub llamado `piu-bella-spa`
2. Subí todos los archivos
3. En Settings → Pages → Source: main branch
4. Tu sitio queda en `https://tuusuario.github.io/piu-bella-spa/`

### Opción 3 — Netlify / Vercel (gratis)
1. Arrastrá la carpeta `piu-bella-spa/` a netlify.com/drop
2. Listo — te da una URL.

---

## 🎨 Colores de marca

- **Lavanda (acento):** `#9B8BB4` — botones, títulos italic, links
- **Crema (fondos claros):** `#FDF7EF`
- **Oscuro:** `#2B2B2C` — footer, botones oscuros
- **Marrón cálido:** `#986A3E` — algunos títulos italic

## 🔤 Tipografías

- **Sans (cuerpo):** Host Grotesk
- **Serif (títulos italic):** Cormorant Garamond

Ambas se cargan automáticamente desde Google Fonts.

---

## 📱 Responsive

El sitio se adapta a móviles automáticamente. Tres breakpoints:
- Desktop (>1024px)
- Tablet (900-1024px)
- Mobile (<900px)

---

## ❓ Dudas o cambios

Cualquier ajuste — sacar/agregar secciones, cambiar textos, cambiar links de WhatsApp con mensajes específicos, cambiar el destino del viaje, etc. — se puede hacer editando directamente los archivos HTML.

Cada sección está bien marcada con comentarios `<!-- SECCIÓN -->` para que sea fácil encontrarla.

---

**© 2026 · Diseñado con ❤️ para Piu Bella Spa**
