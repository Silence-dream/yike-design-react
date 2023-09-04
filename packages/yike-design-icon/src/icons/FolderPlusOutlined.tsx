/**
 * 🎉🎉🎉 GENERATE BY @yike-design/cli
 * ⚠️⚠️⚠️ DO NOT EDIT IT MANUALLY
 */

import React from 'react';
import type { YiKeIconProps } from '../types';
import YiKeIcon from '../components/YiKeIcon';
import FolderPlusOutlinedSVG from './svg/FolderPlusOutlined';

const FolderPlusOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      name="folder-plus-outlined"
      icon={FolderPlusOutlinedSVG}
    />
  );
});

export default FolderPlusOutlined;
