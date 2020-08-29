import Head from "next/head";
import Layout from "../components/layout";
import Article from "../components/article";

export default function Page() {
    return (
        <Layout nav="main">
            <Head>
                <title>Inventory Integration - {process.env.siteName}</title>
            </Head>
            <Article>
                <header>
                    <h2>Inventory Integration</h2>
                </header>

                <a name="data-sources">
                    <h3>Data Sources</h3>
                </a>
                <h4>Support for XML, Spreadsheet and API sources</h4>
                <p></p>

                <a name="marketplaces">
                    <h3>Marketplaces</h3>
                </a>
                <h4>Integrated with all major marketplaces</h4>
                <p></p>

                <a name="matching">
                    <h3>Matching</h3>
                </a>
                <h4>Automated matching of product options and attributes</h4>
                <p></p>
            </Article>
        </Layout>
    );
}
