import React from "react";

export default class Article extends React.Component {
    render() {
        return <article>{this.props.children}</article>;
    }
}
