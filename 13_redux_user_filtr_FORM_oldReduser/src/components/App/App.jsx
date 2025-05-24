import Filter from "../Filter/Filter";
import { BrowserRouter } from "react-router-dom";

import "../../styles/style.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Filter />
      </BrowserRouter>
    </>
  )
}

export default App
