import { Container } from 'semantic-ui-react'
import { Footer } from '@components/Footer'
import { Navbar } from '@components/Navbar'
// import styles from "./Layout.module.css"

type LayoutProps = {
  children?: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Navbar />
    <Container as='main' text>
      {children}
    </Container>
    <Footer />
  </>
)
