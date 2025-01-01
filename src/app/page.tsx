import React from 'react'
import Header from './Components/header'
import Hero from './Components/hero'
import Eidt from './Components/eidt'
import ProductsCard from './Components/productscard'
import Vita from './Components/vita'
import Neural from './Components/neural'
import Feature from './Components/feature'
import PostList from './Components/post'

import OurTeam from './Components/ourteam'
import BigCompany from './Components/bigcompany'
import Login from './login/page'
import Footer from './Components/footer'
import Wishlist from './Components/wishlist'
import CartProvider from '@/context/cartcontext'
export default function Home() {
  return (
    <><CartProvider>
      <Header />
      <Hero />
      <Eidt />
  
      <ProductsCard />
      <Vita />
      <Neural />
      <Feature />
      <PostList />
  
      <OurTeam />
     
      <BigCompany />
      <Login />
      <Wishlist />
      <Footer />
    
      </CartProvider>
    </>
  )
}
