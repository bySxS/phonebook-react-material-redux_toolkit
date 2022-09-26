import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { RoutePath } from 'Router'
import { useAuth } from 'features/auth/hooks/useAuth'

interface IProtectedRouteProps {
  children?: JSX.Element
}

const ProtectedRoute = ({ children }: IProtectedRouteProps) => {
  const location = useLocation()
  const { isAuth } = useAuth()
  if (!isAuth) {
    return <Navigate to={RoutePath.LOGIN} state={{ from: location }} replace />
  }

  return children || <Outlet />
}

export default ProtectedRoute