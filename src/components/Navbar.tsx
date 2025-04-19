import { logout } from "@/lib/session";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Navbar() {
    return (
        <nav className="bg-white shadow p-4">
            <div className="container mx-auto flex items-center justify-between">

                <div className="text-xl font-bold text-gray-800">
                    Mini Job Board
                </div>

                <div className="flex space-x-8 text-gray-600 font-medium">
                    <Link href="/" className="hover:text-black">Home</Link>
                    <Link href="/dashboard" className="hover:text-black">Dashboard</Link>
                </div>

                <div className="flex items-center space-x-4">
                    <Link 
                        href="/login" 
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                    >
                        Login
                    </Link>
                    <form
                        action={async () => {
                            "use server";
                            await logout();
                            redirect("/");
                        }}
                    >
                        <button 
                            type="submit"
                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                        >
                            Logout
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
}