import React, { ReactElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { PageLink } from './SimpleBreadcrumbs'
import Link from './Link'

const useStyles = makeStyles({
  rootLink: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  root: {
    minWidth: 275,
    height: '100%',
  },
  link: {
    textDecoration: 'none',
    color: 'rgb(0, 0, 238)',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
})

export interface OutlinedCardProps {
  link: PageLink
  children: ReactElement
}

export const OutlinedCard: React.FunctionComponent<OutlinedCardProps> = ({ link, children }) => {
  const classes = useStyles()

  return (
    <Link href={link.link} className={classes.rootLink}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            variant={'h5'}
            component={'h5'}
            color="textPrimary"
            gutterBottom
            className={classes.link}
          >
            {link.label}
          </Typography>
          <Typography variant="h6" component="div">
            {children}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  )
}

export default OutlinedCard
