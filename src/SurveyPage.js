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
        value: "affordable",
        text: "Product is affordable"
    }, {
        value: "does what it claims",
        text: "Product does what it claims"
    }, {
        value: "better then others",
        text: "Product is better than other products on the market"
    }, {
        value: "easy to use",
        text: "Product is easy to use"
    }
    ]}
  ]
 };

 //Define a callback methods on survey complete
 onComplete(survey, options) {
  //Write survey results into database
  console.log("Survey results: " + JSON.stringify(survey.data));
 }
 render() {
  //Create the model and pass it into react Survey component
  //You may create survey model outside the render function and use it in your App or component
  //The most model properties are reactive, on their change the component will change UI when needed.
  var model = new Survey.Model(this.json);
  return (<Survey.Survey model={model} onComplete={this.onComplete} css={this.myCss}/>);
  /*
  //The alternative way. react Survey component will create survey model internally
  return (<Survey.Survey json={this.json} onComplete={this.onComplete}/>);
  */
  //You may pass model properties directly into component or set it into model
  // <Survey.Survey model={model} mode="display"/>
  //or 
  // model.mode="display"
  // <Survey.Survey model={model}/>
  // You may change model properties outside render function. 
  //If needed react Survey Component will change its behavior and change UI.
 }
}
export default SurveyPage;