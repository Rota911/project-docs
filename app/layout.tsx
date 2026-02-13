import "./globals.css";
import { Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import Image from "next/image";

export const metadata = {};


const navbar = (
     <Navbar
          logo={
               <div className="flex flex-row gap-2 items-center justify-center">
                    <Image src={"/logo.gif"} alt="PLS Logo " width={32} height={32} />
                    <span>
                         <b>Project | Los Santos</b>
                    </span>
               </div>
          }
     />
);

export default async function RootLayout({ children }: { children: React.ReactNode }) {
     return (
          <html lang="en" dir="ltr" suppressHydrationWarning>
               <Head />
               <body>
                    <Layout navbar={navbar} pageMap={await getPageMap()} docsRepositoryBase="https://github.com/Rota911/project-docs">
                         {children}
                    </Layout>
               </body>
          </html>
     );
}
