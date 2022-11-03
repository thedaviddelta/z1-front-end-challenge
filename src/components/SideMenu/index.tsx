import badge from '$/assets/z1-badge.png';
import { Separator } from '$/components/Separator';
import { Text } from '$/components/Text';
import { MAIN_MENU_LINKS } from '$/globals/constants/mainMenu';
import { useMediaFrom } from '$/styles/utils/responsive';
import Link from 'next/link';
import React from 'react';

import { useLogic } from './logic';
import {
  Container,
  MainMenuItem,
  MenuItemLink,
  MenuList,
  MenuNav,
  Thumbnail,
  UserInfo,
  UserInfoContainer,
} from './styles';
import { MenuLinksProps, SideMenuProps } from './types';

export const SideMenu = ({ className }: SideMenuProps) => {
  const { isMenuItemActive } = useLogic();
  const isTabletLandscape = useMediaFrom('tabletLandscape');

  return (
    <Container className={className}>
      <UserInfoContainer>
        <Thumbnail src={badge} alt="Z1 Digital Studio" />
        <UserInfo>
          <Text tag="p" variant="captionBold">
            Z1 Digital Studio
          </Text>
          <Text tag="p" variant="caption">
            frontend@z1.digital
          </Text>
        </UserInfo>
      </UserInfoContainer>
      <Separator
        isVertical={!isTabletLandscape}
        spaceBlockStart="0"
        spaceBlockEnd="1rem"
      />
      <MenuNav>
        <MenuList>
          {Object.values(MAIN_MENU_LINKS).map(
            ({ href, icon, iconActive, title, target }: MenuLinksProps) => {
              const isActive = isMenuItemActive(href);
              const Icon = icon;
              const IconActive = iconActive;

              return (
                <MainMenuItem key={href} $isActive={isActive}>
                  <Link href={href} passHref>
                    <MenuItemLink target={target} $isActive={isActive}>
                      {isActive ? <IconActive /> : <Icon />}
                      <Text tag="span" variant="body2">
                        {title}
                      </Text>
                    </MenuItemLink>
                  </Link>
                </MainMenuItem>
              );
            },
          )}
        </MenuList>
      </MenuNav>
    </Container>
  );
};
