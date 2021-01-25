/**
 * Translator for the pages. Will receive the translations from the messages.json.
 */
class Translator {
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
