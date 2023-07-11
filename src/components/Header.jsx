import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Badge } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ShoppingBasket } from "@mui/icons-material";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#4821b4",
    },
  },
});

const Header = ({ handleCart, orderLen }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="span" sx={{ flexGrow: 1 }}>
            IT shop
          </Typography>
          <IconButton onClick={handleCart} color="inherit">
            <Badge color="secondary" badgeContent={orderLen}>
              <ShoppingBasket />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
