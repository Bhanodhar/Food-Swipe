import React,{useState, useEffect} from 'react'
import { API_URL } from '../api'
import { useParams } from 'react-router-dom';

const ProductMenu = () => {

  const[products, setProducts] = useState([]);
  const { firmId, firmname } = useParams();

  const productHandler = async () => {
    try {
      const response = await fetch(`${API_URL}/product/${firmId}/products`)
      const newProductData = await response.json();
      setProducts(newProductData.products);
      // console.log("Fetched Products: ", newProductData);

    } catch (error) {
      alert("Failed to fetch products")
      console.error('Error fetching products:', error)
    } 
  }

  useEffect(() => {
    productHandler()
  }, [firmId])

  return (
   <>
   {/* <TopBar /> */}
     <section className='productSection'>
      <h3>{firmname}</h3>
      {products.map((item)=>{
        return (
          <div className='productBox'>
            <div>
              <div><strong>{item.productname}</strong></div>
              <div>{item.price}/-</div>
              <div>{item.description}</div>
            </div>
           
           <div className='productGroup'>
              <img src={`${API_URL}/uploads/${item.image}`}  />
              <div className='AddButton'> ADD </div>
            </div>
          </div>
        )
        })}    
</section>
   </>
  )
}

export default ProductMenu
