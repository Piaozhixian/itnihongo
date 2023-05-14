/**
 * 错误选项候补
 */
const wrongOptions: string[] = [
  "云计算",
  "大数据",
  "人工智能",
  "物联网",
  "区块链",
  "前端开发",
  "后端开发",
  "移动开发",
  "数据库",
  "网络安全",
  "软件测试",
  "机器学习",
  "深度学习",
  "计算机视觉",
  "自然语言处理",
  "云原生",
  "微服务",
  "容器化",
  "虚拟化",
  "客户支持",
];

/**
 * 生成四个选项，其中包含三个错误选项和一个正确选项
 * 错误选项有错误选项候补种随机挑选
 * @param answer 答案
 */
export default function makeOptions(answer: string) {
  const options = [answer];
  // 循环至生成四个选项，如果错误选项中包含正确答案则使用其他的错误选项
  while (options.length < 4) {
    const randomIndex = Math.floor(Math.random() * 20);
    const option = wrongOptions[randomIndex];
    if (option !== answer && !options.includes(option)) {
      options.push(option);
    }
  }
  return options;
}
