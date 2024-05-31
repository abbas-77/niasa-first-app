import React, { ReactNode } from 'react';

import { Box } from '@mui/material';

interface TooltipProps {
  rtl: boolean | undefined;
  left: number | string;
  leftXs: number | string;
  leftMd: number | string;
  bgc: string;
  children: ReactNode;
  translateY: number;
}

function Tooltip({ rtl, left, leftXs, leftMd, bgc, children, translateY }: TooltipProps) {
  return (
    <Box
      boxShadow="0px 8px 16px 0px #55555560"
      borderRadius={
        // eslint-disable-next-line no-nested-ternary
        rtl && rtl === undefined ? '50% 50% 0 50%' : rtl ? '20px 20px 20px 0' : '20px 20px 0 20px'
      }
      position="absolute"
      left={left}
      zIndex={2}
      bgcolor={bgc || 'white'}
      paddingX={2}
      paddingY={1}
      color="white"
      sx={{
        transform: `translate(-100% , ${translateY}px)`,
        transition: 'all',
        left: { xs: leftXs, md: leftMd },
      }}
    >
      {children}
    </Box>
  );
}

export default Tooltip;
