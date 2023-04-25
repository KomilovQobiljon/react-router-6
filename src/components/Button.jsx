import { PropTypes } from 'prop-types';

import "./Button.css";

const Button = ({ state, type, text }) => {
  return (
    <button
      className={`${type == 'underline' ? 'button--underline' : 'button'} ${state == 'active' ? `button--${type}` : ''}`}
    >
      {text}
    </button>
  )
}

// const Button = ({ state, text, type }) => {
//   const colors = {
//     simple: "#E17654",
//     luxury: "#161616",
//     rugged: "#115E59"
//   }
//   const [ color, setColor ] = useState(state);

//   const handleBgColor = () => {
//     if(color === 'default'){
//       setColor('clicked');
//     }else {
//       setColor('default')
//     }
//   }

//   return (
//     <button
//       className={state == 'underline' ? 'button--underline' : 'button'}
//       onClick={handleBgColor}
//       style={color === "default" && state !=="underline" ? {
//         backgroundColor: "#FFEAD0"
//       } : {
//         backgroundColor: `${colors[`${type}`]}`,
//         color: "#fff"
//       }}
//     >
//       {text}
//     </button>
//   )
// }

Button.propTypes = {
    state: PropTypes.string,
    text: PropTypes.string,
    type: PropTypes.string
}

export default Button