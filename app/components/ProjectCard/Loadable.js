/**
 *
 * Asynchronously loads the component for ProjectCard
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
