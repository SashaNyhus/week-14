import { useState } from "react";
import './App.css';
import { Header } from "./modules/header";

import data from "./restaurantdata";

function App() {
  const [theme, setTheme] = useState(data[0]);

  const changeTheme = (newThemeKey) => {
    let newThemeObj = data[newThemeKey];
    setTheme(newThemeObj);
  }


  return (
    <main>
      <Header theme={theme} changeTheme={changeTheme} data={data}/>
    </main>
  );
}

export default App;

