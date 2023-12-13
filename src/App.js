// Import des composants nécessaires depuis les fichiers spécifiés
import Description from './components/Description'; // Composant Description
import Price from './components/Price'; // Composant Price
import Image from './components/Image'; // Composant Image
import Name from './components/Name'; // Composant Name
import Button from 'react-bootstrap/Button'; // Bouton de Bootstrap pour React
import Card from 'react-bootstrap/Card'; // Carte de Bootstrap pour React
import Navbars from './components/Navbar'; // Composant Navbar

// Fonction principale App qui rend l'application
function App() {
  // Définition d'une variable "nom" avec la valeur "Simon"
  const nom = "Simon";

  // Rendu des éléments JSX
  return (
    <div>
      {/* Composant Navbar pour la navigation */}
      <Navbars/>

      {/* Section pour afficher les cartes */}
      <div className='cards'> 
        {/* Carte Bootstrap avec certaines propriétés de style */}
        <Card style={{ width: '18rem', marginLeft: '150px', marginTop: '20px' }}>
          {/* Condition pour afficher le composant Image si "nom" n'est pas vide */}
          {nom !== '' && <Image/> }
          <Card.Body>
            {/* Titre de la carte contenant le composant Name */}
            <Card.Title><Name/></Card.Title>
            {/* Description de la carte contenant le composant Description */}
            <Card.Text><Description/></Card.Text>
            {/* Affichage du prix à l'aide du composant Price */}
            <Card.Text> <Price/> </Card.Text>
            {/* Bouton pour ajouter au panier */}
            <Button variant="primary">Ajouter Au panier</Button>
          </Card.Body>
        </Card>
        
        {/* Affichage conditionnel du message de salutation en fonction de "nom" */}
        <h2>  {nom === "" ? "Hello There !" : `Hello ${nom}`  } </h2>
        
      </div>
    </div>
  );
}

// Export de la fonction App comme composant par défaut
export default App;
