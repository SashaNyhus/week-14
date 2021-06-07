import { useState } from "react";
import './App.css';
import { Header } from "./modules/header";
import { RestaurantMenu } from "./modules/restaurant-menu";

import data from "./restaurantdata";

function App() {
  const [theme, setTheme] = useState(data[0]);

  const themeColors = {
    primaryColor: theme.primaryColor,
    secondaryColor: theme.secondaryColor,
    tertiaryColor: theme.tertiaryColor,
  }

  const restDropDown = {
    name: "restaurants-drop-down",
    label: "Select a Different Restaurant",
    array: data.map(restObj => restObj.name),
  }

  const restaurant = {
    name: theme.name,
    logo: theme.logo,
    logoNoText: theme.logoNoText,
    menu: [...theme.menu],
  }

  const changeTheme = (newThemeName) => {
    let newThemeObj = data.find(restObj => (restObj.name === newThemeName))
    setTheme(newThemeObj);
  }


  return (
    <main>
      <Header logo={restaurant.logoNoText} title={restaurant.name} themeColors={themeColors} dropDownFunction={changeTheme} dropDownData={restDropDown}/>
      <RestaurantMenu menu={restaurant.menu} themeColors={themeColors} />
    </main>
  );
}

export default App;

