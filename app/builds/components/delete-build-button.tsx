'use client'

import { Button } from "@/components/ui/button";
import { useTransition } from "react";

type Props = {
    buildId: string;
    deleteAction: (formData: FormData) => void;
}

export function DeleteBuildButton({
    buildId,
    deleteAction
}: Props) {
    const [isPending, startTransition] = useTransition();

    const handleClick = () => {
        if (!confirm('Удалить сборку?')) {
            return
        }

        const fd = new FormData();
        fd.set('buildId', buildId);

        startTransition(() => deleteAction(fd))
    }

    return (
        <div className="py-1">
        <Button
            type="button"
            variant="destructive"
            size="sm"
            disabled={isPending}
            onClick={handleClick}
            className="cursor-pointer"
        >
            Удалить
        </Button>
        </div>
    )
}