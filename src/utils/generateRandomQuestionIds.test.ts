import generateRandomQuestionIds from "./generateRandomQuestionIds";
describe("generateRandomQuestionIds", () => {
  test("should generate an array of 10 unique random numbers within the specified range", () => {
    const maxNum = 100;
    const questionIds = generateRandomQuestionIds(maxNum);

    expect(questionIds).toHaveLength(10); // 验证生成的数组长度为10

    // 验证生成的数组中的数字是否唯一
    const uniqueSet = new Set(questionIds);
    expect(uniqueSet.size).toBe(questionIds.length);

    // 验证生成的数字是否在指定范围内
    questionIds.forEach((id) => {
      expect(id).toBeGreaterThanOrEqual(0); // 验证数字大于等于0
      expect(id).toBeLessThanOrEqual(maxNum); // 验证数字小于等于指定的最大值
    });
  });

  test("should return undefined if the maximum number is less than 10", () => {
    const maxNum = 5;
    const questionIds = generateRandomQuestionIds(maxNum);

    expect(questionIds).toStrictEqual([]);
  });
});
