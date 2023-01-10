import { Grid, Paper } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Layout from "../../components/Layout";
import TableComponent from "../../components/Table";
import { deleteCart, fetchCarts } from "../../store/apiCalls";

export default function Cart() {
  const dispatch = useDispatch();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetchCarts(dispatch);
  }, [refresh]);

  const handleCheckout = (item) => {
    if (confirm("Submit paid for checkout item?")) {
      deleteCart(item.id);
      setRefresh(!refresh);
    }
  };

  return (
    <Layout pageTitle="Checkout">
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <TableComponent current="Cart" handleCheckout={handleCheckout} />
          </Paper>
        </Grid>
      </Container>
    </Layout>
  );
}
