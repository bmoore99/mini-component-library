/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    '--height': 8 + 'px',
    '--padding': 0,
    '--borderRadius': 4 + 'px'
  },
  medium: {
    '--height': 12 + 'px',
    '--padding': 0,
    '--borderRadius': 4 + 'px'
  },
  large: {
    '--height': 24 + 'px',
    '--padding': 4 + 'px',
    '--borderRadius': 8 + 'px'
  }
}

const ProgressBar = ({ value, size }) => {
  if (value < 0) value = 0;
  if (value > 100) value = 100;

  const style = STYLES[size];

  // TODO: label?
  return <Wrapper style={style} value={value} max={100} aria-valuenow={value} />;
};

export default ProgressBar;

const Wrapper = styled.progress`
  appearance: none;
  width: 370px;
  height: var(--height);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    border-radius: var(--borderRadius);

  &::-webkit-progress-bar {
    background-color: ${COLORS.transparentGray15};
    padding: var(--padding);
    border-radius: var(--borderRadius);
  }

  &::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-radius: ${props => props.value > 99  ? '4px' : '4px 0 0 4px'};
  }
`;