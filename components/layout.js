import React from "react";
import Head from "next/head";
import Nav from "./nav";

export default class Layout extends React.Component {
    render() {
        return (
            <main className="min-h-screen flex flex-col">
                <Head>
                    <script type="text/javascript" src="js/pixel.js" />
                    <link rel="shortcut icon" href="img/favicon-16x16.png" />
                    <noscript>
                        <img
                            height="1"
                            width="1"
                            style={{ display: "none" }}
                            src="https://www.facebook.com/tr?id=*your_pixel_id*&ev=PageView&noscript=1"
                        />
                    </noscript>
                </Head>
                <header className="p-2 md:p-8 bg-primary text-gray-100 font-extrabold flex flex-wrap justify-center items-center">
                    <img className="flex-0 h-20" src="img/zzg_logo.png" />
                    <h1 className="flex-0 mb-5 text-4xl">{process.env.siteName}</h1>
                </header>
                {this.props.nav != "none" ? <Nav /> : ""}
                {this.props.children}
            </main>
        );
    }
}
