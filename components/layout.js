import React from "react";
import Nav from "./nav";

export default class Layout extends React.Component {
    render() {
        return (
            <main>
                <header className="text-center p-8 mb-2 bg-primary text-white">
                    <h1 className="text-4xl">{process.env.siteName}</h1>
                    {this.props.nav != "none" ? <Nav /> : ""}
                </header>
                {this.props.children}
            </main>
        );
    }
}
