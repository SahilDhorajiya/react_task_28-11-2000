import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { api } from "../api/api";

const Products = () => {
  const [products, setProducts] = useState([]);
  const getAllProducts = async () => {
    let product = await api("https://api.escuelajs.co/api/v1/products");
    setProducts(product?.data);
  };
  const addToCart = (Itm) => {
    let count = localStorage.getItem("badgeCount");
    let Fcount = Number(count) + 1;
    localStorage.setItem("badgeCount", Fcount);
  };
  useEffect(() => {
    getAllProducts();
    localStorage.setItem("badgeCount", 0);
  }, []);
  return (
    <Box className="product_sec">
      <Box>
        <Typography variant="h2">Our Products</Typography>
      </Box>

      <Box className="product_container">
        {products?.slice(0, 9)?.map((Itm) => {
          return (
            <Card className="product_card">
              <CardContent className="Product_Container">
                <img height={"400px"} src={Itm?.images[0]} />{" "}
                <Box className="product_content">
                  <Typography variant="h4"> {Itm?.title}</Typography>{" "}
                  <Box display={"flex"}>
                    <Typography variant="h4">${Itm?.price}</Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        textDecoration: "line-through",
                        color: "#b0b0b0",
                        paddingLeft: "10px",
                      }}
                    >
                      ${Itm?.price + Itm?.price}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
              <CardActions>
                <Button
                  sx={{
                    width: "100%",
                  }}
                  variant="contained"
                  onClick={() => {
                    addToCart(Itm);
                  }}
                >
                  Add To Cart
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default Products;
