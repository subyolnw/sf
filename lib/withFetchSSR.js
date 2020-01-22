import axios from 'axios'

const withFetchSSR = url => WrappedComponent => {
  const Component = ({ withFetchSSRData }) => (
    <WrappedComponent data={withFetchSSRData}></WrappedComponent>
  )

  Component.getInitialProps = async ctx => {
    const props = WrappedComponent.getInitialProps
      ? await WrappedComponent.getInitialProps(ctx)
      : {}

    const res = await axios.get(url)

    return { ...props, withFetchSSRData: res.data }
  }

  return Component
}

export default withFetchSSR
