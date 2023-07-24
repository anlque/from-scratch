import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { useState } from 'react';

const MainPage = () => {
    const [value, setValue] = useState('');
    const { t } = useTranslation('main');
    const onChange = (newValue:string) => {
        setValue(newValue);
    };
    return (
        <div>
            {t('main_page')}
            <Input
                // eslint-disable-next-line i18next/no-literal-string
                placeholder="Введите текст"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default MainPage;
