import styled from "styled-components";

const DropDownHeader = styled.button`
    height: 40px;
    border: none;
    width: 100%;
    background-color: ${props => props.themeColors.secondaryColor};
    color: ${props => props.themeColors.tertiaryColor};
    border: 1px solid ${props => props.themeColors.secondaryColor};
`

const DropDownOption = styled(DropDownHeader)`
    animation-delay: ${props => props.animationDelay};
    transform: rotateY(270deg);
`
    
const DropDownBox = styled.div`
    height: 40px;
    width: ${props => props.dropDownWidth};
    &:hover {
        ${DropDownHeader} {
            background-color: ${props => props.themeColors.tertiaryColor};
            color: ${props => props.themeColors.secondaryColor};
        }
        ${DropDownOption} {
            visibility: visible;
            animation-name: rotateIn;
            animation-duration: 0.75s;
            animation-fill-mode: forwards;
            &:hover {
                background-color: ${props => props.themeColors.secondaryColor};
                color: ${props => props.themeColors.tertiaryColor};
            }
        }
        /* idk why this one's not working... it just disappears with no animation */
    &:not(:hover) {
        ${DropDownOption} {
            animation-name: rotateOut;
            animation-duration: 1s;
            animation-fill-mode: forwards;
        }
    }
    }
    @keyframes rotateIn {
        from {transform: rotateY(270deg);}
        to {transform: rotateY(360deg);}
    }
    @keyframes rotateOut {
        from {transform: rotateY(360deg);}
        to {transform: rotateY(270deg);}
    }
`

export const DropDown = ({dropDownWidth, dropDownData, dropDownFunction, themeColors}) => {
    let optionsArray = dropDownData.array;
    let optionButtonsArray = optionsArray.map((optionName, optionIndex) => {
        return <DropDownOption 
            themeColors={themeColors} 
            id={optionName}
            animationDelay={((optionIndex + 1) * .2) + "s"}
            onClick={() => dropDownFunction(optionName)}>
                {optionName}</DropDownOption>})
    return <DropDownBox dropDownWidth={dropDownWidth} themeColors={themeColors}>
        <DropDownHeader themeColors={themeColors}>{dropDownData.label}</DropDownHeader>
        {optionButtonsArray}
    </DropDownBox>
}


// OLD DROPDOWN - uses html <select>
// export const DropDown = ({dropDownData, dropDownFunction}) => {
//     let optionsArray = dropDownData.array
//     let optionsJSXArray = optionsArray.map((optionName) => (<option value={optionName}>{optionName}</option>))
//     return <DropDownBox>
//         <label for={dropDownData.name}>{dropDownData.label}: </label>
//         <select name={dropDownData.name} id={dropDownData.name} onChange={event => (dropDownFunction(event.target.value))} >
//             {optionsJSXArray}
//         </select>
//     </DropDownBox>
// }