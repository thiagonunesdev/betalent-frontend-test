import betalentLogo from './assets/logos/logo.svg'
import { H1 } from './components/Typography'
import GlobalStyles from './styles/Global.styles'
function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <H1>Test</H1>
        <a href="#" target="_blank">
          <img src={betalentLogo} alt="Logo BeTalent" />
        </a>
      </div>
    </>
  )
}

export default App
