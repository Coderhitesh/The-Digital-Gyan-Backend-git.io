import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import CompanyOverView from './Components/CompanyOverView/CompanyOverView'
import 'react-toastify/dist/ReactToastify.css';
import FounderPage from './Components/FounderPage/FounderPage'
import SEO from './Components/SEO/SEO'
import SEM from './Components/SEM/SEM'
import Ecommerce from './Components/Ecommerce/Ecommerce'
import SMM from './Components/SMM/SMM'
import MobileMarketing from './Components/MobileMarketing/MobileMarketing'
import ContentMarketing from './Components/ContentMarketing/ContentMarketing'
import AffiliateMarketing from './Components/AffiliateMarketing/AffiliateMarketing'
import Management from './Components/Management/Management'
import WhyJoinUs from './Components/WhyJoinUs/WhyJoinUs'
import BenefitOfJoin from './Components/BenefitOfJoin/BenefitOfJoin'
import Contact from './Components/Contact/Contact'
import Auth from './Components/Auth/Auth'
import { Toaster } from 'react-hot-toast'
import SinglePage from './Components/SinglePage/SinglePage'
import ServicesHomePage from './Components/ServicesHomePage/ServicesHomePage'
import BlogPage from './Components/BlogPage/BlogPage'
import SingleBlogPage from './Components/SingleBlogPage/SingleBlogPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<CompanyOverView />} />
          <Route path='/founder' element={<FounderPage />} />
          <Route path='/seo' element={<SEO />} />
          <Route path='/sem' element={<SEM />} />
          <Route path='/ecommerce' element={<Ecommerce />} />
          <Route path='/smm' element={<SMM />} />
          <Route path='/mobile-marketing' element={<MobileMarketing />} />
          <Route path='/content-marketing' element={<ContentMarketing />} />
          <Route path='/affiliate-marketing' element={<AffiliateMarketing />} />
          <Route path='/managment' element={<Management />} />
          <Route path='/why-join' element={<WhyJoinUs />} />
          <Route path='/benefit' element={<BenefitOfJoin />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/digitalauth/owner' element={<Auth />} />
          <Route path='/single-page/:id' element={<SinglePage />} />
          <Route path='/courses' element={<ServicesHomePage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/singleblog/:id' element={<SingleBlogPage />} />
        </Routes>
        <Footer />
        <Toaster/>
      </BrowserRouter>
    </>
  )
}

export default App
