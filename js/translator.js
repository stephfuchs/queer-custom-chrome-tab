/**
 * Translator for the pages. Will receive the translations from the messages.json.
 */
class Translator {
    /**
     * Get the locale for the current browser language settings.
     * @returns {string}
     */
    getLocale() {
        return chrome.i18n.getUILanguage();
    }

    /**
     * Get the chrome translation data by give JSON key and the key for the translation message.
     *
     * @param jsonKey
     * @param messageKey
     * @returns {string}
     */
    getTranslationMessage(jsonKey, messageKey) {
        return this._getMessage(jsonKey + '_' + messageKey);
    }

    /**
     * Translate the index page.
     */
    translateIndex() {
        document.getElementById('page-index-title').innerText = this._getMessage('pageIndexTitle');
        document.getElementById('page-index-footer-url').append(this._getMessage('pageIndexFooterUrl'));
        document.getElementById('page-queer-title').innerText = this._getMessage('pageQueerTitle');
        document.getElementById('page-queer-sub-title').innerText = this._getMessage('pageQueerSubTitle');
    }

    /**
     * Translate the message of the "source" for the sources-list
     */
    translateSource() {
        document.getElementById('queer-flag-information-sources').innerText = this._getMessage('queerFlagInformationSources');
    }

    /**
     * Get the text from the messages.json by given key and options
     *
     * @param key - key in messages.json
     * @param options - optional, array for customized text-placeholder
     * @returns {string} - text from the messages.json
     * @private
     */
    _getMessage(key, options = []) {
        return chrome.i18n.getMessage(key, options);
    }
}
