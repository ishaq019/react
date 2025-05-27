import React from 'react';
import './Homepage.css';

const professionalCourses = [
  {
    title: "React - The Complete Guide",
    url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    img: "c7.png",
    rating: "4.7",
    totalHours: "40.5"
  },
  {
    title: "JavaScript: The Advanced Concepts",
    url: "https://www.udemy.com/course/advanced-javascript-concepts/",
    img: "c8.png",
    rating: "4.6",
    totalHours: "28.3"
  },
  {
    title: "Node.js, Express, MongoDB & More",
    url: "https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/",
    img: "c9.png",
    rating: "4.7",
    totalHours: "35.2"
  },
  {
    title: "Python for Data Science and Machine Learning",
    url: "https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/",
    img: "c10.png",
    rating: "4.6",
    totalHours: "41.3"
  },
  {
    title: "AWS Certified Solutions Architect",
    url: "https://www.udemy.com/course/aws-certified-solutions-architect-associate/",
    img: "c11.png",
    rating: "4.7",
    totalHours: "32.1"
  }
];

const Homepage = () => {
  const handleLinkClick = (url, e) => {
    e.preventDefault();
    const isLoggedIn = localStorage.getItem('Login') === 'yes';
    
    if (isLoggedIn) {
      window.open(url);
    } else {
      alert('Please Login');
    }
  };

  return (
    <div className="homepage-container">
      <h2 className="section-title">Popular Career Paths</h2>
      <div id="pandacar">
        <div id="card" className="card" style={{width: "23rem"}} onClick={(e) => 
          handleLinkClick("https://www.udemy.com/career/full-stack-web-developer/", e)
        }>
          <img src="c1.png" className="card-img-top" alt="Full Stack Development"></img>
          <div className="card-body">
            <h5 className="card-title"><b>Full Stack Web Developer</b></h5>
            <p className="card-text">$127,005 average salary(us) • 16,500 open roles(us)<br></br>
              <label id="c1">⭐ 4.7 </label>
              <label id="c1"> 442k rating</label>
              <label id="c1"> 87.6 total hours</label>
            </p>
            <button className="course-action-btn">Register Now</button>
          </div>
        </div>

        <div id="card1" className="card1" style={{width: "23rem"}} onClick={(e) => 
          handleLinkClick("https://www.udemy.com/career/digital-marketer/", e)
        }>
          <img src="c2.png" className="card-img-top" alt="Digital Marketing"></img>
          <div className="card-body">
            <h5 className="card-title"><b>Digital Marketer</b></h5>
            <p className="card-text">$61,126 average salary(us) • 36,600 open roles(us)<br></br>
              <label id="c1">⭐ 4.6 </label>
              <label id="c1"> 3.3k rating</label>
              <label id="c1"> 28.4 total hours</label>
            </p>
            <button className="course-action-btn">Register Now</button>
          </div>
        </div>

        <div id="card2" className="card2" style={{width: "23rem"}} onClick={(e) => 
          handleLinkClick("https://www.udemy.com/career/data-scientist/", e)
        }>
          <img src="c3.png" className="card-img-top" alt="Data Science"></img>
          <div className="card-body">
            <h5 className="card-title"><b>Data Scientist</b></h5>
            <p className="card-text">$126,629 average salary(us) • 20,800 open roles(us)<br></br>
              <label id="c1">⭐ 4.6 </label>
              <label id="c1"> 216k rating</label>
              <label id="c1"> 46.8 total hours</label>
            </p>
            <button className="course-action-btn">Register Now</button>
          </div>
        </div>
      </div>

      <h2 className="section-title">Professional Courses</h2>
      <div className="carousel-container">
        <button className="carousel-btn prev" onClick={() => {
          const container = document.querySelector('.carousel-track');
          container.scrollLeft -= container.offsetWidth;
        }}>❮</button>
        <div className="carousel-track">
          {professionalCourses.map((course, index) => (
            <div key={index} className="carousel-card" onClick={(e) => 
              handleLinkClick(course.url, e)
            }>
              <img src={course.img} className="carousel-img" alt={course.title}></img>
              <div className="carousel-content">
                <h5 className="carousel-title"><b>{course.title}</b></h5>
                <p className="carousel-text">
                  <span className="rating">⭐ {course.rating}</span>
                  <span className="hours">{course.totalHours} hours</span>
                </p>
                <button className="course-action-btn">Buy Course</button>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-btn next" onClick={() => {
          const container = document.querySelector('.carousel-track');
          container.scrollLeft += container.offsetWidth;
        }}>❯</button>
      </div>

      <h2 className="section-title">Featured Courses</h2>
      <div id="learndcard">
        <div id="card" className="card" style={{width: "23rem"}} onClick={(e) => 
          handleLinkClick("https://www.udemy.com/course/100-days-of-code/", e)
        }>
          <img src="c4.png" className="card-img-top" alt="Python Course"></img>
          <div className="card-body">
            <h5 className="card-title"><b>100 Days of Code: The Complete Python Pro Bootcamp</b></h5>
            <p className="card-text">Master Python by building 100 projects in 100 days<br></br>
              <label id="c1">⭐ 4.7 </label>
              <label id="c1"> 442k rating</label>
              <label id="c1"> 87.6 total hours</label>
            </p>
            <button className="course-action-btn">Buy Course</button>
          </div>
        </div>

        <div id="card1" className="card1" style={{width: "23rem"}} onClick={(e) => 
          handleLinkClick("https://www.udemy.com/course/the-complete-web-development-bootcamp/?couponCode=CP130525", e)
        }>
          <img src="c6.png" className="card-img-top" alt="Web Development"></img>
          <div className="card-body">
            <h5 className="card-title"><b>The Complete Full-Stack Web Development Bootcamp</b></h5>
            <p className="card-text">Become a full-stack web developer with just one course<br></br>
              <label id="c1">⭐ 4.6 </label>
              <label id="c1"> 3.3k rating</label>
              <label id="c1"> 28.4 total hours</label>
            </p>
            <button className="course-action-btn">Buy Course</button>
          </div>
        </div>

        <div id="card2" className="card2" style={{width: "23rem"}} onClick={(e) => 
          handleLinkClick("https://www.udemy.com/course/aws-certified-cloud-practitioner-new/", e)
        }>
          <img src="c5.png" className="card-img-top" alt="AWS Course"></img>
          <div className="card-body">
            <h5 className="card-title"><b>[NEW] Ultimate AWS Certified Cloud Practitioner CLF-C02 2025</b></h5>
            <p className="card-text">Pass the AWS Cloud Practitioner Certification<br></br>
              <label id="c1">⭐ 4.6 </label>
              <label id="c1"> 216k rating</label>
              <label id="c1"> 46.8 total hours</label>
            </p>
            <button className="course-action-btn">Buy Course</button>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>About Us</h3>
            <ul>
              <li><a href="#" onClick={(e) => handleLinkClick("#", e)}>Our Story</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick("#", e)}>Careers</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick("#", e)}>Press</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick("#", e)}>Blog</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick("#", e)}>Investor Relations</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick("#", e)}>Sustainability</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Resources</h3>
            <ul>
              <li><a href="#" onClick={(e) => handleLinkClick("#", e)}>Help Center</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick("#", e)}>Terms of Service</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick("#", e)}>Privacy Policy</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick("#", e)}>Cookie Settings</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick("#", e)}>Accessibility</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick("#", e)}>Affiliate Program</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Popular Topics</h3>
            <ul>
              <li><a href="#" onClick={(e) => handleLinkClick("#", e)}>Web Development</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick("#", e)}>Data Science</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick("#", e)}>Digital Marketing</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick("#", e)}>Cloud Computing</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick("#", e)}>Machine Learning</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick("#", e)}>Cybersecurity</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Connect With Us</h3>
            <ul>
              <li><a href="#" onClick={(e) => handleLinkClick("#", e)}>Facebook</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick("#", e)}>Twitter</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick("#", e)}>LinkedIn</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick("#", e)}>Instagram</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick("#", e)}>YouTube</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick("#", e)}>Pinterest</a></li>
            </ul>
          </div>
          <div className="footer-section newsletter">
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter to get the latest updates.</p>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Learning Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
