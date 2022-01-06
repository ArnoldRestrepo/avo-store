import { Footer } from '@components/Footer'
import { Navbar } from '@components/Navbar'
// import styles from "./Layout.module.css"

export const Layout: React.FC = ({children}) => (
  <div className="container">
    <Navbar />
    {children}
    <Footer />
    <style jsx>{`
        .container{
          background-color: salmon;
        }
      `}
    </style>
  </div>
)