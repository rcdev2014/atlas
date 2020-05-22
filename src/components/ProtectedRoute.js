import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { fetchUsers } from '../redux/user/userActions'

const ProtectedRoute = ({ path, component }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())

    // eslint-disable-next-line
  }, [])
  return <Route path={path} component={component} />
}

export default ProtectedRoute
