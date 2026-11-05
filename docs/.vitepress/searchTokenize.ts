/**
 * 中文分词：汉字连续串切成「相邻二字组合」，单独一个汉字时保留该字；
 * 英文与数字按整段切分。
 * MiniSearch 默认按空白与标点切词，中文整句会变成一个超长词条，
 * 导致「最低资本金比例」这类出现在句中的词无法命中。
 * 不再为每个字额外产出单字词条：索引里每个汉字位置只占一条词条，
 * 索引体积约为原先的一半。单字查询靠查询端 prefix 匹配（MiniSearch 默认开启）
 * 命中以该字开头的二字词；位于词中间的单字不再命中。
 * 建索引与查询共用本函数，保证切词规则一致。
 */
export const cjkFriendlyTokenize = (text: string): string[] => {
  const tokens: string[] = []
  const pattern = /[\p{Script=Han}]+|[a-z0-9]+/giu
  let match: RegExpExecArray | null
  while ((match = pattern.exec(text)) !== null) {
    const chunk = match[0]
    if (/^\p{Script=Han}+$/u.test(chunk)) {
      const chars = Array.from(chunk)
      if (chars.length === 1) tokens.push(chars[0])
      for (let i = 0; i + 1 < chars.length; i++) tokens.push(chars[i] + chars[i + 1])
    } else {
      tokens.push(chunk.toLowerCase())
    }
  }
  return tokens
}
