import React from 'react';

import { Box } from '@mui/material';

import Tooltip from '../tooltip/Tooltip';

function BmiChart() {
  const rangeLocation = (position: number): number => {
    if (position <= 25) {
      return 0;
    }
    if (position <= 50) {
      return 1;
    }
    if (position <= 75) {
      return 2;
    }
    return 3;
  };
  const values = [60, 40, 20, 10];
  const dataNo = 23.8;
  const leftBmi = (23.8 * 100) / 45;
  const tooltipLocation = rangeLocation(leftBmi);
  return (
    <Box
      sx={{
        position: 'relative',
      }}
      paddingX={2}
    >
      <Box
        marginTop={5}
        sx={{
          '&:before': {
            content: '""',
            display: 'block',
            overflow: 'hidden',
            position: 'relative',
            width: '100%',
            height: '24px',
            backgroundImage:
              'repeating-linear-gradient(to right,#F0F4F7 0, #F0F4F7 2px,transparent 1px, transparent 12.2px)',
            marginBottom: '8px',
            transition: 'all 200ms',
          },
        }}
      />
      <Box
        sx={{
          '&:before': {
            content: '""',
            backgroundColor: '#fff',
            width: '4px',
            height: '4px',
            display: 'block',
            position: 'absolute',
            left: `${leftBmi > 100 ? 100 : leftBmi}%`,
            borderRadius: '100px',
            transform: 'translateY(-50%)',
            top: '50%',
            outline: '6px solid #fff',
            outlineOffset: '6px',
            boxShadow: '0 0 0 6px #87C210',
            zIndex: 1,
            transition: 'all 200ms',
          },
          position: 'relative',
          display: 'flex',
          width: '100%',
        }}
      >
        <Tooltip
          bgc="#87C210"
          rtl={undefined}
          left={`${leftBmi > 100 ? 100 : leftBmi}%`}
          leftMd={`${leftBmi > 100 ? 100 : leftBmi}%`}
          leftXs={`${leftBmi > 100 ? 100 : leftBmi}%`}
          children={dataNo}
          translateY={-55}
        />

        {values.map((value, index) => (
          <Box
            sx={{
              '&:before': {
                content: index !== 0 ? '""' : 'none',
                background: '#072C50',
                width: '4px',
                height: '4px',
                display: 'block',
                position: 'absolute',
                top: '0',
                bottom: '0',
                margin: 'auto',
                borderRadius: '10px',
                outline: '4px solid #fff',
              },

              backgroundColor:
                // eslint-disable-next-line no-nested-ternary
                tooltipLocation - 1 === index
                  ? '#7F9CB8'
                  : tooltipLocation === index
                    ? '#87C210'
                    : '#072C50',
              height: '4px',
              borderRadius: '70px',
              flexShrink: 0,
            }}
            width={`${100 / values.length}%`}
            key={value}
          />
        ))}
      </Box>
    </Box>
  );
}

export default BmiChart;
