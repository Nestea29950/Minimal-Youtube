// Cacher les vidéos recommander pour version desktop
function toggleRecommandedVideo(hide) {
  const sectionComments = document.getElementById('comments');
  if (items) {
    sectionComments.style.display = hide ? 'none' : '';
  }
}

export function toggleRecommandes(hide){
    toggleRecommandedVideo(hide);
}