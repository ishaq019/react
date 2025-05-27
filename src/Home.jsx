import React from 'react'

export const Home = () => {
  return (
    <div>
      <div><br></br></div>
      <div id="pandacar">
        
      <div id="card"class="card" style={{width: "23rem"}}onClick={(e)=>{
          window.open("https://www.udemy.com/career/full-stack-web-developer/")
          e.preventDefault()
        }}>
  <img src="Capture1.png" class="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title"><b>Full Stack Web Developer</b></h5>
    <p className="card-text">$127,005 average salary(us) • 16,500 open roles(us)<br></br>
    <label id="c1" >⭐ 4.7 </label>
    <label id="c1"> 442k rating</label>
    <label id="c1"> 87.6 total hours</label>
    </p>
  </div>
  </div>
    <div id="card1" class="card1" style={{width: "23rem"}}onClick={(e)=>{
          window.open("https://www.udemy.com/career/digital-marketer/")
          e.preventDefault()
        }}>
  <img src="Capture2.png" class="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title"><b>Digital Marketer</b></h5>
    <p className="card-text">$61,126 average salary(us) • 36,600 open roles(us)<br></br>
    <label id="c1" >⭐ 4.6 </label>
    <label id="c1"> 3.3k rating</label>
    <label id="c1"> 28.4 total hours</label>
    </p>
  </div>
  </div>
    <div id="card2" class="card2" style={{width: "23rem"}}onClick={(e)=>{
          window.open("https://www.udemy.com/career/data-scientist/")
          e.preventDefault()
        }}>
  <img src="Capture3.png" class="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title"><b>Data Scientist</b></h5>
    <p className="card-text">$126,629 average salary(us) • 20,800 open roles(us)<br></br>
     <label id="c1" >⭐ 4.6 </label>
    <label id="c1"> 216k rating</label>
    <label id="c1"> 46.8 total hours</label>
    </p>
  </div>
  </div>
  </div>
  <div><br></br></div>
  <div id="learndcard">
        <div id="card"class="card" style={{width: "23rem"}}onClick={(e)=>{
          window.open("https://www.udemy.com/course/100-days-of-code/")
          e.preventDefault()
        }}>
  <img src="lear.png" class="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title"><b>100 Days of Code: The Complete Python Pro Bootcamp</b></h5>
    <p className="card-text">$127,005 average salary(us) • 16,500 open roles(us)<br></br>
    <label id="c1" >⭐ 4.7 </label>
    <label id="c1"> 442k rating</label>
    <label id="c1"> 87.6 total hours</label>
    </p>
  </div>
  </div>
    <div id="card1" class="card1" style={{width: "23rem"}}onClick={(e)=>{
          window.open("https://www.udemy.com/course/the-complete-web-development-bootcamp/?couponCode=CP130525")
          e.preventDefault()
        }}>
  <img src="learn1.png" class="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title"><b>The Complete Full-Stack Web Development Bootcamp</b></h5>
    <p className="card-text">$61,126 average salary(us) • 36,600 open roles(us)<br></br>
    <label id="c1" >⭐ 4.6 </label>
    <label id="c1"> 3.3k rating</label>
    <label id="c1"> 28.4 total hours</label>
    </p>
  </div>
  </div>
    <div id="card2" class="card2" style={{width: "23rem"}}onClick={(e)=>{
          window.open("https://www.udemy.com/course/aws-certified-cloud-practitioner-new/")
          e.preventDefault()
        }}>
  <img src="learn2.png" class="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title"><b>[NEW] Ultimate AWS Certified Cloud Practitioner CLF-C02 2025</b></h5>
    <p className="card-text">$126,629 average salary(us) • 20,800 open roles(us)<br></br>
     <label id="c1" >⭐ 4.6 </label>
    <label id="c1"> 216k rating</label>
    <label id="c1"> 46.8 total hours</label>
    </p>
  </div>
  </div>
    </div>
    </div>
  )
}
export default Home;
