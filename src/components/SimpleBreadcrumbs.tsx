import React from 'react'
import Typography from '@material-ui/core/Typography'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Link from './Link'
import { Box } from '@material-ui/core'

export interface PageLink {
  link: string
  label: string
}
export interface SimpleBreadcrumbsProps {
  links: PageLink[]
  activePage: string
}

export const SimpleBreadcrumbs: React.FunctionComponent<SimpleBreadcrumbsProps> = ({
  activePage,
  links,
}) => {
  return (
    <Box my={4}>
      <Breadcrumbs aria-label="breadcrumb">
        {links
          .filter((link) => link.link !== activePage)
          .slice(0, 1)
          .map((pageLink) => (
            <Link color="inherit" href={pageLink.link} key={`ln_${pageLink.link}`}>
              {pageLink.label}
            </Link>
          ))}
        {links
          .filter((link) => link.link === activePage)
          .map((pageLink) => (
            <Typography key={`bm_${pageLink.link}`} color="textPrimary">
              {pageLink.label}
            </Typography>
          ))}
      </Breadcrumbs>
    </Box>
  )
}

export default SimpleBreadcrumbs
