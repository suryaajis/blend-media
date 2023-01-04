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

import Layout from "../../components/Layout";
import { fetchProducts } from "../../store/apiCalls";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const cards = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Products() {
  const dispatch = useDispatch();
  const listProducts = useSelector((state) => state.product.listProducts);

  const [sizePage, setSizePage] = useState(1);

  useEffect(() => {
    //
    fetchProducts(sizePage, dispatch);
  }, []);

  const handleChangePage = (event, newPage) => {
    setSizePage(newPage);
  };

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
          iBox
        </Typography>
      </Container>

      <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={4}>
          {/* {listProducts?.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={3}>
              <Card
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
                key={card.product_id}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    pt: "56.25%",
                  }}
                  image="https://source.unsplash.com/random"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe
                    the content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View</Button>
                  <Button size="small">Edit</Button>
                </CardActions>
              </Card>
            </Grid>
          ))} */}
        </Grid>
        <Stack spacing={2}>
          <Pagination count={10} page={sizePage} onChange={handleChangePage} className={styles.paginate} />
        </Stack>
      </Container>
    </Layout>
  );
}
