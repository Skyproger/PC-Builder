import { auth } from "@/auth";
import Link from "next/link";
import { TypographyH3 } from "./ui/typography-h3";
import { HeaderNav } from "./header-nav";

export async function Header() {
    const session = await auth();

    return (
        <header className="container mx-auto flex items-center p-4">
            <div className="shrink-0">
                <TypographyH3>
                    <Link href={session?.user ? '/dashboard' : '/'} className="cursor-pointer">ПК Сборщик</Link>
                </TypographyH3>
            </div>
            <nav className="min-w-0 flex-1">
                <HeaderNav session={session}/>
            </nav>
        </header>
    )
}