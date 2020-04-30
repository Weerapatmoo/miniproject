import React from 'react';
import NavLink from './NavLink'
import './About.css'
function About() {
  return (
    <div>
      <NavLink></NavLink>
      <div className = 'About'>
            <h1>About</h1>
      </div>
          <div >
        <h2 align = 'center'>  จำนวนกล้อง 109 ตัว ในพื้นที่เทศบาลกะทู้ </h2><br/>
          <h5 align = 'center'>การให้บริการตลอด 24 ชั่วโมง </h5>
          <h5 align = 'center'>ข้อมูลหลักฐานในการเข้าใช้บริการ</h5>
          <h5 align = 'center'>สำเนาใบแจ้งความ</h5>
          <h5 align = 'center'>สำเนาบัตรประชาชน</h5>
          <h5 align = 'center'>เอกสารของดูกล้อง( รับได้ที่หน้าห้องCCTV )</h5>
          </div>
          <br/>
          

          <div>
          <h3 align = 'right'>by S.I.T</h3></div>
    </div>
    


  )
}

  

export default About 