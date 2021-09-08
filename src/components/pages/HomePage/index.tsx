import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { BreedSelect } from '../../base/BreedSelect'

import useFetchBreeds from './useFetchBreeds'
import CatList from '../../features/CatList'
import LoadMoreButton from '../../base/LoadMoreButton'

export interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = ({}) => {
  const { loading, error, response } = useFetchBreeds()

  return (
    <Container fluid="sm">
      <h1>Cat Browser</h1>
      <Row>
        <Col md={3} sm={6} xs={12}>
          {loading ? (
            <h2>Loading...</h2>
          ) : (
            <BreedSelect
              breeds={response}
              onSelectBreed={() => console.log('test')}
            />
          )}
        </Col>
      </Row>
      <Row>
        <Col md={3} sm={6} xs={12}>
          <CatList cats={[]} />
        </Col>
      </Row>
      <Row>
        <Col md={3} sm={6} xs={12}>
          <LoadMoreButton onClick={() => console.log('test')} />
        </Col>
      </Row>
    </Container>
  )
}

export default HomePage
