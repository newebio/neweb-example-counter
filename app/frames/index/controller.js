const neweb = require("neweb");
const controller = class extends neweb.FrameController {
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