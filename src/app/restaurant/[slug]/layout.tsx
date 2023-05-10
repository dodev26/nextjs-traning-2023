import Header from "@/app/components/Header";

export default function RestaurantLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <main>
            <Header />
            <div className="flex m-auto w-2/3 justify-between items-start">
                {children}
            </div>
        </main>
    )
}