import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

import constants from '../../constants'
import { Cat } from '../../models'

interface FetchSingleCatResult {
  loading: boolean
  error: string
  response?: Cat
}

/**
 * Hook for fetching a Cat
 * @returns
 */
const useFetchSingleCat = (catId: string): FetchSingleCatResult => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [response, setResponse] = useState<Cat>()

  const fetchCat = useCallback(() => {
    axios
      .get(`${constants.catApi}/images${catId}`)
      .then((res) => {
        const [breed] = res.data.breeds

        const cat: Cat = {
          catId,
          id: breed.id,
          description: breed.description,
          imageUrl: res.data.url,
          name: breed.name,
          origin: breed.origin,
          temperament: breed.temperament,
        }

        setResponse(cat)
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }, [catId])

  /**
   * Start fetching as soon as the component mounts
   */
  useEffect(() => fetchCat(), [fetchCat])

  return { loading, error, response }
}

export default useFetchSingleCat
