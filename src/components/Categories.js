import { useEffect, useState } from "react";
import { api } from "../api/api";
import { Box, Typography } from "@mui/material";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const getAllCategories = async () => {
    let cat = await api("https://api.escuelajs.co/api/v1/categories");
    setCategories(cat?.data);
  };
  useEffect(() => {
    getAllCategories();
  }, []);
  return (
    <Box className="sec_p cat_sec">
      {categories.slice(0, 4)?.map((Item) => {
        return (
          <Box>
            <img height={"234px"} src={Item?.image} />
            <Typography fontWeight={700} variant="h4">
              {Item?.name}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default Categories;
