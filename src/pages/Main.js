import React from 'react';
import {useTranslation} from 'react-i18next';
import './translation.config';


function NavMenu(props) {

	const {t} = useTranslation('projectTranslation');

	return (
		<div>
            { t('appName')}
        </div>
	);
}

export default NavMenu;