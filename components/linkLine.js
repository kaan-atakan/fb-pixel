import React from "react";

export default class Link extends React.Component {
    render() {
        return (
            <a
                className="block p-4 text-primary hover:bg-gray-200"
                href={this.props.link + "#" + this.props.section}
            >
                {this.props.children}
            </a>
        );
    }
}
