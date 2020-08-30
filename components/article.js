import React from "react";
const merge = require("../libraries/merge");

export default class Article extends React.Component {
    render() {
        const className = merge.classes(
            "p-2 lg:p-4 w-1/1 flex-1 bg-gray-200",
            this.props.className,
            this.props.addClass
        );

        return <article className={className}>{this.props.children}</article>;
    }
}
