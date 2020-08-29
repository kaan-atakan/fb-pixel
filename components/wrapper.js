import React, {
    Children,
    isValidElement,
    cloneElement,
    ReactElement,
} from "react";

export default class LinkBox extends React.Component {
    render() {
        var children = Children.map(this.props.children, (child) => {
            if (!isValidElement(child)) return child;
            else {
                return cloneElement(child, {
                    addClass: this.props.childClass,
                    addStyle: this.props.childStyle,
                });
            }
        });

        return <section className={this.props.className}>{children}</section>;
    }
}
