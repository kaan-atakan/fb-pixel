import Layout from "../components/layout";
import Wrapper from "../components/wrapper";
import LinkBox from "../components/linkBox";
import LinkLine from "../components/linkLine";
import Head from "next/head";

export default function IndexPage() {
    return (
        <Layout nav="none">
            <Head>
                <title>{process.env.siteName}</title>
            </Head>
            <Wrapper
                className="flex flex-wrap px-2 md:space-x-2"
                childClass="flex-1 min-w-full md:min-w-0 mb-2"
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
                    link="inventory-integation"
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
        </Layout>
    );
}
