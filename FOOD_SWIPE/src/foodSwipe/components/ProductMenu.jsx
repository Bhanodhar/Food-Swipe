import React,{useState, useEffect} from 'react'
import { API_URL } from '../api'
import { useParams } from 'react-router-dom';

const ProductMenu = () => {

  const[products, setProducts] = useState([]);
  const { firmId } = useParams();

  const productHandler = async () => {
    try {
      const response = await fetch(`${API_URL}/product/${firmId}/products`)
      const newProductData = await response.json();
      setProducts(newProductData.products);
      console.log("Fetched Products: ", newProductData);
    } catch (error) {
      alert("Failed to fetch products")
      console.error('Error fetching products:', error)
    } 
  }

  useEffect(() => {
    productHandler()
  }, [])

  return (
    <section className='productMenuSection'>
      {products.map((item)=>{
        return (
          <>
           {item.productName}
          </>
        )}) 
}    
</section>
  )
}

export default ProductMenu
