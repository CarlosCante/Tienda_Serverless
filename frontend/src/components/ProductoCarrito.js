import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import DeleteIcon from '@material-ui/icons/Delete';
import accounting from 'accounting';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  cardAction: {
      display: "flex",
      justifyContent: "space-between",
  },
  cardRating: {
      display: "flex",
  }
}));

export default function ProductoCarrito({product: {id, name, productType, price, rating, image, description}}) {
  const classes = useStyles();
  const [{basket}, dispatch] = useStateValue();

  const removeItem = () => dispatch({
    type: actionTypes.REMOVE_ITEM,
    id: id,
  });

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <Typography
            className={classes.action}
            variant='h5'
            color='textSecondary'
          >
            {accounting.formatMoney(price, 'Q')}
          </Typography>
        }
        title={name}
        subheader="Disponible"
      />
      <CardMedia
        className={classes.media}
        image={image}
        title={name}
      />
      
      <CardActions disableSpacing className={classes.cardAction}>
        <div className={classes.cardRating}>
            {Array(rating)
            .fill()
            .map((_, i) => (
                <p>&#11088;</p>
            ))}
        </div>

        <IconButton onClick={removeItem}>
            <DeleteIcon fontSize='large'/>
        </IconButton>
      </CardActions>
    </Card>
  );
}
