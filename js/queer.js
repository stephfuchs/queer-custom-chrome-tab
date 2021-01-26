/**
 * Queerness tasks to run the script and the information for the new tab.
 */
class Queerness {

    constructor(tranlator) {
        this.startYear = 2021;
        this.date = new Date();
        this.currentYear = this.date.getFullYear();
        this.contributor = 'Stephanie Fuchs';
        this.translator = tranlator;
        this.language = chrome.i18n.getUILanguage();
    }

    /**
     * Initialization of the base tasks for the new tab.
     */
    init() {
        this._setFooter();
        this._translatePage();
        this._processJson();
    }

    _processJson() {
        let request = new XMLHttpRequest();
        var queer = this;

        request.open('GET', '../json/queerInformation.json');
        request.onload = function () {
            if (request.status >= 200 && request.status < 400) {
                let json = JSON.parse(request.responseText);
                let jsonQueerInformationPicker = json.queerInformationPicker;
                let randomQueerInformation = queer._random(jsonQueerInformationPicker.length);
                queer._setQueerInformation(json[jsonQueerInformationPicker[randomQueerInformation]][queer.language]);
            }
        }
        request.send();
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

    /**
     * Set the random queer information to the DOM
     * @param jsonQueerInformation
     * @private
     */
    _setQueerInformation(jsonQueerInformation) {
        document.getElementById('queer-flag-title').innerText = jsonQueerInformation.queer_flag_title;
        document.getElementById('queer-flag-information').innerText = jsonQueerInformation.queer_flag_information;
        document.getElementById('queer-flag-image').setAttribute('src', jsonQueerInformation.queer_flag_image.queer_flag_image_src);
        document.getElementById('queer-flag-image').setAttribute('alt', jsonQueerInformation.queer_flag_image.queer_flag_image_alt);
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
        document.getElementById('page-index-footer-copyright-year').innerHTML = '&copy; ' + this.startYear + currentYear + this.contributor;
    }
}

// start the script when ready
var queer = new Queerness(new Translator());
queer.init();

