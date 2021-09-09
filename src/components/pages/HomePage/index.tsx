import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import useFetchBreeds from '../../hooks/useFetchBreeds'
import CatList from '../../features/CatList'
import SelectInputSection from '../../features/SelectInputSection'
import LoadMoreButton from '../../base/LoadMoreButton'
import PageContainer from '../../base/PageContainer'

import useStyles from './useStyles'

export const HomePage: React.FC = () => {
  const classes = useStyles()
  const { loading, error, response } = useFetchBreeds()

  return (
    <PageContainer>
      <h1>Cat Browser</h1>
      <Row className={classes.select}>
        <Col md={3} sm={6} xs={12}>
          <SelectInputSection
            loading={loading}
            error={!!error}
            breeds={response}
            onSelectBreed={() => console.log('test')}
          />
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
