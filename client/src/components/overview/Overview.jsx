import React, {useEffect, useState, useMemo} from 'react';
import PropTypes from 'prop-types';

const Overview = ({currentProduct}) => {



  return (
    <div>
      {currentProduct.name} {currentProduct.default_price} {currentProduct.slogan}
    </div>
  )
}

export default Overview

Overview.propTypes = {
  currentProduct: PropTypes.object.isRequired,
};