import {Typography, makeStyles} from '@material-ui/core';
import NextLink from 'next/link';
import getConfig from 'next/config';

const {publicRuntimeConfig: {APP_NAME}} = getConfig();

const useStyles = makeStyles((theme) => ({
  copyright: {
    marginBottom: theme.spacing(6),
  },
}));

const Copyright = () => {
  const classes = useStyles();

  return (
    <Typography variant="body2" color="textSecondary" align="center" className={classes.copyright}>
      {'Copyright © '}
      <NextLink href="/">
        <a href="/">{APP_NAME || ''}</a>
      </NextLink>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export default Copyright;
