import { Box, Button, Typography } from "@mui/material";

const Banner = () => {
  return (
    <Box className="banner_sec">
      <Box>
        <Typography variant="h3" className="banner_heading">
          Best Selling Products!
        </Typography>
        <Button variant="contained">View Product</Button>
      </Box>
    </Box>
  );
};
export default Banner;
