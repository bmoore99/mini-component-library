import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <Button value={value} onChange={onChange}>
        {children}
      </Button>
      <IconWrapper>
        <Icon id="chevron-down" size={24} strokeWidth={2} />
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  display: inline-block;

  &:hover {
    color: ${COLORS.black};
  }
`;

const Button = styled.select`
  appearance: none;
  border: none;
  background: none;
  border-radius: 8px;
  padding: 12px 52px 12px 16px;
  color: inherit;
  font-size: 1rem;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 18px;
  /* Moves icon behind the select element so always clicking on the select rather than the icon. */
  z-index: -1;
`

export default Select;
