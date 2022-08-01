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
  return (
    <Wrapper style={style} role="progressbar" value={value} max={100} aria-valuenow={value}>
      <Progress value={value}>
        <VisuallyHidden>{value}%</VisuallyHidden>
      </Progress>
    </Wrapper>);
};

export default ProgressBar;

const Wrapper = styled.div`
  width: 370px;
  height: var(--height);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--borderRadius);
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--borderRadius);
  padding: var(--padding);
  overflow: hidden;
`;

const Progress = styled.span`
    display: block;
    background-color: ${COLORS.primary};
    border-radius: 4px 0 0 4px;
    width: ${props => props.value + '%'};
    height: 100%;
`;