/**
 * 🎉🎉🎉 GENERATE BY @yike-design/cli
 * ⚠️⚠️⚠️ DO NOT EDIT IT MANUALLY
 */

import React from 'react';
import type { YiKeIconProps } from '../types';
import YiKeIcon from '../components/YiKeIcon';
import CirclePlusFilledSVG from './svg/CirclePlusFilled';

const CirclePlusFilled = React.forwardRef<HTMLSpanElement, YiKeIconProps>((props, ref) => {
  return (
    <YiKeIcon
      {...props}
      ref={ref}
      name="circle-plus-filled"
      icon={CirclePlusFilledSVG}
    />
  );
});

export default CirclePlusFilled;
