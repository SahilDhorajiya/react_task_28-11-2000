import { Box, Button, Typography } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Categories />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
