"use client";

import { Suspense } from "react";
import TableSection from "../components/TableSection";
import Filter from "../components/Filter";

export default function Page() {
  return (
    <div className="w-full flex flex-col gap-10 items-center">
      <Filter />
      <div className="bg-neutral-500 h-px max-w-screen-sm w-full" />
      <TableSection />
    </div>
  );
}
