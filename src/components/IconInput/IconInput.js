import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    '--fontSize': 14 / 16 + 'rem',
    '--borderWidth': '1px',
    '--size': '16px'
  },
  large: {
    '--fontSize': 18 / 16 + 'rem',
    '--borderWidth': '2px',
    '--size': '22px'
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const iconProps = {
    small: { strokeWidth: 1, size: 16 },
    large: { strokeWidth: 2, size: 22 }
  };

  return (
    <Wrapper style={STYLES[size]}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper>
        <Icon id={icon} {...iconProps[size]} />
      </IconWrapper>
      <Input placeholder={placeholder} width={width} />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  pointer-events: none;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: var(--size);
  width: var(--size);
`;

const Input = styled.input`
  appearance: none;
  border: none;
  border-bottom: var(--borderWidth) solid ${COLORS.black};
  font-size: var(--fontSize);
  color: inherit;
  width: ${props => props.width + 'px'};
  font-weight: 700;
  padding: 10px 0 7px 38px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:focus {
    outline-offset: 3px;
  }
`;

export default IconInput;
