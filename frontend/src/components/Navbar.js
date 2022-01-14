import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { ShoppingCart } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "7rem",
  },
  appBar: {
    backgroundColor: "whitesmoke",
    boxShadow: "none",
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  image: {
      marginRight: "10px",
      height: "5rem"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Link to="/">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <img src="https://blogesfera.com/wp-content/uploads/2015/02/tiendaonline-1280x720.png" className={classes.image} />
            </IconButton>
          </Link>

          <div className={classes.grow} />

          <Typography variant="h6" color='textPrimary' component="p">
            Hola usuario
          </Typography>
          <div className={classes.button}>
              <Link to="/signin">
              <Button variant="outlined">
                <strong>Sing In</strong>
              </Button>
              </Link>
              <Link to="/carrito">
                <IconButton aria-label='Carrito' color='inherit'>
                  <Badge badgeContent={basket?.length} color='secondary'>
                    <ShoppingCart fontSize='large' color='primary'/>
                  </Badge>
                </IconButton>
              </Link>

          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
