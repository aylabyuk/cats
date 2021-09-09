import React, { useCallback, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import CatList from '../../features/CatList'
import SelectInputSection from '../../features/SelectInputSection'
import LoadMoreButton from '../../base/LoadMoreButton'
import PageContainer from '../../base/PageContainer'

import useFetchBreeds from '../../hooks/useFetchBreeds'
import useFetchCats from '../../hooks/useFetchCats'

import useStyles from './useStyles'

export const HomePage: React.FC = () => {
  const [currentBreedId, setCurrentBreedId] = useState<string | undefined>(
    undefined,
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

  const handleSelectBreed = useCallback((breedId: string) => {
    setCurrentBreedId(breedId)
  }, [])

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
        <CatList cats={cats} loading={catsLoading} />
      </Row>

      {!isEndOfPage && (
        <Row>
          <Col md={3} sm={6} xs={12}>
            <LoadMoreButton
              onClick={loadMore}
              loading={catsLoading}
              disabled={!cats.length}
            />
          </Col>
        </Row>
      )}
    </PageContainer>
  )
}

export default HomePage
