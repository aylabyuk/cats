import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetchBreeds = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [response, setResponse] = useState(null)

  const fetchBreeds = () => {
    axios
      .get('')
      .then((res) => setResponse(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }

  useEffect(() => fetchBreeds(), [])

  return { loading, error, response }
}

export default useFetchBreeds
