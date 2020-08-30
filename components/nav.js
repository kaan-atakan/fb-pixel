import path from "path";
import * as ChangeCase from "change-case";
import Link from "next/link";

export default class Nav extends React.Component {
    render() {
        return (
            <nav className="text-center bg-secondary p-2 md:p-4 text-white">
                <Link href="/">
                    <span className="truncate rounded p-2 m-2 cursor-pointer hover:bg-gray-800">Home</span>
                </Link>
                <span>-</span>
                <Link href="inventory-integration">
                    <span className="truncate rounded p-2 m-2 cursor-pointer hover:bg-gray-800">Inventory Integration</span>
                </Link>
                <span>-</span>
                <Link href="conversational-commerce">
                    <span className="truncate rounded p-2 m-2 cursor-pointer hover:bg-gray-800">Conversational Commerce</span>
                </Link>
                <span>-</span>
                <Link href="capi-integration">
                    <span className="truncate rounded p-2 m-2 cursor-pointer hover:bg-gray-800">CAPI Integration</span>
                </Link>
            </nav>
        );
    }
}
