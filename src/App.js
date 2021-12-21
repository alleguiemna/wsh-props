import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/footer/Footer';
import ProductList from './components/productList/ProductList';

function App() {
  const products =[
    {
          imgSrc:
            "https://th.bing.com/th/id/R.b38f3ea1f155faaef14f344bf74b8b15?rik=ctrnYHfKX3k6zw&pid=ImgRaw&r=0",
          name: "AirPods",
          price: "6,99 $",
        },
        {
          imgSrc: "https://th.bing.com/th/id/R.62443f7dda859823cf5b5772396bbf09?rik=HzaWElpDeJ22fg&pid=ImgRaw&r=0",
          name: "Smart watch",
          price: "8,64 $",
        },
        {
          imgSrc:
            "https://saligon.com/wp-content/uploads/2020/09/Iphone-11-pro-max-grey-2.jpg",
          name: "Iphone 11 ",
          price: "150 $",
        }
      ]
    
     
      
  return (
    <div className="App">
      <h1>Workshop Props</h1>
      <ProductList produits={products}/>
      <Footer >
        <h1>@CopyRight 2021 :all rights reserved</h1>
        <img src="https://th.bing.com/th/id/R.14367d50ace2d8f4b33f7d560bce5271?rik=VBMmpcLDrazZKw&pid=ImgRaw&r=0" alt="" width="200px"/>
        <p>this is a props workshop</p>
      </Footer>
    </div>
  );
}

export default App;
