import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

import constants from '../../constants'
import { Breed } from '../../models'

interface FetchBreedsResult {
  loading: boolean
  error: string
  response: Breed[]
}

/**
 * Hook for fetching Cat Breeds
 * @returns
 */
const useFetchBreeds = (): FetchBreedsResult => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [response, setResponse] = useState<Breed[]>([])

  const fetchBreeds = useCallback(() => {
    axios
      .get(`${constants.catApi}/breeds`)
      .then((res) => {
        const breeds: Breed[] = res.data.map((breed: any) => ({
          id: breed.id,
          name: breed.name,
        }))

        setResponse(breeds)
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }, [])

  /**
   * Start fetching as soon as the component mounts
   */
  useEffect(() => fetchBreeds(), [fetchBreeds])

  return { loading, error, response }
}

export default useFetchBreeds
