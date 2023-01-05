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
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getUserLogin } from "../store/apiCalls";
import CustomImageList from "../components/ImageList";

const inter = Inter({ subsets: ["latin"] });
const cards = [1, 2, 3, 4, 5, 6];

export default function Home() {
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem("access_token")
    if (!token) {
      router.push("/auth")
    } else {
      getUserLogin(dispatch)
    }
  }, [])

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
        <Container sx={{ py: 8, alignItems:"center" }} maxWidth="md">
            <CustomImageList />
        </Container>
      </main>
    </Layout>
  );
}
