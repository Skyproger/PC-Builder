import { Button } from "@/components/ui/button"
import { TypographyH1 } from "@/components/ui/typography-h1";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16">
        <TypographyH1>Создай свою сборку мечты</TypographyH1>
        <br />
        <Button >
          <Link href="/dashboard">Собрать</Link>
        </Button>
      </main>
    </div>
  );
}