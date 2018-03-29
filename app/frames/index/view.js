const React = require("react");
const view = class extends React.Component {
    render() {
        return React.createElement("div", {}, ["data::", this.props.data]);
    }
}
module.exports = {
    default: view,
};
