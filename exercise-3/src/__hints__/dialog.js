/* eslint-disable react/display-name */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */

import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/styles';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import instructionsMd from './instructions.md';

const renderers = {
  code: ({ language, value }) => {
    return <SyntaxHighlighter style={vscDarkPlus} language={language} children={value} />;
  },
};

const useStyles = makeStyles({
  position: {
    position: 'fixed',
    bottom: 10,
    right: 10,
  },
  dialog: {
    maxHeight: 'unset',
    padding: '2em',
  },
});

export function SeeHints() {
  const [open, setOpen] = React.useState(false);
  const [markdownFile, setMarkdownFile] = React.useState('');

  const classes = useStyles();

  React.useEffect(() => {
    fetch(instructionsMd)
      .then(res => res.text())
      .then(setMarkdownFile)
      .catch(console.error);
  }, [instructionsMd]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.position}>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        Help
      </Button>
      <Dialog
        fullWidth
        maxWidth="md"
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
        PaperProps={{ className: classes.dialog }}
      >
        <ReactMarkdown renderers={renderers} children={markdownFile} />
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
