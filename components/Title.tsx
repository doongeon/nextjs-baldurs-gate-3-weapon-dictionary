"use client";

import Link from "next/link";

export default function Title() {
    return (
        <div className="w-full max-w-screen-sm text-center">
            <Link className="flex flex-col items-center gap-2" href={"/"}>
                <img className="w-52" src="/images/favicon.ico" alt="favicon" />
                <h1 className="text-6xl font-bold">발게삼</h1>
            </Link>
        </div>
    );
}
