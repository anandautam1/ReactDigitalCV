/**
 *
 * Asynchronously loads the component for ChartTimeSeries
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
