import { Button, Grid } from "@mui/material";
import Link from "next/link";

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
      <Link href="/quiz/0">
        <Button
          variant="outlined"
          style={{ fontFamily: "sans-serif", background: "white" }}
          onClick={() => {
            alert("start");
          }}
        >
          开始测试
        </Button>
      </Link>
    </Grid>
  );
}

export default IndexPage;
