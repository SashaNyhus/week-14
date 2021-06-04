import styled from "styled-components";
import {DropDown} from "./drop-down";



export const Header = ({theme, changeTheme, data}) => {
    let restaurantNamesArray = data.map(restObj => restObj.name)
    return <PageHeader theme={theme} >
        <h1>{theme.name}</h1>
        <DropDown dropDownLabel="Choose a Restaurant" optionsArray={restaurantNamesArray} optionsFunction={changeTheme} />
    </PageHeader>
}

const PageHeader = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.tertiaryColor}
`