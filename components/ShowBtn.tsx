"use client";

interface ShowBtnProps {
  toggleShowAll: () => void;
  showAll: boolean;
}

export default function ShowBtn({ showAll, toggleShowAll }: ShowBtnProps) {
  return (
    <div
      className="w-24 text-white text-center ring-neutral-50 ring-1 rounded-2xl cursor-pointer"
      onClick={toggleShowAll}
    >
      {showAll ? "접기" : "전부 보기"}
    </div>
  );
}
