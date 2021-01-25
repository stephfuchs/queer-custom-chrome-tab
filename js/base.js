/**
 * Base tasks to run the script and the information for the new tab.
 */
class Base {

    constructor() {
        this.startYear = 2021;
        this.date = new Date();
        this.currentYear = this.date.getFullYear();
        this.contributor = 'Stephanie Fuchs';
    }

    /**
     * Initialization of the base tasks for the new tab.
     */
    init() {
        this._setFooter();
        this._translatePage();
    }

    /**
     * Translate the pages concerning the text within the messages.json.
     * @private
     */
    _translatePage() {
        var translator = new Translator();
        translator.translateIndex();
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

// start the script
var base = new Base();
base.init();
