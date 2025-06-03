function toggleRecommandedVideo(hide) {
  const secondary = document.getElementById('secondary');
  if (secondary) {
    secondary.classList.toggle('hide-recommandes', hide);
    
  }
}

export function toggleRecommandes(hide) {
  toggleRecommandedVideo(hide);
}
