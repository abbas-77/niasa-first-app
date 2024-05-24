'use client';

import Image from 'next/image';
import { FaChevronRight } from 'react-icons/fa';
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect, ReactNode } from 'react';

import {
  Box,
  Grid,
  Step,
  Stepper,
  Checkbox,
  StepLabel,
  Container,
  Typography,
} from '@mui/material';

import Card from 'src/components/card/card';

interface TooltipProps {
  rtl: boolean | undefined;
  left: number;
  bgc: string;
  children: ReactNode;
  translateY: number;
}

function getBreakPoint(windowWidth: number) {
  if (windowWidth) {
    if (windowWidth > 390) {
      return 'sm';
    }
    if (windowWidth > 900) {
      return 'md';
    }
    return 'md';
  }
  return undefined;
}

function useWindowSize() {
  const isWindowClient = typeof window === 'object';

  const [windowSize, setWindowSize] = useState(
    isWindowClient ? getBreakPoint(window.innerWidth) : undefined
  );

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    // a handler which will be called on change of the screen resize
    function setSize() {
      setWindowSize(getBreakPoint(window.innerWidth)); // 👈
    }

    if (isWindowClient) {
      // register the window resize listener
      window.addEventListener('resize', setSize);

      // unregister the listerner on destroy of the hook
      return () => window.removeEventListener('resize', setSize);
    }
  }, [isWindowClient, setWindowSize]);

  return windowSize;
}

function Tooltip({ rtl, left, bgc, children, translateY }: TooltipProps) {
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
        transform: `translate(100% , ${translateY}px)`,
        transition: 'all',
      }}
    >
      {children}
    </Box>
  );
}

function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [gender, setGender] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const windowSize = useWindowSize();

  return (
    <Container fixed>
      {/* header */}
      <Grid container spacing={5} padding={3}>
        <Grid item xs={12} md={3}>
          <Box onClick={() => setGender(!gender)}>Health Logo</Box>
        </Grid>
        <Grid item xs={12} md={6} textAlign="center">
          <Box>
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
                    '& .Mui-completed svg': {
                      color: '#fff !important',
                      border: '7px solid #AAE23A',
                      filter: 'drop-shadow(2px 4px 6px #AAE23A)',
                      borderRadius: '50%',
                      width: '30px',
                      height: '30px',
                    },
                    '& .Mui-completed': {
                      color: '#AAE23A !important',
                      fontSize: '14px',
                      fontWeight: '700',
                      letterSpacing: '-2%',
                      lineHeight: '16px',
                    },
                    '& .Mui-active svg': {
                      color: '#F0F4F7 !important',
                      width: '30px',
                      height: '30px',
                    },
                    '& .Mui-active svg text': {
                      fill: '#072C50 !important',
                      fontSize: '14px',
                    },
                    '& .Mui-active': {
                      color: '#072C50 !important',
                      fontSize: '14px',
                      fontWeight: '700',
                      letterSpacing: '-2%',
                      lineHeight: '16px',
                    },
                    '& .Mui-active span': {
                      bgcolor: '#AAE23A !important',
                    },
                    '& .Mui-disabled svg': {
                      color: '#fff !important',
                      border: '2px solid #F0F4F7',
                      borderRadius: '100px',
                      width: '30px',
                      height: '30px',
                    },
                    '& .Mui-disabled svg text': {
                      fontSize: '14px',
                      fill: '#7F9CB8 !important',
                    },
                    '& .Mui-disabled': {
                      fontSize: '14px',
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
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box />
        </Grid>
      </Grid>
      {/* wellness profile */}
      <Box
        fontWeight={700}
        fontSize={32}
        textAlign="center"
        marginTop={windowSize === 'md' ? 14 : 2}
        color="#072C50"
      >
        Here is your wellness profile
      </Box>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={2}
        width="100%"
        paddingY={3}
      >
        <Grid
          item
          xs={12}
          md={5}
          border="2px solid #F0F4F7"
          borderRadius={3}
          height={320}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box fontSize={20} marginTop={2} color="#072C50">
            Endomorph
          </Box>
          <Box
            width={160}
            height={261}
            marginTop={1}
            textAlign="center"
            sx={{ position: 'relative' }}
          >
            {gender ? (
              <Image src="/assets/illustrations/model/model4.png" fill alt="model_1" />
            ) : (
              <Image src="/assets/illustrations/model/model1.png" fill alt="model_1" />
            )}
          </Box>
        </Grid>
        <Grid item xs={12} md={5} height={320}>
          <Box fontSize={20} border="2px solid #F0F4F7" height={192} width="100%" borderRadius={2}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              paddingX={4}
              paddingY={2}
            >
              <Typography fontWeight={800} fontSize={18} color="#072C50">
                BMI
              </Typography>
              <Box display="flex" alignItems="center">
                <Checkbox defaultChecked size="small" color="success" sx={{ color: '#87C210' }} />
                <Typography fontWeight={700} fontSize={14} color="#87C210">
                  Normal
                </Typography>
              </Box>
            </Box>
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
                    left: `60%`,
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
                  left={125}
                  children={23.8}
                  translateY={-55}
                />

                {[60, 40, 20, 10].map((value, index) => (
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
                        index === 1 ? '#7F9CB8' : index === 2 ? '#87C210' : '#072C50',
                      height: '4px',
                      borderRadius: '70px',
                      flexShrink: 0,
                    }}
                    width="25%"
                    key={value}
                  />
                ))}
              </Box>
            </Box>
          </Box>
          <Box width="100%" paddingTop={2} paddingX={2}>
            <Box display="flex" width="100%">
              <Box color="#87C210" fontWeight={800} fontSize={18} paddingLeft={2}>
                Healthy BMI
              </Box>
            </Box>
            <Box fontWeight={600} fontSize={16} color="#072C50">
              Your initial body situation is here. It’s crucial for starting a very healthy diet and
              exercise plan.
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* details boxes */}
      <Grid container alignItems="center" justifyContent="center" gap={2} color="#072C50">
        <Grid xs={12} md={5} display="flex" direction="column" alignItems="center" gap={2}>
          <Grid
            item
            container
            justifyContent="center"
            alignItems="center"
            bgcolor="#F0F4F7"
            borderRadius="32px"
            width="100%"
            height={88}
          >
            <Typography variant="body2" paddingRight={1}>
              Your current weight:
            </Typography>
            <Typography variant="subtitle1" fontSize={24}>
              {' '}
              87 KG
            </Typography>
          </Grid>
          <Grid
            item
            container
            justifyContent="center"
            alignItems="center"
            bgcolor="#F0F4F7"
            borderRadius="32px"
            width="100%"
            height={88}
          >
            <Typography variant="body2" paddingRight={1}>
              Your height:
            </Typography>
            <Typography variant="subtitle1" fontSize={24}>
              {' '}
              178 cm
            </Typography>
          </Grid>
          <Grid
            item
            container
            justifyContent="center"
            alignItems="center"
            bgcolor="#F0F4F7"
            borderRadius="32px"
            width="100%"
            height={88}
          >
            <Typography fontWeight={700} fontSize={14} paddingRight={1}>
              Fitness level:
            </Typography>
            <Typography fontWeight={600} fontSize={24}>
              {' '}
              Intermediate
            </Typography>
          </Grid>
        </Grid>
        <Grid
          xs={12}
          md={5}
          display="flex"
          direction="column"
          alignItems="center"
          gap={2}
          marginTop={windowSize === 'md' ? 0 : 2}
        >
          <Grid
            item
            container
            justifyContent="center"
            alignItems="center"
            bgcolor="#F4FBE7"
            borderRadius="32px"
            width="100%"
            height={88}
          >
            <Typography variant="body2" paddingRight={1}>
              Your food taste:
            </Typography>
            <Typography variant="subtitle1" fontSize={24}>
              {' '}
              Vegan
            </Typography>
          </Grid>
          <Grid
            item
            container
            justifyContent="center"
            alignItems="center"
            bgcolor="#F4FBE7"
            borderRadius="32px"
            width="100%"
            height={88}
          >
            <Typography variant="body2" paddingRight={1}>
              Your lifestyle:
            </Typography>
            <Typography variant="subtitle1" fontSize={24}>
              {' '}
              Sedentary
            </Typography>
          </Grid>
          <Grid
            item
            container
            justifyContent="center"
            alignItems="center"
            bgcolor="#F4FBE7"
            borderRadius="32px"
            width="100%"
            height={88}
          >
            <Typography variant="body2" paddingRight={1}>
              Metabolism:
            </Typography>
            <Typography variant="subtitle1" fontSize={24}>
              {' '}
              Moderate, Narrowly
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* your goal */}
      <Typography
        fontWeight={700}
        fontSize={32}
        textAlign="center"
        marginTop={windowSize === 'md' ? 14 : 4}
        marginBottom={4}
        color="#072C50"
      >
        By using our plans, you can reach your goal
      </Typography>
      <Grid
        container
        display="flex"
        direction="row"
        flexWrap="nowrap"
        justifyContent="center"
        alignItems="center"
        gap={2}
        width="100%"
        sx={{ position: 'relative' }}
      >
        <Grid
          position="absolute"
          bgcolor="#C9D6E2"
          width={windowSize === 'md' ? 96 : 86}
          height={windowSize === 'md' ? 96 : 86}
          borderRadius={10}
          bottom={150}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <FaChevronRight size={28} />{' '}
        </Grid>
        <Grid
          item
          width="100%"
          borderRadius={3}
          height={380}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          bgcolor="#F0F4F7"
        >
          <Box
            fontSize={16}
            width={152}
            height={56}
            display="flex"
            alignItems="center"
            justifyContent="center"
            bgcolor="#fff"
            borderRadius="32px"
            marginTop={2}
            color="#072C50"
          >
            Now
          </Box>
          <Box
            width={160}
            height={275}
            marginTop={4}
            textAlign="center"
            sx={{ position: 'relative' }}
          >
            {gender ? (
              <Image src="/assets/illustrations/model/model4.png" fill alt="model_4" />
            ) : (
              <Image src="/assets/illustrations/model/model2.png" fill alt="model_2" />
            )}
          </Box>
        </Grid>
        <Grid
          item
          width="100%"
          bgcolor="#F0F4F7"
          borderRadius={3}
          height={380}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            fontSize={16}
            width={152}
            height={56}
            display="flex"
            alignItems="center"
            justifyContent="center"
            bgcolor="#fff"
            borderRadius="32px"
            marginTop={2}
            color="#072C50"
          >
            Your Goal
          </Box>
          <Box
            width={160}
            height={275}
            marginTop={4}
            textAlign="center"
            sx={{ position: 'relative' }}
          >
            {gender ? (
              <Image src="/assets/illustrations/model/model5.png" fill alt="model_5" />
            ) : (
              <Image src="/assets/illustrations/model/model3.png" fill alt="model_3" />
            )}
          </Box>
        </Grid>
      </Grid>
      {/* Goal details */}
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        marginTop={5}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={windowSize === 'md' ? 25 : 5}
          width="100%"
          height={88}
          border="2px solid #F0F4F7"
          borderRadius={2}
          marginBottom={2}
          color="#072C50"
        >
          <Typography fontWeight={600} textAlign="center" minWidth={windowSize === 'md' ? 150 : 0}>
            Excess body fat
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height={40}
            width={40}
            border="2px solid #DAE4EC"
            borderRadius={5}
          >
            <FaChevronRight size={16} color="#072C50" />
          </Box>
          <Typography fontWeight={600} textAlign="center">
            Normal body fat
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={windowSize === 'md' ? 25 : 5}
          width="100%"
          height={88}
          border="2px solid #F0F4F7"
          borderRadius={2}
          color="#072C50"
        >
          {windowSize === 'md' ? (
            <Typography fontWeight={700} display="flex" alignItems="center" gap={1}>
              Current weight:{' '}
              <Typography fontSize={windowSize === 'md' ? 24 : 14} fontWeight={600}>
                78 KG
              </Typography>
            </Typography>
          ) : (
            <Typography fontWeight={600} textAlign="center">
              Current weight: 78 KG
            </Typography>
          )}

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height={40}
            width={40}
            border="2px solid #DAE4EC"
            borderRadius={5}
          >
            <FaChevronRight size={16} color="#072C50" />
          </Box>
          {windowSize === 'md' ? (
            <Typography fontWeight={700} display="flex" alignItems="center" gap={1}>
              Ideal weight:{' '}
              <Typography fontSize={24} fontWeight={600}>
                70 KG
              </Typography>
            </Typography>
          ) : (
            <Typography fontWeight={600} textAlign="center">
              Ideal weight: 70 KG
            </Typography>
          )}
        </Box>
      </Box>
      {/* cards */}
      <Typography
        fontWeight={700}
        fontSize={32}
        textAlign="center"
        marginTop={windowSize === 'md' ? 14 : 4}
        color="#072C50"
      >
        Choose your plan just now!{' '}
      </Typography>
      <Grid container spacing={2} mt={2} mb={3}>
        <Grid item xs={12} md={4}>
          <Card isPopular isSelected isDiscountActive month="1-Month Plan" />
        </Grid>
        <Grid item display="flex" alignItems="end" xs={12} md={4}>
          <Card isPopular={false} isSelected={false} isDiscountActive month="2-Month Plan" />
        </Grid>
        <Grid item display="flex" alignItems="end" xs={12} md={4}>
          <Card isPopular={false} isSelected={false} isDiscountActive month="3-Month Plan" />
        </Grid>
      </Grid>
      {/* charts */}
      <Typography fontWeight={700} fontSize={32} textAlign="center" marginTop={14} color="#072C50">
        Your selected 2-month plan is ready!{' '}
      </Typography>
      <Box display="flex" alignContent="center" justifyContent="center" marginTop={5}>
        <Box
          width={992}
          height={408}
          border="2px solid #F0F4F7"
          marginBottom={10}
          borderRadius={2}
          paddingX={5}
        >
          <Box display="flex" alignItems="center" justifyContent="space-between" paddingY={3}>
            <Box display="flex" alignItems="center" gap={3}>
              <Image src="/assets/icons/thunder/Vector.svg" width={16} height={20} alt="thunder" />
              <Box>
                <Typography fontSize={24} color="#072C50">
                  Your weight loss
                </Typography>
                <Typography fontSize={16} color="#7F9CB8">
                  How to reach the purpose?
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography fontSize={48} fontWeight={700} color="#072C50">
                -7%
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box
              marginTop={4}
              sx={{
                '&:before': {
                  content: '""',
                  display: 'block',
                  overflow: 'hidden',
                  position: 'relative',
                  width: '100%',
                  height: '180px',
                  backgroundImage:
                    'repeating-linear-gradient(to right,#87C210 0, #87C210 8px,transparent 4px, transparent 22.2px)',
                  marginBottom: '8px',
                  transition: 'all 200ms',
                },
              }}
            />

            <Tooltip
              bgc="#F0F4F7"
              rtl
              left={windowSize === 'md' ? 100 : -35}
              children={
                <>
                  <Typography color="#7F9CB8">First day</Typography>
                  <Typography color="#072C50" fontWeight={700} fontSize={18} textAlign="center">
                    78 KG
                  </Typography>
                </>
              }
              translateY={-220}
            />
            <Tooltip
              bgc="#072C50"
              rtl={false}
              left={windowSize === 'md' ? 890 : 180}
              children={
                <>
                  <Typography color="#7F9CB8">Last day</Typography>
                  <Typography color="#fff" fontWeight={700} fontSize={18} textAlign="center">
                    71 KG
                  </Typography>
                </>
              }
              translateY={-95}
            />
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Box color="#7F9CB8" fontSize={14}>
                The starting
              </Box>
              <Box color="#7F9CB8" fontSize={14}>
                Middle of plan
              </Box>
              <Box color="#7F9CB8" fontSize={14}>
                The end
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default page;
