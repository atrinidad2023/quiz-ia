/* Configuración del quiz en vivo (la usan la presentación y la página de los participantes) */
window.QUIZ = {
  relay: 'https://ntfy.sh',              // servicio gratuito de mensajes en tiempo real
  topic: 'saca-provecho-ia-q7m2xk94',    // canal privado de esta clase (no lo cambies)
  duration: 20,                          // segundos por pregunta
  questions: [
    { q: '¿Qué significa la R en la fórmula RTCF?', a: ['Respuesta', 'Rol', 'Rápido', 'Revisar'], ok: 1 },
    { q: '¿Y qué significa la F?', a: ['Fecha', 'Final', 'Formato', 'Fuente'], ok: 2 },
    { q: '¿Cuál de estas instrucciones es más clara?', a: ['Hazme un correo', 'Ayúdame con algo', 'Correo formal a mi jefe pidiendo el viernes libre, en 5 líneas', 'Dime cosas'], ok: 2 },
    { q: '¿Cuál de estas herramientas es un asistente de IA?', a: ['Excel', 'Gemini', 'Paint', 'Zoom'], ok: 1 },
    { q: '"Para estudiantes de 5.º grado" es la parte de la fórmula llamada…', a: ['Rol', 'Tarea', 'Contexto', 'Formato'], ok: 2 },
    { q: '¿Qué debes hacer con la respuesta que te da la IA?', a: ['Copiarla tal cual', 'Revisarla y verificarla', 'Creerla siempre', 'Ignorarla'], ok: 1 },
    { q: '¿Qué dato NUNCA debes compartir con una IA?', a: ['El tema de tu clase', 'El grado de tus estudiantes', 'Tus contraseñas', 'El formato que quieres'], ok: 2 },
    { q: '¿La IA reemplaza tu criterio profesional?', a: ['Sí, siempre', 'No, la IA ayuda y tú decides', 'Solo en el trabajo', 'Depende del día'], ok: 1 }
  ]
};
