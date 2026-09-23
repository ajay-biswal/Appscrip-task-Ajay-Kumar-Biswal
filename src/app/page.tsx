import { getProducts } from "@/lib/api";
import Header from "@/components/Header/Header";
import ProductListing from "@/components/ProductListing/ProductListing";
import Footer from "@/components/Footer/Footer";

export default async function Home(){
  const products = await getProducts();

  return(
    <>

    <Header/>
    <main>
      <ProductListing products={products}/>
    </main>

    <Footer/>

    </>
  )
}