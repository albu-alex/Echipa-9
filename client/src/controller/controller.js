const { Conference } = require('../Entities/conference')
const { Service } = require('../service/service')

class Controller {
    #conference: Conference
    #chairsService: Service
    #reviewersService: Service
    #authorsService: Service
    #papersService: Service

    constructor(conference: Conference, chairsService: Service, reviewersService: Service, authorsService: Service, papersService: Service) {
        this.#conference = conference;
        this.#chairsService = chairsService;
        this.#reviewersService = reviewersService;
        this.#authorsService = authorsService;
        this.#papersService = papersService;
    }


    get conference() {
        return this.#conference;
    }

    set conference(value) {
        this.#conference = value;
    }

    get chairsService() {
        return this.#chairsService;
    }

    set chairsService(value) {
        this.#chairsService = value;
    }

    get reviewersService() {
        return this.#reviewersService;
    }

    set reviewersService(value) {
        this.#reviewersService = value;
    }

    get authorsService() {
        return this.#authorsService;
    }

    set authorsService(value) {
        this.#authorsService = value;
    }

    get papersService() {
        return this.#papersService;
    }

    set papersService(value) {
        this.#papersService = value;
    }

    // CHAIR functionalities
    setConferenceInformation(url, topicsOfInterest) {
        this.#conference.url = url;
        this.#conference.topicsOfInterest = topicsOfInterest;
    }

    // REVIEWER functionalities
    addReviewToPaper(reviewerId, paperId, review) {
        this.#reviewersService
    }
}

exports.Controller = Controller;
