import styled from "styled-components";

const DropDownBox = styled.div`

`

export const DropDown = ({dropDownLabel, optionsArray, optionsFunction}) => {
    let optionsJSXArray = optionsArray.map((optionName, optionKey) => (<option value={optionKey}>{optionName}</option>))
    return <DropDownBox>
        <label for={dropDownLabel}>{dropDownLabel}: </label>
        <select name={dropDownLabel} id={dropDownLabel} onChange={event => (optionsFunction(event.target.value))} >
            {optionsJSXArray}
        </select>
    </DropDownBox>
}