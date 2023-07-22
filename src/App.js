import potrait from "./potrait_pink.png";
import LinkedIN from "./linkedIn.png";
import Github from "./github.png";
import Twitter from "./twitter.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="TitleBox">
          <img src={potrait} style={{ width: 80, height: 80 }} alt="Ankita" />
          <p className="Title">Ankita Panigrahi</p>
        </div>
        <div className="Container Navbar">
          <div class="hover-underline-animation">About</div>
          <div class="hover-underline-animation">Work Experience</div>
          <div class="hover-underline-animation">Download Resume</div>
          <div class="hover-underline-animation">Hobbies</div>
          <div class="hover-underline-animation">Contact</div>
        </div>
      </div>
      <div className="Content">
        <p>
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product
        </p>
      </div>
      <div className="Socials">
        <a href='https://www.linkedin.com/in/ankita-panigrahi-4654917a/' target='_blank' rel="noreferrer">
          <img src={LinkedIN} alt='linkedIn'/>
        </a>
        <a href="https://github.com/ankita24" target='_blank' rel="noreferrer">
        <img src={Github} alt='github'/>
        </a>
        <a href="https://twitter.com/ankita24_riya" target='_blank' rel="noreferrer">
        <img src={Twitter} alt='twitter'/>
        </a>
      </div>
      {/* 
      <div className="FlexBox">
        <div className="Element">ReactJS</div>
        <div className="Element">Javascript</div>
        <div className="Element">HTML</div>
        <div className="Element">CSS</div>
        <div className="Element">Typescript</div>
        <div className="Element">NextJS</div>
        <div className="Element">Git</div>
      </div>
      
      <div style={{ textAlign: "center", marginTop: 50 }}>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1 }}>
          <button className="Button">Work Experience</button>
        </motion.div>
      </div> */}
    </div>
  );
}

export default App;
