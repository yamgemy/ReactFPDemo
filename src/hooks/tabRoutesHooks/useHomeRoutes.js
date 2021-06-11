import React, {useState} from 'react';

const initRouteState = [
  {
    key: 'foundation',
    title: 'Foundation',
  },
  {
    key: 'discovery',
    title: 'Discovery',
  },
  {
    key: 'delivery',
    title: 'Delivery',
  },
];

export default () => {
  const [index, setIndex] = useState(0);
  const [routes, setRoutes] = useState(initRouteState);
  return {routes, index, setIndex};
};
