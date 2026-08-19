import { auth } from "@/auth";
import { getBuildToEdit } from "@/lib/builds";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import { EditBuildForm } from "./components/exit-build-form";

type Props = {
    params: Promise<{buildId: string}>
}

export default async function EditBuildPage({
    params
}: Props) {
    const session = await auth();

    if (!session?.user.id) {
        redirect('/login')
    }

    const { buildId } = await params;

    const build = await getBuildToEdit(buildId)

    if (!build) {
        return
    }

    const buildComponents = build.components.map(bc => ({
        id: bc.component.id,
        name: bc.component.name,
        price: bc.component.price,
        type:  bc.component.type,
        socket:  bc.component.socket
    }))

    return (
        <div className="py-6">
            <EditBuildForm
                buildName={build.name}
                buildComponents={buildComponents}
            />
        </div>
    )
}