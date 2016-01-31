import React from 'react';

export default function boxWrap(component) {
  return (
    <div style={{ border: '1px solid grey', padding: '10px', marginTop: '10px' }}>
      {component}
    </div>
  );
}
