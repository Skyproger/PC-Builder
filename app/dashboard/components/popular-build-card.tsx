import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getPopularBuild } from "@/lib/builds";
import { Eye, ThumbsUp } from "lucide-react";
import Link from "next/link";

export async function PopularBuildCard() {
    const builds = await getPopularBuild(3)

    if (builds.length === 0) {
        return (
            <Card className="w-full shirk-0 lg:w-64">
                <CardHeader>
                    <CardTitle>Популярные сборки</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foregroud">
                        Пока нету сборок
                    </p>
                </CardContent>
            </Card>
        )
    }

    return (
        <Card className="w-full srink-0 lg:w-64">
            <CardHeader>
                <CardTitle>Популярные сборки</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {
                    builds.map(build => (
                        <div
                            key={build.id}
                            className="flex flex-col gap-1 rounded-lg border bg-muted/30 px-3 py-2"
                        >
                            <div className="flex items-start justify-between gap-2">
                                <p className="font-medium text sm leading-tight min-w-0">{build.name}</p>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 shirnk-0"
                                    asChild
                                >
                                    <Link href={`/builds/${build.id}/edit`}>
                                        <Eye className="h-4 w-4"/>
                                    </Link>
                                </Button>
                            </div>
                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                                <span className="tablular-nums">
                                    { new Intl.NumberFormat('ru-Ru').format(build.totalPrice)}
                                </span>
                                <span className="flex items-center gap-1">
                                    <ThumbsUp className="h-4 w-4"/>
                                    { build._count.likes}
                                </span>
                            </div>
                        </div>
                    ))
                }
            </CardContent>
        </Card>
    )
}