import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Download, ArrowLeft, Search, Heart } from "lucide-react";

const ImagePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const imageUrl = location.state?.imageUrl;

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <a
        href="/"
        onClick={() => {
          e.preventDefault();
          navigate(-1);
        }}
        className="mb-6 rounded-xl bg-slate-800 px-5 py-2 text-white"
      >
        <ArrowLeft className="mr-2 inline-block h-4 w-4" />
      </a>
      <div className="flex justify-center">
        <img
          src={imageUrl}
          alt=""
          className="max-h-[80vh] max-w-full object-contain"
        />
      </div>
    </div>
  );
};

export default ImagePage;
