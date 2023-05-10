import { Grid } from "@mui/material";
import QuizTitle from "@/components/atoms/QuizTitle";
import Selections from "@/components/organisms/Selections";

type SelectionPageProps = {
  quizTitle: string;
  selections: string[];
  answer: string;
};
function SelectionPage({
  quizTitle = "quiz",
  selections = ["A", "B", "C", "D"],
  answer = "A",
}: SelectionPageProps) {
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
        <QuizTitle text={quizTitle} />
      </Grid>
      <Grid item width="100%" height="60%">
        <Selections selections={selections} answer={answer} />
      </Grid>
    </Grid>
  );
}
export default SelectionPage;
