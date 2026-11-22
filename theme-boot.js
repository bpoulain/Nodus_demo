// site/theme-boot.js — anti-flash : applique le thème mémorisé (`nodus:theme`, clé de la couche
// marque du starter, storageKey('Nodus', 'theme')) avant le premier rendu. Script classique, chargé
// dans <head> : la CSP du site publié (script-src 'self') refuse un script en ligne.
try {
  const theme = localStorage.getItem('nodus:theme');
  if (theme === 'light' || theme === 'dark') document.documentElement.setAttribute('data-theme', theme);
} catch (e) { /* stockage indisponible : thème du système */ }
