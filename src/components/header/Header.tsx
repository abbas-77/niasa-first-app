import React from 'react';

import { Box, Step, Stepper, StepLabel, Typography } from '@mui/material';

interface HeaderProps {
  gender: boolean;
  setGender: any;
}

function Header({ gender, setGender }: HeaderProps) {
  return (
    <Box
      display="flex"
      sx={{ flexDirection: { xs: 'column', lg: 'row' } }}
      justifyContent="space-between"
      gap={2}
      paddingTop={5}
    >
      <Typography width={200} onClick={() => setGender(!gender)} fontSize="18px" fontWeight={500}>
        Health Logo
      </Typography>
      <Stepper activeStep={1} alternativeLabel>
        {[
          { label: 'Basic Questions' },
          { label: 'Choose a Plan' },
          { label: 'Payment process' },
          { label: 'Basic information' },
          { label: 'Injoy the plan' },
        ].map((label) => (
          <Step
            key={label.label}
            sx={{
              minWidth: '77px',
              '& .Mui-completed svg': {
                color: '#fff !important',
                border: '7px solid #AAE23A',
                filter: 'drop-shadow(2px 4px 6px #AAE23A)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
              },
              '& .Mui-completed': {
                color: '#AAE23A !important',
                fontSize: { xs: '11px', md: '14px' },
                fontWeight: '700',
                letterSpacing: '-2%',
                lineHeight: '16px',
              },
              '& .Mui-active svg': {
                color: '#F0F4F7 !important',
                width: '40px',
                height: '40px',
              },
              '& .Mui-active svg text': {
                fill: '#072C50 !important',
                fontSize: { xs: '11px', md: '14px' },
              },
              '& .Mui-active': {
                color: '#072C50 !important',
                fontSize: { xs: '11px', md: '14px' },
                fontWeight: '700',
                letterSpacing: '-2%',
                lineHeight: '16px',
              },
              '& .Mui-active span': {
                bgcolor: '#AAE23A !important',
                borderTopWidth: '2px',
              },
              '& .css-1wkws5l-MuiStepConnector-root': {
                top: '19px',
              },
              '& .Mui-disabled svg': {
                color: '#fff !important',
                border: '2px solid #F0F4F7',
                borderRadius: '100px',
                width: '40px',
                height: '40px',
              },
              '& .Mui-disabled span': {
                borderTopWidth: '2px',
              },
              '& .Mui-disabled svg text': {
                fontSize: { xs: '11px', md: '14px' },
                fill: '#7F9CB8 !important',
              },
              '& .Mui-disabled': {
                fontSize: { xs: '11px', md: '14px' },
                color: '#7F9CB8 !important',
                fontWeight: '700',
                letterSpacing: '-2%',
                lineHeight: '16px',
              },
            }}
          >
            <StepLabel>{label.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box width={200} />
    </Box>
  );
}

export default Header;
