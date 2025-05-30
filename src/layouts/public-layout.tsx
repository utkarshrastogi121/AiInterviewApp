import Header from "@/components/header"
import Footer from "@/components/footer"
import { Outlet } from "react-router-dom"

const publicLayout = () => {
  return (
    <div className="w-full">
        <Header/>

        <Outlet/>

        <Footer/>
    </div>
  )
}

export default publicLayout