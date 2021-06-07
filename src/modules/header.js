import styled from "styled-components";
import {DropDown} from "./drop-down";

const PageHeader = styled.header`
    box-sizing: border-box;
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${props => props.themeColors.primaryColor};
    color: ${props => props.themeColors.tertiaryColor};
    /* border: 3px solid ${props => (props.themeColors.secondaryColor)}; */
    font-family: sans-serif;
    img {
        width: 100px;
    }
`

export const Header = ({logo, title, themeColors, dropDownFunction, dropDownData}) => {
    return <PageHeader themeColors={themeColors} >
        <img src={logo} />
        <h1>{title}</h1>
        <DropDown dropDownWidth="200px" dropDownData={dropDownData} dropDownFunction={dropDownFunction} themeColors={themeColors}/>
    </PageHeader>
}

