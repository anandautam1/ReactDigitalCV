/**
 *
 * Asynchronously loads the component for ProjectStepper
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
