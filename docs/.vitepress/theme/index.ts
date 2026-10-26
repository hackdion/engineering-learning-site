import DefaultTheme from 'vitepress/theme'
import SourceNote from './SourceNote.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('SourceNote', SourceNote)
  }
}
