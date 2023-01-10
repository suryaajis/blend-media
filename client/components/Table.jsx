import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function TableComponent({ current, handleCheckout }) {
  const listCart = useSelector((state) => state.cart.listCart);

  return (
    <React.Fragment>
      <h1>List {current}</h1>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Total Price</TableCell>
            <TableCell>Checkout</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listCart.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.Product.product_name}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>
                {+row.quantity * +row.Product.product_price}
              </TableCell>
              <TableCell>
                <IconButton onClick={() => handleCheckout(row)}>
                  <ShoppingCartIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <Stack>
        <Pagination
          count={listProducts?.totalPage}
          page={page}
          onChange={handleChangePage}
          className={styles.paginate}
        />
      </Stack> */}
    </React.Fragment>
  );
}
