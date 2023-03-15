import { Grid } from "@mui/material";
import QuizTitle from "@/components/atoms/QuizTitle";
import Selections from "@/components/organisms/Selections";

type SelectionPageProps = {
  quizTitle: string;
  selections: string[];
  answer: string;
};
function SelectionPage({ quizTitle, selections, answer }: SelectionPageProps) {
  return (
    <Grid container direction="column" alignItems="center">
      <QuizTitle text={quizTitle} />
      <Selections selections={selections} answer={answer} />
    </Grid>
  );
}
export default SelectionPage;
