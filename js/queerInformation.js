/**
 * Provides the JSON with all queer information needed.
 */
class QueerInformation {
    /**
     * Get the keys for the queer information JSON as an array.
     *
     * @returns {string[]}
     */
    getQueerInformationKeys() {
        return [
            "asexuality_flag",
            "asexuality_term",
            "agender_flag",
            "bi_flag",
            "gay_flag",
            "intersex_flag",
            "lesbian_flag",
            "lesbian_term",
            "lgbtqia_term",
            "nonbinary_flag",
            "pan_flag",
            "philadelphia_flag",
            "progress_flag",
            "rainbow_flag",
        ]
    }

    /**
     * Get the queer information by key as JSON
     *
     * @returns JSON
     */
    getInformationAsJSON() {
        return {
            "asexuality_flag": {
                "copyright_list": [
                    "https://www.uis.edu/gendersexualitystudentservices/",
                    "https://queer-lexikon.net/pride-flags/"
                ],
                "image": "images/flags/asexuality-flag.svg"
            },
            "asexuality_term": {
                "copyright_list": [
                    "https://asexualitaet.wordpress.com/2020/12/28/was-ist-asexualitat-das-asexuelle-1x1/",
                    "https://www.uis.edu/gendersexualitystudentservices/"
                ],
                "image": "images/flags/asexuality-flag.svg"
            },
            "agender_flag": {
                "copyright_list": [
                    "https://www.uis.edu/gendersexualitystudentservices/",
                    "https://gender.wikia.org/wiki/Pride_Flags#Agender_Flag",
                    "https://queer-lexikon.net/pride-flags/"
                ],
                "image": "images/flags/agender-flag.svg"
            },
            "bi_flag": {
                "copyright_list": [
                    "https://www.uis.edu/gendersexualitystudentservices/",
                    "https://queer-lexikon.net/pride-flags/",
                    "https://twitter.com/BiNetUSA/status/1255317614139670529"
                ],
                "image": "images/flags/bi-flag.svg"
            },
            "gay_flag": {
                "copyright_list": [
                    "https://cadehildreth.com/pride-flags/",
                    "https://lgbta.wikia.org/wiki/Gay",
                    "https://gayflagblog.tumblr.com/post/186181118619/gay-man-flag-russian-%D1%80%D0%BE%D1%81%D1%81%D0%B8-%D1%8F-portuguese"
                ],
                "image": "images/flags/gay-flag.svg"
            },
            "intersex_flag": {
                "copyright_list": [
                    "https://queer-lexikon.net/pride-flags/",
                    "https://gender.wikia.org/wiki/Pride_Flags#Ingender_Flag"
                ],
                "image": "images/flags/intersex-flag.svg"
            },
            "lesbian_flag": {
                "copyright_list": [
                    "https://official-lesbian-flag.tumblr.com/",
                    "https://en.wikipedia.org/wiki/Lesbian_flag",
                    "https://sadlesbeandisaster.tumblr.com/post/174618152601/can-people-please-acknowledge-this-version-of-the"
                ],
                "image": "images/flags/lesbian-flag.svg"
            },
            "lesbian_term": {
                "copyright_list": [
                    "https://www.uis.edu/gendersexualitystudentservices/about/lgbtqaterminology/",
                    "queer.de/detail.php?article_id=32575"
                ],
                "image": "images/flags/lesbian-flag.svg"
            },
            "lgbtqia_term": {
                "copyright_list": [
                    "https://www.uis.edu/gendersexualitystudentservices/about/lgbtqaterminology/"
                ],
                "image": "images/terms/lgbtqia-plus.svg"
            },
            "nonbinary_flag": {
                "copyright_list": [
                    "https://queer-lexikon.net/pride-flags/",
                    "https://nonbinary.wiki/wiki/Nonbinary"
                ],
                "image": "images/flags/nonbinary-flag.svg"
            },
            "pan_flag": {
                "copyright_list": [
                    "https://queer-lexikon.net/pride-flags/",
                    "https://justjasper.tumblr.com/post/42971325095/confession-time"
                ],
                "image": "images/flags/pan-flag.svg"
            },
            "philadelphia_flag": {
                "copyright_list": [
                    "https://www.pride.com/pride/2018/6/13/complete-guide-queer-pride-flags-0#media-gallery-media-5",
                    "https://www.instagram.com/p/Bift3XqBRIE/"
                ],
                "image": "images/flags/philadelphia-rainbow-flag.svg"
            },
            "progress_flag": {
                "copyright_list": [
                    "https://en.wikipedia.org/wiki/Rainbow_flag_(LGBT)#2010s",
                    "https://quasar.digital/progress-initiative/?v=a284e24d5f46",
                    "https://queer-lexikon.net/pride-flags/"
                ],
                "image": "images/flags/progress-flag.svg"
            },
            "rainbow_flag": {
                "copyright_list": [
                    "https://queer-lexikon.net/pride-flags/",
                    "https://en.wikipedia.org/wiki/Rainbow_flag_(LGBT)#Origin",
                    "https://en.wikipedia.org/wiki/Peace_flag"
                ],
                "image": "images/flags/rainbow-flag.svg"
            },
            "trans_flag": {
                "copyright_list": [
                    "https://gender.wikia.org/wiki/Transgender"
                ],
                "image": "images/flags/trans-flag.svg"
            }
        }
    }
}
