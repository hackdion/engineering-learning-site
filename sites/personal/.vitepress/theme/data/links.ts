// 个人站 → 工程学习站的链接：
// 个人站发布在学习站下面的 personal/ 子路径，去掉末尾 personal/ 即学习站根。
// 构建时按各自 base 解析：
//   本地聚合预览 base=/personal/        → 学习站根为 '/'
//   线上 base=/engineering-learning-site/personal/ → '/engineering-learning-site/'
// 跨站链接都要加 target="_self"，避免被 VitePress 单页路由拦截成对方站的 404。
const learningBase = import.meta.env.BASE_URL.replace(/personal\/$/, '')

export const learningLink = (path = ''): string => `${learningBase}${path}`
