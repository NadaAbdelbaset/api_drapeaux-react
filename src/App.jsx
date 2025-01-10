import { BrowserRouter, Routes,Route} from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import News from "./pages/News"


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path= '/' element={<Home />} />
      <Route path= '/a-propos' element={<About />} />
      <Route path= '/News' element={<News />} />
      </Routes>

      
      </BrowserRouter>

    </>
  )
}
export default App
