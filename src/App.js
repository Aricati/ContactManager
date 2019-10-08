import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./components/Contacts/Contacts";
import Header from "./components/Layout/Header";
import About from "./components/Pages/About";
import { Provider } from "./Context";
import AddContact from "./components/Contacts/AddContact";
import EditContact from "./components/Contacts/EditContact";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NotFound from "./components/Pages/NotFound";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router basename={process.env.PUBLIC_URL}>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route
                  exact
                  path="/"
                  component={Contacts}

                  // Add more components in react route

                  /* render={props => (
                    <div>
                      <AddContact />
                      <Contacts />
                    </div>
                   )}    */
                />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
