import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import "./App.scss";
function App() {
  return (
    <div className="App">
      <div className="container">
      <Router>
        <Header></Header>
        <Route path={'/'} exact  component={Home}/>
        <Route path={'/movie/:imdbID'} exact component={MovieDetail}/>
        <Route component={PageNotFound}/>
        <Footer/>
      </Router>
      </div>
    </div>
  );
}

export default App;
