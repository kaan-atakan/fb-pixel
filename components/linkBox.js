import React, { Children, isValidElement, cloneElement } from "react";
import Link from "next/link";
const merge = require("../libraries/merge");

export default class LinkLine extends React.Component {
    render() {
        const className = merge.classes(
            [
                "overflow-hidden",
                "rounded-md",
                "border",
                "border-secondary",
                "flex",
                "flex-col",
            ],
            this.props.className,
            this.props.addClass
        );

        return (
            <article className={className}>
                <header className="bg-secondary text-white text-center p-2">
                    <h2 className="text-lg">{this.props.title}</h2>
                </header>
                <div>
                    <nav className="p-2 divide-y">
                        {Children.map(this.props.children, (child) => {
                            if (!isValidElement(child)) return child;
                            else
                                return cloneElement(child, {
                                    link: this.props.link,
                                });
                        })}
                    </nav>
                </div>
                <nav className="mt-auto p-2 text-center">
                    <Link href={this.props.link}>
                        <div className="cursor-pointer p-2 block text-xl rounded bg-button hover:bg-green-500 text-white">
                            Learn More
                        </div>
                    </Link>
                </nav>
            </article>
        );
    }
}
