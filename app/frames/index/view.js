const Neweb = require("neweb");
const { map } = require("rxjs/operators");
const view = class extends Neweb.Component {
    beforeMount() {
        this.addElement("txt1", new Neweb.TextNode({
            value: this.props.data.tick.pipe(map((v) => new Date(v).toString())),
        }));
    }
    getTemplate() {
        return `<div>Date::, <template name="txt1"></template></div>`;
    }
}
module.exports = {
    default: view,
};
