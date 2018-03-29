const neweb = require("neweb-core");
const controller = class extends neweb.Controller {
    getInitialData() {
        return 0;
    }
    onInit() {
        setInterval(() => this.emit(+ new Date()), 1000);
    }
}
module.exports = {
    default: controller
}