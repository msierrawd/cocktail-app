// Imports
import React, { useState } from "react";
import axios from "axios"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

// Base URL for API
const RCOCKTAIL_URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

class App extends React.Component {
  render(){
    return (
      <Router>
        <div className="page">
          <nav className = "navFormatting">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/random">Random Cocktail</Link>
              </li>
              <li>
                <Link to="/resource">API Used</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/random">
              <Random />
            </Route>
            <Route path="/resource">
              <Resourse />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

class Home extends React.Component {
  render(){
    return (
      <div className="divFormatting">
              <h2></h2>
      </div>
    )
  }
}

class Resourse extends React.Component {
  render(){
    return (
      <div className="divFormatting">
              <h2> Search Cocktail</h2>
      </div>
    )
  }
}

class Random extends React.Component{
  render(){
    return(
      <div>
        <RandomButtonGenerate/>
      </div>
    )
  }
}

// Returns Random Cocktail
function RandomButtonGenerate(){

  const [drinkName, setDrinkName] = useState("")
  const [drinkThumb, setDrinkThumb] = useState("")
  const [drinkAlcoholic, setDrinkAlchoholic] = useState("")

const getRandomCocktail = () => {
  axios.get(RCOCKTAIL_URL).then((response) => {
    setDrinkName(<h1 className="liFormatting">{response.data.drinks[0].strDrink}</h1>)
    setDrinkThumb(<img className="imageFormatting "src={response.data.drinks[0].strDrinkThumb}></img>)
    setDrinkAlchoholic(<h3>Alchohol: {response.data.drinks[0].strAlcoholic}</h3>)
  })
}

return(
  <div className="divFormatting">
    {drinkName}
    {drinkThumb}
    {drinkAlcoholic}
    <button className="buttonFormatting" onClick={getRandomCocktail}>Random Cocktail</button>
  </div>
)

}



export default App;