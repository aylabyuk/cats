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
      {loading || !response ? <h2>Loading</h2> : <DetailsCard {...response} />}
    </PageContainer>
  )
}

export default DetailsPage
