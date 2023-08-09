import React from "react";
import SearchForm from "./components/SerachForm";
import Stories from "./components/Stories";
import Buttons from "./components/Buttons";
import "./App.css";

function App() {
  return (
    <>
      <SearchForm />
      <Buttons />
      <Stories />
    </>
  );
}

export default App;
