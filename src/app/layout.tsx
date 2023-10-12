import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Interactives | Gab K De Jesus",
  description: "Impressing Reads with Art & Interactivity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-tr overflow-x-hidden min-w-screen from-zinc-950 via-stone-900 to-neutral-950 flex min-h-screen flex-col items-center justify-between">
          <div className="hide-on-article m-5">
            <section className="w-full flex gap-4 justify-start mb-6 p-2">
              <div >
                <img
                  src="./img/logoblack.png"
                  alt="avatar"
                  className="w-12 h-12 rounded-full bg-white shadow-lg grayscale hover:invert duration-300"
                />
              </div>
              <div className="flex flex-col gap-2 justify-center">
                <h1 className="mb-0 text-zinc-400 italic">Gab K De Jesus</h1>
                <p className="mb-0 text-zinc-100 font-semibold leading-none">
                  Impressing Reads with Art & Interactivity
                </p>
              </div>
            </section>
            <Navbar navItems={[
              {path:"/", name:"home"},
              {path:"/rural", name: "NYT Interactive: A Rural Doctor"}
              ]}/>
          </div>
          <main className="pl-4 pr-4 gap-6 w-full sm:w-[70%] lg:w-[55%]">
          {children}
          </main> 
      </body>
    </html>
  );
}
