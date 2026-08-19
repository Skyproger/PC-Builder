export default function DashboardLayout({
    children
}: { children: React.ReactNode}) {
    return (
        <div className="container mx-auto mt-8">
            { children }
        </div>
    )
}