import React, { useState } from "react";
import {
  makeStyles,
  useTheme,
  useMediaQuery,
  AppBar,
  Toolbar,
  Hidden,
} from "@material-ui/core";
import Logo from "./Logo";
import Menu from "./Menu";
import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";
import HamburgerIcon from "./HamburgerIcon";

const NavigationBar = () => {
  const isMobile = useMediaQuery("(max-width:700px)");
  const theme = useTheme();
  const [scroll, setScroll] = useState(false);
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);
  const classes = useStyles({ scroll, isMobile });
  const handleNav = () => setScroll(window.scrollY > 30);
  window.addEventListener("scroll", handleNav);
  const appBarVariants = {
    initial: { height: isMobile ? 70 : 100, boxShadow: theme.shadows[0] },
    scrolled: { height: theme.navbarHeight, boxShadow: theme.shadows[10] },
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        delay: 0.2,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <AppBar
        position="fixed"
        elevation={0}
        className={classes.navbar}
        component="nav"
      >
        <Toolbar
          className={classes.toolbar}
          component={motion.div}
          variants={appBarVariants}
          animate={scroll ? "scrolled" : "initial"}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <Logo className={classes.logo} />
          <Hidden smDown>
            <Menu />
          </Hidden>
          <Hidden mdUp>
            <HamburgerIcon
              isOpen={mobileNavIsOpen}
              onClick={() => setMobileNavIsOpen(!mobileNavIsOpen)}
            />
          </Hidden>
        </Toolbar>
      </AppBar>
      <Hidden mdUp>
        <MobileMenu
          open={mobileNavIsOpen}
          onClose={() => setMobileNavIsOpen(false)}
          onOpen={() => setMobileNavIsOpen(true)}
        />
      </Hidden>
    </motion.div>
  );
};

const useStyles = makeStyles((theme) => ({
  logo: {
    width: "150px",
  },
  navbar: {
    backgroundColor: theme.palette.background.default,
  },
  toolbar: {
    justifyContent: "space-between",
    padding: (props) =>
      props.isMobile ? theme.spacing(0, 2) : theme.spacing(0, 6),
  },
}));

export default NavigationBar;
