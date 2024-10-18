"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { autoCompeleteViewState, searchQueryState } from "../app/Atom";
import { Weapon } from "../src/interfaces";
import filterWeapon from "../src/filterWeapon";
import AutoCompleteSearchBar from "./AutoCompleteSearchBar";

type Input = {
    searchQeury: string;
};

export default function SearchBar() {
    const searchQuery = useRecoilValue(searchQueryState);
    const [autoCompleteView, setAutoCompleteView] = useRecoilState(
        autoCompeleteViewState
    );
    const [nameMatchedItems, setNameMatchedItems] = useState<Weapon[]>([]);
    const [matchedItems, setMatchedItems] = useState<Weapon[]>([]);

    useEffect(() => {
        const { nameMatchedItems, matchedItems } = filterWeapon(searchQuery);
        setNameMatchedItems(nameMatchedItems);
        setMatchedItems(matchedItems);
    }, [searchQuery]);

    const params = useSearchParams();
    const router = useRouter();

    const setSearchQuery = useSetRecoilState(searchQueryState);
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm<Input>();

    useEffect(() => {
        if (!params.get("searchQuery")) setValue("searchQeury", "");
        setValue("searchQeury", params.get("searchQuery"));
    }, [params]);

    useEffect(() => {
        setSearchQuery(watch("searchQeury"));
    }, [watch("searchQeury")]);

    const onSubmit: SubmitHandler<Input> = ({ searchQeury }) => {
        (document.activeElement as HTMLElement).blur();
        setAutoCompleteView(false);
        setSearchQuery("");
        router.push(`/?searchQuery=${searchQeury}`);
    };

    const handleFocus = () => {
        setAutoCompleteView(true);
        setSearchQuery(watch("searchQeury"));
    };

    const handleBlur = () => {
        setTimeout(() => setAutoCompleteView(false), 300);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-screen-sm flex gap-5 relative"
        >
            <div className="w-full relative">
                <input
                    className="text-white w-full max-w-screen-sm h-10 bg-neutral-900 px-3 ring-2 ring-neutral-700 rounded-2xl focus:outline-none focus:ring-neutral-500 transition"
                    {...register("searchQeury", {
                        required: true,
                    })}
                    autoComplete="off"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                <AutoCompleteSearchBar />
            </div>
            <button
                className="absolute right-3 top-1/2 -translate-y-1/2 sm:static sm:translate-y-0"
                type="submit"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                </svg>
            </button>
        </form>
    );
}
