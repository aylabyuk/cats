import { useEffect, useState } from 'react'
import axios from 'axios'

import constants from '../../../constants'
import { Breed } from '../../../models'

interface FetchBreedsResult {
  loading: boolean
  error: string
  response: Breed[]
}

const useFetchBreeds = (): FetchBreedsResult => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [response, setResponse] = useState<Breed[]>([])

  const fetchBreeds = () => {
    axios
      .get(constants.breedsUrl)
      .then((res) => {
        const breeds: Breed[] = res.data.map((breed: any) => ({
          id: breed.id,
          name: breed.name,
        }))

        setResponse(breeds)
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }

  useEffect(() => fetchBreeds(), [])

  return { loading, error, response }
}

export default useFetchBreeds