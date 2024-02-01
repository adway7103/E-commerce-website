"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
export default function Home() {
  const comp = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {}, comp);
    const t1 = gsap.timeline();
    t1.from("#title", { xPercent: "-100", duration: 1.3, delay: 3 });
    return () => ctx.revert();
  }, []);
  return (
    <MaxWidthWrapper>
      <div
        className="py-10 mx-auto flex flex-col items-center max-w-3xl justify-center h-screen"
        id="title"
        ref={comp}
      >
        <h1
          className="text-4xl font-bold tracking-normal text-grey-900 sm:text-6xl text-center
        "
        >
          Your marketplace for high-quality{" "}
          <span className="text-blue-600">digital assets</span>.
        </h1>
        <p className="mt-6 text-md md:text-lg text-center max-w-prose text-muted-foreground">
          Welcome to Digital Buddy. Here you can find all top quality digital
          assets at affordable prices
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <Link href="/trending" className={`${buttonVariants()} bg-blue-700`}>
            Browse Trending
          </Link>
          <Button variant="ghost">Explore &rarr;</Button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
