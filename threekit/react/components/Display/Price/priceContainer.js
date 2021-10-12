import React from 'react';
import { usePrice } from '../../../hooks';

const priceContainer = (WrappedComponent) => (props) => {
  const priceData = usePrice();
  const price =
    props.price || priceData?.currency
      ? `${priceData.price} ${priceData.currency}`
      : undefined;
  if (!price) return null;
  return <WrappedComponent price={price} />;
};

export default priceContainer;
