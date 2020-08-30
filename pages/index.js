import Layout from "../components/layout";
import Wrapper from "../components/wrapper";
import LinkBox from "../components/linkBox";
import LinkLine from "../components/linkLine";
import Head from "next/head";
import Article from "../components/article";

export default function IndexPage() {
    return (
        <Layout nav="main">
            <Head>
                <title>{process.env.siteName}</title>
            </Head>
            <section className="bg-button text-white py-20 text-center">
                <form>
                    <label className="block mb-6 text-xl" for="email">
                        Enter your email to subscribe to our newsletter:
                    </label>
                    <input
                        className="rounded-l p-3 text-primary w-1/6"
                        type="text"
                        id="email"
                        name="email"
                    />
                    <input
                        className="rounded-r py-3 px-5 mb-4 bg-primary hover:bg-pink-600 cursor-pointer"
                        type="submit"
                        value="Subscibe"
                    />
                </form>
            </section>
            <Article>
                <Wrapper
                    className="flex flex-wrap px-2 mt-2 md:space-x-6"
                    childClass="flex-1 min-w-full bg-white md:min-w-0 mb-2"
                >
                    <LinkBox
                        title="Conversational Commerce"
                        link="conversational-commerce"
                    >
                        <LinkLine section="messaging-systems">
                            Integrated with Whatsapp and Facebook Messenger
                        </LinkLine>
                        <LinkLine section="payment-systems">
                            Easy payments with Masterpass
                        </LinkLine>
                        <LinkLine section="flow-automation">
                            Easy automation with intuitive UI
                        </LinkLine>
                        <LinkLine section="artificial-intelligence">
                            Powered by Artificial Intelligence
                        </LinkLine>
                    </LinkBox>
                    <LinkBox title="CAPI Integration" link="capi-integration">
                        <LinkLine section="conversion-rate">
                            Better conversion rates and ad effectiveness
                        </LinkLine>
                        <LinkLine section="targetting">
                            Targeted advertising and content tailoring
                        </LinkLine>
                        <LinkLine section="statistics">
                            Better statistics and business intelligence
                        </LinkLine>
                    </LinkBox>
                    <LinkBox
                        title="Inventory Integration"
                        link="inventory-integration"
                    >
                        <LinkLine section="data-sources">
                            Support for XML, Spreadsheet and API sources
                        </LinkLine>
                        <LinkLine section="marketplaces">
                            Integrated with all major marketplaces
                        </LinkLine>
                        <LinkLine section="matching">
                            Automated matching of product options and attributes
                        </LinkLine>
                    </LinkBox>
                </Wrapper>
            </Article>
        </Layout>
    );
}
