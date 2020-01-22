import { useState, useEffect } from 'react'
import axios from 'axios'

function Fetch({ url, children }) {
  const [data, setData] = useState([])

  const fetchData = async () => {
    const res = await axios.get(url)

    setData(res.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return children(data)
}

export default Fetch
