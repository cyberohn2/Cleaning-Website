import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Services from "./Components/Services"
import Quote from "./Components/Quote"
import Team from "./Components/Team"
import About from "./Components/About"
import Pricing from "./Components/Pricing"
import Testimonials from "./Components/Testimonials"
import Blog from "./Components/Blog"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"


function App() {

  return (
    <>
      <Header />
      <Hero />
      <section>
        <Services />
        <Quote />
        <Team />
        <About />
      </section>
      <section>
        <Pricing />
        <Testimonials />
        <Blog />
        <Contact />
      </section>
      <Footer />
    </>
  )
}

export default App