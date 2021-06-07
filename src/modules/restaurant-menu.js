import styled from "styled-components";

const MenuBox = styled.div`
    min-height: 100%;
    width: 100%;
    background-color: ${props => props.themeColors.tertiaryColor};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    h2 {
        width: 100%;
        text-align: center;
        text-transform: uppercase;
        color: ${props => props.themeColors.primaryColor};
    }
`
const ItemBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    img {
        width: 200px;
        border: 2px solid ${props => props.themeColors.primaryColor};
    }
`
const ItemInfoBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    h3 {
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            color: ${props => props.themeColors.secondaryColor};
    }
    button {
        width: 100%;
        border: none;
        background-color: ${props => props.themeColors.primaryColor};
        color: ${props => props.themeColors.secondaryColor};
        &:hover {
            background-color: ${props => props.themeColors.secondaryColor};
            color: ${props => props.themeColors.primaryColor};
        }
    }
`


export const RestaurantMenu = ({menu, themeColors}) => {
    let MenuItemsArray = menu.map(itemObj => <MenuItem itemObj={itemObj} themeColors={themeColors}/>)
    return <MenuBox themeColors={themeColors}>
        <h2>Menu</h2>
        {MenuItemsArray}
    </MenuBox>
}

const MenuItem = ({itemObj, themeColors}) => {
    return <ItemBox themeColors={themeColors}>
        <img src={itemObj.image} alt={itemObj.name} />
        <ItemInfoBox themeColors={themeColors}>
            <h3>{itemObj.name}</h3>
            <h3>{`$${itemObj.price}`}</h3>
            <button>Add to Order</button>
        </ItemInfoBox>
    </ItemBox>
}