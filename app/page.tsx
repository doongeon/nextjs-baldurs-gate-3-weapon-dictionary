"use client";

import { Suspense } from "react";
import TableSection from "../components/TableSection";
import Filter from "../components/Filter";
import LinkPreview from "../components/LinkPreview";


export default function Page() {
  return (
    <div className="w-full flex flex-col gap-10 items-center">
      <LinkPreview />
      <Filter />
      <div className="bg-neutral-500 h-px max-w-screen-sm w-full" />
      <Suspense>
        <TableSection />
      </Suspense>
    </div>
  );
}
