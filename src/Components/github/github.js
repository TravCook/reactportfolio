import {Octokit} from '@octokit/core'
import {useState, useEffect} from 'react'
import {Row, Col, Card, Container, Button} from 'react-bootstrap'

const Github =  () => {
  const [repos, setRepos] = useState()
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
  });


  useEffect(() => {
    async function fetchData() {
    const response = await octokit.request("GET /users/{owner}/repos", {
      owner: "TravCook",
      per_page: 4,
      sort: 'updated'
    })
    let repos = response.data
    setRepos(repos)
    console.log(repos)
  }
    fetchData()
  }, [])

  return (
    <Container>
      RECENT PROJECTS
    <Row>
      {repos ? repos.map((repo) => {
      return(
      <Col lg="6">
        <Card style={{backgroundColor: '#3498DB', color: '#333333', margin: 15}}>
          <Card.Title>{repo.name}</Card.Title>
          <Card.Text>{repo.description}</Card.Text>
          <a style={{color: '#F2542D'}} href={repo.html_url} target="_blank" rel="noreferrer">See the Repo!</a>
        </Card>
      </Col>)
    }): null}
  </Row>
  </Container>
  )
}

export default Github