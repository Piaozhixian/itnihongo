import makeOptions from "./makeOptions";
describe("makeOptions function", () => {
  test("should generate four options with one correct answer", () => {
    const answer = "人工智能";
    const options = makeOptions(answer);
    expect(options.length).toBe(4);
    expect(options).toContain(answer);
    expect(options.filter((option) => option !== answer)).toHaveLength(3);
    options.forEach((option) => {
      expect(typeof option).toBe("string");
      expect(option).not.toBe("");
    });
  });

  test("should generate unique options every time", () => {
    const answer = "大数据";
    const options1 = makeOptions(answer);
    const options2 = makeOptions(answer);
    expect(options1).not.toEqual(options2);
  });

  test("should not include the answer in the wrong options", () => {
    const answer = "容器化";
    const options = makeOptions(answer);
    expect(options.filter((option) => option === answer)).toHaveLength(1);
  });
});
