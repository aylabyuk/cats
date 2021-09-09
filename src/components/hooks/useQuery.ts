import { useLocation } from 'react-router-dom'

/**
 * Hook to get the search param in the url
 * @returns the query value
 */
const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

export default useQuery
