import './App.css'
// import ImageComponent from './components/App/ImageComponent.jsx'
// import VideoComponent from './components/App/VideoComponent.jsx'
// import ParagraphsComponent from './components/App/ParagraphsComponent.jsx'
import VideoComponent from '../VideoComponent/VideoComponent'
import ImageComponent from '../ImageComponent/ImageComponent'
import ParagraphsComponent from '../ParagraphsComponent/ParagraphsComponent'
import RandomPhrase from '../RandomPhrase/RandomPhrase'

function App() {
  return (
    <>
    <ImageComponent/>
    <VideoComponent/>
    <ParagraphsComponent/>
    <RandomPhrase />
    </>
  )
}
export default App