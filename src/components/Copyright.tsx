import React from 'react'
import Typography from '@material-ui/core/Typography'
import MuiLink from '@material-ui/core/Link'

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://nextjs-front-seven.vercel.app/">
        My website
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
