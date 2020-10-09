import * as React from 'react';
import { Button, MobileStepper, Paper, Typography } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import { autoPlay } from 'react-swipeable-views-utils';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';

import thumbnailBlogsome from '../../images/thumbnails/blogsome.png';
import thumbnailChat from '../../images/thumbnails/chat.png';
import thumbnailExpensify from '../../images/thumbnails/expensify.png';
import thumbnailNatours from '../../images/thumbnails/natours.png';
import thumbnailNexter from '../../images/thumbnails/nexter.png';
import thumbnailTrillo from '../../images/thumbnails/trillo.png';
import thumbnailYouTube from '../../images/thumbnails/yt.png';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    imgPath: thumbnailBlogsome,
    label: 'Write some blog',
    href: 'https://blogsome.herokuapp.com',
  },
  {
    imgPath: thumbnailChat,
    label: 'Up for a chat?',
    href: 'https://tdkchatapp.herokuapp.com',
  },
  {
    imgPath: thumbnailExpensify,
    label: 'Manage your spending',
    href: 'https://expensifyapp0101.herokuapp.com',
  },
  {
    imgPath: thumbnailNatours,
    label: 'Nature awaits',
    href: 'https://tdknatours.herokuapp.com',
  },
  {
    imgPath: thumbnailNexter,
    label: 'Your dream home',
    href: 'https://tdknexter.herokuapp.com',
  },
  {
    imgPath: thumbnailTrillo,
    label: '',
    href: 'https://tdktrillo.herokuapp.com',
  },
  {
    imgPath: thumbnailYouTube,
    label: "I'm a mock but that's okay",
    href: 'https://tdkyoutubeapp.herokuapp.com',
  },
];

const useStyles = makeStyles(theme => ({
  header: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: 50,
    paddingLeft: theme.spacing(4),
  },
  img: {
    display: 'block',
    height: 255,
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },
  root: {
    flexGrow: 1,
    maxWidth: 400,
  },
}));

export function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <a href={step.href} target="_blank" rel="noopener noreferrer">
                <img
                  className={classes.img}
                  src={step.imgPath}
                  alt={step.label}
                />
              </a>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
}
