/**
 *
 * Asynchronously loads the component for AvatarBlob
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
