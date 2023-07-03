import "./App.css";
import RootLayout from "./pages/RootLayout";
import PhotoGallery from "./components/photoGallery";
import Favorites from "./components/Favorites/Favorites";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
 
} from "react-router-dom";


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<PhotoGallery/>}></Route>
      <Route path="/favorite" element={<Favorites/>}></Route>
    </Route>
  ))


  return (
    <div className="App">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
