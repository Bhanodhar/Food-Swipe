import React, { useState, useEffect } from 'react'
import { API_URL } from '../api'

const Chains = () => {
  const [vendorData, setVendorData] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  

  const vendorFirmHandler = async () => {
    try {
      console.log('fetching data from vendors')
      const response = await fetch(`${API_URL}/vendor/all-vendors`)
      const newData1 = await response.json()
      setVendorData(newData1)
      console.log("Fetched API Data: ",newData1)
    } catch (error) {
      alert("Failed to fetch vendor data")
      console.error('Error fetching vendor chains:', error)
    }
  }

  useEffect(() => {
    vendorFirmHandler()
  }, [])


  const handleScroll = (direction) => {
    const gallery = document.getElementById('chainGallery');
    const scrollAmount = 600;

    if (direction === 'left') {
      gallery.scrollTo({ left: gallery.scrollLeft -scrollAmount, behavior: 'smooth' });
    } else if (direction === 'right') {
      gallery.scrollTo({ left: gallery.scrollLeft + scrollAmount, behavior: 'smooth' });
    }   
  }  

  return (
    <>
    <div className="chainHeader"> 
      <button onClick={()=>handleScroll("left")}>Left</button>
      <button onClick={()=>handleScroll("right")}>Right</button>
    </div>
    <h3>Top Restaurents from Hyderabad</h3>
    <section className="chainSection" id='chainGallery' onScroll={(e)=>setScrollPosition(e.target.scrollLeft)}>
      {vendorData.vendors && vendorData.vendors.map((vendor)=>{
        return (
          <>
          <div className="vendorBox">
            {vendor.firm.map((item)=>{
              return (
                <>
                  <div>
                  {/* {item.firmname} */}
                </div>
                <div className="firmImage">
                  <img src={`${API_URL}/uploads/${item.image}`}  />
                </div>
                </>
                
              )
            })}
          </div>
          </>
        )
      })}
    </section>

    </>
      )

}
export default Chains
