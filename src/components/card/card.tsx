import React from 'react';

import { Box, Typography, useMediaQuery } from '@mui/material';

import style from './scss/Card.module.scss';

const Card = ({
  onSelect,
  isPopular,
  isSelected,
  isDiscountActive,
  month,
}: {
  onSelect?: (planId: number) => void;
  isPopular: boolean;
  isSelected: boolean;
  isDiscountActive: boolean;
  month: string;
}) => {
  const deviceW = useMediaQuery('(min-width:900px)');
  return (
    <Box className={isSelected ? style.selectedPlan : style.cardPlan}>
      {isPopular && <Box className={style.isPopular}>{deviceW ? 'Most Popular' : ''}</Box>}
      <Box className={style.cardBody}>
        <Box className={style.bodyConatiner}>
          <Typography variant="h4" className={style.monthTitle}>
            {month}
          </Typography>
          <Box className={style.dec}>
            <Typography>This plan is especially designed for begginers.</Typography>
          </Box>
          <Box className={style.price}>
            {isDiscountActive && (
              <div
                style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#A6B9CC',
                  textDecoration: 'line-through',
                }}
              >
                $1600
              </div>
            )}
            <strong style={{ fontSize: '32px', fontWeight: '600' }}>
              <span
                style={{
                  color: '#A6B9CC',
                }}
              >
                $
              </span>
              800
              <span
                style={{
                  fontSize: '16px',
                  color: '#F41616',
                  marginLeft: '5px',
                }}
              >
                (Special discount)
              </span>
            </strong>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Card;
