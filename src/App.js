import React from "react";
import "./App.css";
import Logo from "./components/Logo";
import ContactForm from "./components/Contact";
import Services from "./components/Services";

const App = () => {
  return (
    <div className="app">
      <Logo />
      <Services />
      <ContactForm />
    </div>
  );
};

export default App;
