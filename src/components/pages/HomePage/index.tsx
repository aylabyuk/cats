import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { BreedSelect } from '../../base/BreedSelect'

import useFetchBreeds from './useFetchBreeds'
import CatList from '../../features/CatList'
import LoadMoreButton from '../../base/LoadMoreButton'
import PageContainer from '../../base/PageContainer'

import useStyles from './useStyles'

export interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = ({}) => {
  const classes = useStyles()
  const { loading, error, response } = useFetchBreeds()

  return (
    <PageContainer>
      <h1>Cat Browser</h1>
      <Row className={classes.select}>
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
        <CatList cats={[]} />
      </Row>
      <Row>
        <Col md={3} sm={6} xs={12}>
          <LoadMoreButton onClick={() => console.log('test')} />
        </Col>
      </Row>
    </PageContainer>
  )
}

export default HomePage
