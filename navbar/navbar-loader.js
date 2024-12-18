fetch("navbar/navbar.html") // Charge le fichier navbar.html
  .then(response => {
    if (!response.ok) throw new Error("Erreur de chargement : " + response.status); // Vérifie les erreurs
    return response.text(); // Retourne le contenu HTML sous forme de texte
  })
  .then(data => {
    document.getElementById("navbar").innerHTML = data; // Insère le contenu dans le conteneur
  })
  .catch(error => {
    console.error("Erreur lors du chargement de la navbar :", error); // Affiche l'erreur dans la console
  });