import SideBar from "@/components/Sidebar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = {
    firstName:'Lucas',
    lastName:'Giorgi'
  };

  return (
   <main className="flex h-screen w-full font-inter">
    <SideBar user={loggedIn}/>
    {children}
   </main>
  );
}
