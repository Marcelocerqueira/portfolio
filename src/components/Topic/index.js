import React from 'react';
import Price from '../Price';
import { Text, Box } from './styles';

const Topic = ({ name, valor }) => {
  return (
    <Box>
      <Text>{name}</Text>
      <Price value={valor} />
    </Box>
  );
};

export default Topic;
