import localFont from "next/font/local";
import Image from "next/image";
import "./assets/styles/index.scss";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const isProd = process.env.NODE_ENV === 'production';
  return (
    <html lang="en">
      <body
        className={`relative min-h-screen bg-black  `}
      >
        <div className="absolute h-full bgImage -top-[31.3rem] left-0 min -z-10 ">
        
        </div>
        <header className="container flex items-center justify-between top-0 pt-45 md:pt-[6.8rem] sticky z-10">
            <Image
              src={`${isProd ? '/Uspacy/logo.svg' : '/logo.svg'}`}
              alt="uspacy logo"
              width={116}
              height={32}
              className="md:w-[11.6rem] md:h-[3.2rem] w-80 h-24"
            />
            <button className="btn btn--primary">Зареєструватися</button>
        </header>

        <main className="relative pt-65 md:pt-100">
          
          {children}
        </main>

        <footer className="container sticky w-full bottom-0 bg-purple h-[4.6rem] flex justify-center items-center gap-x-10 md:gap-x-20">
            <p className="">
              Безкоштовна онлайн-конференція
            </p>
            <span className="">
              <svg width="38" height="3" className="w-25 h-3" viewBox="0 0 38 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.0820312" y="0.855469" width="37.4146" height="1.55297" fill="white"/>
              </svg>
            </span>
            <p className="">
              30 квітня о 10:00
            </p>
        </footer>

      </body>
    </html>
  );
}
