import React from 'react'

import useFetchBreeds from './useFetchBreeds'

export interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = ({}) => {
  const { loading, error, response } = useFetchBreeds()

  if (loading) {
    return <h1>Loading...</h1>
  }

  return <div className="">home page</div>
}

export default HomePage
