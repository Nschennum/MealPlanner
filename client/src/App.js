import React, { Component } from "react";
import AppNavbar from "./components/Navbar";
import RecipeModal from "./components/recipeModal";
import RecipeList from "./components/RecipeList";
import ShoppingList from "./components/ShoppingList";
import ItemModal from "./components/itemModal"; 
import { Container } from 'reactstrap'; 
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from './actions/authActions';

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'

library.add(faUtensils)

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container className="outer">
          <Container>
            <RecipeModal/>
          <RecipeList/>
          </Container>
          <Container className="right">
          <ItemModal/> 
          <ShoppingList/>
          </Container>
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
