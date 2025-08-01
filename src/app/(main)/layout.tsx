import { Header } from '@/components/header';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <footer className="flex items-center justify-center py-6 border-t">
        <p className="text-sm text-muted-foreground">
            AVIMDB - All rights reserved, probably.
        </p>
    </footer>
    </div>
  );
}
