import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 120px;
  padding: 5px;
  display: flex;
  flex-direction: column;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const OptionDiv = styled.div`
  padding: 10px 15px;
  cursor: pointer;
`;

export const LogoImg = styled.img`
  height: 64px;
  width: 64px;
`;
