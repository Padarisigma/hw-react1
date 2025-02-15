import './App.css'
import logo from './assets/Appy.png'
import burger from './assets/menu-outline.png'
import header1 from './assets/Col (1).png'
import header2 from './assets/play.png'
import main1 from './assets/Circle (4).png'
import main2 from './assets/Circle (5).png'
import main3 from './assets/Circle (6).png'
import main4 from './assets/Col (2).png'
import main5 from './assets/Col (3).png'
import main6 from './assets/chevron-back.png'
import main7 from './assets/chevron-forward.png'
import main8 from './assets/Col (4).png'
import main9 from './assets/Slider Cues.png'
import main10 from './assets/chevron-down.png'
import main11 from './assets/Col (5).png'
import footer1 from './assets/Logo-grey.png'
import footer2 from './assets/Social Icons.png'

function App() {
  return (
    <>
     <header>
      <nav>
        <div className='leftHeader'>
          <img src={logo} alt="" />
        <div className='ulik'>
          <select name="" id="">
            <option value="">Products</option>
          </select>
          <select name="" id="">
            <option value="">Business Solutions</option>
          </select>
          <select name="" id="">
            <option value="">Help center</option>
          </select>
          <p>Pricing</p>
        </div>
        </div>

        <div className='rightPart'>
          <p>Log in</p>
          <button>Get Started</button>
        </div>

        <img src={burger} alt="" className='burger' />
        
      </nav>


      <section className='firstHeader'>
        <aside className='leftPartSec1'>
          <h1>Building apps just <br /> got easier</h1>
          <p>Aliquam vel platea curabitur sit vestibulum egestas sit id lorem. Aliquet neque, dui sed eget scelerisque. Non at at venenatis tortor amet feugiat ullamcorper in. Odio vulputate cras vel lacinia turpis volutpat adipiscing. Sollicitudin at velit, blandit tempus nunc in.</p>
          <div className='getStarted'>
            <button>Get Started</button>
            <div className='watch'>
              <img src={header2} alt="" />
              <p>Watch Video</p>
            </div>
          </div>
        </aside>
        <aside className='rightPartSec1'>
          <img src={header1} alt="" />
        </aside>
      </section>
     </header>


     <main>
      <section className='firstMainSection'>
        <div className='box1 box'>
          <img src={main1} alt="" />
          <h3>Fermentum amet</h3>
          <p>Pellentesque quis tincidunt sit sed. Tortor massa sed habitant dignissim senectus purus. Consectetur integer id in et pulvinar interdum id.</p>
        </div>
        <div className='box2 box'>
          <img src={main2} alt="" />
          <h3>Fermentum amet</h3>
          <p>Pellentesque quis tincidunt sit sed. Tortor massa sed habitant dignissim senectus purus. Consectetur integer id in et pulvinar interdum id.</p>
        </div>
        <div className='box3 box'>
          <img src={main3} alt="" />
          <h3>Fermentum amet</h3>
          <p>Pellentesque quis tincidunt sit sed. Tortor massa sed habitant dignissim senectus purus. Consectetur integer id in et pulvinar interdum id.</p>
        </div>
      </section>


      <section className='secondMainSection'>
        <div className='topMainSection2'>
          <h2>All the essential tools</h2>
          <p>Odio vulputate cras vel lacinia turpis volutpat adipiscing. Sollicitudin at velit, blandit tempus nunc in.</p>
        </div>

        <aside className='bottomMainSection2'>
          <aside>
            <img src={main4} alt="" />
          </aside>
          <aside className='infoSec2'>
            <div className='lineLeft'><h4>Sem augue tempus</h4>
            <p>Venenatis blandit habitasse nunc, sapien enim elit in. Arcu, pharetra, et cursus sit senectus in blandit. Aliquet enim fermentum non semper nibh ut neque. Pellentesque ut tincidunt vitae arcu bibendum malesuada lorem sapien volutpat.</p></div>
            
            <div className='lineLeft hh'><h4>Habitant integer interdum a</h4></div>
            <div className='lineLeft hh'><h4>Tempus natoque id</h4></div>
            
          </aside>
        </aside>
      </section>


      <section className='secondMainSection'>
        <div className='topMainSection2'>
          <h2>Focus on what matters</h2>
          <p>Eget at purus mauris euismod metus vitae eget. Diam massa venenatis pellentesque facilisis nunc, varius.</p>
        </div>

        <aside className='bottomMainSection2'>
          <aside>
            <img src={main5} alt="" />
          </aside>
          <aside className='infoSec2'>
            <div className='lineLeft'><h4>Bibendum gravida dolor egestas aliquam</h4>
            <p>Egestas tincidunt hendrerit nibh platea sit vivamus aenean rhoncus etiam. Tristique amet, sed ac ac dolor habitant. Mauris duis neque molestie venenatis nibh hendrerit pharetra. Tortor suscipit leo sit tellus ac scelerisque gravida sem.</p></div>
            
            <div className='lineLeft hh'><h4>Habitant integer interdum a</h4></div>
            <div className='lineLeft hh'><h4>Tempus natoque id</h4></div>
            
          </aside>
        </aside>

        <div className='btnMainSec2'>
          <button>Get Started</button>
        </div>
      </section>


      <section className='success'>
      <img src={main6} alt="" className='imgg1' />
      <div className='taksim'>
        <div className='images'>
          <img src={main8} alt="" />
        </div>
        <div className='infoTaksim'>
          <h3>Success Stories</h3>
          <p>“ Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo. ”</p>
          <div className='about'>
            <p>Marie Poirot, <br />
            Bigapp</p>
          </div>
          <img src={main9} alt="" />
        </div>
      </div>
      <img src={main7} alt=""  className='imgg2'/>
      </section>



      <section className='easySection'>
        <p className='zag'>Answers to your questions</p>
        <div className='miniDiv'>
          <p>Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?</p>
          <img src={main10} alt="" />
        </div>
        <div className='miniDiv'>
          <p>Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?</p>
          <img src={main10} alt="" />
        </div>
        <div className='miniDiv'>
          <p>Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?</p>
          <img src={main10} alt="" />
        </div>
        <div className='miniDiv'>
          <p>Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?</p>
          <img src={main10} alt="" />
        </div>
        <div className='miniDiv'>
          <p>Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?</p>
          <img src={main10} alt="" />
        </div>
      </section>


      <section className='lastSection'>
        <aside className='infoLastSection'>
          <h1>Start now and get the <br /> best services</h1>
          <p>Ac urna elementum purus vulputate tincidunt. Quam maecenas feugiat congue orci, eget tellus pellentesque aliquet. Felis fringilla morbi dui ac consequat risus pharetra odio pulvinar. Id pellentesque in tortor nec nulla cras sapien. Adipiscing nisi tellus quisque aliquet sit risus elementum scelerisque.</p>
          <button>Get Started</button>
        </aside>
        <aside className='imgLastSection'>
          <img src={main11} alt="" />
        </aside>
      </section>
     </main>


     <footer>
      <aside className='footerLeft'>
        <div className='boxes'>
          <h3>Categories</h3>
          <p>User Interface</p>
          <p>User Experience</p>
          <p>Digital Media</p>
          <p>Lifestyle</p>
          <p>Programming</p>
          <p>Animation</p>
        </div>
        <div className='boxes'>
          <h3>Product</h3>
          <p>Pricing</p>
          <p>Overview</p>
          <p>Browse</p>
          <p>Accessibility</p>
          <p>Five</p>
          <p>Changelog</p>
        </div>
        <div className='boxes'>
          <h3>Solutions</h3>
          <p>Brainstorming</p>
          <p>Ideation</p>
          <p>Wireframing</p>
          <p>Research</p>
          <p>Design</p>
          <p>Concept</p>
        </div>
        <div className='boxes'>
          <h3>Resources</h3>
          <p>Help Center</p>
          <p>Blog</p>
          <p>Tutorials</p>
          <p>FAQs</p>
          <p>Community</p>
          <p>Events</p>
        </div>
        <div className='boxes'>
          <h3>Support</h3>
          <p>Contact us</p>
          <p>Developers</p>
          <p>Documentation</p>
          <p>Integrations</p>
          <p>Reports</p>
          <p>Webinar</p>
        </div>
        <div className='boxes'>
          <h3>Company</h3>
          <p>About</p>
          <p>Press</p>
          <p>Events</p>
          <p>Careers</p>
          <p>Customers</p>
          <p>Partners</p>
        </div>
      </aside>
      <aside className='footerRight'>
       <img src={footer1} alt="" className='nan' />
       <p>@ 2023 All rights reserved.</p>
       <img src={footer2} alt="" className='non' />
      </aside>
     </footer>
    </>
  )
}

export default App
