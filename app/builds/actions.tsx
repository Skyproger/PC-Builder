'use server'

import { auth } from "@/auth";
import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function setBuildPublicAction(formData: FormData) {
    const session = await auth();

    if (!session?.user.id) {
        return
    }

    const buildId = String(formData.get('buildId')) ?? "";
    const isPublic = formData.get('isPublic') === 'true'

    if (!buildId) {
        return
    }

    await prisma.build.updateMany({
        where: {
            id: buildId, 
            userId: session.user.id
        },
        data: { isPublic }
    })

    revalidatePath('/builds');
    revalidatePath('/builds/explore')
}

export async function deleteBuildAction(formData: FormData) {
    const session = await auth();

    if (!session?.user.id) {
        return
    }

    const buildId = String(formData.get('buildId')) ?? "";

    if (!buildId) {
        return
    }

    await prisma.build.deleteMany({
        where: { id: buildId, userId: session.user.id}
    })

    revalidatePath('/builds');
}

export async function toggleLikeAction(formData: FormData) {
        const session = await auth();

    if (!session?.user.id) {
        return
    }

    
    const buildId = String(formData.get('buildId')) ?? "";

    if (!buildId) {
        return
    }

    const build = await prisma.build.findUnique({
        where: { id: buildId },
        select: { isPublic: true}
    })

    if (!build?.isPublic) {
        return
    }

    const existing = await prisma.like.findUnique({
        where: {
            userId_buildId: { userId: session.user.id, buildId}
        }
    })

    if (existing) {
        await prisma.like.delete({
            where: {
                id: existing.id
            }
        })
    } else {
        await prisma.like.create({
            data: {
                userId: session.user.id,
                buildId
            }
        })
    }

    revalidatePath('/builds');
    revalidatePath('/builds/explore')
    revalidatePath('/dashboard')
}