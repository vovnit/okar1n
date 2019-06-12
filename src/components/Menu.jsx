import React from 'react';
import { Menu, Popup, List, Button, Image, Header, Icon } from 'semantic-ui-react';

const CartComponent = ({ title, id, image, removeFromCart }) => (
  <List selection divided verticalAlign="middle">
    <List.Item>
      <List.Content floated="right">
        <Button onClick={removeFromCart.bind(this, id)} color="red">
          Удалить
        </Button>
      </List.Content>
      <Image avatar src={image} />
      <List.Content>{title}</List.Content>
      <List.Content floated="right">
      <Button onClick={removeFromCart.bind(this, id)} color="green">
        Оплатить
      </Button>
      </List.Content>
    </List.Item>
  </List>

);

const MenuComponent = ({ totalPrice, count, items, handleItemClick }) => (



  <Menu>
  <Menu.Item>
        <img src='/logo4.png' />
      </Menu.Item>
  <Header as='h1' color="teal">

    <Header.Content>&nbsp; Магазин спортивного питания</Header.Content>
  </Header>
    <Menu.Menu position="right">
      <Menu.Item name="signup" onClick={this.handleItemClick}>
        Итого: &nbsp; <b>{totalPrice}</b>&nbsp;руб.
      </Menu.Item>

      <Popup
        trigger={
          <Menu.Item name="help" onClick={this.handleItemClick}>
            Корзина (<b>{count}</b>)
          </Menu.Item>
        }
        content={items.map(product => <CartComponent {...product} />)}
        on="click"
        hideOnScroll
      />
    </Menu.Menu>
  </Menu>
);

export default MenuComponent;
