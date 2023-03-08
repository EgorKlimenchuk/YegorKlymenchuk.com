import { LazyLoadImage } from 'react-lazy-load-image-component';

import MyPhotoPng from 'assets/icons/myPhoto.png';

export const MyPhoto = () => (
  <div className="max-w-45% md:max-h-full md:max-w-full mt-auto">
    <LazyLoadImage
      src={MyPhotoPng}
      effect="blur"
      className="mt-auto max-h-custom-44 object-cover rounded-lg"
    />
  </div>
);
