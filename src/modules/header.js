import styled from "styled-components";
import {DropDown} from "./drop-down";

const PageHeader = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${props => props.themeColors.primaryColor};
    color: ${props => props.themeColors.tertiaryColor};
    border: 3px solid ${props => (props.themeColors.secondaryColor)};
`

export const Header = ({ title, themeColors, dropDownFunction, dropDownData}) => {
    return <PageHeader themeColors={themeColors} >
        <h1>{title}</h1>
        <DropDown themeColors={themeColors} dropDownData={dropDownData} dropDownFunction={dropDownFunction} />
    </PageHeader>
}

