import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUserName/ui/LoginModal/LoginModal';
import { getUserAuthData, userActions } from 'entities/User';
import { useDispatch, useSelector } from 'react-redux';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;

}

export const Navbar = memo(({ className }:NavbarProps) => {
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>

                <Button
                    onClick={onLogout}
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={cls.links}
                >
                    {t('logout')}
                </Button>
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>

            <Button
                onClick={onShowModal}
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
            >
                {t('login')}
            </Button>
            {isAuthModal && (<LoginModal isOpen={isAuthModal} onClose={onCloseModal} />)}
        </div>
    );
});
