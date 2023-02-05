import { makeStyles } from "@material-ui/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

const Item = () => {
  const styles = useStyles();
  return (
    <Box className={styles.container}>
      <img
        className={styles.image}
        src="https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?b=1&s=170667a&w=0&k=20&c=KZM6TIhdaJAy28BA9sg0Sn-ZRd160F6HytdAKykza-s="
        alt=""
      />
      <Box className={styles.innerContainer}>
        <Typography>Cawin cwr</Typography>
        <Typography>Booking kfkd 1-23-2001</Typography>
      </Box>
      <ArrowForwardIcon />
    </Box>
  );
};

export default function LatestBooking() {
  return (
    <Box>
      <Item />
      <Item />
      <Item />
      <Item />
    </Box>
  );
}

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "60px",
    margin: "0 5px",
  },
  image: {
    width: "50px",
    height: "50px",
    borderRadius: "30px",
  },
  innerContainer: {
    textAlign: "left",
  },
});
