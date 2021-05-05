import React from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Layout from '../src/components/Layout'

export default function About() {
  return (
    <Layout activePage="/about">
      <Box my={4}>
        <Typography variant="h3" component="h3" gutterBottom title="heading">
          It&#39;s About page
        </Typography>
      </Box>
    </Layout>
  )
}
