import React from "react";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  const [picsumData, setpicsumData] = useState([]);
  const [animeData, setanimeData] = useState([]);
  const [pixabayData, setpixabayData] = useState([]);
  const [pageNumber, setpageNumber] = useState(0);
  const [pixabayPage, setPixabayPage] = useState(1);
  const [userSearch, setuserSearch] = useState("");
  const [activeApi, setactiveApi] = useState("");
  const imgRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const animeApi = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await axios.get(
        "https://nekos.best/api/v2/waifu?amount=10",
      );
      console.log(response.data.results[0].url);
      setanimeData(response.data.results);
      setpicsumData([]);
      setpixabayData([]);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching anime images:", error);
      setError("Failed to fetch anime images. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  async function picsumApi() {
    try {
      setLoading(true);
      setError("");
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${pageNumber}&limit=10`,
      );

      setpicsumData(response.data);
      setanimeData([]);
      setpixabayData([]);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching picsum images:", error);
      setError("Failed to fetch picsum images. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const pixabayApi = async () => {
    try {
      setLoading(true);
      setError("");
      const API_KEY = import.meta.env.VITE_PIXABAY_API_KEY;
      const response = await axios.get(
        `https://pixabay.com/api/?key=${API_KEY}&q=${userSearch}&image_type=photo&per_page=10&page=${pixabayPage}`,
      );
      setpixabayData(response.data.hits);
      setpicsumData([]);
      setanimeData([]);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching pixabay images:", error);
      setError("Failed to fetch pixabay images. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  let printData = "no data currently";

  if (activeApi === "picsum") {
    printData = picsumData.map(function (elem) {
      return (
        <div
          key={elem.id}
          className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <img
            className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
            src={elem.download_url}
            alt=""
            onClick={() => {
              sessionStorage.setItem("galleryData", JSON.stringify(picsumData));
              sessionStorage.setItem("fromImagePage", "true");
              sessionStorage.setItem("activeApi", "picsum");
              sessionStorage.setItem("pageNumber", pageNumber);
              sessionStorage.setItem("scrollPosition", window.scrollY);
              navigate("/image", { state: { imageUrl: elem.download_url } });
            }}
          ></img>
        </div>
      );
    });
  } else if (activeApi === "anime") {
    printData = animeData.map(function (elem) {
      console.log("this is the anime data:", elem);
      return (
        <div
          key={elem.id}
          className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <img
            className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
            src={elem.url}
            alt=""
            onClick={() => {
              sessionStorage.setItem("galleryData", JSON.stringify(animeData));
              sessionStorage.setItem("activeApi", "anime");
              sessionStorage.setItem("scrollPosition", window.scrollY);
              sessionStorage.setItem("fromImagePage", "true");
              navigate("/image", { state: { imageUrl: elem.url } });
            }}
          ></img>
        </div>
      );
    });
  } else if (activeApi === "pixabay") {
    printData = pixabayData.map(function (elem) {
      return (
        <div
          key={elem.id}
          className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <img
            className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
            src={elem.webformatURL}
            alt=""
            onClick={() => {
              sessionStorage.setItem(
                "galleryData",
                JSON.stringify(pixabayData),
              );
              sessionStorage.setItem("fromImagePage", "true");
              sessionStorage.setItem("activeApi", "pixabay");
              sessionStorage.setItem("pixabayPage", pixabayPage);
              sessionStorage.setItem("scrollPosition", window.scrollY);
              navigate("/image", { state: { imageUrl: elem.webformatURL } });
            }}
          ></img>
        </div>
      );
    });
  }

  useEffect(() => {
    const fromImagePage = sessionStorage.getItem("fromImagePage");

    if (fromImagePage === "true") {
      const storedData = {
        galleryData: sessionStorage.getItem("galleryData"),
        activeApi: sessionStorage.getItem("activeApi"),
        pageNumber: sessionStorage.getItem("pageNumber"),
        pixabayPage: sessionStorage.getItem("pixabayPage"),
        scrollPosition: sessionStorage.getItem("scrollPosition"),
      };
      const {
        galleryData,
        activeApi,
        pageNumber,
        pixabayPage,
        scrollPosition,
      } = storedData;

      if (galleryData && activeApi) {
        const data = JSON.parse(galleryData);
        const setter = {
          picsum: setpicsumData,
          anime: setanimeData,
          pixabay: setpixabayData,
        };
        setter[activeApi]?.(data);
        setactiveApi(activeApi);

        if (pageNumber) {
          setpageNumber(parseInt(pageNumber));
        }
        if (pixabayPage) {
          setPixabayPage(parseInt(pixabayPage));
        }

        if (scrollPosition) {
          setTimeout(() => {
            window.scrollTo({
              top: Number(scrollPosition),
              behavior: "auto",
            });
          }, 100);
        }
      }
    }
  }, []);

  useEffect(() => {
    if (activeApi === "pixabay" || activeApi === "picsum") {
      imgRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [pageNumber, pixabayPage]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <div className="fixed left-0 top-0 z-50 flex h-15 w-full items-center justify-between border-b border-slate-200 bg-white/90 px-4 shadow-sm backdrop-blur-md sm:px-8">
        <h1 className="text-xl font-bold tracking-tight text-slate-800 sm:text-2xl">
          The Pictures
        </h1>

        <input
          className="w-45 rounded-xl border border-slate-300 bg-slate-50 px-1 py-1 text-sm outline-none transition focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-100 sm:w-50"
          type="text"
          placeholder="Search Images..."
          onChange={(e) => setuserSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setactiveApi("pixabay");
              pixabayApi(1);
              setPixabayPage(1);
            }
          }}
        />
      </div>

      {/* Main Content */}
      <main className="px-4 pb-10 pt-24 sm:px-8 lg:px-12">
        {/* Hero */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-green-600">
            Image Explorer
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Explore Beautiful Images
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Browse random images, anime artwork, or search for photos using
            Pixabay.
          </p>
        </div>

        {/* Buttons */}
        <div className="mb-8 flex flex-wrap gap-3">
          <button
            className="rounded-xl bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-green-700 hover:shadow-md active:scale-95"
            onClick={() => {
              setactiveApi("picsum");
              picsumApi(0);
            }}
          >
            Get Random Images
          </button>

          <button
            className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:border-green-500 hover:text-green-600 hover:shadow-md active:scale-95"
            onClick={() => {
              setactiveApi("anime");
              animeApi();
            }}
          >
            Random Anime Images
          </button>
        </div>

        {/* Images */}
        <div
          ref={imgRef}
          className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        >
          {printData}
        </div>

        {/* No Data */}
        {loading && (
          <div className="flex min-h-200 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white">
            <div className="text-center">
              <p className="text-lg font-semibold text-slate-700">
                Loading images...
              </p>
            </div>
          </div>
        )}
        {printData === "no data currently" && !loading && !error && (
          <div className="flex min-h-200 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white">
            <div className="text-center">
              <p className="text-lg font-semibold text-slate-700">
                No images to display
              </p>
              <p className="mt-1 text-sm text-slate-400">
                Choose an image source above or search Images.
              </p>
            </div>
          </div>
        )}
        {error && (
          <div className="flex min-h-200 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white">
            <div className="text-center">
              <p className="text-lg font-semibold text-red-600">{error}</p>
              <p className="mt-1 text-sm text-slate-400">
                Please try again later.
              </p>
            </div>
          </div>
        )}

        {/* Pagination */}
        {activeApi === "picsum" || activeApi === "pixabay" ? (
          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              disabled={
                activeApi === "pixabay" ? pixabayPage <= 1 : pageNumber <= 0
              }
              className="rounded-xl border border-slate-300 bg-white px-5 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-green-500 hover:text-green-600 disabled:cursor-not-allowed disabled:opacity-50"
              onClick={() => {
                const previousPage = pageNumber - 1;
                if (activeApi === "pixabay") {
                  const previousPage = pixabayPage - 1;
                  setactiveApi("pixabay");
                  pixabayApi(previousPage);
                  setPixabayPage(previousPage);
                } else if (activeApi === "picsum") {
                  const previousPage = pageNumber - 1;
                  setactiveApi("picsum");
                  setpageNumber(previousPage);
                  picsumApi(previousPage);
                }
              }}
            >
              ← Prev
            </button>

            <span className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">
              {activeApi === "pixabay"
                ? `Page ${pixabayPage}`
                : `page ${pageNumber + 1}`}
            </span>

            <button
              className="rounded-xl bg-green-600 px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-green-700 active:scale-95"
              onClick={() => {
                if (activeApi === "pixabay") {
                  const nextPage = pixabayPage + 1;
                  setactiveApi("pixabay");
                  setPixabayPage(nextPage);
                  pixabayApi(nextPage);
                } else if (activeApi === "picsum") {
                  const nextPage = pageNumber + 1;
                  setactiveApi("picsum");
                  setpageNumber(nextPage);
                  picsumApi(nextPage);
                }
              }}
            >
              Next →
            </button>
          </div>
        ) : activeApi === "anime" ? (
          <div className="mt-8 flex justify-center">
            <button
              className="rounded-xl bg-green-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700 hover:shadow-md active:scale-95"
              onClick={() => {
                setactiveApi("anime");
                animeApi();
              }}
            >
              Load More Anime →
            </button>
          </div>
        ) : null}
      </main>
    </div>
  );
};

export default App;
