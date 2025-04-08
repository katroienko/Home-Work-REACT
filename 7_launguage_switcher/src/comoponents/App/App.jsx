import LaunguageProvider from '../../context/LanguageProvider'
import Main from '../Main/Main'

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
