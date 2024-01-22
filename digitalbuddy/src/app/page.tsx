import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-grey-900 sm:text-6xl">
          Your marketplace for high-quality{" "}
          <span className="text-blue-600">digital assets</span>.
        </h1>
        <p>Welcome to Digital Buddy</p>
      </div>
    </MaxWidthWrapper>
  );
}