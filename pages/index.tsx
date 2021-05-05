import { Box, Container, Grid, Typography } from '@material-ui/core'
import Copyright from '../src/components/Copyright'
import OutlinedCard from '../src/components/OutlinedCard'

const Index = () => (
  <Container maxWidth="xl">
    <header>
      <Box my={4}>
        <Typography variant="h3" component="h3" gutterBottom title="heading" align={'center'}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Typography>
      </Box>
    </header>
    <main>
      <Container maxWidth="xl">
        <Grid container justify="center" spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <OutlinedCard link={{ link: '/flickr', label: 'Flickr Photo Stream' }}>
              <>Display the Flickr API results as Material UI Cards</>
            </OutlinedCard>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <OutlinedCard link={{ link: '/about', label: 'About page' }}>
              <>Just another possible page in the site</>
            </OutlinedCard>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <OutlinedCard
              link={{
                link: 'https://nextjs-front-seven.vercel.app/flickr',
                label: 'Deployed Flickr page',
              }}
            >
              <>Visit deployed site</>
            </OutlinedCard>
          </Grid>
        </Grid>
      </Container>
    </main>
    <footer>
      <Box my={4}>
        <Copyright />
      </Box>
    </footer>
  </Container>
)

export default Index
