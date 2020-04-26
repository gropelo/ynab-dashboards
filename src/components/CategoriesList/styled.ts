import styled, { css } from 'styled-components';

interface IProps {
  active: boolean;
}

export const SideNavLink = styled.div`
  color: #ffffff;
  cursor: pointer;
  font-weight: 400;
  &:hover {
    background-color: #28889c;
  }
  padding: 8px 8px 8px 24px;
  font-size: 0.9em;
  ${(props: IProps) => props.active && css`    
    background-color: #28889c;
  `}
`;