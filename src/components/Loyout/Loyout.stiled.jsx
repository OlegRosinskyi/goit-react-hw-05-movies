import styled from "styled-components";
import { NavLink } from 'react-router-dom';
export const LineBox =
    styled.div   ` margin-top: 20px; margin-bottom: 20px; ` 
export const Line =
    styled.div   ` width: 100%;     box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.7); ` 
 export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-size: 18px;
  font-weight: 500;

  &.active {
    color: #f30909;
   // background-color: orangered;
  }
`;
export const LoyoutBox = styled.div  `padding-top:30px; padding-bottom:30px; `
