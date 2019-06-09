import { useEffect } from 'react'
import PropTypes from 'prop-types'

import { destoryGlobalSpinner } from '../helpers/view'

export default function Layout({ children }) {
  useEffect(() => {
    destoryGlobalSpinner()
  }, [])
  return children
}

Layout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  }),
  route: PropTypes.any,
  children: PropTypes.any
}
