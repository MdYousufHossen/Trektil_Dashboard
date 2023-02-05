import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BarChartIcon from "@mui/icons-material/BarChart";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LayersIcon from "@mui/icons-material/Layers";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import * as React from "react";
import { Link } from "react-router-dom";
export const MainListItems = () => {
  const [toggle, setToggle] = React.useState(true);

  return (
    <React.Fragment>
      <Link to="/">
        <ListItemButton>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
      </Link>
      <ListItemButton onClick={() => setToggle((prev) => !prev)}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
        <ListItemIcon>
          <ArrowForwardIosIcon />
        </ListItemIcon>
      </ListItemButton>
      <Box>
        {toggle && (
          <MenuList
            style={{
              textAlign: "center",
              width: "50%",
              margin: "0 0  0 auto",
            }}
            id="composition-menu"
            aria-labelledby="composition-button"
          >
            <Link to="/order">
              <MenuItem>Orders</MenuItem>
            </Link>
            <Link to="/chart">
              <MenuItem>Chart</MenuItem>
            </Link>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        )}
      </Box>

      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Integrations" />
      </ListItemButton>
    </React.Fragment>
  );
};
