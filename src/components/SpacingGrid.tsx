import React from 'react'
import Grid from '@material-ui/core/Grid'
import MediaCard from './MediaCard'
import { FlickrItem } from '../containers/Flickr'

interface SpacingGridProps {
  items: FlickrItem[]
}

export const SpacingGrid: React.FunctionComponent<SpacingGridProps> = ({ items }) => {
  return (
    <Grid container justify="center" spacing={2}>
      {items.map((item) => (
        <Grid key={`gr_item_${item.author_id}`} item xs={12} sm={6} md={4} lg={3} xl={2}>
          <MediaCard item={item} />
        </Grid>
      ))}
    </Grid>
  )
}

export default SpacingGrid
