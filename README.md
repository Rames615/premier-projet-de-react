# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

****Module 1** : Introduction à React (Niveau Débutant)

Qu'est-ce que React ?
React est une bibliothèque JavaScript front-end open-source et déclarative, conçue pour construire des interfaces utilisateur interactives. Développée par Facebook, elle est largement utilisée pour créer des applications web monopages (SPA) et des applications mobiles (avec React Native).

***Les concepts clés de React incluent :***

**Composants :** React est basé sur une architecture de composants. Tout est un composant, des boutons aux pages entières. Les composants ``sont des morceaux de code réutilisables`` et indépendants qui gèrent leur propre état et leur propre rendu.

**Approche déclarative** : Avec React, vous décrivez l'état souhaité de votre interface utilisateur, et React se charge de la mettre à jour de manière efficace lorsque les données changent. Cela contraste avec l'approche impérative où vous manipulez directement le DOM.

**Virtual DOM**: ``React utilise un DOM virtuel, une représentation légère et en mémoire du DOM réel``. Lorsqu'un composant change d'état, React met à jour le DOM virtuel, puis compare cette nouvelle version avec l'ancienne pour déterminer les modifications minimales à apporter au DOM réel, ce qui optimise les performances.

**Flux de données unidirectionnel** : Les données dans React circulent généralement dans une seule direction (de haut en bas), ce qui rend le code plus prévisible et plus facile à déboguer.


**Installer un projet React avec Vite ou Create React App**
Il existe deux outils populaires pour démarrer un projet React : Create React App et Vite.

**Option 1 : Utiliser Vite (Recommandé pour les nouveaux projets)**
Vite est un outil de construction front-end nouvelle génération qui offre des performances de développement beaucoup plus rapides, notamment au démarrage du serveur de développement et lors des mises à jour à chaud (Hot Module Replacement - HMR).

Pour créer un nouveau projet React avec Vite, ouvrez votre terminal ou invite de commande et exécutez la commande suivante :

**Bash**

npm create vite@latest mon-premier-projet-react -- --template react
npm create vite@latest : Lance le processus de création de projet Vite.
mon-premier-projet-react : Le nom de votre dossier de projet. Vous pouvez le remplacer par le nom de votre choix.
-- --template react : Spécifie que nous voulons un modèle de projet React.
Après avoir créé le projet, naviguez dans le dossier du projet et installez les dépendances :

**Bash**

cd mon-premier-projet-react
npm install
Pour démarrer le serveur de développement :

**Bash**

npm run dev
Votre application sera généralement disponible à l'adresse http://localhost:5173/.

**Option 2 : Utiliser Create React App (Alternative plus ancienne)**
Create React App (CRA) est un outil officiel et bien établi pour configurer des projets React sans aucune configuration. Bien que plus lent que Vite pour le développement, il reste une option valide et mature.

Pour créer un nouveau projet React avec Create React App, exécutez la commande suivante dans votre terminal :

**Bash**

npx create-react-app mon-premier-projet-cra
npx create-react-app : Lance l'outil Create React App.
mon-premier-projet-cra : Le nom de votre dossier de projet.
Après la création, naviguez dans le dossier du projet :

**Bash**

cd mon-premier-projet-cra
Pour démarrer le serveur de développement :

**Bash**

npm start
Votre application sera généralement disponible à l'adresse http://localhost:3000/.

**Structure d'un projet React**
Quel que soit l'outil utilisé (Vite ou Create React App), la structure d'un projet React partagera des similitudes fondamentales. Voici les répertoires et fichiers importants que vous rencontrerez :

`mon-premier-projet-react/
├── node_modules/       # Dossier contenant toutes les dépendances du projet
├── public/             # Fichiers statiques (ex: index.html, logo)
├── src/                # Le cœur de votre application React
│   ├── assets/         # Images, icônes, etc.
│   ├── components/     # Vos composants React réutilisables (optionnel, mais recommandé)
│   ├── App.jsx         # Composant principal de l'application
│   ├── main.jsx        # (Vite) Ou index.js (CRA) : Point d'entrée de l'application React
│   ├── index.css       # Styles globaux (peut être scindé en plusieurs fichiers)
│   └── ...
├── .gitignore          # Fichiers et dossiers à ignorer par Git
├── package.json        # Manifeste du projet (dépendances, scripts)
├── README.md           # Documentation du projet
├── vite.config.js      # (Vite) Fichier de configuration de Vite
└── ...
`
**node_modules/**: Ce dossier est généré automatiquement et contient toutes les bibliothèques et modules dont votre projet dépend. Vous n'avez normalement pas besoin d'y toucher.

**public/** : Contient les fichiers statiques qui sont servis directement par le serveur web, comme le fichier index.html (la page principale de votre application) et les icônes de site.

**src/** : C'est là que vous passerez la majeure partie de votre temps à développer. Il contient le code source de votre application React.

**main.jsx (Vite) / index.js (CRA)** : C'est le point d'entrée de votre application. C'est ici que votre composant React principal (App) est rendu dans le DOM réel de la page index.html.

**App.jsx** : Le composant racine de votre application. C'est généralement le point de départ pour l'organisation de votre interface utilisateur.

**index.css (ou d'autres fichiers CSS)** : Contient les styles de votre application.

**components/ (souvent créé manuellement)** : Un dossier où vous pouvez organiser vos composants React plus petits et réutilisables.

**package.json** : Un fichier important qui contient des métadonnées sur votre projet (nom, version), la liste de toutes les dépendances (bibliothèques utilisées) et des scripts que vous pouvez exécuter (comme npm start ou npm run dev).

**Premiers composants**

En React, les composants sont le cœur de tout. Un composant est une fonction JavaScript qui retourne du JSX (JavaScript XML). Le JSX est une syntaxe qui permet d'écrire du code qui ressemble à du HTML directement dans JavaScript.

**Créer votre premier composant**
Ouvrez le fichier src/App.jsx (ou src/App.js si vous utilisez CRA). Vous y trouverez déjà un composant de base. Modifions-le pour comprendre comment ça marche.

**JavaScript**

/ src/App.jsx (ou src/App.js)

import './App.css'; // Importe les styles spécifiques à App

function App() {
  const nomUtilisateur = "Développeur React"; // Une variable JavaScript

  return (
    <div className="App"> {/* Le JSX doit être enveloppé dans un seul élément parent */}
      <h1>Bonjour, {nomUtilisateur} !</h1> {/* Utilisez des accolades pour insérer du JS dans le JSX */}
      <p>Bienvenue à votre premier cours React.</p>
      `<button onClick={() => alert("Vous avez cliqué !")}>Cliquez-moi</button>`
      <MonAutreComposant /> {/* Nous allons créer ce composant juste après */}
    </div>
  );
}`

// Assurez-vous d'exporter le composant pour qu'il puisse être utilisé ailleurs
export default App;

**Explications :**

**import './App.css';** : Importe le fichier de style CSS associé à ce composant.

**function App() { ... }** : Définit un composant fonctionnel nommé App. Les noms de composants commencent toujours par une majuscule.
**return (...)** : Ce que le composant retourne est du JSX, qui sera rendu dans le DOM.

<div className="App"> : Notez l'utilisation de <className> au lieu de <class> pour les attributs CSS en JSX, car class est un mot-clé réservé en JavaScript.

`<h1>Bonjour, {nomUtilisateur} !</h1>` : Vous pouvez insérer des expressions JavaScript (variables, fonctions, etc.) directement dans votre JSX en les plaçant entre accolades {}.

`<button onClick={() => alert("Vous avez cliqué !")}>` : Les gestionnaires d'événements (comme onClick) sont définis en camelCase et attendent une fonction JavaScript.

**Créer un deuxième composant simple**
Créons un nouveau composant dans un fichier séparé pour montrer comment les composants peuvent être combinés.

Créez un nouveau fichier `src/MonAutreComposant.jsx (ou src/MonAutreComposant.js)` :

**JavaScript**

`// src/MonAutreComposant.jsx`

`import React from 'react'; // Pas toujours nécessaire avec les dernières versions de React, mais bonne pratique`

function MonAutreComposant() {
  return (
    <div>
      <h2>Ceci est un composant séparé</h2>
      <p>Il peut être réutilisé n'importe où dans votre application.</p>
    </div>
  );
}

export default MonAutreComposant;

Maintenant, importez et utilisez ce nouveau composant dans App.jsx comme montré précédemment :


**JavaScript**

// src/App.jsx

import './App.css';
import MonAutreComposant from './MonAutreComposant'; // Importez le nouveau composant

function App() {
  const nomUtilisateur = "Développeur React";

  return (
    <div className="App">
      <h1>Bonjour, {nomUtilisateur} !</h1>
      <p>Bienvenue à votre premier cours React.</p>
      <button onClick={() => alert("Vous avez cliqué !")}>Cliquez-moi</button>
      <MonAutreComposant /> {/* Utilisez le composant comme une balise HTML */}
    </div>
  );
}

export default App; 

**///////////////////////     Module 2 : JSX et le rendu dynamique              /////////////////////////////////**

``Qu'est-ce que JSX ?``
JSX (JavaScript XML) est une extension de syntaxe pour JavaScript, recommandée par React pour décrire à quoi devrait ressembler l'interface utilisateur. Bien que React puisse être utilisé sans JSX, il est fortement recommandé car il rend le code plus lisible et plus simple à écrire.

Imaginez JSX comme une sorte de "dialecte" de JavaScript qui vous permet d'écrire du code qui ressemble étrangement à du HTML ou du XML directement dans vos fichiers JavaScript.

Exemple de JSX :

`const element = <h1>Bonjour, le monde !</h1>;`

Points clés de JSX :

Syntaxe similaire à HTML/XML : Vous écrivez des balises comme <div>, <h1>, <p>, etc., comme vous le feriez en HTML.
Intégré à JavaScript : Vous n'écrivez pas du HTML dans un fichier JavaScript ; vous écrivez des expressions JSX qui sont ensuite "transpilées" (converties) en appels de fonctions JavaScript que React peut comprendre. Par exemple, <h1>Bonjour</h1> est transpilé en React.createElement('h1', null, 'Bonjour').
Pas de guillemets autour du JSX : Lorsque vous assignez du JSX à une variable, vous ne mettez pas de guillemets autour de celui-ci (contrairement à une chaîne de caractères).
Un seul élément parent : Chaque morceau de JSX retourné par un composant doit être enveloppé dans un seul élément parent.
Correct :
JavaScript

<div>
  <h1>Titre</h1>
  <p>Paragraphe</p>
</div>
Incorrect :
JavaScript

<h1>Titre</h1>
<p>Paragraphe</p> // Deux éléments au même niveau sans parent
Solution : Fragments React (<>...</>) : Si vous ne voulez pas ajouter de div supplémentaire dans votre DOM, vous pouvez utiliser un Fragment React, qui ne crée pas d'élément réel dans le DOM.
JavaScript

<>
  <h1>Titre</h1>
  <p>Paragraphe</p>
</>
Convention className au lieu de class : Puisque class est un mot-clé réservé en JavaScript, JSX utilise className pour spécifier les classes CSS.
JavaScript

<div className="ma-classe">Contenu</div>
Attributs en camelCase : La plupart des attributs HTML sont écrits en camelCase en JSX (ex: onClick au lieu de onclick, tabIndex au lieu de tabindex).
Balises auto-fermantes : Les balises qui n'ont pas de contenu enfant doivent être auto-fermantes avec une barre oblique à la fin (<img />, <input />, <br />).
Intégration JavaScript dans JSX
L'une des plus grandes forces de JSX est sa capacité à intégrer du code JavaScript directement dans votre balisage. Cela vous permet de rendre le contenu dynamique.

Pour intégrer du JavaScript dans JSX, vous utilisez des accolades {}. Tout ce qui se trouve à l'intérieur des accolades est traité comme une expression JavaScript et son résultat est inséré dans le DOM.

Exemples :

Afficher une variable :

JavaScript

function BonjourUtilisateur(props) {
  const nom = props.nom || "Visiteur";
  return <h1>Bonjour, {nom} !</h1>; // La variable `nom` est insérée
}
// Rendu : <h1>Bonjour, John !</h1> (si props.nom est "John")
Exécuter des fonctions :

JavaScript

function AfficherHeure() {
  const dateActuelle = new Date();
  return <p>Il est actuellement : {dateActuelle.toLocaleTimeString()}.</p>;
}
// Rendu : <p>Il est actuellement : 15:30:45.</p>
Expressions mathématiques :

JavaScript

function Calculatrice() {
  const a = 10;
  const b = 5;
  return <p>La somme de {a} et {b} est : {a + b}.</p>;
}
// Rendu : <p>La somme de 10 et 5 est : 15.</p>
Propriétés d'éléments : Vous pouvez également utiliser les accolades pour définir des valeurs d'attribut dynamiques.

JavaScript

const imageUrl = "https://example.com/logo.png";
const altText = "Logo de l'entreprise";

function ImageComponent() {
  return <img src={imageUrl} alt={altText} />; // `src` et `alt` sont dynamiques
}
Gestionnaires d'événements : Les fonctions pour gérer les événements (comme les clics) sont également passées via les accolades.

JavaScript

function MonBouton() {
  function handleClick() {
    alert("Bouton cliqué !");
  }
  return <button onClick={handleClick}>Cliquez-moi</button>;
}
Ou avec une fonction fléchée en ligne :

JavaScript

function MonBoutonInline() {
  return <button onClick={() => alert("Bouton cliqué !")}>Cliquez-moi</button>;
}
Rendu conditionnel
Le rendu conditionnel en React vous permet d'afficher des éléments différents ou d'omettre des éléments en fonction de certaines conditions. C'est comme les instructions if que vous utilisez en JavaScript, mais appliquées au JSX.

Plusieurs approches sont possibles :

Instructions if classiques (en dehors du return du JSX) :
C'est la méthode la plus simple et la plus claire pour les conditions complexes.

JavaScript

function StatutUtilisateur(props) {
  const estConnecte = props.estConnecte;

  if (estConnecte) {
    return <p>Bienvenue ! Vous êtes connecté.</p>;
  }
  return <p>Veuillez vous connecter.</p>;
}
Opérateur Ternaire (condition ? vrai : faux) :
Excellent pour des conditions simples et pour insérer du JSX directement dans votre return.

JavaScript

function Panier(props) {
  const nombreArticles = props.nombreArticles;

  return (
    <div>
      <h2>Votre Panier</h2>
      {nombreArticles > 0 ? (
        <p>Vous avez {nombreArticles} article(s) dans votre panier.</p>
      ) : (
        <p>Votre panier est vide.</p>
      )}
    </div>
  );
}
Opérateur logique && (AND logique) :
Utile lorsque vous voulez rendre quelque chose seulement si une condition est vraie, et rien si elle est fausse. Si la condition de gauche est vraie, l'expression de droite (le JSX) est évaluée et rendue. Si elle est fausse, l'évaluation s'arrête et rien n'est rendu.

JavaScript

function Notification(props) {
  const aNouveauMessage = props.aNouveauMessage;

  return (
    <div>
      <h1>Votre Application</h1>
      {aNouveauMessage && <p>Vous avez de nouveaux messages !</p>}
    </div>
  );
}
Si aNouveauMessage est true, <p>...</p> est rendu.
Si aNouveauMessage est false, rien n'est rendu après le &&.
switch Statement (rarement utilisé pour le rendu, mais possible) :
Pour des cas multiples, bien que souvent l'opérateur ternaire ou une série d'if/else if soient préférés.

JavaScript

function AfficherStatut(props) {
  const statut = props.statut; // 'loading', 'success', 'error'
  let message;

  switch (statut) {
    case 'loading':
      message = <p>Chargement...</p>;
      break;
    case 'success':
      message = <p style={{ color: 'green' }}>Opération réussie !</p>;
      break;
    case 'error':
      message = <p style={{ color: 'red' }}>Une erreur est survenue.</p>;
      break;
    default:
      message = null; // Ne rien afficher par défaut
  }

  return <div>{message}</div>;
}
Listes et clés
Rendre des listes d'éléments est une tâche courante en React, par exemple, une liste de produits, d'utilisateurs ou d'éléments de menu. En React, vous pouvez rendre des listes d'éléments en utilisant la fonction map() de JavaScript sur un tableau.

L'importance des "clés" (key) :

Lorsque vous rendez une liste d'éléments, React vous demande d'inclure une propriété spéciale appelée key pour chaque élément de la liste. Les clés aident React à identifier quels éléments ont changé, sont ajoutés ou supprimés. Cela permet à React d'optimiser le processus de mise à jour du DOM virtuel et d'éviter les problèmes de performance et de comportement inattendus.

Une clé doit être unique parmi les frères et sœurs (éléments au même niveau).
Une clé doit être stable (ne doit pas changer entre les rendus).
N'utilisez pas l'index du tableau comme clé (index) si l'ordre des éléments de la liste peut changer, si des éléments peuvent être ajoutés/supprimés au milieu, ou si la liste peut être filtrée/triée. L'index ne garantit pas la stabilité.
Utilisez un ID unique et stable fourni par vos données (par exemple, un ID de base de données).
Exemple de rendu de liste :

Imaginons que vous ayez un tableau d'utilisateurs :

JavaScript

const utilisateurs = [
  { id: 1, nom: 'Alice', age: 30 },
  { id: 2, nom: 'Bob', age: 24 },
  { id: 3, nom: 'Charlie', age: 35 }
];
Maintenant, rendons cette liste dans un composant React :

JavaScript

function ListeUtilisateurs() {
  return (
    <div>
      <h2>Liste des Utilisateurs</h2>
      <ul>
        {utilisateurs.map(utilisateur => (
          // Chaque élément de la liste (li) doit avoir une clé unique
          <li key={utilisateur.id}>
            Nom: {utilisateur.nom}, Âge: {utilisateur.age}
          </li>
        ))}
      </ul>
    </div>
  );
}
Explication :

utilisateurs.map(...) : Nous utilisons la méthode map() des tableaux JavaScript pour itérer sur le tableau utilisateurs.
utilisateur => (...) : Pour chaque utilisateur dans le tableau, la fonction map retourne un élément JSX (ici, un <li>).
<li key={utilisateur.id}> : C'est ici que nous ajoutons la prop key. Nous utilisons utilisateur.id car c'est un identifiant unique et stable pour chaque utilisateur.
Qu'est-ce qui se passe si j'oublie la clé ?

React vous donnera un avertissement dans la console de votre navigateur : Warning: Each child in a list should have a unique "key" prop. Votre application fonctionnera toujours, mais vous pourriez rencontrer des problèmes de performance et de comportement indésirable dans des scénarios plus complexes (par exemple, la mise à jour incorrecte d'entrées de formulaire lors du réordonnancement d'une liste).













**///////////////////////     Module 3 : JSX et le rendu dynamique              /////////////////////////////////**
**///////////////////////     Module 4 : JSX et le rendu dynamique              /////////////////////////////////**
**///////////////////////     Module 5 : JSX et le rendu dynamique              /////////////////////////////////**
**///////////////////////     Module 6 : JSX et le rendu dynamique              /////////////////////////////////**
**///////////////////////     Module 7 : JSX et le rendu dynamique              /////////////////////////////////**
**///////////////////////     Module 8 : JSX et le rendu dynamique              /////////////////////////////////**
**///////////////////////     Module 9 : JSX et le rendu dynamique              /////////////////////////////////**
**///////////////////////     Module 10 : JSX et le rendu dynamique              /////////////////////////////////**
**///////////////////////     Module 11 : JSX et le rendu dynamique              /////////////////////////////////**



**