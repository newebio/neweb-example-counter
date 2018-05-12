const neweb = require("neweb");
const { BehaviorSubject, interval } = require("rxjs");
const { map } = require("rxjs/operators");
const controller = class {
    constructor() {
        this.data$ = interval(1000).pipe(map(() => +new Date()));
    }
}
module.exports = {
    default: controller
}