// src/App.jsx ( ou src/App.js)
import './index.css';
import './App.css'; // import les styles spécifique à App
import MonAutreComposant from './MonAutreComposant'; // Path must be correct!

function App() {
  const nomUtilisateur = "Développeur React" // Une variable JavaScript
  return (
    <div className="App">{/* Le JSX doit être enveloppée dns un seul élement parent*/}
      <h1>Bonjour, {nomUtilisateur} <img src="/src/assets/react.svg" alt="" /></h1> {/* Utilisez des accolades pour insérer du JS dans le JSX */}
      <p>Bienvenue à votre premier cours React. </p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => alert('Vous avez cliqué sur le bouton !')}>Cliquez-moi</button>
      <MonAutreComposant /> {/* Nous allons créer ce composant juste après*/}
    </div>
  );
}

// Assurez-vous d'exporter le composant pour qu'il puisse être utilisé ailleurs
export default App; 