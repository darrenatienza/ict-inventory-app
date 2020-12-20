import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
const useStyles = makeStyles({
  root: {
    width: 411,
    margin: "50px auto",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
const useFormStyles = makeStyles({
  root: { marginTop: 50 },
});

const Login = (props) => {
  const classes = useStyles();
  const formclasses = useFormStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Login
        </Typography>
        <form className={formclasses.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="User Name"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="outlined-basic"
            label="User Name"
            variant="outlined"
            fullWidth
          />
        </form>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

Login.propTypes = {};

export default Login;
