import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { sampleProducts } from './data'

function App() {


  return (
    <>
      <div>
        <header>E-commerce</header>
        <main>
          <ul>
            {sampleProducts.map(product =>(
               <li key={product.slug}><img src={product.image} alt={product.name} className='product-image' />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              </li>
            ))}
          </ul>
          </main>
        <footer>All right reserved</footer>
     </div>
    </>
  )
}

export default App
