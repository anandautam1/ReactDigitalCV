/**
 *
 * Asynchronously loads the component for TableSeries
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
