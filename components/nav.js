import path from "path";
import * as ChangeCase from "change-case";
import Link from "next/link";

export default class Nav extends React.Component {
    render() {
        return (
            <nav className="mb-4 space-x-4 text-center bg-secondary p-4 text-white">
                <Link href="/">Home</Link>
                <span>-</span>
                <Link href="inventory-integration">Inventory Integration</Link>
                <span>-</span>
                <Link href="conversational-commerce">
                    Conversational Commerce
                </Link>
                <span>-</span>
                <Link href="capi-integration">CAPI Integration</Link>
            </nav>
        );
    }
}
