import Navbar from "./_component/shared/Navbar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        <Navbar></Navbar>
        {children}
        <h2 className="bg-blue-300">Footer</h2>
    </div>
  )
}