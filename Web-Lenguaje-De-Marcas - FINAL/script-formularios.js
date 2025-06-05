document.addEventListener('DOMContentLoaded', function () {

    // Validación contacto
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const nombre = document.getElementById('nombre');
            const correo = document.getElementById('correo');
            const mensaje = document.getElementById('mensaje');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!nombre.value.trim()) {
                alert('El nombre es obligatorio');
                nombre.focus();
                return;
            }

            if (!correo.value.trim()) {
                alert('El correo electrónico es obligatorio');
                correo.focus();
                return;
            } else if (!emailRegex.test(correo.value)) {
                alert('Por favor, introduce un correo electrónico válido');
                correo.focus();
                return;
            }

            if (!mensaje.value.trim()) {
                alert('El mensaje es obligatorio');
                mensaje.focus();
                return;
            }

            alert('Formulario de contacto enviado correctamente');
            contactForm.reset();
        });
    }

    // Validación suscripción
    const subscribeForm = document.getElementById('subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = document.getElementById('email');
            const name = document.getElementById('name');
            const preferences = document.getElementById('preferences');
            const age = document.getElementById('age');
            const gender = document.getElementById('gender');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!email.value.trim()) {
                alert('El correo electrónico es obligatorio');
                email.focus();
                return;
            } else if (!emailRegex.test(email.value)) {
                alert('Por favor, introduce un correo electrónico válido');
                email.focus();
                return;
            }

            if (!name.value.trim()) {
                alert('El nombre completo es obligatorio');
                name.focus();
                return;
            }

            if (preferences.value === '') {
                alert('Por favor, selecciona una preferencia');
                preferences.focus();
                return;
            }

            if (!age.value.trim()) {
                alert('La edad es obligatoria');
                age.focus();
                return;
            } else if (isNaN(age.value) || parseInt(age.value) <= 0) {
                alert('Por favor, introduce una edad válida');
                age.focus();
                return;
            }

            if (gender.value === '') {
                alert('Por favor, selecciona tu género');
                gender.focus();
                return;
            }

            alert('Suscripción enviada correctamente');
            subscribeForm.reset();
        });
    }

    // Validación comentarios
    const commentsForm = document.getElementById('comments-form');
    if (commentsForm) {
        commentsForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const usuario = document.getElementById('usuario');
            const comentario = document.getElementById('comentario');

            if (!usuario.value.trim()) {
                alert('El nombre de usuario es obligatorio');
                usuario.focus();
                return;
            }

            if (!comentario.value.trim()) {
                alert('El comentario no puede estar vacío');
                comentario.focus();
                return;
            }

            // Guardar comentario
            comentarios.push({
                usuario: usuario.value.trim(),
                texto: comentario.value.trim(),
                fecha: new Date().toISOString()
            });

            alert('Comentario publicado con éxito');
            commentsForm.reset();

            if (document.getElementById('lista-comentarios').style.display === 'block') {
                actualizarListaComentarios();
            }
        });
    }

    // Mostrar/Ocultar comentarios
    const toggleButton = document.getElementById('toggle-comments');
    if (toggleButton) {
        toggleButton.addEventListener('click', function () {
            const lista = document.getElementById('lista-comentarios');
            lista.style.display = (lista.style.display === 'none' || lista.style.display === '') ? 'block' : 'none';
            if (lista.style.display === 'block') {
                actualizarListaComentarios();
            }
        });
    }

    // Lista de comentarios en memoria
    const comentarios = [];

   
    // Actualizar lista de comentarios
    function actualizarListaComentarios() {
        const lista = document.getElementById('lista-comentarios');
        lista.innerHTML = '<h3>Comentarios Anteriores:</h3>';

        if (comentarios.length === 0) {
            lista.innerHTML += '<p>No hay comentarios aún.</p>';
        } else {
            comentarios.forEach(comentario => {
                lista.innerHTML += `
                    <div class="comentario">
                        ------------------------<br>
                        <strong>USUARIO:</strong> ${comentario.usuario}<br>
                        <strong>MENSAJE:</strong> ${comentario.texto}<br>
                        <strong>FECHA:</strong> ${new Date(comentario.fecha).toLocaleString()}<br>
                        ------------------------<br><br>
                    </div>
                `;
            });
        }
    }
});
