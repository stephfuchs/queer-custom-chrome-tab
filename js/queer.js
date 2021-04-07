/**
 * Queerness tasks to run the script and the information for the new tab.
 */
class Queer {
    /**
     * @param translator - Translator object
     * @param queerInformation - QueerInformation object
     */
    constructor(translator, queerInformation) {
        this.startYear = 2021;
        this.date = new Date();
        this.currentYear = this.date.getFullYear();
        this.contributor = 'Stephanie Fuchs';
        this.translator = translator;
        this.queerInformation = queerInformation;
        document.getElementsByTagName('html')[0].setAttribute('lang', this.translator.getLocale());
    }

    /**
     * Initialization of the base tasks for the new tab.
     */
    init() {
        this._setFooter();
        this._translatePage();
        this._processJson();
    }

    /**
     * Read in the JSON file and process it to set the queer information.
     * @private
     */
    _processJson() {
        let json = this.queerInformation.getInformationAsJSON();
        let jsonQueerInformationPicker = this.queerInformation.getQueerInformationKeys();
        let randomQueerInformation = queer._random(jsonQueerInformationPicker.length);
        let jsonKey = jsonQueerInformationPicker[randomQueerInformation];
        queer._setQueerInformation(json[jsonKey], jsonKey);
    }

    /**
     * Set the random queer information to the DOM
     *
     * @param jsonQueerInformation JSON
     * @param jsonKey string
     * @private
     */
    _setQueerInformation(jsonQueerInformation, jsonKey) {
        this._setInnerHtml('queer-flag-title', this.translator.getTranslationMessage(jsonKey, 'title'));
        this._setInnerHtml('queer-flag-information', this.translator.getTranslationMessage(jsonKey, 'information'));

        document.getElementById('queer-flag-image').setAttribute('src', jsonQueerInformation.image);
        document.getElementById('queer-flag-image').setAttribute('alt', this.translator.getTranslationMessage(jsonKey, 'image_alt'));
        this._setInformationSources(jsonQueerInformation.copyright_list);
    }

    /**
     * Set the sources list.
     *
     * @param sourcesList
     * @private
     */
    _setInformationSources(sourcesList) {
        let sourcesListHtml = '';

        if (sourcesList !== null) {
            let i;
            for (i = 0; i < sourcesList.length; i++) {
                sourcesListHtml += '<li>' + sourcesList[i] + '</li>';
            }
            this.translator.translateSource();
            this._setInnerHtml('queer-flag-information-copyright-list', sourcesListHtml);
        } else {
            document.getElementById('queer-flag-information-copyright-list').remove();
        }
    }

    /**
     * Set the footer information for copyright and GitHub link.
     *
     * @private
     */
    _setFooter() {
        let currentYear = ' ';

        if (this.currentYear !== this.startYear) {
            currentYear = ' - ' + this.currentYear + ' ';
        }
        this._setInnerHtml('page-index-footer-copyright-year', '&copy; ' + this.startYear + currentYear + this.contributor);
        this._setInnerHtml('page-index-footer-version', 'version: ' + chrome.runtime.getManifest().version);
    }

    /**
     * Set the inner HTML of an element by a given ID.
     *
     * @param elementId
     * @param html
     * @private
     */
    _setInnerHtml(elementId, html) {
        document.getElementById(elementId).innerHTML = html;
    }

    /**
     * Get a random number by a given length.
     *
     * @param length
     * @returns {number}
     * @private
     */
    _random(length) {
        return Math.floor(Math.random() * length);
    }

    /**
     * Translate the pages concerning the text within the messages.json.
     * @private
     */
    _translatePage() {
        this.translator.translateIndex();
    }
}
