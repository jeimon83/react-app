import React, { useEffect, useState } from 'react';
//import items from "./items.json"
import {Typography, Grid, Card, CardActionArea, CardMedia} from "@material-ui/core";
import {CardContent, CardActions, Button, Dialog, AppBar} from "@material-ui/core";
import {IconButton, List, ListItem, ListItemText, Toolbar} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './useStyles';
import './style.css'

const ItemListContainer = (props) => {

  const products = [
    { 
      "title": "Adidas Precision Pro 2019",
      "description": "Paleta de Padel Adidas Precision Pro 2019",
      "img": "images/adidas-precision-2019.png",
      "price": 22000,
      "inventory": 10
    },
    { 
      "title": "Varlion Avant 2",
      "description": "Paleta de Padel Varlion Avant 2",
      "img": "images/varlion-avant2.png",
      "price": 18000,
      "inventory": 10
    },
    { 
      "title": "Nox ML10 Pro Cup",
      "description": "Paleta de Padel Nox ML10 Pro Cup",
      "img": "images/nox-ml10-pro-cup.png" ,
      "price": 24000,
      "inventory": 10
    },
    { 
      "title": "Bullpadel Heat Eva 2020",
      "description": "Paleta de Padel Bullpadel Heat Eva 2020",
      "img": "images/bullpadel-heat-eva.png",
      "price": 25000,
      "inventory": 10
    }
  ];

  const classes = useStyles();
  const [cart, setCart] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [product, setProduct] = React.useState(null);

  function handleClickOpen(event, item) {
    event.persist();
    setProduct(item);
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
    <div>{props.greeting}</div>
      <div style={{ marginTop: 10, padding: 0 }}>
        <Grid container spacing={1} justify="center">
          { products.map(product => 
            <Grid item xs={6} sm={3} md={2} key={product.id}>
              <Card elevation={0}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    width="auto"
                    height="auto"
                    image={product.img}
                  />
                  <CardContent>
                    <Typography component="h2"> {product.title} </Typography>
                    <Typography variant="body2" color="primary" component="p">
                      {' '}
                      {product.price}{' '}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                <Button
                  variant={'outlined'}
                  size="small"
                  color="primary"
                  onClick={event => handleClickOpen(event, product)}
                >
                  Buy
                </Button>
              </CardActions>
              </Card>
            </Grid>
          )}
        </Grid>
        {open && product && (
        <Dialog
          key={product.id}
          className={classes.dialogue}
          fullScreen
          open={open}
          onClose={handleClose}
          BackdropProps={{ classes: { root: classes.root } }}
          PaperProps={{ classes: { root: classes.paper } }}
        >
          <AppBar position="sticky">
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="Close"
              >
              <CloseIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                {product.title}
              </Typography>
              <Button color="inherit" onClick={handleClose}>
                buy
              </Button>
            </Toolbar>
          </AppBar>
          <List className={classes.dialogue}>
            <CardMedia
              className={classes.images}
              src={product.img}
              alt={product.title}
            />
            <ListItem button>
              <ListItemText primary={product.title} secondary={product.desc} />
            </ListItem>
          </List>
        </Dialog>
      )}
      </div>
      {/* <button onClick={() => { setCart([...cart, ('Zapatillas Joma')]); } }>Cambiar Estado</button>
      <button onClick={() => { setCart([...cart].pop()); } }>Borrar el último item</button>
      <button onClick={() => { setCart([]); } }>Borrar Carro</button> */}
    </>
  );
}

export default ItemListContainer;