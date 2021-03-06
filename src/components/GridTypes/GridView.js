import React from 'react'
import Grid from 'material-ui/Grid'
import PostPreview from '../PostPreview'

const GridView = ({ posts }) => (
  <Grid container>
    {posts &&
      posts.edges.map(post => (
        <Grid key={post.node.id} item xs={6} sm={4} md={6} lg={6}>
          <PostPreview
            style={{ height: '100%' }}
            id={post.node.id}
            date={post.node.date}
            imageURL={
              post.node.featuredImage && post.node.featuredImage.sourceUrl
            }
            title={post.node.title}
            category={post.node.categories.edges[0].node.name}
            content={post.node.content}
            trim={true}
          />
        </Grid>
      ))}
  </Grid>
)

export default GridView
