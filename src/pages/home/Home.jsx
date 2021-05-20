import React from "react";
import { CssBaseline, makeStyles } from "@material-ui/core";
import MainHeader from "./HomeHeader";
import HomeInfo from "./HomeInfo";

const useStyles = makeStyles((theme) => ({
  image: {
    minHeight: "100vh",
    minWidth: "100vw",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/images/book.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.image}>
        <CssBaseline />
        <MainHeader />
      </div>
      <HomeInfo/>
    </>
  );
}
