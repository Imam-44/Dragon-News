import React from 'react';
import { FaEye, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsCard = ({ news }) => {

  const {
    id,
    title,
    thumbnail_url,
    details,
    total_view,
    rating,
    author,
  } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString();
  return (
     <>
  <div className="card bg-base-100 shadow-md  rounded">
      {/* Author & Share */}
      <div className="flex justify-between items-center p-4 border-b bg-base-300">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">{author.name}</p>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex gap-2 text-gray-400 text-xl">
          <button>🔖</button>
          <button>🔗</button>
        </div>
      </div>
  <div className=''>
      {/* Title */}
      <div className="px-4 pt-4">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
      </div>

      {/* Image */}
      <figure className="p-4">
  <div className="rounded overflow-hidden">
    <img
      src={thumbnail_url}
      alt={title}
      className="w-full h-[400px] object-cover"
    />
  </div>
</figure>


      {/* Details */}
      <div className="px-4 py-3 text-sm text-gray-600">
        {details.slice(0, 200)}...
        <Link to={ `/news-details/${id}`} className="text-orange-500 font-semibold cursor-pointer">
          {" "}
          Read More
        </Link>
      </div>
      </div>
      {/* Footer - rating & views */}
      <div className="flex justify-between items-center px-4 py-3 border-t text-sm text-gray-500">
        <div className="flex items-center gap-1 text-orange-500">
        {
    Array.from({ length: Math.round(rating.number) }).map((_, index) => (
      <FaStar key={index} />
    ))
  }
          <span>{rating.number}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
     </>
  );
};

export default NewsCard;