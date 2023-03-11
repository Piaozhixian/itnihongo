import {Button} from '@mui/material';

type SelectionButtonProps = {
  text: string
}

/**
 * 选项按钮组件
 * @param text 按钮中显示的文字
 */
function SelectionButton({text}: SelectionButtonProps) {
  return <Button variant='outlined'>{text}</Button>
}
export default SelectionButton;