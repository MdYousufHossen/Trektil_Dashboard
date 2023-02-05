import { makeStyles } from "@material-ui/styles";
import Star from "@mui/icons-material/Star";
import { Box, Paper, Typography } from "@mui/material";

const Item = () => {
  const styles = useStyles();
  return (
    <Paper className={styles.container}>
      <img
        className={styles.image}
        src="https://source.unsplash.com/random"
        alt="random"
      />
      <Typography>Mr Jhon</Typography>
      <Box>
        <Star className={styles.icon} />
        <Star className={styles.icon} />
        <Star className={styles.icon} />
      </Box>
      <Typography className={styles.textDesc}>
        You got your car fixed in short period of time and the price was fair?
        Than copy one of these car service review examples and post it on the
        repair shop page along with the 5 stars. Help the small business owners
        get better reviews and more costumers.
      </Typography>
    </Paper>
  );
};

const Review = () => {
  return (
    <Box style={{ marginTop: "50px" }}>
      <Paper style={{ margin: "10px", padding: "10px" }}>
        <Typography textAlign={"left"} variant="h5">
          Review
        </Typography>
      </Paper>

      <Box style={{ display: "flex" }}>
        <Item />
        <Item />
        <Item />
      </Box>
    </Box>
  );
};

const useStyles = makeStyles({
  container: {
    width: "300px",
    margin: "20px 10px",
    padding: "10px",
  },
  image: {
    width: "50px",
    height: "50px",
    borderRadius: "30px",
  },
  icon: {
    color: "#FFC107",
  },
  textDesc: {
    textAlign: "justify",
  },
});

export default Review;
