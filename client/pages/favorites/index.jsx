import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import styles from "./index.module.css";
import { useRouter } from "next/router";

import Layout from "../../components/Layout";
import { deleteFavorite, fetchFavorites, postCart } from "../../store/apiCalls";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, TextField } from "@mui/material";
import { Box } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Favorites() {
  const router = useRouter();
  const dispatch = useDispatch();
  const listFavorites = useSelector((state) => state.favorite.listFavorites);
  const [refresh, setRefresh] = useState(false);
  const [cartModal, setCartModal] = useState(false);
  const [productPrice, setProductPrice] = useState(0);
  const [cart, setCart] = useState({
    quantity: 0,
    price: 0,
    product_id: null,
  });

  useEffect(() => {
    fetchFavorites(dispatch);
  }, [refresh]);

  const handleQuantity = (event) => {
    setCart({
      ...cart,
      quantity: event.target.value,
      price: +productPrice * +event.target.value,
    });
  };

  const handleCart = () => {
    const payload = {
      quantity: cart.quantity,
      product_id: cart.product_id,
    };
    
    postCart(payload, dispatch);
    setCartModal(false);
    setCart({
      quantity: 0,
      price: 0,
      product_id: null,
    });
    router.push("/carts");
  };

  const handleDelete = (item) => {
    deleteFavorite(item.id);
    setRefresh(!refresh);
  };

  return (
    <Layout pageTitle="List Favorites">
      <CssBaseline />
      <Container maxWidth="sm" className={styles.intro}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          List Favorites
        </Typography>
      </Container>
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={4} marginTop={5}>
          {listFavorites?.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={3}>
              <Card
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  image={item.Product.product_image_url}
                  alt="product_image"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.Product.brand}
                  </Typography>
                  <Typography>{item.Product.product_name}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => {
                      setCartModal(true);
                      setCart({
                        ...cart,
                        product_id: item.Product.id,
                      });
                      setProductPrice(item.Product.product_price);
                    }}
                  >
                    Cart
                  </Button>
                  <Button size="small" onClick={() => handleDelete(item)}>
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Modal
          open={cartModal}
          onClose={() => setCartModal(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Cart
            </Typography>
            <TextField
              id="quantity"
              label="Quantity"
              variant="outlined"
              sx={{ mt: 2 }}
              onChange={handleQuantity}
              value={cart.quantity}
            />
            <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
              Total Price : {cart.price}
            </Typography>
            <Button size="small" variant="contained" onClick={handleCart}>
              Submit
            </Button>
          </Box>
        </Modal>
      </Container>
    </Layout>
  );
}
