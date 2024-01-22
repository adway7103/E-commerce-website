import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-grey-900 sm:text-6xl">
          Your marketplace for high-quality{" "}
          <span className="text-blue-600">digital assets</span>.
        </h1>
        <p className="mt-6 text-lg max-w-prose">Welcome to Digital Buddy</p>
        <Link href="/trending" className={`${buttonVariants()} bg-blue-600`}>
          Browse Trending
        </Link>
      </div>
    </MaxWidthWrapper>
  );
}
