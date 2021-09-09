import { useEffect, useState, useCallback } from 'react'
import axios from 'axios'

import useRefValue from './useRefValue'
import constants from '../../constants'
import { Cat } from '../../models'

interface FetchCatsResult {
  loading: boolean
  isEndOfPage: boolean
  error: string
  response: Cat[]
  loadMore: () => void
}

/**
 * Hook for fetching Cat information depending on the breedId
 * @param breedId a Cat breed identification
 * @returns
 */
const useFetchCats = (breedId?: string): FetchCatsResult => {
  const [loading, setLoading] = useState(false)
  const [isEndOfPage, setIsEndOfPage] = useState(false)
  const [error, setError] = useState('')
  const [response, setResponse] = useState<Cat[]>([])
  const [page, setPage] = useState(1)

  const prevBreedId = useRefValue(breedId)

  const fetchCats = useCallback(() => {
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

        // check if breedId is changed
        const isBreedIdChanged = prevBreedId !== breedId
        const updated = isBreedIdChanged ? newCats : [...response, ...newCats]

        if (isBreedIdChanged) {
          setIsEndOfPage(false)
        }

        // make sure there are no duplicates
        const filtered = updated.filter(
          (item, index, array) =>
            array.findIndex((current) => current.catId === item.catId) ===
            index,
        )

        if (response.length === filtered.length) {
          setIsEndOfPage(true)
        }

        setResponse(filtered)
      })
      .catch((err) => setError(err))
      .finally(() => {
        setPage(page + 1)
        setLoading(false)
      })
  }, [breedId, prevBreedId, page])

  /**
   * Fetch cats on component mount
   */
  useEffect(() => {
    if (!breedId) return

    fetchCats()
  }, [breedId])

  return { loading, error, response, loadMore: fetchCats, isEndOfPage }
}

export default useFetchCats
