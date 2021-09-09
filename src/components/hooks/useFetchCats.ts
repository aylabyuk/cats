import { useEffect, useState, useCallback } from 'react'
import axios from 'axios'

import useRefValue from './useRefValue'
import constants from '../../constants'
import { Cat } from '../../models'

interface FetchCatsResult {
  loading: boolean
  error: string
  response: Cat[]
  loadMore: () => void
}

/**
 * Hook for fetching Cat information depending on the breedId
 * @param breedId a Cat breed identification
 * @returns
 */
const useFetchCats = (breedId: string): FetchCatsResult => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [response, setResponse] = useState<Cat[]>([])
  const [page, setPage] = useState(1)

  const prevBreedId = useRefValue(breedId)

  const fetchCats = () => {
    setLoading(true)

    axios
      .get(`${constants.searchUrl}?page=${page}&limit=10&breed_id=${breedId}`)
      .then((res) => {
        const newCats: Cat[] = res.data.map(
          (cat: any) =>
            ({
              catId: cat.id,
              imageUrl: cat.url,
            } as Cat),
        )

        const updated = response.concat(newCats)
        setResponse(updated)
      })
      .catch((err) => setError(err))
      .finally(() => {
        setPage((current) => current + 1)
        setLoading(false)
      })
  }

  /**
   * If the breedId is changed, the response value is reset
   * and new sets of cats will be fetched
   */
  useEffect(() => {
    if (prevBreedId !== breedId) {
      setResponse([])
      fetchCats()
    }
  }, [breedId, prevBreedId])

  /**
   * Will load more cats and add it to the list
   */
  const loadMore = useCallback(() => fetchCats(), [])

  return { loading, error, response, loadMore }
}

export default useFetchCats
