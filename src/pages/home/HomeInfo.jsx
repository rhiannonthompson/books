import React from "react";
import {
  Container,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import {data} from "../../data/homepageInfo"
import HomeInfoCard from "./HomeInfoCard";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
  },
  container: {
    marginTop: theme.spacing(12),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(16),
    },
    display: "flex",
    flexDirection: "column",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 300,
    textAlign: "center",
    padding: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      fontSize: 32,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 40,
    },
  },
  divider: {
    width: "40%",
    margin: "auto",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    "&.MuiDivider-root": {
      backgroundColor: "#f50057",
    },
  },
}));

export default function HomeInfo() {
  const classes = useStyles();
  const dataCards = data;
  console.log(dataCards);

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Typography
          variant="h5"
          component="h2"
          className={classes.sectionTitle}
        >
          What we will do for you
        </Typography>
        <Divider className={classes.divider} />
        <Grid
          container
          spacing={2}
          style={{
            marginTop: "60px",
          }}
        >
          {dataCards.map((dataCard) => (
            <Grid key={dataCard.id} item sm={6} md={4}>
              <HomeInfoCard dataCard={dataCard}/>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
