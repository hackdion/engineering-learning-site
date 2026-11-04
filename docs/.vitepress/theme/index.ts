import DefaultTheme from 'vitepress/theme'
import FigureZoom from './FigureZoom.vue'
import Layout from './Layout.vue'
import SourceNote from './SourceNote.vue'
import BookShelf from './components/BookShelf.vue'
import CourseCenter from './components/CourseCenter.vue'
import HomePage from './components/HomePage.vue'
import AboutPage from './components/AboutPage.vue'
import SlideDeck from './components/deck/SlideDeck.vue'
import Slide from './components/deck/Slide.vue'
import Reveal from './components/deck/Reveal.vue'
import Quiz from './components/deck/Quiz.vue'
import Steps from './components/deck/Steps.vue'
import SortSteps from './components/deck/SortSteps.vue'
import CompareCard from './components/deck/CompareCard.vue'
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
    // 互动 PPT
    for (const [name, c] of Object.entries({ SlideDeck, Slide, Reveal, Quiz, Steps, SortSteps, CompareCard })) app.component(name, c)
    app.component('FormSheet', FormSheet)
  }
}
