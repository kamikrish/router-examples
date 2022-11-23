import './App.css';
import {Routes,Route} from "react-router-dom"
import Navbar from './component/navbar';
import Products from './component/products';
import Posts from './component/posts';
import Home from './component/home';
import Dashboard from './component/admin/dashboard'
import NotFound from './component/notFound';
import ProductDetails from './component/productDetails';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='content'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="products" element={<Products/>}/>
          <Route path="products/:id" element={<ProductDetails/>}/>
          <Route path="/posts">
            <Route index element={<Posts/>}/>
            <Route path=":year" element={<Posts/>}/>
            <Route path=":year/:month" element={<Posts/>}/>
          </Route>
          <Route path="admin" element={<Dashboard/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
