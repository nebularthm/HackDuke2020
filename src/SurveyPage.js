// import React from 'react';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';
// import Box from '@material-ui/core/Box';
// import InputLabel from '@material-ui/core/InputLabel';
// import Select from '@material-ui/core/Select';
// import { makeStyles } from '@material-ui/core/styles';


// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

// export default function SurveyPage() {
//   const classes = useStyles();  
//   const [value1, setValue1] = React.useState('female');

//   const handleChange = (event) => {
//     setValue1(event.target.value);
//   };

//   return (
//     <Box 
//       position="absolute" 
//       top="10%" 
//       left="28%" 
//       border={1} 
//       padding={20}
//       style={{
//         border: '3px solid #3f50b5',
//         borderRadius: '20px'
//       }}>
//       <Box>
//         <FormControl component="fieldset">
//           <Box color="black">
//             <h2>word facts</h2>
//           </Box>
//           <RadioGroup aria-label="gender" name="gender1" value={value1} onChange={handleChange}>
//             <FormControlLabel value="female" control={<Radio />} label="Female" />
//             <FormControlLabel value="male" control={<Radio />} label="Male" />
//             <FormControlLabel value="other" control={<Radio />} label="Other" />
//           </RadioGroup>
//         </FormControl>
//       </Box>
//       <h2>Would you rip the bong with mati?</h2>
//       <Box>
//         <FormControl className={classes.formControl}>
//           <InputLabel htmlFor="age-native-simple">Age</InputLabel>
//           <Select
//             native
//             // value={state.age}
//             // onChange={handleChange}
//             inputProps={{
//               name: 'age',
//               id: 'age-native-simple',
//             }}
//           >
//             <option aria-label="None" value="" />
//             <option value={10}>Ten</option>
//             <option value={20}>Twenty</option>
//             <option value={30}>Thirty</option>
//           </Select>
//         </FormControl>
//       </Box>
//       {/* <FormControl component="fieldset">
//         <FormLabel component="legend">Gender</FormLabel>
//         <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
//           <FormControlLabel value="female" control={<Radio />} label="Female" />
//           <FormControlLabel value="male" control={<Radio />} label="Male" />
//           <FormControlLabel value="other" control={<Radio />} label="Other" />
//           <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
//         </RadioGroup>
//       </FormControl>
//       <FormControl component="fieldset">
//         <FormLabel component="legend">Gender</FormLabel>
//         <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
//           <FormControlLabel value="female" control={<Radio />} label="Female" />
//           <FormControlLabel value="male" control={<Radio />} label="Male" />
//           <FormControlLabel value="other" control={<Radio />} label="Other" />
//           <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
//         </RadioGroup>
//       </FormControl>
//       <FormControl component="fieldset">
//         <FormLabel component="legend">Gender</FormLabel>
//         <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
//           <FormControlLabel value="female" control={<Radio />} label="Female" />
//           <FormControlLabel value="male" control={<Radio />} label="Male" />
//           <FormControlLabel value="other" control={<Radio />} label="Other" />
//           <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
//         </RadioGroup>
//       </FormControl>
//       <FormControl component="fieldset">
//         <FormLabel component="legend">Gender</FormLabel>
//         <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
//           <FormControlLabel value="female" control={<Radio />} label="Female" />
//           <FormControlLabel value="male" control={<Radio />} label="Male" />
//           <FormControlLabel value="other" control={<Radio />} label="Other" />
//           <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
//         </RadioGroup>
//       </FormControl>
//       <FormControl component="fieldset">
//         <FormLabel component="legend">Gender</FormLabel>
//         <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
//           <FormControlLabel value="female" control={<Radio />} label="Female" />
//           <FormControlLabel value="male" control={<Radio />} label="Male" />
//           <FormControlLabel value="other" control={<Radio />} label="Other" />
//           <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
//         </RadioGroup>
//       </FormControl> */}
//     </Box>
//   );
// }

//In your react App.js or yourComponent.js file add these lines to import
import * as Survey from "survey-react";
import "survey-react/survey.css";
import React, { Component } from 'react';

class SurveyPage extends Component {
  
  myCss = {
    matrix: {
        root: "table table-striped"
    },
    navigationButton: "button btn-lg"
  };
 //Define Survey JSON
 //Here is the simplest Survey with one text question
 json = {
   completeText: "Submit",
  elements: [
   { type: "matrix", 
   name: "polQuestions", 
   title: "Please indicate if you agree or disagree with the following statements",
   isRequired: true,
   columns: [
    {
        value: 1,
        text: "Strongly Disagree"
    }, {
        value: 2,
        text: "Disagree"
    }, {
        value: 3,
        text: "Neutral"
    }, {
        value: 4,
        text: "Agree"
    }, {
        value: 5,
        text: "Strongly Agree"
    }
],
rows: [
    {
        value: "is conservative",
        text: "I identify as conservative"
    }, {
        value: "climate change",
        text: "Human activity is primarily responsible for climate change"
    }, {
        value: "legalizing marijuana",
        text: "I support the legalization of marijuana"
    }, {
        value: "abortions",
        text: "No abortions should be allowed, no matter the circumstances"
    }, {
        value: "free market",
        text: "A free market economy is best for the US"
    }, {
        value: "socialism",
        text: "A socialist economy is best for the US"
    }, {
        value: "immigration",
        text: "Relaxing the immigration policy would have a negative effect on the US"
    }, {
        value: "economic inequality",
        text: "Economic inequality is a major issue facing the US today"
    }, {
        value: "healthcare",
        text: "The healthcare system currently in place in the US is adequate"
    }
    ]}, {
          type: "comment",
          name: "suggestions",
          title: "Comments/Questions regarding the survey"
    },
  ]
 };

 //Define a callback methods on survey complete
 onComplete(survey, options) {
  //Write survey results into database
  console.log("Survey results: " + JSON.stringify(survey.data));
 }
 render() {
  var model = new Survey.Model(this.json);
  return (<Survey.Survey model={model} onComplete={this.onComplete} css={this.myCss}/>);
 }

//  window.survey = new Survey.Model(json);

// survey
//     .onComplete
//     .add(function (result) {
//         document
//             .querySelector('#surveyResult')
//             .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
//     });

}
export default SurveyPage;