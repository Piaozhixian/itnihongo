import { Story, Meta } from "@storybook/react";
import { QuizPageProps, default as Qid } from "@/pages/quiz/[qid]";

export default {
  title: "Pages/Quiz",
  component: Qid,
} as Meta;

const Template: Story<QuizPageProps> = (args) => <Qid {...args} />;

export const Example = Template.bind({});
Example.args = {
  quizList: [
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
  ],
};
