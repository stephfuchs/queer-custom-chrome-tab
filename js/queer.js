/**
 * Queerness tasks to run the script and the information for the new tab.
 */
class Queerness {

    constructor() {
        this.startYear = 2021;
        this.date = new Date();
        this.currentYear = this.date.getFullYear();
        this.contributor = 'Stephanie Fuchs';
        this.translator = new Translator();
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

        request.open('GET', '../json/queerInformation.json', true);
        request.onload = function () {
            if (request.status >= 200 && request.status < 400) {
                let json = JSON.parse(request.responseText).queerInformation;
                let rand = queer._random(json.length);
                document.getElementById('queer-flag-title').innerText = json[rand].queer_flag_title;
                document.getElementById('queer-flag-information').innerText = json[rand].queer_flag_information;
                document.getElementById('queer-flag-image').setAttribute('src', json[rand].queer_flag_image.queer_flag_image_src);
                document.getElementById('queer-flag-image').setAttribute('alt', json[rand].queer_flag_image.queer_flag_image_alt);
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

    _translateQueerInformation(object) {
        this.translator.translateQueerInformation();
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
var queer = new Queerness();
queer.init();

