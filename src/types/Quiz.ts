/**
 * 问题类型
 */
export type Quiz = {
  /**
   * ID
   */
  id: number;
  /**
   * 问题标题
   */
  question: string;
  /**
   * 选项（暂定4个）
   */
  selections: string[];
  /**
   * 答案
   */
  answer: string;
};
