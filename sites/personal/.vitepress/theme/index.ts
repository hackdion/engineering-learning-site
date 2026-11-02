// 个人站使用完全独立的主题（不继承 VitePress 默认主题），
// 视觉沿用个人总站预览：纸色底、深蓝、少量黄色、hd 标记。
import PersonalLayout from './PersonalLayout.vue'
import PersonalHome from './components/PersonalHome.vue'
import WorksPage from './components/WorksPage.vue'
import ProjectDetail from './components/ProjectDetail.vue'
import PersonalNotFound from './components/PersonalNotFound.vue'
import './personal.css'

export default {
  Layout: PersonalLayout,
  enhanceApp({ app }: { app: import('vue').App }) {
    app.component('PersonalHome', PersonalHome)
    app.component('WorksPage', WorksPage)
    app.component('ProjectDetail', ProjectDetail)
    app.component('PersonalNotFound', PersonalNotFound)
  }
}
