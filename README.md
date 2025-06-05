# 🎮 DAWeSPORTS – Proyecto Web sobre eSports

---

## 📁 Estructura de Carpetas y Archivos

```
/root
│── /css
│   ├── articles.css
│   ├── detail.css
│   ├── formulario.css
│   ├── index.css
│   └── juegos.css
│── /img
│── /videos
│── article_LOL.html
│── article_RL.html
│── article_VAL.html
│── detailLOL1.html ... detailLOL4.html
│── detailRL1.html ... detailRL4.html
│── detailVAL1.html ... detailVAL4.html
│── formulario.html
│── index.html
│── juegos.html
│── script.js
│── script-formularios.js
│── script-juegos.js
└── README.md
```

---

## 🧰 Tecnologías Utilizadas

- **HTML5**
- **CSS3** (Flexbox, Grid, Animaciones)
- **JavaScript ES6+**

---

## 🗂️ Estructura del Proyecto

### Página Principal (`index.html`)
- Carrusel con imágenes destacadas
- Botones "Ver más" con efectos hover (color y escala)
- Cambio de tema claro/oscuro con persistencia (`localStorage`)

### Artículos por Juego (`article_LOL.html`, `article_RL.html`, `article_VAL.html`)
- Lista de noticias específicas por título
- Menú desplegable con animaciones suaves
- Sidebar con próximos eventos

### Páginas de Detalle (`detail*.html`)
- Vista extendida del contenido de cada noticia
- Diseño responsive

### Página de Juegos / Tienda (`juegos.html`)
- Catálogo dinámico de 30 juegos
- Filtro por precio máximo
- Ordenamiento por nombre o precio
- Interfaz con botones funcionales

### Formularios (`formulario.html`)
- Formulario de contacto con validación en tiempo real
- Formulario de suscripción con opciones y validación
- Formulario de comentarios con almacenamiento en array y render dinámico

---

## 📌 Funcionalidades Clave de la Entrega Final

1. **Estructura de datos personalizada en JavaScript**  
   Se ha definido un array de objetos que representa una lista de juegos. Cada objeto contiene:
   - Un identificador único (`id`)
   - Un nombre (`nombre`)
   - Una descripción (`descripcion`)
   - Un dato numérico (`precio`, `visitas`)

   Además, se han implementado:
   - Una función de **filtrado por precio** (`filtrarPorPrecio`)
   - Funciones de **ordenación alfabética** y por **valor numérico** (`ordenarPorNombre`, `ordenarPorPrecio`)

2. **Mostrar/Ocultar elementos dinámicamente**  
   El botón "Mostrar/Ocultar Comentarios" permite alternar la visibilidad de la lista de comentarios publicada.

3. **Modo claro/oscuro con persistencia**  
   Un interruptor en la página principal permite cambiar entre modo claro y oscuro, guardando la preferencia en `localStorage`.

4. **Sistema de comentarios dinámico**  
   Al enviar un comentario desde el formulario, este se muestra inmediatamente en la lista visible, sin recargar la página.

5. **Efectos visuales con interacción**  
   Se aplican efectos `hover` en los botones "Ver más", cambiando color y tamaño al pasar el cursor, mejorando la experiencia visual.

6. **Carrusel/slider interactivo**  
   Se implementa un slider de imágenes con navegación mediante botones, presente en la página principal para cada sección de juegos.

7. **Validación de formularios con JavaScript**  
   Se validan los formularios de contacto, suscripción y comentarios con expresiones regulares y lógica JavaScript personalizada.

8. **Documentación técnica en `README.md`**  
   El archivo `README.md` ha sido actualizado para incluir guías de uso, descripciones de funcionalidades y referencias al código fuente.

---

## ✅ Funcionalidades Añadidas en la Entrega Final

---

### 1. 📊 Estructura de Datos en JavaScript (`script-juegos.js`)

- **Array de objetos**: Lista de juegos con propiedades como `id`, `nombre`, `descripcion`, `precio` y `visitas`.  
- **Filtrado**: Función `filtrarPorPrecio()` que muestra juegos con precio menor o igual al valor ingresado.  
- **Ordenamiento**: Funciones `ordenarPorNombre()` y `ordenarPorPrecio()` para organizar la lista.

**Guía de uso:**  
1. Accede a la página **Tienda** (`juegos.html`).  
2. Ingresa un precio máximo y haz clic en **Filtrar** para filtrar.  
3. Usa los botones **Ordenar por nombre** o **Ordenar por precio** para ordenar.



---

### 2. 👁️‍🗨️ Mostrar/Ocultar Comentarios (`script-formularios.js`)

- **Botón toggle**: Alterna la visibilidad de la lista dinámica de comentarios con el botón "Mostrar/Ocultar Comentarios".  
- Los comentarios se guardan en un array y se muestran dinámicamente al enviarlos.

**Guía de uso:**  
1. Navega a **Formularios** > **Comentarios**.  
2. Haz clic en el botón para mostrar u ocultar los comentarios publicados.  
3. Completa los campos **Usuario** y **Comentario** y pulsa **Publicar** para añadir un comentario.



---

### 3. 🌗 Modo Claro/Oscuro (`script.js`)

- **Botón de alternancia**: Cambia entre modo claro y oscuro, guardando la preferencia en `localStorage` para mantenerla en futuras visitas.

**Guía de uso:**  
1. En la página principal (`index.html`), haz clic en el botón de modo claro/oscuro en la esquina superior derecha.



---

### 4. 🖱️ Efectos Hover en Botones (`script.js`)

- **Interacción visual**: Los botones "Ver más" cambian de color y escala al pasar el cursor, mejorando la experiencia de usuario.

**Guía de uso:**  
1. En la página principal, pasa el cursor sobre cualquier botón **"Ver más"** para ver el efecto.



---

### 5. 🎞️ Carrusel/Slider de Imágenes (`script.js`)

- **Navegación**: Botones que permiten desplazarse horizontalmente entre imágenes usando `scrollTo()`.

**Guía de uso:**  
1. En la página principal, utiliza los botones circulares bajo el slider para cambiar la imagen mostrada.



---

### 6. ✅ Validación de Formularios (`script-formularios.js`)

- **Validación en tiempo real**: Para los formularios de contacto, suscripción y comentarios, con comprobación de campos obligatorios y formatos específicos.

**Guía de uso:**  
1. Completa los formularios en **Formularios** y observa las alertas si hay errores.



---

### 7. 📘 Documentación en `README.md`

- Documentación actualizada con todas las funcionalidades añadidas.  
- Incluye guías de uso por página, referencias al código y recomendaciones para capturas y explicaciones.

---


## 🧹 Buenas Prácticas

- Código modular y limpio
- Uso de semántica HTML5
- Estilos separados por sección
- Funciones bien definidas en JavaScript
- Accesibilidad básica en formularios

---


## Repartición de Funcionalidades y Horas de Trabajo Ultima Entrega

| Funcionalidad                              | Responsable       | Horas Estimadas |
|-------------------------------------------|-------------------|-----------------|
| **1. Estructura de Datos en JavaScript**  | Marti Jimenez     | 6 horas         |
| - Array de juegos, filtrado y ordenamiento|                   |                 |
| **2. Mostrar/Ocultar Comentarios**         | Cristian Moll     | 4 horas         |
| - Botón toggle y lista dinámica de comentarios|               |                 |
| **3. Modo Claro/Oscuro**                    | Marti Jimenez     | 3 horas         |
| - Alternancia de tema y persistencia       |                   |                 |
| **4. Lista Dinámica de Comentarios**       | Cristian Moll     | 4 horas         |
| - Guardado en array y renderizado dinámico |                   |                 |
| **5. Efectos Hover en Botones**             | Marti Jimenez     | 6 horas         |
| - Cambios visuales en botones "Ver más"    |                   |                 |
| **6. Carrusel/Slider de Imágenes**          | Cristian Moll     | 5 horas         |
| - Navegación con scroll horizontal          |                   |                 |
| **7. Validación de Formularios**             | Marti Jimenez     | 8 horas         |
| - Validación en tiempo real para formularios|                   |                 |
| **8. Documentación en `README.md`**          | Cristian Moll     | 3 horas         |
| - Guías, referencias y explicaciones        |                   |                 |

---

### Totales

| Persona         | Horas Totales |
|-----------------|---------------|
| Marti Jimenez   | 20 horas     |
| Cristian Moll   | 19 horas     |

---

### Comentarios

- La repartición intenta equilibrar la carga de trabajo en tiempo, manteniendo la coherencia temática.
- Marti se encarga principalmente de la lógica y validación, así como estilos interactivos.
- Cristian trabaja más con la interfaz dinámica de comentarios, efectos visuales y documentación.
- Se recomienda coordinar revisiones cruzadas para asegurar integración fluida.

---





