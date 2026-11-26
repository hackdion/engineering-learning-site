import DefaultTheme from 'vitepress/theme'
import FigureZoom from './FigureZoom.vue'
import Layout from './Layout.vue'
import SourceNote from './SourceNote.vue'
import BookShelf from './components/BookShelf.vue'
import TextbookKnowledge from './components/TextbookKnowledge.vue'
import CourseCenter from './components/CourseCenter.vue'
import HomePage from './components/HomePage.vue'
import EngineeringMapHome from './components/EngineeringMapHome.vue'
import AboutPage from './components/AboutPage.vue'
import MermaidDiagram from './components/MermaidDiagram.vue'
import SlideDeck from './components/deck/SlideDeck.vue'
import Slide from './components/deck/Slide.vue'
import Reveal from './components/deck/Reveal.vue'
import Quiz from './components/deck/Quiz.vue'
import Steps from './components/deck/Steps.vue'
import SortSteps from './components/deck/SortSteps.vue'
import CompareCard from './components/deck/CompareCard.vue'
import DeckSimChart from './components/deck/DeckSimChart.vue'
import DeckViewSwitch from './components/deck/DeckViewSwitch.vue'
import DeckFlashcard from './components/deck/DeckFlashcard.vue'
import DeckScenario from './components/deck/DeckScenario.vue'
import FormSheet from './components/FormSheet.vue'
import EngineeringMapRefs from './components/EngineeringMapRefs.vue'
import LawBanner from './components/LawBanner.vue'
import ArticleRef from './components/ArticleRef.vue'
import LawIndex from './components/LawIndex.vue'
import ExamCenter from './components/exam/ExamCenter.vue'
import ExamPaper from './components/exam/ExamPaper.vue'
import ReviewActions from './components/review/ReviewActions.vue'
import ReviewPanel from './components/review/ReviewPanel.vue'
import './hd-theme.css'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('FigureZoom', FigureZoom)
    app.component('SourceNote', SourceNote)
    app.component('BookShelf', BookShelf)
    app.component('TextbookKnowledge', TextbookKnowledge)
    app.component('CourseCenter', CourseCenter)
    app.component('HomePage', HomePage)
    app.component('EngineeringMapHome', EngineeringMapHome)
    app.component('AboutPage', AboutPage)
    app.component('MermaidDiagram', MermaidDiagram)
    // 互动 PPT
    for (const [name, c] of Object.entries({ SlideDeck, Slide, Reveal, Quiz, Steps, SortSteps, CompareCard, DeckSimChart, DeckViewSwitch, DeckFlashcard, DeckScenario })) app.component(name, c)
    app.component('FormSheet', FormSheet)
    app.component('EngineeringMapRefs', EngineeringMapRefs)
    // 法规文本
    app.component('LawBanner', LawBanner)
    app.component('ArticleRef', ArticleRef)
    app.component('LawIndex', LawIndex)
    // 试卷
    app.component('ExamCenter', ExamCenter)
    app.component('ExamPaper', ExamPaper)
    // 本机复习清单
    app.component('ReviewActions', ReviewActions)
    app.component('ReviewPanel', ReviewPanel)
  }
}
