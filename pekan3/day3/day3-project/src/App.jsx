// import ParentComponent from './component/PerentComponent'
// import Produk from './component/ListProduk'
// import ShoppingCart from './component/ShoppingCart'
// import ComparisonExample from './component/ComparisonExample'
// import LazyLodingComponent from './component/LazyLoadingComponent'
import './App.css'
import { useState, lazy, Suspense } from 'react'

// import Perent from './component2/ImplementasiReact.memo/component/Parent'

// import ExpensiveCalculation from './component2/OptimasiWithuseMemo/ExpensiveCalculation'

// import ParentWithCallback from './component2/OptimasiWithuseCallback/ParentWithCallback'
// import ParentWithoutCallback from './component2/OptimasiWithuseCallback/ParentWithoutCallback'

// const Home = lazy(() => import("./component2/CodeSplittingAndLazyLoading/Home"))
// const Profile = lazy(() => import("./component2/CodeSplittingAndLazyLoading/Profile"))
// const Settings = lazy(() => import("./component2/CodeSplittingAndLazyLoading/Settings"))

import Container from './component2/PerformanceProfiling/Container'

function App() {

// const [page,setPage] = useState(null)

// function RederPage(){
//     switch(page){
//       case "Home":
//         return <Home/>
//       case "Profile":
//         return <Profile/>
//         case "Settongs":
//           return <Settings/>
//     }
// }

  return (
    <>
    {/* <ParentComponent/> */}
    {/* <Produk/> */}
    {/* <ShoppingCart/> */}
    {/* <ComparisonExample/> */}
    {/* <LazyLodingComponent/> */}

    {/* <div>
      <Perent/>
    </div> */}

    {/* <div>
      <ExpensiveCalculation/>
    </div> */}

    {/* <div>
      <ParentWithoutCallback/>
      <ParentWithCallback/>
    </div> */}

        {/* <div>
          <button onClick={() =>setPage("Home")}>Home</button>
        <button onClick={() =>setPage("Profile")}>Profile</button>
        <button onClick={() =>setPage("Settongs")}>Settings</button>
        </div>

        <Suspense fallback={<p>Loading Component.............</p>}>
        {RederPage()}
        </Suspense> */}

        <div>
          <h1>Performance Profiling Demo</h1>
          <Container/>
        </div>
    </>
  )
}

export default App
