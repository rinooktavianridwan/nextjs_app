import Image from "next/image";

export default function Home() {
  return (
    <section className="w-full bg-blue-800 flex flex-row justify-center items-center p-10">
      <div className="w-full flex flex-col justify-center items-center gap-8">
        <form className="w-full px-40">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-white border rounded-lg  bg-gray-700 border-gray-600 placeholder-gray-400 "
              placeholder="Search for a Movie"
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 "
            >
              Search
            </button>
          </div>
        </form>
        <p className="w-full px-20">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque laborum, quod praesentium ullam, maiores laudantium repellat optio fugiat, rerum repellendus illum vero doloribus maxime dolor. Sed facilis voluptas architecto id.</p>
      </div>
      <div className="w-full flex justify-center items-center ">
        <Image
          src="/images/cartoon_film.png"
          alt="Logo"
          width={400}
          height={400}
        />
      </div>
    </section>
  );
}
