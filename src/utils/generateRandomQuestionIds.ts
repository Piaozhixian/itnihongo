/**
 * 生成不重复的十个随机数字作为问题ID
 * @param maxNum 数字的上限
 * @returns 十个不重复的随机数字数组
 */
export default function generateRandomQuestionIds(maxNum: number) {
  const numbers = [];
  const generatedNumbers = new Set();

  // 如果上限小于10，则返回空数组
  if (maxNum < 10) {
    return [];
  }

  // 生成十个不重复的随机数字
  while (numbers.length < 10) {
    const randomNumber = Math.floor(Math.random() * (maxNum + 1));

    if (!generatedNumbers.has(randomNumber)) {
      numbers.push(randomNumber);
      generatedNumbers.add(randomNumber);
    }
  }

  return numbers;
}
