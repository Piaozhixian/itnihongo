import { Button } from "@mui/material";
import { MouseEventHandler } from "react";

type SelectionButtonProps = {
  /**
   * 按钮中显示的文字
   */
  text: string;
  /**
   * 点击按钮时的处理
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

/**
 * 选项按钮组件
 * @param SelectionButtonProps
 */
function SelectionButton({ text, onClick }: SelectionButtonProps) {
  return (
    <Button
      variant="outlined"
      style={{ fontFamily: "sans-serif", background: "white" }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
export default SelectionButton;
