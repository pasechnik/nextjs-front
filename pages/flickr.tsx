import Box from '@material-ui/core/Box'
import Flickr from '../src/containers/Flickr'
import Typography from '@material-ui/core/Typography'
import Link from '../src/components/Link'
import React from 'react'
import Layout from '../src/components/Layout'

export default function FlickrPage() {
  return (
    <Layout activePage="/flickr">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Flickr Photo Stream (
          <Link
            target="_blank"
            href="https://api.flickr.com/services/feeds/photos_public.gne?format=json"
          >
            Flickr API
          </Link>
          )
        </Typography>
      </Box>
      <Box my={4}>
        <Flickr />
      </Box>
    </Layout>
  )
}
