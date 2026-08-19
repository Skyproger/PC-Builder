"use client"

import { useCallback, useState } from "react"
import { Component } from "@/lib/types"
import { TypographyH1 } from "@/components/ui/typography-h1"
import { Button } from "@/components/ui/button"
import { TableParts } from "./table"
import { SaveBuildDialog } from "./save-build-dialog"
import { componentCategories } from "@/lib/constans"


export const CurrentBuild =() => {

    const [selectedByCategory,setSelectedByCategory]=useState<Record<string , Component | null>>({})
    const [saveDialogOpen, setSaveDialogOpen] = useState(false)

    const onSelectComponent = useCallback((categoryId: string, component: Component | null) => {
        setSelectedByCategory(prev => ({...prev, [categoryId]: component}))
    },[])

    return (
        <>
            <div className="flex justify-between mb-8">
                <TypographyH1>Собери свою сборку</TypographyH1>
                <Button className="cursor-pointer" onClick={() => setSaveDialogOpen(true)}>Собрать</Button>
            </div>
            <div className="min-w-0 overflow-x-auto">
                <TableParts
                    components={componentCategories}
                    onSelectedComponent={onSelectComponent}
                    selectedByCategory={selectedByCategory}
                />
                <SaveBuildDialog
                    open={saveDialogOpen}
                    onOpenChange={setSaveDialogOpen}
                    selectedByCategory={selectedByCategory}
                />
            </div>
        </>
    )
}
