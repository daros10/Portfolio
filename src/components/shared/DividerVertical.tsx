import React from 'react';
import { Divider } from '@material-ui/core';

export const DividerVertical = () => {
  return (
    <>
      <Divider
        orientation='vertical'
        style={{
          backgroundColor: 'white',
          height: '5px',
          textAlign: 'center',
          marginLeft: '2px',
          marginRight: '2px',
        }}
      />
    </>
  );
};
