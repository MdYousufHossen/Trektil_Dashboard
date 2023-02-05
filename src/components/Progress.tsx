import { makeStyles } from "@material-ui/styles";
import { Box, Grid, Typography } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import Paper from "@mui/material/Paper";
const Progress = () => {
  const styles = useStyles();
  return (
    <Grid className={styles.container} container spacing={3}>
      <Paper className={styles.innerContainer}>
        <Typography> Number of Booking</Typography>
        <Typography> $ 3500+</Typography>
        <LinearProgress
          style={{ height: "10px", borderRadius: 5 }}
          variant="determinate"
          value={50}
        />
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography> Last </Typography>
          <Typography> 50%</Typography>
        </Box>
      </Paper>
      <Paper className={styles.innerContainer}>
        <Typography> Number of Booking</Typography>
        <Typography> $ 3500+</Typography>
        <LinearProgress
          style={{ height: "10px", borderRadius: 5 }}
          variant="determinate"
          value={50}
        />
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography> Last </Typography>
          <Typography> 50%</Typography>
        </Box>
      </Paper>
      <Paper className={styles.innerContainer}>
        <Typography> Number of Booking</Typography>
        <Typography> $ 3500+</Typography>
        <LinearProgress
          style={{ height: "10px", borderRadius: 5 }}
          variant="determinate"
          value={50}
        />
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography> Last </Typography>
          <Typography> 50%</Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

const useStyles = makeStyles({
  container: {
    display: "flex",
    margin: "20px 10px",
    justifyContent: "space-between",
  },
  innerContainer: {
    textAlign: "left",
    padding: "10px",
    width: "250px",
  },
});

export default Progress;
