import React from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';

import { ArticleCard } from './articleCard.component';

import { useArticlesSelector } from '../articles.hooks';


const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export function ArticlesList() {
  const classes = useStyles();
  const articles = useArticlesSelector();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {articles.map(article => (
          <ArticleCard key={article.id} { ... article } />
        ))}
      </Grid>
    </Container>
  );
}
