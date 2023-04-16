import { Box } from "@mui/material";
import SelectionButton from "@/components/atoms/SelectionButton";

type SelectionsProps = {
  /**
   * 选项数组
   */
  selections: string[];
  /**
   * 答案
   */
  answer: string;
};

/**
 * 打乱选项
 * @param selections 所有选项
 * @return 被打乱的选项数组
 */
function ShuffleSelections(selections: string[]) {
  const originSelections = [...selections];
  const shuffledSelections = [];

  while (originSelections.length > 0) {
    const k = Math.floor(Math.random() * originSelections.length);

    shuffledSelections.push(originSelections[k]);
    originSelections.splice(k, 1);
  }

  return shuffledSelections;
}

/**
 * 显示所有选项组件
 * @param  SelectionsProps
 */
function Selections({ selections, answer }: SelectionsProps) {
  const shuffledSelections = ShuffleSelections(selections);
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "aliceblue",
        padding: "16px 80px",
        gap: 1,
        boxSizing: "border-box",
      }}
    >
      {shuffledSelections.map((selection, index) => {
        return (
          <SelectionButton
            text={selection}
            key={`selection-${index}`}
            onClick={(e) => {
              // TODO: 显示结果
              if (e.currentTarget.textContent === answer) {
                alert("正确");
              } else {
                alert("错误");
              }
            }}
          />
        );
      })}
    </Box>
  );
}

export default Selections;
