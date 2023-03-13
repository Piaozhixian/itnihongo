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
  const shuffledSelections = [];

  while (selections.length > 0) {
    const k = Math.floor(Math.random() * selections.length);

    shuffledSelections.push(selections[k]);
    selections.splice(k, 1);
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
    <Box sx={{ width: 200, display: "flex", flexDirection: "column", gap: 1 }}>
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
