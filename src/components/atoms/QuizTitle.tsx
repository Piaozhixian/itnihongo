import { Grid, Typography } from "@mui/material";
import styles from "@styles/components/atoms/QuizTitle.module.css";

type QuizTitleProps = {
  /**
   * 问题文字
   */
  text: string;
};

/**
 * 问题文字组件
 * @param QuizTitleProps
 */
function QuizTitle({ text }: QuizTitleProps) {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100%"
      className={styles.title}
    >
      <Typography variant="h3">{text}</Typography>
    </Grid>
  );
}
export default QuizTitle;
