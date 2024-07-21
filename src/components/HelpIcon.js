import React from 'react';
import styled from 'styled-components';
import Tooltip from './Tooltip';

const HelpContainer = styled.div`
    left: 500px;
    top: 50%;
    -ms-transform: translateY(50%);
    transform: translateY(20%);
`;

const Icon = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: #007BFF;
  color: white;
  text-align: center;
  border-radius: 50%;
  cursor: pointer;
  line-height: 20px;
  font-size: 14px;
  position: relative;
`;

const List = styled.div`
    li {
      margin-bottom: 10px; 

    li:last-child {
      margin-bottom: 0px; /* Remove space after the last item */
    }
`;


const HelpIcon = ({ tooltipContent }) => {
  return (
    <HelpContainer>
      <Tooltip>
        {{
          trigger: <Icon>?</Icon>,
          content: (
           <div>
            <List>
                {tooltipContent.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </List>
            </div>
          )
        }}
      </Tooltip>
    </HelpContainer>
  );
};

export default HelpIcon;
