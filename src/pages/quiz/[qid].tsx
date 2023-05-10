import { Grid } from "@mui/material";
import { Quiz } from "@/types/Quiz";
import QuizTitle from "@/components/atoms/QuizTitle";
import Selections from "@/components/organisms/Selections";

export type QuizPageProps = {
  /**
   * 问题数组
   */
  quizList: Quiz[];
  /**
   * 当前问题的索引
   */
  qid?: number;
};

export default function Qid({ quizList, qid }: QuizPageProps) {
  const currentQuiz = quizList[qid || 0];
  return (
    <Grid container alignItems="center" display="flex" flexDirection="column">
      <Grid item>
        <QuizTitle text={currentQuiz.question} />
      </Grid>
      <Grid item>
        <Selections
          selections={currentQuiz.selections}
          answer={currentQuiz.answer}
        />
      </Grid>
    </Grid>
  );
}
