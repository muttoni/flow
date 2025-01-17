import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import {IconMenu} from '../ui/icons';
import {size} from 'polished';

const StyledButton = styled.button({
  padding: 20,
  color: 'inherit',
  border: 'none',
  background: 'none',
  outline: 'none',
  cursor: 'pointer'
});

const StyledIcon = styled(IconMenu)(size(24), {
  display: 'block',
  fill: 'currentColor'
});

export default function MenuButton(props) {
  return (
    <StyledButton onClick={props.onClick}>
      <StyledIcon />
    </StyledButton>
  );
}

MenuButton.propTypes = {
  onClick: PropTypes.func.isRequired
};
