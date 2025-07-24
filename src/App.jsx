import { HashRouter,Route,Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Hero from "./Components/Hero/Hero";
import { BlogProvider } from "./Components/Context/BlogContext";
import Page from "./Components/Pages/Page";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import About from "./Components/About/About";

function App() {
  return (
    <>
    <BlogProvider>
      <HashRouter>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Hero />} />
            <Route path="page/:id" element={<Page/>}/>
            <Route path="/about" element={<About/>}/>
          </Route>
        </Routes>
      </HashRouter>

      </BlogProvider>
    </>
  );
}

export default App;
