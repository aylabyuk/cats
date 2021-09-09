import React, { useCallback, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'

import CatList from '../../features/CatList'
import SelectInputSection from '../../features/SelectInputSection'
import LoadMoreButton from '../../base/LoadMoreButton'
import PageContainer from '../../base/PageContainer'

import useFetchBreeds from '../../hooks/useFetchBreeds'
import useFetchCats from '../../hooks/useFetchCats'
import useQuery from '../../hooks/useQuery'

import useStyles from './useStyles'

export const HomePage: React.FC = () => {
  const query = useQuery()

  const [currentBreedId, setCurrentBreedId] = useState<string | null>(
    query.get('breed'),
  )
  const classes = useStyles()

  const {
    loading: breedsLoading,
    error: breedsError,
    response: breeds,
  } = useFetchBreeds()

  const {
    loading: catsLoading,
    error: catsError,
    response: cats,
    loadMore,
    isEndOfPage,
  } = useFetchCats(currentBreedId)

  const handleSelectBreed = useCallback(
    (breedId: string) => setCurrentBreedId(breedId),
    [],
  )

  return (
    <PageContainer>
      <h1>Cat Browser</h1>
      <Row className={classes.select}>
        <Col md={3} sm={6} xs={12}>
          <SelectInputSection
            loading={breedsLoading}
            error={!!breedsError}
            breeds={breeds}
            onSelectBreed={handleSelectBreed}
          />
        </Col>
      </Row>
      <Row>
        {catsError ? (
          <Col md={3} sm={6} xs={12}>
            <Alert variant="warning">
              Apologies but we could not load new cats for you at this time!
              Meow! 🐱
            </Alert>
          </Col>
        ) : (
          <CatList cats={cats} />
        )}
      </Row>

      {!isEndOfPage ||
        (!catsError && (
          <Row>
            <Col md={3} sm={6} xs={12}>
              <LoadMoreButton
                onClick={loadMore}
                loading={catsLoading}
                disabled={!cats.length}
              />
            </Col>
          </Row>
        ))}
    </PageContainer>
  )
}

export default HomePage
