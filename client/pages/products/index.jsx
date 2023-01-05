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
import { useRouter } from 'next/router'

import Layout from "../../components/Layout";
import { fetchProducts } from "../../store/apiCalls";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../../components/SearchBar";

const cards = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Products() {
  const router = useRouter()

  const dispatch = useDispatch();
  const listProducts = useSelector((state) => state.product.listProducts);

  const [sizePage, setSizePage] = useState(1);

  useEffect(() => {
    fetchProducts({page: sizePage}, dispatch);
  }, []);

  const handleChangePage = (event, newPage) => {
    setSizePage(newPage);
    fetchProducts({page: newPage}, dispatch)
  };

  const handleDetail = (item) => {
    router.push(`/products/${item.id}`)
  }

  const handleCart = () => {

  }

  return (
    <Layout pageTitle="List Products">
      <CssBaseline />
      <Container maxWidth="sm" className={styles.intro}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          List Products
        </Typography>

      </Container>
      <Container sx={{ py: 8 }} maxWidth="lg">
        <SearchBar />

        <Grid container spacing={4} marginTop={5}>
          {listProducts?.product?.map((item) => (
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
                  image={item.product_image_url}
                  alt="product_image"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.brand}
                  </Typography>
                  <Typography>
                    {item.product_name}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => handleDetail(item)}>Detail</Button>
                  <Button size="small" onClick={() => handleCart(item)}>Cart</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Stack spacing={2} alignItems="center" marginTop={10}>
          <Pagination count={listProducts?.totalPage} page={sizePage} onChange={handleChangePage} className={styles.paginate} />
        </Stack>
      </Container>
    </Layout>
  );
}
