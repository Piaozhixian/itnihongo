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
 * 显示所有选项组件
 * @param  SelectionsProps
 */
function Selections({ selections, answer }: SelectionsProps) {
  return (
    <Box sx={{ width: 200, display: "flex", flexDirection: "column", gap: 1 }}>
      {selections.map((selection, index) => {
        return <SelectionButton text={selection} key={`selection-${index}`} />;
      })}
    </Box>
  );
}

export default Selections;
