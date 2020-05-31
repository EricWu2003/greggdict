import React from 'react';

import version from '../version';

const Footer = () => (
  <div className="mt-8 mb-6 sm:mt-12 sm:mb-8 text-center text-gray-600">
    <a href="https://github.com/richyliu/greggdict/blob/master/CHANGELOG.md">
      {version}
    </a>{' '}
    | &copy; Richard Liu 2020
  </div>
);

export default Footer;
