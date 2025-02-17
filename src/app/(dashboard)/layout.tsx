interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen">
      <div className="flex w-full h-full">
        <div className="lg:pl-[270px]">
          {/* TODO: Navbar */}
          <main></main>
          {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout;