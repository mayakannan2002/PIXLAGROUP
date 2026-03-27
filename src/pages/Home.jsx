import Hero from "./../components/Home/Hero";
import Navbar from "./../components/Navbar";
import About from "./../components/Home/About";
import WhyPixla from "./../components/Home/Why pixla";
import OurDivisions from "./../components/Home/Division";
import ProductsSection from "./../components/Home/Product";
import FranchiseSection from "./../components/Home/FranchiseSection";
import InvestorsSection from "./../components/Home/Investors";
import Esgsection from "./../components/Home/Esgsection";
import Carrersection from "./../components/Home/Carrersection";
import Media from "./../components/Home/Media";
import ContactSection from "./../components/Home/Contact";



function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
   
      <OurDivisions/>
      <ProductsSection/>
      <FranchiseSection/>
      <InvestorsSection/>
      <Esgsection/>
      <Carrersection/>
      <Media/>
      <ContactSection/>
    
     
    </>
  );
}

export default App;