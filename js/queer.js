/**
 * Queerness tasks to run the script and the information for the new tab.
 */
class Queerness {
    /**
     * @param translator - Translator object
     * @param queerInformation
     */
    constructor(translator, queerInformation) {
        this.startYear = 2021;
        this.date = new Date();
        this.currentYear = this.date.getFullYear();
        this.contributor = 'Stephanie Fuchs';
        this.translator = translator;
        this.queerInformation = queerInformation;
        this.language = this.translator.getLocale();
        document.getElementsByTagName('html')[0].setAttribute('lang', this.language);
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
        let request = new XMLHttpRequest();
        // this._setQueerInformation(chrome.i18n.getMessage(''));

        let json = this.queerInformation.getInformationAsJSON();
        let jsonQueerInformationPicker = json.queerInformationPicker;
        let randomQueerInformation = queer._random(jsonQueerInformationPicker.length);
        queer._setQueerInformation(json[jsonQueerInformationPicker[randomQueerInformation]][queer.language]);
    }

    /**
     * Set the random queer information to the DOM
     * @param jsonQueerInformation
     * @private
     */
    _setQueerInformation(jsonQueerInformation) {
        this._setInnerHtml('queer-flag-title', jsonQueerInformation.queer_flag_title);
        this._setInnerHtml('queer-flag-information', jsonQueerInformation.queer_flag_information);

        document.getElementById('queer-flag-image').setAttribute('src', jsonQueerInformation.queer_flag_image.queer_flag_image_src);
        document.getElementById('queer-flag-image').setAttribute('alt', jsonQueerInformation.queer_flag_image.queer_flag_image_alt);
        this._setInformationSources(jsonQueerInformation.queer_flag_information_copyright_list);
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
