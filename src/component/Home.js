import React from 'react'
import Background from './Background'
// import Download from './Download'
import Every from './Every'
// import ExistingCust from './ExistingCust'
// import Footer from './Footer'
// import FootPrint from './FootPrint'
import NavBar from './NavBar'
import Peace  from './Peace'
import { useState, useEffect } from 'react'
import Purity from './Purity'
import Patient from './Patient'
import AnchorFooter from './AnchorFooter'
import Shop from './Shop'


const Home = () => {
  // const chat = () => {
  //   var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
  //   (function () {
  //     var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
  //     s1.async = true;
  //     s1.src = 'https://embed.tawk.to/636d83b1b0d6371309ce6c4c/1ghhskses';
  //     s1.charset = 'UTF-8';
  //     s1.setAttribute('crossorigin', '*');
  //     s0.parentNode.insertBefore(s1, s0);
  //   })();
  // }

  const [backTop, setbackTop] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setbackTop(true)
      } else {
        setbackTop(false)
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <>
      <div className="sweet-loading">
        <NavBar />
        <Background />
        <Every />
       <Shop/>
        {/* <Download /> */}
        <Peace />
        {/* <ExistingCust /> */}
        <Purity />
        <Patient/>
        <AnchorFooter/>
        {/* <FootPrint /> */}
        {/* <Footer /> */}
        {Home && (
          <button className='border-0' style={{ position: "fixed", backgroundColor: "#484C54", color: "#FFFFFF", bottom: "100px", right: "50px", height: "50px", width: "50px", fontSize: "40px" }} onClick={scrollUp}>^</button>
        )}
        {/* <button className='border-0' style={{ position: "fixed", backgroundColor: "#484C54", color: "#FFFFFF", bottom: "50px", right: "45px", height: "40px", marginTop: "34px", width: "50px", fontSize: "40px" }} onClick={chat}>O</button> */}
      </div>
    </>
  )
}
export default Home