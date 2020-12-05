import {
    AjaxHandler
} from "./AjaxHandler.mjs"

class KanyeWestTweet {
    content;
    ajax_handler;

    constructor(url, element) {
        this.ajax_handler = new AjaxHandler(url, element);
    }

    getNewTweet() {
        this.content = this.ajax_handler.getContent();
        return this.content;
    }
}

export {
    KanyeWestTweet
};