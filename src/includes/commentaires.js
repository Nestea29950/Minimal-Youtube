// Cacher ou afficher les commentaires pour la version Ordinateur
export function toggleCommentaireDesktop(hide) {
    const sectionComments = document.getElementById('comments');
    if (sectionComments) {
    
        sectionComments.classList.toggle('hide-recommandes', hide);
    }
}

export function toggleCommentaires(hide) {
    toggleCommentaireDesktop(hide);
}
