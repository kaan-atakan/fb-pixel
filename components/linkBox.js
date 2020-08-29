import React, {
    Children,
    isValidElement,
    cloneElement,
    ReactElement,
} from "react";

export default class LinkLine extends React.Component {
    render() {
        var classes = [
            "overflow-hidden",
            "rounded-md",
            "border",
            "border-secondary",
            "flex",
            "flex-col",
        ];

        if ("className" in this.props) {
            classes = classes.concat(this.props.className.split(" "));
        }

        if ("addClass" in this.props) {
            classes = classes.concat(this.props.addClass.split(" "));
        }

        var className = [...new Set(classes)].join(" ");

        return (
            <article className={className}>
                <header className="bg-secondary text-white text-center p-2">
                    <h2 className="text-xl">{this.props.title}</h2>
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
                    <a
                        className="p-2 block text-xl rounded bg-button hover:bg-gray-700 text-white"
                        href={this.props.link}
                    >
                        Learn More
                    </a>
                </nav>
            </article>
        );
    }
}
