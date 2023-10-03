import { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sideBarItemsList = useSelector(getSidebarItems);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useCallback(
        () => sideBarItemsList.map((item) => (
            <SidebarItem
                key={item.path}
                item={item}
                collapsed={collapsed}
            />
        )),
        [collapsed, sideBarItemsList],
    );

    return (
        <menu
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >

            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >

                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                {itemsList()}
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </menu>
    );
});
