import React, { useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import French from '../languages/fr/fr.json';
import English from '../languages/en/en.json';
import Arabic from '../languages/ar/ar.json';


export const Context = React.createContext();

const local = navigator.language;
let lang;
if (local === "fr-FR") {
    lang = French
}
if (local === "en-US") {
    lang = English
}
if (local === "ar-001") {
    lang = English
}

const Wrapper = (props) => {
    const [locale, setLocale] = useState(local);
    const [messages, setMessages] = useState(lang);

    useEffect(() => {
        const currentLanguage = localStorage.getItem("language")
        if (currentLanguage) {
            setLocale(localStorage.getItem("language"));
            chooseMessagesLanguage(currentLanguage)
        }
    });

    function selectLang(e) {
        const newLocale = e.target.value;
        localStorage.setItem("language", newLocale);
        setLocale(newLocale);
        chooseMessagesLanguage(newLocale);
    }

    function chooseMessagesLanguage(language) {
        if (language === "fr-FR") {
            setMessages(French);
        }
        if (language === "en-US") {
            setMessages(English);
        }
        if (language === "ar-001") {
            setMessages(Arabic);
        }
    }

    return (
        <Context.Provider value={{ locale, selectLang }}>
            <IntlProvider messages={messages} locale={locale}>
                {props.children}
            </IntlProvider>
        </Context.Provider>
    )
}

export default Wrapper;