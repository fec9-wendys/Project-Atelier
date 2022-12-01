import React, {useEffect, useState, useMemo} from 'react';
import PropTypes from 'prop-types';

const Overview = ({currentProduct, request}) => {

  const [ratings, setRatings] = useState([]);

  request(`/reviews/?product_id=${currentProduct.id}`, {}, )

  return (
    <div>
      {currentProduct.name} {currentProduct.default_price} {currentProduct.slogan}
    </div>
  )
}

export default Overview

Overview.propTypes = {
  currentProduct: PropTypes.object.isRequired,
  request: PropTypes.func.isRequired
};