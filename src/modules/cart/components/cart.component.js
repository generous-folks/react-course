import React from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { Modal } from '../../../components/modal.component';
import { useCart } from '../cart.context';

const useStyles = makeStyles({
  card: {
    minHeight: '400px',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
});


export function Cart() {
  const classes = useStyles();
  const [showModal, setShowModal] = React.useState(false);
  const [{ articles }] = useCart();

  const toggleModal = () => setShowModal(!showModal);

  return (
    <>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            Cart
          </Typography>
          {Object.values(articles).map(article => (
            <Typography key={article.id}>{article.name} - x{article.occurrences || 1}</Typography>
          ))}
        </CardContent>
        <CardActions>
          <Button onClick={toggleModal} size="small" color="secondary" variant="outlined">
            Check out
          </Button>
        </CardActions>
      </Card>
      {showModal &&
        <Modal title="Checkout modal" closeModal={() => setShowModal(false)} >
          <p>checkout</p>
        </Modal>
      }
    </>
  );
}
