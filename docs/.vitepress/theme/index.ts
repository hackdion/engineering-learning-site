import DefaultTheme from 'vitepress/theme'
import FigureZoom from './FigureZoom.vue'
import Layout from './Layout.vue'
import SourceNote from './SourceNote.vue'
import BookShelf from './components/BookShelf.vue'
import CourseCenter from './components/CourseCenter.vue'
import HomePage from './components/HomePage.vue'
import AboutPage from './components/AboutPage.vue'
import FormSheet from './components/FormSheet.vue'
import './hd-theme.css'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('FigureZoom', FigureZoom)
    app.component('SourceNote', SourceNote)
    app.component('BookShelf', BookShelf)
    app.component('CourseCenter', CourseCenter)
    app.component('HomePage', HomePage)
    app.component('AboutPage', AboutPage)
    app.component('FormSheet', FormSheet)
  }
}
