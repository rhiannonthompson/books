import React from "react";
import {
  makeStyles,
  Button,
  Card,
  CardContent,
  Typography,
  CardActions,
  Container,
} from "@material-ui/core";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 375,
    minHeight: 200,
    marginTop: theme.spacing(3),
  },
  title: {
    paddingTop: theme.spacing(3),
    fontSize: 20,
    textAlign: "center",
  },
  button: {
    margin: "auto",
  },
}));

export default function PublicReadingLists() {
  const classes = useStyles();
  const history = useHistory();

  function handlePageChange() {
    return history.push("/book");
  }

  return (
    <Container className={classes.root}>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Temp Book Lists
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={handlePageChange}
            className={classes.button}
            variant="contained"
            color="primary"
          >
            View Books
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
