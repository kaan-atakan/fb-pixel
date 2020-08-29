import React from "react";
import Link from "next/link";

export default class LinkLine extends React.Component {
    render() {
        return (
            <Link href={this.props.link + "#" + this.props.section}>
                <div className="cursor-pointer block p-4 text-primary hover:bg-gray-200">
                    {this.props.children}
                </div>
            </Link>
        );
    }
}
