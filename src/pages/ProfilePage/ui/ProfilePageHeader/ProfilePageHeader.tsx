import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import {
    getProfileData, getProfileReadonly, profileActions, updateProfileData,
} from 'entities/Profile';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('title')} />
            {canEdit
                    && (
                        <div className={cls.btnsWrapper}>
                            {readonly
                                ? (
                                    <Button
                                        theme={ButtonTheme.OUTLINE}
                                        className={cls.editBtn}
                                        onClick={onEdit}
                                    >
                                        {t('edit')}
                                    </Button>

                                )
                                : (
                                    <>
                                        <Button
                                            theme={ButtonTheme.OUTLINE_RED}
                                            className={cls.editBtn}
                                            onClick={onCancelEdit}
                                        >
                                            {t('decline')}
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.OUTLINE}
                                            className={cls.saveBtn}
                                            onClick={onSave}
                                        >
                                            {t('save')}
                                        </Button>

                                    </>

                                )}
                        </div>
                    )}

        </div>
    );
};
