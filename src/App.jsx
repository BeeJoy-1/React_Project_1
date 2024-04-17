import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About Us/About";
import Features from "./Pages/Features/Features";
import Pricing from "./Pages/Pricing/Pricing";
import FAQ from "./Pages/FAQ/FAQ";
import Blog from "./Pages/Blog/Blog";
import Error from "./Pages/Error/Error";
import Rootlayout from "./Layouts/Rootlayout/Rootlayout";
function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
    <>
      <Route element={<Rootlayout/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Features" element={<Features/>} />
        <Route path="/Pricing" element={<Pricing/>} />
        <Route path="/FAQ" element={<FAQ/>} />
        <Route path="/Blog" element={<Blog/>} />
        <Route path="*" element={<Error/>} />
      </Route>
    </>
    )
  );

  return (
    <>
      <RouterProvider
        router={router}
      />
    </>
  )
}

export default App
