import { useState } from "react";
import './App.css';
import styled from "styled-components"
import data from "./starwarsdata";
import {Character} from "./character"


const AppBody = styled.div`
  text-align: center;
`
const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

function App() {
  const [characters, setCharacters] = useState(data);

  // in case anyone is still having trouble with list management, this should help
  const deleteCharacter = i => {
    const trimmedList = characters.filter((character, index) => i !== index);
    setCharacters(trimmedList);
  }

  const resetCharacterList = () => setCharacters(data);

  return (
    <AppBody>
      <AppHeader>
        {characters.map((character, i) => (
          <Character 
            key={`${i}-character`}
            deleteCharacter={() => deleteCharacter(i)}
            {...character}
          />
        ))}
      </AppHeader>
      <button onClick={resetCharacterList}>Reset</button>
    </AppBody>
  );
}

export default App;




