import React from 'react'
import Alert from 'react-bootstrap/Alert'

import DetailsCard from '../../base/DetailsCard'
import PageContainer from '../../base/PageContainer'

import useFetchSingleCat from '../../hooks/useFetchSingleCat'

export const DetailsPage: React.FC = () => {
  const { loading, error, response } = useFetchSingleCat(
    window.location.pathname,
  )

  if (error) {
    return (
      <PageContainer>
        <Alert variant="warning">
          I can't fetch cat details right now. Damn, it hurts right here in my
          meow meow 😿
        </Alert>
      </PageContainer>
    )
  }

  return (
    <PageContainer>
      {loading || !response ? (
        <h5>Loading...</h5>
      ) : (
        <DetailsCard {...response} />
      )}
    </PageContainer>
  )
}

export default DetailsPage
