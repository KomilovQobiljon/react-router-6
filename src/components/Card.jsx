import Button from './Button';
import { PropTypes } from 'prop-types';

import "./Card.css";

const Card = ({ img, title, price, type  }) => {
  return (
    <div className='card'>
      <img src={img} alt="van picuter" className='card__img'/>
      <div className='card__group'>
        <h2 className='card__heading'>{title}</h2>
        <h2 className='card__heading'>${price}<span>/day</span></h2>
      </div>
      <Button state="active" text={type} type={type} />
    </div>
  )
}

Card.propTypes = {
  img: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  type: PropTypes.string
}

export default Card