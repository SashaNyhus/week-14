import styled from "styled-components";

const ModalBox = styled.div`
    position: absolute;
    background-color: ${props => props.themeColors.primaryColor};
    border: 3px solid ${props => props.themeColors.secondaryColor};
    height: 50%;
    width: 50%;
    overflow: auto;
    top: 25%;
    left: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bold;
    color: ${props => props.themeColors.tertiaryColor};

    td {
        padding: 10px;
    }

    button {
        /* height: 40px; */
        background-color: ${props => props.themeColors.secondaryColor};
        color: ${props => props.themeColors.tertiaryColor};
        border: 1px solid ${props => props.themeColors.secondaryColor}; 
        &:hover{
            background-color: ${props => props.themeColors.tertiaryColor};
            color: ${props => props.themeColors.secondaryColor};
        }
    }
`


export const CartButton = ({cartTotal, cartButtonFunction}) => {
    return <button onClick={cartButtonFunction}>{`View Cart ($${cartTotal})`}</button>
}

export const CartModal = ({order, toggleCartModal, removeFromOrder, themeColors}) => {
    let itemsList = order.items.map(itemObj => {
        return <tr>
            <td>{itemObj.quantity}</td>
            <td>{itemObj.name}</td>
            <td>{`$${itemObj.total}`}</td>
            <td><button onClick={() => removeFromOrder(itemObj.name)}> {itemObj.removing ? "Confirm": ""} Remove</button></td>
        </tr>})
    return <ModalBox themeColors={themeColors}>
        <table>
            {itemsList}
        </table>
        <h3>Order total: ${order.totalPrice}</h3>
        <button onClick={toggleCartModal}>Close</button>
    </ModalBox>
}