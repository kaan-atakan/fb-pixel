import React from "react";
import Nav from "./nav";

export default class Layout extends React.Component {
    render() {
        return (
            <main>
                <header className="text-center p-8 bg-primary text-white">
                    <h1 className="text-4xl">{process.env.siteName}</h1>
                </header>
                {this.props.nav != "none" ? <Nav /> : ""}
                {this.props.children}
            </main>
        );
    }
}
