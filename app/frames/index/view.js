const Neweb = require("neweb");
const { map } = require("rxjs/operators");
const view = class extends Neweb.Component {
    beforeInit() {
        this.addElement("txt1", new Neweb.Text({
            value: this.props.data.tick.pipe(map((v) => new Date(v).toString())),
        }));
    }
    getTemplate() {
        return `<div>Date::, <strong name="txt1"></strong></div>`;
    }
}
module.exports = {
    default: view,
};
