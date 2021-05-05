import { Container } from '@material-ui/core'
import React from 'react'
import ButtonAppBar from './ButtonAppBar'
import SimpleBreadcrumbs, { PageLink } from './SimpleBreadcrumbs'
import Copyright from './Copyright'

type LayoutProps = {
  activePage: string
  children: any
}

const pageLinks: PageLink[] = [
  { label: 'Home', link: '/' },
  { label: 'Flickr Photo Stream', link: '/flickr' },
  { label: 'About', link: '/about' },
]

const Layout: React.FunctionComponent<LayoutProps> = ({ activePage, children }) => {
  return (
    <Container maxWidth="xl">
      <header>
        <ButtonAppBar links={pageLinks} activePage={activePage} />
      </header>
      <main>
        <Container maxWidth="xl">
          {activePage !== '/' ? (
            <SimpleBreadcrumbs links={pageLinks} activePage={activePage} />
          ) : null}
          {children}
        </Container>
      </main>
      <footer>
        <Copyright />
      </footer>
    </Container>
  )
}

export default Layout
