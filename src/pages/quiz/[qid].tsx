import { GetStaticPaths, GetStaticProps } from "next";
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
  qid: string;
  /**
   * 当前问题的信息
   */
  currentQuiz: Quiz;
};

export default function Qid({ currentQuiz }: QuizPageProps) {
  return (
    <Grid container alignItems="center" display="flex" flexDirection="column">
      <Grid item>
        <QuizTitle text={currentQuiz.question} />
      </Grid>
      <Grid item>
        <Selections
          selections={currentQuiz.selections}
          answer={currentQuiz.answer}
          onSelectionClick={() => {
            alert("test");
          }}
        />
      </Grid>
    </Grid>
  );
}

// 生成动态路由
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { qid: "0" } }, { params: { qid: "1" } }],
    fallback: false,
  };
};

// 获取动态路由的数据
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const quizList = [
    {
      id: 1,
      question: "Question 1",
      selections: ["A", "B", "C", "D"],
      answer: "A",
    },
    {
      id: 2,
      question: "Question 2",
      selections: ["A", "B", "C", "D"],
      answer: "B",
    },
  ];

  const qid = Number(params?.qid) || 0;
  const currentQuiz = quizList[qid] || quizList[0];

  return {
    props: {
      quizList,
      qid,
      currentQuiz,
    },
  };
};
