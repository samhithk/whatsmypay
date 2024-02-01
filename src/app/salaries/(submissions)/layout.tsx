import Container from "@/components/ui/container";
import Link from "next/link";
import type { PropsWithChildren } from "react";

export function Layout({ children }: PropsWithChildren) {
  return (
    <main className="min-h-screen bg-zinc-50">
      <header className="sticky top-0 bg-white px-4 shadow-sm">
        <Container>
          <Link href={"/"} className="p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={"/logo.svg"}
              alt="Whats my pay logo"
              className="h-12 w-auto"
            />
          </Link>
        </Container>
      </header>
      <Container>
        <div className="p-4 py-16">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
            <h2 className="text-primary-background scroll-m-20 text-center text-3xl font-semibold tracking-tight first:mt-0">
              Add Your Salary
            </h2>
            {children}
          </div>
        </div>
      </Container>
    </main>
  );
}

export default Layout;
