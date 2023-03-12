import { Button } from "@mui/material";

type SelectionButtonProps = {
  /**
   * 按钮中显示的文字
   */
  text: string;
};

/**
 * 选项按钮组件
 * @param SelectionButtonProps
 */
function SelectionButton({ text }: SelectionButtonProps) {
  return (
    <Button variant="outlined" style={{ fontFamily: "sans-serif" }}>
      {text}
    </Button>
  );
}
export default SelectionButton;
