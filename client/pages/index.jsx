import styles from "../styles/Home.module.css";
import Head from "next/head";
import { Inter } from "@next/font/google";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Layout from "../components/Layout"
import CarouselImage from "../components/Carousel";

const inter = Inter({ subsets: ["latin"] });
const cards = [1, 2, 3, 4, 5, 6];

export default function Home() {
  return (
    <Layout pageTitle="Home Page">
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <CarouselImage />
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
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            iBox adalah Apple Premium Reseller terkemuka di Indonesia yang
            mengkhususkan diri dalam produk-produk Apple dan berbagai macam
            aksesoris pelengkap, software dan produk lainnya.
          </Typography>
        </Container>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
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
            ))}
          </Grid>
        </Container>
      </main>
    </Layout>
  );
}
