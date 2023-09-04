/**
 * 🎉🎉🎉 GENERATE BY @yike-design/cli
 * ⚠️⚠️⚠️ DO NOT EDIT IT MANUALLY
 */

import React from 'react';
import type { YiKeIconProps } from '../types';
import YiKeIcon from '../components/YiKeIcon';
import TickCircleOutlinedSVG from './svg/TickCircleOutlined';

const TickCircleOutlined = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      name="tick-circle-outlined"
      icon={TickCircleOutlinedSVG}
    />
  );
});

export default TickCircleOutlined;
