import { VFC, SVGProps } from 'react';
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: VFC<SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SidebarItemType[] = [{
    path: RoutePath.main,
    Icon: MainIcon,
    text: 'main_page',
}, {
    path: RoutePath.about,
    Icon: AboutIcon,
    text: 'about_us',
},
{
    path: RoutePath.profile,
    Icon: ProfileIcon,
    text: 'profile_page',
}];
