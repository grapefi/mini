import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core';

import ListItemLink from '../ListItemLink';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AccountButton from './AccountButton';
import mvLogo from '../../assets/img/MINIVERSELOGO.png';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    color: '#322f32',
    'background-color': 'rgba(44, 62, 80,0.65) !important',
    'webkit-backdrop-filter': 'blur(8px);backdrop-filter: blur(8px)',

    borderBottom: '1px solid RGBA(52, 152, 219, 0.65)',

    padding: '10px',
    marginBottom: '3rem',
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  hide: {
    display: 'none',
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    fontFamily: 'monospace',
    fontSize: '28px',
    flexGrow: 1,
  },
  link: {
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: '18px',
    marginTop: '15px',
    margin: theme.spacing(10, 1, 1, 2),
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
      color: '#BBA14F',
    },
  },
  brandLink: {
    textDecoration: 'none',
    color: '#e0e3bd',
    '&:hover': {
      textDecoration: 'none',
    },
  },
}));

const Nav = () => {
  const matches = useMediaQuery('(min-width:900px)');
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="sticky" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        {matches ? (
          <>
            <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
              {/* <a className={ classes.brandLink } href="/">2omb Finance</a> */}
              <Link to="/" color="inherit" className={classes.brandLink}>
                  <img alt="MiniVerse" src={mvLogo} height="60px" style={{marginTop: '20px'}} />
                </Link>
            </Typography>

            <Box mr={5}>
              <Link color="textPrimary" to="/" className={classes.link}>
                Home
              </Link>
              <Link color="textPrimary" to="/farms" className={classes.link}>
                Farms
              </Link>
              <Link color="textPrimary" to="/boardroom" className={classes.link}>
                Boardroom
              </Link>
              <Link color="textPrimary" to="/bonds" className={classes.link}>
                Bonds
              </Link>
              {/* <Link color="textPrimary" to="/dividends" className={classes.link}>
                Dividends
              </Link> */}
              {/* <Link color="textPrimary" to="/sbs" className={classes.link}>
                SBS
              </Link>
              <Link color="textPrimary" to="/liquidity" className={classes.link}>
                Liquidity
              </Link>
              <Link color="textPrimary" to="/regulations" className={classes.link}>
                Regulations
              </Link> */}
             
  
              <a target="_blank" href="https://miniversefinance.gitbook.io/docs/" className={classes.link}>
                Docs
              </a>

            </Box>
            <AccountButton text="Connect" />
          </>
        ) : (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              MiniVerse Finance
            </Typography>

            <Drawer
              className={classes.drawer}
              onEscapeKeyDown={handleDrawerClose}
              onBackdropClick={handleDrawerClose}
              variant="temporary"
              anchor="left"
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
              </div>
              <Divider />
              <List>
                <ListItemLink primary="HOME" to="/" />
                <ListItemLink primary="FARMS" to="/farms" />
                <ListItemLink primary="BOARDROOM" to="/boardroom" />
                <ListItemLink primary="BONDS" to="/bonds" />
                {/* <ListItemLink primary="DIVIDENDS" to="/dividends" /> */}
                {/* <ListItemLink primary="SBS" to="/sbs" />
                <ListItemLink primary="Liquidity" to="/liquidity" />
                <ListItemLink primary="Regulations" to="/regulations" /> */}
                <ListItem button component="a" href="https://miniversefinance.gitbook.io/docs/">
                  <ListItemText>DOCS</ListItemText>
                </ListItem>
                <ListItem style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <AccountButton text="Connect" />
                </ListItem>
              </List>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
