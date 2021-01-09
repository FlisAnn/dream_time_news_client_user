import React, { useState } from "react";
import DisplayArticlesData from "./components/DisplayArticlesData";
import SingleArticle from "./components/SingleArticle";
import { Switch, Route } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm";

const App = () => {
  const [selectRegisterForm, setRegisterForm] = useState();
  const onHandleSubmit = async (e) => {
    let selection = await RegistrationForm();
    setRegisterForm(selection);
  }

  return (
    <>
      <h1>Hello Dream Time News!</h1>

      <button onClick={(e) => onHandleSubmit()}>Register here!</button>

      <Switch>
        <Route exact path="/" component={DisplayArticlesData}></Route>
        <Route exact path="/articles/:id" component={SingleArticle}></Route> 
      </Switch>

      {selectRegisterForm}
      
    </>
  );
};

export default App;
