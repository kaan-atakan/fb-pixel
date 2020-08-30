import React from "react";
import Head from "next/head";
import Nav from "./nav";

export default class Layout extends React.Component {
    render() {
        return (
            <main className="min-h-screen flex flex-col">
                <Head>
                    <script type="text/javascript" src="js/pixel.js" />
                    <noscript>
                        <img
                            height="1"
                            width="1"
                            style={{ display: "none" }}
                            src="https://www.facebook.com/tr?id=*your_pixel_id*&ev=PageView&noscript=1"
                        />
                    </noscript>
                </Head>
                <header className="text-center p-8 bg-primary text-white">
                    <h1 className="text-4xl">{process.env.siteName}</h1>
                </header>
                {this.props.nav != "none" ? <Nav /> : ""}
                {this.props.children}
            </main>
        );
    }
}
