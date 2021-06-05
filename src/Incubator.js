import { useState } from "react";
import './App.css';
import { Header } from "./modules/header";

import data from "./restaurantdata";

function App() {
  const [theme, setTheme] = useState(data[0]);

  const themeColors = {
    "primaryColor": theme.primaryColor,
    "secondaryColor": theme.secondaryColor,
    "tertiaryColor": theme.tertiaryColor,
  }

  const restDropDown = {
    "name": "restaurants-drop-down",
    "label": "Select a Restaurant",
    "array": data.map(restObj => restObj.name),
  }

  const restaurant = {
    "name": theme.name,
    "image": theme.image,
    "menu": [...theme.menu],
  }

  const changeTheme = (newThemeName) => {
    let newThemeObj = data.find(restObj => (restObj.name === newThemeName))
    setTheme(newThemeObj);
  }


  return (
    <main>
      <Header title={restaurant.name} themeColors={themeColors} dropDownFunction={changeTheme} dropDownData={restDropDown}/>
    </main>
  );
}

export default App;

