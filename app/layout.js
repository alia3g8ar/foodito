import MainHeader from "@/components/main-header/main-header";
import BackgroundMusic from "@/components/audio/background-music";
import "./globals.css";

export const metadata = {
  title: "فودیتو",
  description: "غذاهای خوشمزه، به اشتراک گذاشته شده توسط جامعه عاشقان غذا.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <MainHeader />
        {children}
        <BackgroundMusic />
      </body>
    </html>
  );
}
