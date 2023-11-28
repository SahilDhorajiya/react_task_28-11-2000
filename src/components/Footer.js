import { Box, Divider, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box display={"flex"} justifyContent={"center"} flexDirection={"row"}>
      <Typography variant="subtitle1">About us</Typography>
      <Divider orientation="vertical" flexItem />
      <Typography variant="subtitle1">FAQ'S</Typography>
      <Divider orientation="vertical" />
      <Typography variant="subtitle1">Terms & Conditions</Typography>
      <Divider orientation="vertical" />
      <Typography variant="subtitle1">Privacy Policy</Typography>
      <Divider orientation="vertical" />
    </Box>
  );
};

export default Footer;
