import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { FlickrItem } from '../containers/Flickr'
import Link from './Link'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: '100%',
  },
  media: {
    height: 140,
  },
  label: {},
  tagsLabel: {
    marginTop: 6,
  },
})

interface MediaCardProps {
  item: FlickrItem
}

export const MediaCard: React.FunctionComponent<MediaCardProps> = ({ item }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={item.media.m} title={item.title} />

      <CardContent>
        <Typography gutterBottom variant="subtitle1" component="div">
          <Link href={item.link}>&#34;{item.title}&#34;</Link> by{' '}
          <Link href={`https://www.flickr.com/people/${item.author_id}/`}>{item.author}</Link>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <span className={classes.label}>Description</span>: {item.description.substr(0, 100)}{' '}
          <Link href={item.link}>...</Link>
          {/* {item.description} */}
          {/* <div dangerouslySetInnerHTML={{ __html: item.description }} /> */}
        </Typography>
        {item.tags.length > 0 ? (
          <Typography
            variant="subtitle1"
            color="textSecondary"
            component="div"
            className={classes.tagsLabel}
          >
            Tags:
            {item.tags.split(' ').map((tag, index) => {
              return (
                <span key={`tg_${item.author_id}_${tag}`}>
                  {index > 0 ? ', ' : ''}
                  {tag}
                </span>
              )
            })}
          </Typography>
        ) : null}
      </CardContent>
    </Card>
  )
}

export default MediaCard
