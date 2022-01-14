import React from "react";
import accounting from "accounting";
import { Button, makeStyles } from "@material-ui/core";
import { getBasketTotal } from "../reducer";
import { useStateValue } from '../StateProvider';

const useStyles = makeStyles((theme) =>({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "20vh",
    },
    button: {
        maxWidth: "200px",
        marginTop: "2rem",
    }
}));

const TotalCarrito = () => {
    const classes = useStyles();
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className={classes.root}>
            <h5>Total articulos: {basket?.length}</h5>
            <h5>{accounting.formatMoney(getBasketTotal(basket), "Q")}</h5>
            <Button className={classes.button} variant="contained" color="secondary">
                Confirmar
            </Button>
        </div>
    )
}
export default TotalCarrito;