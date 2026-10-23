# Portfolio de Jules Sarrasin

Site statique en HTML, CSS et JavaScript natifs (aucun framework, aucune dépendance externe, polices locales). Il se publie tel quel sur GitHub Pages.

## Contenu
- `index.html` : accueil
- `projets/` : liste des projets, puis une étude de cas par dossier (`pince-canette/`, `vtt-solex/`, `embase-fonte/`)
- `a-propos/`, `contact/`
- `css/style.css`, `js/main.js` (met en avant l'étape en cours de lecture dans les études de cas)
- `images/`, `videos/` (sans le son), `docs/` (plans PDF de l'embase), `fonts/`, `favicon.svg`
- `.nojekyll` : demande à GitHub Pages de servir les fichiers sans traitement

Tous les liens sont relatifs : le site fonctionne à la racine d'un dépôt `…github.io` comme dans un sous-dossier.

## Voir le site en local
Ouvrir `index.html` dans le navigateur, ou lancer `python3 -m http.server` dans ce dossier puis aller sur http://localhost:8000.

## Modifier un texte
Ouvrir le fichier `index.html` du dossier concerné dans un éditeur de texte et changer le texte entre les balises (`<p>`, `<li>`, `<h3>`). Enregistrer, puis recharger la page.

## Remplacer ou ajouter une image
Déposer l'image dans `images/` (JPEG, 1400 px de large environ, moins de 150 Ko) et changer le nom dans la balise `<img src="…">`. Garder un texte alternatif (`alt`) qui décrit l'image.

## Ajouter un projet
1. Copier un dossier de `projets/` sous un nouveau nom.
2. Modifier son `index.html` (titre, étapes, images).
3. Ajouter une carte dans `index.html` et `projets/index.html`, en copiant une carte existante.

## Publier sur GitHub Pages
1. Créer un compte sur github.com (pseudo prévu : `PortfolioSARRASINJules`).
2. Créer un dépôt **public** nommé `PortfolioSARRASINJules.github.io` (nom exact : pseudo + `.github.io`).
3. Sur la page du dépôt : « Add file » > « Upload files », puis glisser **le contenu** de ce dossier (pas le dossier lui-même), y compris `.nojekyll`. Valider avec « Commit changes ».
4. Dans « Settings » > « Pages » : Source = « Deploy from a branch », branche `main`, dossier `/ (root)`. Enregistrer.
5. Après une à deux minutes, le site est en ligne sur `https://portfoliosarrasinjules.github.io`.

Pour une mise à jour : remplacer les fichiers modifiés dans le dépôt (Upload files), le site se met à jour seul.
