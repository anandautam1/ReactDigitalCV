/**
 *
 * Asynchronously loads the component for AquaChart
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
