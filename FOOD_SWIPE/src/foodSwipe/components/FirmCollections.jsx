import React, { useState, useEffect } from 'react'
import { API_URL } from '../api'
import { Link } from 'react-router-dom';

const FirmCollections = () => {

    const [firmData, setFirmData] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState('All');

    const firmDataHandler = async () => { 
        try {
            console.log("Fetching data for firms");
            const response = await fetch(`${API_URL}/vendor/all-vendors`)   
            const newData2 = await response.json()
            setFirmData(newData2.vendors)

            console.log("Fetched Firm Data: ",newData2)
          } catch (error) {
            alert("Failed to fetch firm data")
            console.error('Error fetching firm data:', error)
          }
    }

     useEffect(() => {
        firmDataHandler()
    }, [])

      const filterHandler = (region) => {
        setSelectedRegion(region);
      }

  return (
    <>
    <h3>Restaurents with online food delivery in Hyderabad</h3>

    <div className="filterButton">
      <button onClick={()=>{filterHandler("All")}}>All</button>
      <button onClick={()=>{filterHandler("south-indian")}}>South-Indian</button>
      <button onClick={()=>{filterHandler("north-indian")}}>North-Indian</button>
      <button onClick={()=>{filterHandler("chinese")}}>Chinese</button>
      <button onClick={()=>{filterHandler("bakery")}}>Bakery</button>
    </div>    
    <section className="firmSection"> 
        {firmData.map((i)=>{
          return i.firm.map((item) => {
            if(selectedRegion === 'All' || item.region.includes(selectedRegion.toLocaleLowerCase()))
              { 

                    return (
                       <Link to={`/products/${item._id}/${item.firmname}`} className='firmLink'>
                        <div className='firmGroupBox'>
                         <div className='firmGroup'>
                            <img src={`${API_URL}/uploads/${item.image}`}  />

                          </div>
                        <div className='firmDetails'>
                          
                          <strong>  {item.firmname}  </strong> 
                         <div className='firmArea'>
                            {item.region.join(', ')}
                          </div> 
                          <div className='firmArea'>
                            {item.area}
                          </div> 
                          
                            
                        </div>
                       </div>
                       </Link>
                    )
            
          }}) 
            return null
        })
        }   
    </section>

    </>
  )
}

export default FirmCollections
