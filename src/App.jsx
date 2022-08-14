import { Layout } from "./utilities/Layout"
import AnimatedRoutes from "./utilities/AnimatedRoutes"

const App = ({navState, setRespNavState}) => {
  return (
    <div className={`App ${navState ? 'open' : ''}`}>
      <Layout setRespNavState={setRespNavState} navState={navState}>
        <AnimatedRoutes />
      </Layout>
    </div>
  )
}

export default App