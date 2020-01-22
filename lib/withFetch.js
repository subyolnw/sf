import { useState, useEffect } from 'react'
import axios from 'axios'

const withFetch = url => WrappedComponent => props => {
  const [data, setData] = useState([])

  const fetchData = async () => {
    const res = await axios.get(url)

    setData(res.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <WrappedComponent data={data} {...props}></WrappedComponent>
}

export default withFetch
