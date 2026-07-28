// Placeholder script.js
// Aquí puedes añadir tu JavaScript para controlar la invitación (abrir, cerrar, RSVP, audio, etc.).

document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openBtn');
  const closeBtn = document.getElementById('closeBtn');
  const rsvpBtn = document.getElementById('rsvpBtn');
  const invitation = document.getElementById('invitation');
  const music = document.getElementById('music');

  function showInvitation(){
    invitation.classList.remove('hidden');
    invitation.setAttribute('aria-hidden', 'false');
    if (music) music.play().catch(()=>{ console.log('Autoplay bloqueado'); });
  }

  function hideInvitation(){
    invitation.classList.add('hidden');
    invitation.setAttribute('aria-hidden', 'true');
    if(music){ music.pause(); music.currentTime = 0; }
  }

  openBtn?.addEventListener('click', showInvitation);
  closeBtn?.addEventListener('click', hideInvitation);
  rsvpBtn?.addEventListener('click', () => {
    alert('¡Gracias! Tu asistencia ha sido registrada (ejemplo).');
  });

  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && !invitation.classList.contains('hidden')) hideInvitation();
  });
});
