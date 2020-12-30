/* eslint-disable react/display-name */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */

import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles, useTheme } from '@material-ui/styles';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import gfm from 'remark-gfm';
import instructionsMd from './instructions.md';
import { lighten } from '@material-ui/core';

const renderers = {
  code: ({ language, value }) => {
    return <SyntaxHighlighter style={vscDarkPlus} language={language} children={value} />;
  },
};

const useStyles = makeStyles(theme => ({
  position: {
    position: 'fixed',
    bottom: 10,
    right: 10,
  },
  dialog: {
    maxHeight: 'unset',
    padding: '2em',
  },
  table: {
    ['& table']: {
      display: 'table',
      width: '100%',
      borderCollapse: 'collapse',
      borderSpacing: 0,

      '& tr': {
        color: 'inherit',
        display: 'table-row',
        verticalAlign: 'middle',
        // We disable the focus ring for mouse, touch and keyboard users.
        outline: 0,
        '&$hover:hover': {
          backgroundColor: theme.palette.action.hover,
        },
        '&$selected, &$selected:hover': {
          backgroundColor: 'rgba(255,255,255,0.8)',
        },
      },

      ['& th, td']: {
        ...theme.typography.body2,
        fontSize: '15px',
        display: 'table-cell',
        verticalAlign: 'inherit',
        // Workaround for a rendering bug with spanned columns in Chrome 62.0.
        // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
        borderBottom: `1px solid rgba(0,0,0,0.25)`,
        textAlign: 'left',
        padding: theme.spacing(2),
      },
      '& th': {
        fontWeight: 'bold',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      },
      ['& tr:nth-child(2n+1)']: {
        backgroundColor: lighten(theme.palette.primary.light, 0.9),
      },
    },
  },
}));

export function SeeHints() {
  const [open, setOpen] = React.useState(false);
  const [markdownFile, setMarkdownFile] = React.useState('');

  const theme = useTheme();

  const classes = useStyles(theme);

  React.useEffect(() => {
    fetch(instructionsMd)
      .then(res => res.text())
      .then(setMarkdownFile)
      .catch(console.error);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.position}>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        README
      </Button>
      <Dialog
        fullWidth
        maxWidth="md"
        scroll="body"
        onClose={handleClose}
        open={open}
        PaperProps={{ className: classes.dialog }}
      >
        <ReactMarkdown
          className={classes.table}
          plugins={[gfm]}
          renderers={renderers}
          children={markdownFile}
        />
      </Dialog>
    </div>
  );
}

export const ExerciseContainer = ({ children }) => (
  <>
    {children}
    <SeeHints />
  </>
);
