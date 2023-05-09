import { Button, Grid } from "@mui/material";

function IndexPage() {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      width="600px"
      height="500px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      style={{ background: "aliceblue" }}
    >
      <Button
        variant="outlined"
        style={{ fontFamily: "sans-serif", background: "white" }}
        onClick={() => {
          alert("start");
        }}
      >
        开始测试
      </Button>
    </Grid>
  );
}

export default IndexPage;
