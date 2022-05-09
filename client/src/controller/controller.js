class Controller {
    #conference: Conference
    #chairsService
    #reviewersService
    #authorsService
    #papersService

    constructor(conference: Conference, chairsService, reviewersService, authorsService, papersService) {
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
}

exports.Controller = Controller;
