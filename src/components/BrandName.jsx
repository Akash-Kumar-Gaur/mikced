import React from 'react';

function BrandName({
  size = 20,
  color = '#000',
}){
  return <h1 style={{
    fontSize: size,
    color
  }}>Mikced</h1>
}

export default BrandName;