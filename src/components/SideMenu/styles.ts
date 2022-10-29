import styled from 'styled-components';

import { StyledMenuItemLinkProps, StyledMenuItemProps } from './types';

export const Container = styled.aside`
  position: relative;

  width: 15rem;
  height: 100%;

  background-color: ${({ theme }) => theme.color.grayscale50};
`;

export const UserInfoContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 1.5rem 0.75rem 1rem 1rem;
`;

export const UserInfo = styled.div``;

export const MenuNav = styled.nav`
  padding: 0 0.75rem;
`;

export const MenuList = styled.ul`
  list-style-type: none;
  padding-inline-start: 0;
`;

export const MenuItemLink = styled.a<StyledMenuItemLinkProps>`
  display: flex;
  align-items: center;
  padding: 0.625rem 0.75rem;
  text-decoration: none;

  color: ${({ theme, $isActive }) =>
    $isActive ? theme.color.grayscale900 : theme.color.grayscale600};

  border-radius: 0.5rem;
  margin-block-end: 0.25rem;

  > svg {
    z-index: ${({ theme }) => theme.zIndex.first};

    width: 1rem;
    height: 1rem;
    margin-inline-end: 1rem;
  }

  &:hover,
  &:focus-visible {
    background-color: ${({ theme }) => theme.color.white};
  }
  &:focus-visible {
    outline: solid ${({ theme }) => theme.color.grayscale900};
    outline-offset: 0.25rem;
  }
`;

export const MainMenuItem = styled.li<StyledMenuItemProps>`
  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.color.white : 'transparent'};
  border-radius: 0.5rem;
`;

export const Thumbnail = styled.img`
  display: block;
  width: 2rem;
  height: 2rem;

  object-fit: cover;
  overflow: hidden;

  font-size: 0.7rem;

  background-color: ${({ theme }) => theme.color.grayscale100};

  border-radius: 0.375rem;
  margin-inline-end: 0.5rem;
`;
