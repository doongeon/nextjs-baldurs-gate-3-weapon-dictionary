import Link from "next/link";

async function LinkPreview() {
  return (
    <Link
      href={"http://www.google.com"}
      target="_blank"
      className="text-black  w-[50%] h-[200px] cursor-pointer flex items-center bg-[#f3f3f3] gap-3 text-left border-white border-[2px]"
      style={{
        textDecoration: "none",
      }}
    >
      <div className="object-cover h-full">
        <img
          src={
            "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2005&q=80"
          }
          alt="Link Preview"
          className="object-cover h-full w-[340px] m-0"
        />
      </div>
      <div className="p-4 w-[60%]">
        <h3 className="text-3xl font-bold leading-[2rem] mb-2 ">
          Website Title
        </h3>
        <p className="text-base  line-clamp-3 mb-2 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          aspernatur cum reprehenderit repellat nulla delectus quidem iusto.
          Aliquid rerum nesciunt unde itaque reiciendis similique dolores quod,
          ea suscipit distinctio quis.
        </p>
        <span className="mt-3 opacity-50 text-xs">
          &nbsp;{"http://www.google.com"}
        </span>
      </div>
    </Link>
  );
}

export default LinkPreview;