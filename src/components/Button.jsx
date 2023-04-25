import { useState } from 'react';
import { PropTypes } from 'prop-types';

import "./Button.css";

const Button = ({ state, text }) => {
  const [ color, setColor ] = useState(state);

  return (
    <button
      className='button'
      // style={
      //   color === 'default' ? {
      //     backgroundColor: "#FFEAD0"
      //   } : {
      //     backgroundColor: "#FF8C38"
      //   }
      // }
      onClick={()=>setColor("clicked")}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
    state: PropTypes.string,
    text: PropTypes.string.isRequired
}

export default Button