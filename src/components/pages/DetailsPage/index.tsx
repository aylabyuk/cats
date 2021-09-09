import React from 'react'

import DetailsCard from '../../base/DetailsCard'
import PageContainer from '../../base/PageContainer'

import useFetchSingleCat from '../../hooks/useFetchSingleCat'

export const DetailsPage: React.FC = () => {
  const { loading, error, response } = useFetchSingleCat(
    window.location.pathname,
  )

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
