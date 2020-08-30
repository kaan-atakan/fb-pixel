import Head from "next/head";
import Layout from "../components/layout";
import Article from "../components/article";

export default function Page() {
    return (
        <Layout nav="main">
            <Head>
                <title>Conversational Commerce - {process.env.siteName}</title>
            </Head>
            <Article>
                <header>
                    <h2>Conversational Commerce</h2>
                </header>

                <a name="messaging-systems">
                    <h3>Messaging Systems</h3>
                </a>
                <h4>Integrated with Whatsapp and Facebook Messenger</h4>
                <p>
                    As a Facebook Messaging partner, Lila not only provides
                    chat-bot and omnichannel solutions but is WhatsApp
                    Business API. Please click the link below to learn more
                    about WhatsApp Business API.
                </p>
                <p>
                    Lila has different pricing options in order to meet various
                    scenarios that your business model may need. Please contact
                    us to know more about pricing options.
                </p>

                <a name="payment-systems">
                    <h3>Payment Systems</h3>
                </a>
                <h4>Easy payments with Masterpass</h4>
                <p></p>

                <a name="flow-automation">
                    <h3>Flow Automation</h3>
                </a>
                <h4>Easy automation with intuitive UI</h4>
                <p></p>

                <a name="artificial-intelligence">
                    <h3>Artificial Intelligence</h3>
                </a>
                <h4>Powered by Artificial Intelligence</h4>
                <p></p>
            </Article>
        </Layout>
    );
}
