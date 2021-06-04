import styled from "styled-components"

const Planet = styled.div`
    height: 200px;
    width: 200px;
    border: 1px solid white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${props => props.backgroundColor};

    h2 {
        font-size: 2rem;
        font-weight: lighter;
    }
`

const Button = styled.button`
    display: block;
    background-color: white;
    color: black;
    border: none;
    padding: .5rem 1rem;
    border-radius: 25px;
    ${props => props.warning ? `
        background-color:red
    `: ""}

`

export const Character = ({ title, age, homeworld, destiny, url, worldColor, deleteCharacter }) => (
    <Planet backgroundColor={worldColor}>
      <h2>{title}</h2>
      <Button warning={homeworld === "Alderaan"} onClick={deleteCharacter}>Delete</Button>
    </Planet>
  );