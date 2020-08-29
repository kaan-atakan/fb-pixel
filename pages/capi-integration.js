import Head from "next/head";
import Layout from "../components/layout";
import Article from "../components/article";

export default function Page() {
    return (
        <Layout nav="main">
            <Head>
                <title>CAPI Integration - {process.env.siteName}</title>
            </Head>
            <Article>
                <h2>CAPI Integration</h2>
                <a name="conversion-rate">
                    <h3>Conversion Rate</h3>
                </a>
                <h4>Better conversion rates and ad effectiveness</h4>
                <a name="targetting">
                    <h3>Targetting</h3>
                </a>
                <h4>Targeted advertising and content tailoring</h4>
                <a name="statistics">
                    <h3>Statistics</h3>
                </a>
                <h4>Better statistics and business intelligence</h4>
            </Article>
        </Layout>
    );
}
