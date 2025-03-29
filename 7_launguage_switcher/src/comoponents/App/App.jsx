import LaunguageProvider from '../../context/LanguageProvider'
import Main from '../Main/Main'
import LanguageProvider from '../../context/LanguageProvider'
function App() {
 
  return (
    <>
      <LaunguageProvider>
        <Main />
      </LaunguageProvider>
      
    </>
  )
}

export default App
