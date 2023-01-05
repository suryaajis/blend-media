import { useRouter } from "next/router"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getDetailProduct } from "../../store/apiCalls"
import styles from "./id.module.css"
import Link from "next/link"

import Container from "@mui/material/Container";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Layout from "../../components/Layout"


export default function DetailProduct() {
    const router = useRouter()
    const dispatch = useDispatch()
    const { id } = router.query

    const product = useSelector((state) => state.product.detailProduct)

    useEffect(() => {
        getDetailProduct(id, dispatch)
    }, [id])

    if (!product) {
        return (
            <Container maxWidth="md">
                <Skeleton variant="text" sx={{ fontSize: '5rem' }} />
                <Skeleton variant="rectangular" width={"100%"} height={200} />
                <Skeleton variant="rounded" width={"100%"} height={200} />
            </Container>
        )
    } else {
        return (
            <Layout pageTitle="Detail Product">
                <Container maxWidth="md" className={styles.container} >
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        {product?.product_name}
                    </Typography>
                    <Card sx={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                    }}>
                        <CardMedia
                            sx={{ height: 800 }}
                            image={product?.product_image_url}
                            alt="detail image product"

                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" component="h3">
                                Brand : {product?.brand} <br />
                                Price : {product?.product_price} <br />
                                Stock : {product?.product_info} <br />
                                <Link href={product?.real_pdp_url || ""} color="lightblue">Source iBox</Link>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="large" variant="contained">Cart</Button>
                        </CardActions>
                    </Card>
                </Container>
            </Layout>
        )
    }
}