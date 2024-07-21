import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography, TextField, Box, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import "./ProfileStepper.css";

const steps = ['Enter Degrees', 'Enter Education', 'Enter Experience', 'Enter Blurb'];

const degreesList = ['Bachelor', 'Master', 'PhD'];
const educationList = ['Science', 'Arts', 'Commerce', 'Engineering', 'Math'];
const experienceList = ['1 year', '2 years', '3 years', '4 years', '5 years', '6 years'];

const ProfileStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [degree, setDegree] = useState('');
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');
  const [blurb, setBlurb] = useState('');

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setDegree('');
    setEducation('');
    setExperience('');
    setBlurb('');
  };

  const handleFinish = () => {
    alert('Profile Submitted. We\'ll review your information and contact you if you are suited to our website - HeadHunters HR Team');
    handleReset();
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="degree-label">Degree</InputLabel>
            <Select
              labelId="degree-label"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
              label="Degree"
            >
              {degreesList.map((degree) => (
                <MenuItem key={degree} value={degree}>
                  {degree}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        );
      case 1:
        return (
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="education-label">Education</InputLabel>
            <Select
              labelId="education-label"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              label="Education"
            >
              {educationList.map((education) => (
                <MenuItem key={education} value={education}>
                  {education}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        );
      case 2:
        return (
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="experience-label">Experience</InputLabel>
            <Select
              labelId="experience-label"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              label="Experience"
            >
              {experienceList.map((experience) => (
                <MenuItem key={experience} value={experience}>
                  {experience}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        );
      case 3:
        return (
          <TextField
            label="Add a short description about yourself..."
            multiline
            rows={4}
            value={blurb}
            onChange={(e) => setBlurb(e.target.value)}
            variant="outlined"
            fullWidth
          />
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <div className="stepper-wrapper">
    <Box sx={{ width: '80%', margin: 'auto' }}>
      <Stepper activeStep={activeStep} sx={{ mb: 3 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        <Box>
          <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset}>Reset</Button>
        </Box>
      ) : (
        <Box>
          {getStepContent(activeStep)}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={activeStep === steps.length - 1 ? handleFinish : handleNext}
            >
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </Box>
      )}
    </Box>
    </div>
  );
};

export default ProfileStepper;
