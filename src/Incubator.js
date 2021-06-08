import { useState } from "react";
import './App.css';
import styled from "styled-components";
import { Header } from "./modules/header";
import { RestaurantMenu } from "./modules/restaurant-menu";
import { Footer } from "./modules/footer";

import { data } from "./restaurantdata";
import { footerData } from "./footer-data";
import { CartModal } from "./modules/cart";

const MainBox = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: ${props => props.themeColors.tertiaryColor};
`

function App() {
  const [theme, setTheme] = useState(data[0]);
  const [order, setOrder] = useState({items: [], totalPrice: 0});
  const [showCartModal, setShowCartModal] = useState(false);

  const themeColors = {
    primaryColor: theme.primaryColor,
    secondaryColor: theme.secondaryColor,
    tertiaryColor: theme.tertiaryColor,
  }

  const restDropDown = {
    name: "restaurants-drop-down",
    label: "Select a Different Restaurant",
    array: data.map(restObj => restObj.name),
  }

  const restaurant = {
    name: theme.name,
    logo: theme.logo,
    logoNoText: theme.logoNoText,
    menu: [...theme.menu],
  }

  const changeTheme = (newThemeName) => {
    let newThemeObj = data.find(restObj => (restObj.name === newThemeName))
    setTheme(newThemeObj);
  }

  const addToOrder = (newItemName, newItemQuantity) => {
    let newOrder = {...order};
    let newItemData = restaurant.menu.find(menuItem => (menuItem.name === newItemName));
    let newItemTotal = (newItemQuantity * newItemData.price);
    let indexInOrder = newOrder.items.findIndex(itemObj => (itemObj.name === newItemName));
    //if the item is something that isn't in the order yet, create new object
    if(indexInOrder === -1){
      let newItemObj = {name: newItemName, quantity: newItemQuantity, total: newItemTotal, removing: false};
      newOrder.items.push({...newItemObj});
    }
    //otherwise edit the existing object
    else {
      newOrder.items[indexInOrder].quantity += newItemQuantity;
      newOrder.items[indexInOrder].total += newItemTotal;
    }
    newOrder.totalPrice += newItemTotal;
    setOrder(newOrder);
  }

  const removeFromOrder = (itemName) => {
    let newOrder = {...order};
    let indexInOrder = newOrder.items.findIndex(itemObj => (itemObj.name === itemName));
    if(newOrder.items[indexInOrder].removing === true){
      newOrder.items.splice(indexInOrder, 1)
    }
    else {
      newOrder.items[indexInOrder].removing = true;
    }
    setOrder(newOrder);
  }

  const toggleCartModal = () => {
    console.log("show cart")
    setShowCartModal(!showCartModal)
  }


  return (
    <MainBox themeColors={themeColors}>
      <Header 
        logo={restaurant.logoNoText} 
        title={restaurant.name} 
        themeColors={themeColors} 
        dropDownFunction={changeTheme} 
        dropDownData={restDropDown} 
        cartTotal={order.totalPrice} 
        cartButtonFunction={toggleCartModal}
      />
      <RestaurantMenu menu={restaurant.menu} themeColors={themeColors} buttonFunction={addToOrder} />
      <Footer data={footerData} buttonFunction={changeTheme} themeColors={themeColors} />
      {showCartModal && <CartModal order={order} toggleCartModal={toggleCartModal} removeFromOrder={removeFromOrder} themeColors={themeColors}/>}
    </MainBox>
  );
}

export default App;

