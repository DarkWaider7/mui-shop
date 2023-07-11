import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const GoodsItem = (props) => {
  const { name, price, poster, setOrder } = props;

  return (
    <Grid item xs={12} md={4} className="col-12 col-md-6 px-md-2">
      <Card
        className="card"
        sx={{
          height: "100%",
        }}>
        <CardMedia
          image={poster}
          component="img"
          className="card-img-top"
          alt={name}
          title={name}
          sx={{ height: 140 }}
        />
        <CardContent className="card-body">
          <Typography className="card-title" variant="h6" component="h5">
            {name}
          </Typography>
          <Typography className="card-text" variant="body1">
            Price: {price} usd.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            className="btn btn-primary"
            variant="contained"
            onClick={() =>
              setOrder({
                id: props.id,
                name: props.name,
                price: props.price,
              })
            }>
            Buy
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default GoodsItem;
