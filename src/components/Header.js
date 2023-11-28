import { Badge, Box, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useEffect } from "react";
const Header = () => {
  const count = localStorage.getItem("badgeCount");
  return (
    <Box className="sec_p heder_container">
      <Box>
        <Button>Home</Button>
        <Button>Products</Button>
        <Button>Support</Button>
        <Button>Appliances</Button>
      </Box>
      <Box>
        <Badge badgeContent={count} color="primary">
          <ShoppingCartIcon color="action" />
        </Badge>
      </Box>
    </Box>
  );
};

export default Header;
