import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import styles from "./index.module.css";
import { useRouter } from "next/router";

import Layout from "../../components/Layout";
import { fetchFavorites } from "../../store/apiCalls";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../../components/SearchBar";

export default function Favorites() {
  const router = useRouter();
  const dispatch = useDispatch();
  const listFavorites = useSelector((state) => state.favorite.listFavorites);

  useEffect(() => {
    fetchFavorites(dispatch);
  }, []);

  const handleCart = () => {};

  const handleDelete = () => {};

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
                  <Button size="small" onClick={() => handleCart(item)}>
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
      </Container>
    </Layout>
  );
}
