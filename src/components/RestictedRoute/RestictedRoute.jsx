import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuthenticated } from '../../redux/auth/authSelectors';

const RestictedRoute = ({ children, redirectTo = '/contacts' }) => {
  const authenticated = useSelector(selectIsAuthenticated);

  return authenticated ? <Navigate to={redirectTo} replace /> : children;
};

export default RestictedRoute;
