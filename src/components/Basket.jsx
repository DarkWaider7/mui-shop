import { ShoppingBasket } from "@mui/icons-material";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import BasketItem from "./BasketItem";

export const Basket = ({
  cartOpen,
  closeCart = Function.prototype,
  order = [],
  removeFromOrder,
}) => {
  return (
    <Drawer anchor="right" open={cartOpen} onClose={closeCart}>
      Basket
      <List sx={{ width: "400px" }}>
        <ListItem>
          <ListItemIcon>
            <ShoppingBasket />
          </ListItemIcon>
          <ListItemText primary="Basket"></ListItemText>
        </ListItem>
        <Divider />
        {!order.length ? (
          <ListItem>basket empty</ListItem>
        ) : (
          order.map((item) => {
            return (
              <BasketItem
                key={item.name}
                removeFromOrder={removeFromOrder}
                {...item}
              />
            );
          })
        )}
        <Divider />
        <ListItem>
          <Typography sx={{ fontWeight: 700 }}>
            Total cost:{" "}
            {order.reduce((acc, item) => {
              return acc + item.price * item.quantity;
            }, 0)}{" "}
            usd
          </Typography>
        </ListItem>
      </List>
    </Drawer>
  );
};
