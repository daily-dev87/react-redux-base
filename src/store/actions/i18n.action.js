import i18n from '../../i18n';
export const LANGUAGE_LOAD = '[LANGUAGE] LOAD';

export function changeLanguage(lang) {
    return ( dispatch, getState ) => {
        i18n.dir(lang);
        i18n.changeLanguage(lang).then(() => {
            document.getElementsByTagName('html')[0].setAttribute('lang', lang);
            dispatch(languageChanged(lang));
        })
    }
}

export const languageChanged = (lang) => ({
    type: LANGUAGE_LOAD,
    payload: lang
})

