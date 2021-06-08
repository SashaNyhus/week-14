import styled from "styled-components";
import {DropDown} from "./drop-down";
import {CartButton} from "./cart"

const PageHeader = styled.header`
    box-sizing: border-box;
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${props => props.themeColors.primaryColor};
    color: ${props => props.themeColors.tertiaryColor};
    border-bottom: 1px solid ${props => (props.themeColors.secondaryColor)};
    font-family: sans-serif;
    img {
        width: 100px;
    }
    button {
        height: 40px;
        background-color: ${props => props.themeColors.secondaryColor};
        color: ${props => props.themeColors.tertiaryColor};
        border: 1px solid ${props => props.themeColors.secondaryColor}; 
        &:hover{
            background-color: ${props => props.themeColors.tertiaryColor};
            color: ${props => props.themeColors.secondaryColor};
        }
    }
`

export const Header = ({logo, title, themeColors, dropDownFunction, dropDownData, cartTotal, cartButtonFunction}) => {
    return <PageHeader themeColors={themeColors} >
        <img src={logo} />
        <h1>{title}</h1>
        <CartButton cartTotal={cartTotal} cartButtonFunction={cartButtonFunction}/>
        <DropDown dropDownWidth="200px" dropDownData={dropDownData} dropDownFunction={dropDownFunction} themeColors={themeColors}/>
    </PageHeader>
}

