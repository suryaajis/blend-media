import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import styles from "./order.module.css"
import { createProduct, deleteProduct, deleteUser, editUser, fetchProducts, fetchUsers, registerUser } from "../../store/apiCalls"
import { useDispatch, useSelector } from "react-redux"
import { Button, Divider, IconButton } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Orders(props) {
  const { current } = props
  const dispatch = useDispatch()

  const listProducts = useSelector((state) => state.product.listProducts);
  const listUsers = useSelector((state) => state.user.listUsers);
  const [page, setPage] = React.useState(1)
  const [openAdd, setOpenAdd] = React.useState(false);
  const [openAddProduct, setOpenAddProduct] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false)
  const [openEditProduct, setOpenEditProduct] = React.useState(false)
  const [user, setUser] = React.useState({
    id: null,
    name: "",
    email: ""
  })
  const [product, setProduct] = React.useState({
    product_id: "",
    product_name: "",
    brand: "",
    product_price: 0,
    product_info: "",
    product_image_url: "",
    real_pdp_url: "",
  })

  React.useEffect(() => {
    if (current == "Users") {
      fetchUsers(dispatch)
    } else if (current == "Products") {
      fetchProducts({ page }, dispatch)
    }
  }, [])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    fetchProducts({ page: newPage }, dispatch)
  };

  const handleAddItem = (set) => {
    if (set == "user") {
      setOpenAdd(true)
    } else if (set == "product") (
      setOpenAddProduct(true)
    )
  }

  const addUser = (event) => {
    const data = new FormData(event.currentTarget);
    const payload = {
      name: data.get('fullname'),
      email: data.get('email'),
      password: data.get('password'),
    }
    registerUser(payload, dispatch)
    fetchUsers(dispatch)
    setOpenAdd(false)
  }

  function generateString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }

  const addProduct = (event) => {
    const data = new FormData(event.currentTarget);
    const payload = {
      product_id: generateString(Math.random()),
      product_name: data.get('product_name'),
      brand: data.get('brand'),
      product_price: +data.get('product_price'),
      product_info: data.get('product_info'),
      product_image_url: data.get('product_image_url'),
      real_pdp_url: data.get('real_pdp_url'),
    }
    createProduct(payload, dispatch)
    fetchProducts({ page: 1 }, dispatch)
    setOpenAddProduct(false)
  }

  const handleEditUser = (event, item) => {
    editUser(user.id, user)
    fetchUsers(dispatch)
    setOpenEdit(false)
  }

  return (
    <React.Fragment>
      <h1>List {current}</h1>
      {current === "Products" ? (
        <>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Brand</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Info</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listProducts?.product?.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.product_name}</TableCell>
                  <TableCell>{row.brand}</TableCell>
                  <TableCell>{row.product_price}</TableCell>
                  <TableCell>{row.product_info}</TableCell>
                  <TableCell className={styles.tableF}>
                    <IconButton>
                      <EditIcon />
                    </IconButton>
                    <Divider orientation="vertical" flexItem />
                    <IconButton onClick={() => deleteProduct(row.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Stack>
            <Pagination count={listProducts?.totalPage} page={page} onChange={handleChangePage} className={styles.paginate} />
          </Stack>

          <Button onClick={() => handleAddItem("product")} variant='contained' sx={{ width: "100%", height: 30, marginTop: 5 }}>ADD</Button>
        </>
      ) : (
        <>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listUsers?.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell sx={{ display: 'flex' }}>
                    <IconButton onClick={() => {
                      setUser({
                        id: row.id,
                        name: row.name,
                        email: row.email
                      })
                      setOpenEdit(true)
                    }}>
                      <EditIcon />
                    </IconButton>
                    <Divider orientation="vertical" flexItem />
                    <IconButton onClick={() => {
                      deleteUser(row.id)
                      fetchUsers(dispatch)
                    }}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Button onClick={() => handleAddItem("user")} variant='contained' sx={{ width: "100%", height: 30, marginTop: 5 }}>ADD</Button>
        </>
      )}

      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={openAdd}
          onClose={() => setOpenAdd(!openAdd)}
          closeAfterTransition
        >
          <Fade in={openAdd}>
            <Box sx={style} component="form" noValidate onSubmit={addUser}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="fullname"
                    required
                    fullWidth
                    id="fullname"
                    label="Full Name"
                    autoFocus
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Add User
              </Button>
            </Box>
          </Fade>
        </Modal>
      </div>

      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={openEdit}
          onClose={() => setOpenEdit(!openEdit)}
          closeAfterTransition
        >
          <Fade in={openEdit}>
            <Box sx={style} >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="fullname"
                    required
                    fullWidth
                    id="fullname"
                    label="Full Name"
                    autoFocus
                    value={user.name}
                    onChange={(event) => setUser({ ...user, name: event.target.value })}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={user.email}
                    onChange={(event) => setUser({ ...user, email: event.target.value })}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleEditUser}
              >
                Edit
              </Button>
            </Box>
          </Fade>
        </Modal>
      </div>

      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={openAddProduct}
          onClose={() => setOpenAddProduct(!openAddProduct)}
          closeAfterTransition
        >
          <Fade in={openAddProduct}>
            <Box sx={style} component="form" noValidate onSubmit={addProduct}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="product_name"
                    required
                    fullWidth
                    id="product_name"
                    label="Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="brand"
                    label="Brand"
                    name="brand"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="product_price"
                    label="Price"
                    id="product_price"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="product_info"
                    label="Info"
                    id="product_info"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="product_image_url"
                    label="Image URL"
                    id="product_image_url"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="real_pdp_url"
                    label="Real PDP URL"
                    id="real_pdp_url"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Add Product
              </Button>
            </Box>
          </Fade>
        </Modal>
      </div>

      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={openEditProduct}
          onClose={() => setOpenEditProduct(!openEditProduct)}
          closeAfterTransition
        >
          <Fade in={openEditProduct}>
            <Box sx={style} component="form" noValidate onSubmit={addProduct}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="product_name"
                    required
                    fullWidth
                    id="product_name"
                    label="Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="brand"
                    label="Brand"
                    name="brand"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="product_price"
                    label="Price"
                    id="product_price"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="product_info"
                    label="Info"
                    id="product_info"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="product_image_url"
                    label="Image URL"
                    id="product_image_url"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="real_pdp_url"
                    label="Real PDP URL"
                    id="real_pdp_url"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Add Product
              </Button>
            </Box>
          </Fade>
        </Modal>
      </div>
    </React.Fragment>
  );
}