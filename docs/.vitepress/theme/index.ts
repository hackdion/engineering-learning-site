import DefaultTheme from 'vitepress/theme'
import FigureZoom from './FigureZoom.vue'
import Layout from './Layout.vue'
import SourceNote from './SourceNote.vue'
import './hd-theme.css'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('FigureZoom', FigureZoom)
    app.component('SourceNote', SourceNote)
  }
}
