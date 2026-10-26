import DefaultTheme from 'vitepress/theme'
import FigureZoom from './FigureZoom.vue'
import SourceNote from './SourceNote.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('FigureZoom', FigureZoom)
    app.component('SourceNote', SourceNote)
  }
}
