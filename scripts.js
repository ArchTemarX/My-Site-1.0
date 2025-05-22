'use strict';
// links security
document.querySelectorAll('a[href^="http"]').forEach((link) => {
  link.setAttribute('target', '_blank');
  link.setAttribute('rel', 'noopener noreferrer');
});

// hover for skill-item
document.querySelectorAll('.skill').forEach((skill) => {
  skill.addEventListener('mouseenter', () => {
    skill.classList.add('hovering');
  });

  skill.addEventListener('mouseleave', () => {
    skill.classList.remove('hovering');
  });
});
