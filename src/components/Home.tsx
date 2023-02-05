import { makeStyles } from "@material-ui/styles";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chart from "./Charts";
import LatestBooking from "./LatestBooking";
import Orders from "./Orders";
import Progress from "./Progress";
import Review from "./Review";

const Home = () => {
  const styles = useStyles();
  return (
    <Container maxWidth="lg" sx={{ mb: 4 }}>
      <Progress />
      <Grid container spacing={3}>
        {/* Latest Looking */}
        <Grid item xs={12} md={5} lg={4}>
          <Paper className={styles.latestLooking}>
            <LatestBooking />
          </Paper>
        </Grid>
        {/* Chart */}
        <Grid item xs={12} md={7} lg={8}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            <Chart />
          </Paper>
        </Grid>

        {/* Booking Summary*/}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Orders />
          </Paper>
        </Grid>
      </Grid>
      <Review />
    </Container>
  );
};

const useStyles = makeStyles({
  latestLooking: {
    p: 2,
    display: "flex",
    flexDirection: "column",
    height: 240,
  },
});
export default Home;
