import React from "react";
import {
  Icon,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import MenuBookSharpIcon from "@material-ui/icons/MenuBookSharp";
import HourglassEmptySharpIcon from '@material-ui/icons/HourglassEmptySharp';
import FormatListBulletedSharpIcon from '@material-ui/icons/FormatListBulletedSharp';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    padding: theme.spacing(4),
    backgroundColor: "#f2f2f2",
  },
}));

export default function HomeInfoCard({dataCard}) {
  const classes = useStyles();

  function iconSelector(iconState) {
    let icon = null;
    switch (iconState) {
      case "1":
        icon = <FormatListBulletedSharpIcon />
        break;
      case "2":
        icon = <HourglassEmptySharpIcon />
        break;
      case "3":
        icon = <MenuBookSharpIcon />
        break;
      default:
        icon = <MenuBookSharpIcon/>
    }
    return icon;
  }

  return (
            <Paper className={classes.paper}>
              <div>
                <Icon>
                  {iconSelector(dataCard.id)}
                </Icon>
        <Typography variant="h6">{dataCard.title}</Typography>
              </div>
              <Typography variant="h6">
                {dataCard.description}
              </Typography>
            </Paper>
  );
}
