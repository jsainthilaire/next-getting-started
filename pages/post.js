import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

const Post = ({ show: { name, summary, image } }) => (
  <Layout>
    <h1>{name}</h1>
    <p>{summary.replace(/<[/]?p>/g, '')}</p>
    {image && <img src={image.medium}/>}
  </Layout>
)

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Post
