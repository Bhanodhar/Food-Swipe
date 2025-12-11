import React, { useState, useEffect } from 'react'
import { API_URL } from '../api'
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { TailSpin } from 'react-loader-spinner'

const Chains = () => {
  const [vendorData, setVendorData] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [loading, setLoading] = useState(true);
  

  const vendorFirmHandler = async () => {
    try {
      console.log('fetching data from vendors')
      const response = await fetch(`${API_URL}/vendor/all-vendors`)
      const newData1 = await response.json()
      setVendorData(newData1)
      console.log("Fetched API Data: ",newData1)
      setLoading(false)
    } catch (error) {
      alert("Failed to fetch vendor data")
      console.error('Error fetching vendor chains:', error)
      setLoading(true)
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
    <div className='mediaChainSection'>
    <div className="loaderSection">
      {loading && <> 
      <div className="loaderContainer"> Loading </div>
        <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass="" />
    </>}
    </div>
    <div className="btnSection"> 
      <button onClick={()=>handleScroll("left")}>
        <FaArrowCircleLeft  className='btnIcons'/>
      </button>
      <button onClick={()=>handleScroll("right")}>
        <FaArrowCircleRight className='btnIcons' />
      </button>
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

    </div>
      )

}
export default Chains
