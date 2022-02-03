import { Container } from 'semantic-ui-react'
import { Footer } from '@components/Footer'
import { Navbar } from '@components/Navbar'
import Head from 'next/head'
// import styles from "./Layout.module.css"

type LayoutProps = {
  children?: React.ReactNode
  title: string
}

export const Layout = ({ children, title }: LayoutProps) => (
  <>
    <Head>
      <title>AvoStore - {title}</title>
    </Head>
    <Navbar />
    <Container as="main" text>
      {children}
    </Container>
    <Footer />
  </>
)
