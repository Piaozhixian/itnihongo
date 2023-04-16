import { Grid } from "@mui/material";
import QuizTitle from "@/components/atoms/QuizTitle";
import Selections from "@/components/organisms/Selections";

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
    >
      <Grid item width="100%" height="40%">
        <QuizTitle text="IT日语测试" />
      </Grid>
      <Grid item width="100%" height="60%">
        <Selections selections={["开始测试"]} answer={"开始测试"} />
      </Grid>
    </Grid>
  );
}

export default IndexPage;
