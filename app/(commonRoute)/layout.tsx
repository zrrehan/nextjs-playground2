import { Navbar } from "./_component/shared/navbar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div suppressHydrationWarning >
        <Navbar className="mx-auto w-fit"></Navbar>
        {children}
        <h2 className="bg-blue-300">Footer</h2>
    </div>
  )
}