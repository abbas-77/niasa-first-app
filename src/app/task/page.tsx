'use client';

import Image from 'next/image';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FaChevronRight } from 'react-icons/fa';
/* eslint-disable react/destructuring-assignment */
import React, { useState, ReactNode } from 'react';

import { Box, Grid, Checkbox, Container, Typography } from '@mui/material';

import Card from 'src/components/card/card';
import Header from 'src/components/header/Header';
import Tooltip from 'src/components/tooltip/Tooltip';
import PlanBarChart from 'src/components/bar-chart/PlanBarChart';

function Page(): ReactNode {
  const [gender, setGender] = useState<boolean>(false);
  // bmi charts data
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
  // end
  return (
    <Container fixed>
      {/* header */}
      <Header gender={gender} setGender={setGender} />
      {/* wellness profile */}
      <Box
        sx={{
          fontSize: { xs: '24px', md: '32px' },
          marginTop: { xs: '60px', md: '100px' },
        }}
        fontWeight={700}
        textAlign="center"
        color="#072C50"
      >
        Here is your wellness profile
      </Box>
      <Box
        display="flex"
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
        }}
        justifyContent="center"
        alignItems="center"
        gap={2}
        width="100%"
        paddingY={3}
      >
        <Box
          border="2px solid #F0F4F7"
          borderRadius={3}
          height={320}
          sx={{
            width: { xs: '376px', md: '488px' },
          }}
          display="flex"
          flexDirection="column"
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
        </Box>
        <Box
          height={320}
          sx={{
            width: { xs: '376px', md: '488px' },
          }}
        >
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
        </Box>
      </Box>
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
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: { xs: '700', md: '600' }, fontSize: { xs: '16px', md: '24px' } }}
            >
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
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: { xs: '700', md: '600' }, fontSize: { xs: '16px', md: '24px' } }}
            >
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
            <Typography variant="body2" paddingRight={1}>
              Fitness level:
            </Typography>
            <Typography
              sx={{ fontWeight: { xs: '700', md: '600' }, fontSize: { xs: '16px', md: '24px' } }}
            >
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
          sx={{ marginTop: { xs: '4px', md: 'none' } }}
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
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: { xs: '700', md: '600' }, fontSize: { xs: '16px', md: '24px' } }}
            >
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
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: { xs: '700', md: '600' }, fontSize: { xs: '16px', md: '24px' } }}
            >
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
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: { xs: '700', md: '600' }, fontSize: { xs: '16px', md: '24px' } }}
            >
              {' '}
              Moderate, Narrowly
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* your goal */}
      <Box
        sx={{
          fontSize: { xs: '24px', md: '32px' },
          marginTop: { xs: '60px', md: '100px' },
        }}
        fontWeight={700}
        textAlign="center"
        color="#072C50"
      >
        By using our plans, you can reach your goal
      </Box>
      <Box
        display="flex"
        flexWrap="nowrap"
        justifyContent="center"
        alignItems="center"
        gap={2}
        width="100%"
        marginTop={3}
        sx={{ position: 'relative' }}
      >
        <Box
          position="absolute"
          bgcolor="#C9D6E2"
          sx={{
            width: { xs: '66px', md: '96px' },
            height: { xs: '66px', md: '96px' },
            fontSize: { xs: '20px', md: '38px' },
            bottom: { xs: '90px', md: '150px' },
          }}
          borderRadius={10}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <FaChevronRight />
        </Box>
        <Box
          width="100%"
          borderRadius={3}
          sx={{
            height: { xs: '240px', md: '380px' },
          }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bgcolor="#F0F4F7"
        >
          <Box
            sx={{
              width: { xs: '100px', md: '152px' },
              height: { xs: '46px', md: '56px' },
              fontSize: { xs: '13px', md: '16px' },
            }}
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
            sx={{
              position: 'relative',
              width: { xs: '100px', md: '160px' },
              height: { xs: '230px', md: '275px' },
            }}
            marginTop={4}
            textAlign="center"
          >
            {gender ? (
              <Image src="/assets/illustrations/model/model4.png" fill alt="model_4" />
            ) : (
              <Image src="/assets/illustrations/model/model2.png" fill alt="model_2" />
            )}
          </Box>
        </Box>
        <Box
          width="100%"
          borderRadius={3}
          sx={{
            height: { xs: '240px', md: '380px' },
          }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bgcolor="#F0F4F7"
        >
          <Box
            sx={{
              width: { xs: '100px', md: '152px' },
              height: { xs: '46px', md: '56px' },
              fontSize: { xs: '13px', md: '16px' },
            }}
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
            sx={{
              position: 'relative',
              width: { xs: '100px', md: '160px' },
              height: { xs: '230px', md: '275px' },
            }}
            marginTop={4}
            textAlign="center"
          >
            {gender ? (
              <Image src="/assets/illustrations/model/model5.png" fill alt="model_5" />
            ) : (
              <Image src="/assets/illustrations/model/model3.png" fill alt="model_3" />
            )}
          </Box>
        </Box>
      </Box>
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
          justifyContent="space-around"
          alignItems="center"
          sx={{
            gap: { xs: '15px', md: '35px' },
          }}
          width="100%"
          height={88}
          border="2px solid #F0F4F7"
          borderRadius={2}
          marginBottom={2}
          color="#072C50"
        >
          <Typography
            fontWeight={600}
            textAlign="center"
            sx={{ fontSize: { xs: '12px', ms: '16px' } }}
            minWidth={115}
          >
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
          <Typography
            fontWeight={600}
            textAlign="center"
            sx={{ fontSize: { xs: '12px', ms: '16px' } }}
          >
            Normal body fat
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          sx={{
            gap: { xs: '15px', md: '35px' },
          }}
          width="100%"
          height={88}
          border="2px solid #F0F4F7"
          borderRadius={2}
          color="#072C50"
        >
          <Typography
            sx={{
              fontSize: { xs: '11px', md: '14px' },
              fontWeight: { xs: '600', md: '700' },
            }}
            display="flex"
            alignItems="center"
            gap={1}
            minWidth={115}
          >
            Current weight:{' '}
            <Typography sx={{ fontSize: { xs: '14px', md: '24px' } }} fontWeight={600}>
              78 KG
            </Typography>
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
          <Typography
            sx={{
              fontSize: { xs: '11px', md: '14px' },
              fontWeight: { xs: '600', md: '700' },
            }}
            display="flex"
            alignItems="center"
            gap={1}
          >
            Ideal weight:{' '}
            <Typography sx={{ fontSize: { xs: '14px', md: '24px' } }} fontWeight={600}>
              70 KG
            </Typography>
          </Typography>
        </Box>
      </Box>
      {/* cards */}
      <Box
        sx={{
          fontSize: { xs: '24px', md: '32px' },
          marginTop: { xs: '60px', md: '100px' },
        }}
        fontWeight={700}
        textAlign="center"
        color="#072C50"
      >
        Choose your plan just now!
      </Box>
      <Grid container spacing={2} mt={5} mb={3}>
        <Grid item xs={12} md={4}>
          <Card isPopular isSelected={false} isDiscountActive month="1-Month Plan" />
        </Grid>
        <Grid item display="flex" alignItems="end" xs={12} md={4}>
          <Card isPopular={false} isSelected={false} isDiscountActive month="2-Month Plan" />
        </Grid>
        <Grid item display="flex" alignItems="end" xs={12} md={4}>
          <Card isPopular={false} isSelected isDiscountActive month="3-Month Plan" />
        </Grid>
      </Grid>
      {/* charts */}
      <Box
        sx={{
          fontSize: { xs: '24px', md: '32px' },
          marginTop: { xs: '60px', md: '100px' },
        }}
        fontWeight={700}
        textAlign="center"
        color="#072C50"
      >
        Your selected 2-month plan is ready!
      </Box>
      <Box display="flex" alignContent="center" justifyContent="center" marginTop={5}>
        <Box
          width={992}
          height={408}
          border="2px solid #F0F4F7"
          marginBottom={10}
          borderRadius={2}
          paddingX={3}
        >
          <Box display="flex" alignItems="center" justifyContent="space-between" paddingY={4}>
            <Box display="flex" alignItems="center" gap={1}>
              <Box
                width={50}
                height={50}
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{
                  border: { xs: '2px solid #F0F4F7', md: 'none' },
                  borderRadius: '100px',
                  padding: { xs: '10px', md: 'none' },
                }}
              >
                <Image
                  src="/assets/icons/thunder/Vector.svg"
                  width={16}
                  height={20}
                  alt="thunder"
                />
              </Box>
              <Box>
                <Typography sx={{ fontSize: { xs: '18px', md: '24px' } }} color="#072C50">
                  Your weight loss
                </Typography>
                <Typography sx={{ fontSize: { xs: '12px', md: '16px' } }} color="#7F9CB8">
                  How to reach the purpose?
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography
                sx={{ fontSize: { xs: '28px', md: '48px' } }}
                fontWeight={700}
                color="#072C50"
              >
                -7%
              </Typography>
            </Box>
          </Box>
          <Box position="relative">
            <PlanBarChart />
            <Tooltip
              bgc="#F0F4F7"
              rtl
              left={120}
              leftXs={110}
              leftMd={120}
              children={
                <>
                  <Typography color="#7F9CB8">First day</Typography>
                  <Typography color="#072C50" fontWeight={700} fontSize={18} textAlign="center">
                    78 KG
                  </Typography>
                </>
              }
              translateY={-260}
            />
            <Tooltip
              bgc="#072C50"
              rtl={false}
              left={920}
              leftXs={280}
              leftMd={920}
              children={
                <>
                  <Typography color="#7F9CB8" whiteSpace="nowrap">
                    Last day
                  </Typography>
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

export default Page;
