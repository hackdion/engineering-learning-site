/**
 * 中文分词：汉字连续串切成「相邻二字组合」，单独一个汉字时保留该字；
 * 英文与数字按整段切分。
 * MiniSearch 默认按空白与标点切词，中文整句会变成一个超长词条，
 * 导致「最低资本金比例」这类出现在句中的词无法命中。
 * 不再为每个字额外产出单字词条：索引里每个汉字位置只占一条词条，
 * 索引体积约为原先的一半。单字查询靠查询端 prefix 匹配（MiniSearch 默认开启）
 * 命中以该字开头的二字词；位于词中间的单字不再命中。
 *
 * 2026-11-26 补充两条归一化，改善中文站常见输入的命中率：
 * - 先做 NFKC 归一化，全角字母数字（ＧＢ５０３１９、２０２６）与半角写法落到同一词条；
 * - 字母数字混排串（GB50319）额外拆出字母段与数字段，使「GB 50319」「GB50319」
 *   两种写法都能命中正文里另一种写法。
 *
 * 建索引与查询共用本函数，保证切词规则一致。
 * 注意：正则与归一化必须写在函数体内。VitePress 会把本函数用 toString()
 * 序列化进客户端搜索配置（_vp-fn_），引用模块级变量会在查询时变成未定义。
 */
export const cjkFriendlyTokenize = (text: string): string[] => {
  const tokens: string[] = []
  const pattern = /[\p{Script=Han}]+|[a-z0-9]+/gu
  const folded = text.normalize('NFKC').toLowerCase()
  let match: RegExpExecArray | null
  while ((match = pattern.exec(folded)) !== null) {
    const chunk = match[0]
    if (/^\p{Script=Han}+$/u.test(chunk)) {
      const chars = Array.from(chunk)
      if (chars.length === 1) tokens.push(chars[0])
      for (let i = 0; i + 1 < chars.length; i++) tokens.push(chars[i] + chars[i + 1])
    } else {
      tokens.push(chunk)
      // 只有字母与数字混排的串才拆（GB50319），避免把普通英文单词拆碎。
      if (/[a-z]/.test(chunk) && /[0-9]/.test(chunk)) {
        const parts = (chunk.match(/[a-z]+|[0-9]+/g) || []).filter((part) => part.length >= 2)
        if (parts.length > 1) tokens.push(...parts)
      }
    }
  }
  return tokens
}
