import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const TooltipText = styled.div`
  visibility: hidden;
  width: 300px;
  background-color: #333;
  color: #fff;
  text-align: left;
  border-radius: 5px;
  padding: 10px;
  position: absolute;
  bottom: 125%; /* Adjust this value to position the tooltip */
  left: 10%;
  transform: translateX(-50%);
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s;
  white-space: pre-wrap;
  list-style-type: none;

  ${TooltipContainer}:hover & {
    visibility: visible;
    opacity: 1;
  }

  &::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
  }
`;

const Tooltip = ({ children }) => {
  const [tooltipPosition, setTooltipPosition] = useState({ left: '50%', transform: 'translateX(-50%)' });

  const updateTooltipPosition = () => {
    if (window.innerWidth < 500) {
      setTooltipPosition({ left: '0%', transform: 'translateX(0)' });
    } else {
      setTooltipPosition({ left: '50%', transform: 'translateX(-50%)' });
    }
  };

  useEffect(() => {
    window.addEventListener('resize', updateTooltipPosition);
    updateTooltipPosition();
    return () => window.removeEventListener('resize', updateTooltipPosition);
  }, []);

  return (
    <TooltipContainer>
      {children.trigger}
      <TooltipText style={tooltipPosition}>
        {children.content}
      </TooltipText>
    </TooltipContainer>
  );
};

export default Tooltip;