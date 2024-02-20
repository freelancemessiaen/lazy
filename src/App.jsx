import { lazy, useState, Suspense } from 'react'
import styles from './App.module.scss'
import ComposantA from "./pages/ComposantsA/ComposantA"


function App() {
  const [page, setPage] = useState("a");

  const ComposantB = lazy(() => {
    return new Promise((res) => {
      setTimeout(() => {
      res(  import('./pages/ComposantB/ComposantB'))
    },3000)
    })
  });


  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <nav className="d-flex p-20">
        <button className='btn btnprimary mr-5' onClick={() => setPage("a")}>
           Composant A
        </button>
        <button className='btn btnprimary mr-5' onClick={() => setPage("b")}>
           Composant B
        </button>
      </nav>
      <div className="flex-fill p-20">
        <Suspense fallback={ <h2>Loading ...</h2>}>
        {page === "a" && <ComposantA/>}
        {page === "b" && <ComposantB/>}
        </Suspense>

      </div>
    </div>
  )
}

export default App
