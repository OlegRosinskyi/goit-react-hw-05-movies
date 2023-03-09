import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const ResultBox = styled.div` display:flex; margin-top:10px; margin-bottom:10px;`
export const ResultLine = styled.div` width: 100%;     box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.5); ` 
export const ResultText = styled.div` margin-left:20px;`
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
  }`
