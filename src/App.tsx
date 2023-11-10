import './App.css'
import '../src/Main/HttpCat.tsx'
import {HttpCat} from "./Main/HttpCat.tsx";

function App() {

  return (
      <main>
          <h1>Protocol Cat</h1>
          <HttpCat statusCode={102}/>
          <HttpCat statusCode={422}/>
          <HttpCat statusCode={204}/>
          <HttpCat statusCode={304}/>
      </main>
  )
}

export default App
