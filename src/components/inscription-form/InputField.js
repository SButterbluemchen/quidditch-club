// import React, { useState } from 'react';

// const InputField = (props) => {

//   const [isChecked, setIsChecked] = useState(false);

//   const [formData, setFormData] = useState(
//     {
//       firstName: '',
//       lastName: '', 
//       email: '',
//       player: '',
//       clubName: '',
//       position: {isChecked},
//       message: ''
//     }
//   );

//   function handleChange(event) {
//     const {value, name, checked, type} = event.target;
//     setFormData(prevFormData => {
//       return {
//         ...prevFormData,
//         [name]: type === 'checkbox' ? checked : value
//       };
//     });
//     setIsChecked(!isChecked);
//   }

//   console.log(formData.props.name);

//   return (
//     <input
//       type={props.type}
//       name={props.name}
//       id={props.id}
//       checked={isChecked}
//       placeholder={props.placeholer}
//       onChange={handleChange}
//       value={formData.props.name}
//       required={props.required}
//     />
//   );
// };

// export default InputField;