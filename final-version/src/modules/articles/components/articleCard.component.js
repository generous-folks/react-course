import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import { addToCart } from '../../cart/cart.actions';
import { useCart } from '../../cart/cart.context';

import { CardWrapper } from './cardWrapper.component';

const useStyles = makeStyles({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
});

const cardElementsBySize = {
  S: {
    hasViewButton: true,
    hasDescription: false,
  },
  L: {
    hasViewButton: false,
    hasDescription: true,
  },
};

export function ArticleCard({ article, size }) {
  const { name, year, image, slug, description } = article;
  const { hasViewButton, hasDescription } = cardElementsBySize[size];
  const Wrapper = CardWrapper[size];

  const classes = useStyles();
  const [, dispatch] = useCart();

  const dispatchAddToCart = () => dispatch(addToCart(article));

  return (
    <Wrapper>
      <Card className={classes.card}>
        <CardMedia className={classes.cardMedia} image={image} title={name} />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography>{year}</Typography>
          {hasDescription && <Typography>{description}</Typography>}
        </CardContent>
        <CardActions>
          <Button onClick={dispatchAddToCart} size="small" color="secondary" variant="outlined">
            Add to Cart
          </Button>
          {hasViewButton && (
            <Button
              size="small"
              component={Link}
              to={`/articles/${slug}`}
              color="primary"
              variant="outlined"
            >
              View
            </Button>
          )}
        </CardActions>
      </Card>
    </Wrapper>
  );
}

ArticleCard.propTypes = {
  article: PropTypes.shape({
    name: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    slug: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  size: PropTypes.string.isRequired,
};
