import { Navbar } from '@components/Navbar'

export const Layout: React.FC = ({children}) => (
  <div>
    <Navbar />
    {children}
  </div>
)