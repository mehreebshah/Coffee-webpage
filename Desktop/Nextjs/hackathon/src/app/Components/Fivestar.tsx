import React from 'react'

const Fivestar = ({ rating }: { rating: number }) => {
  return (
   <div className="flex items-center w-[76px] h-[12px] gap-[4px]">
    {/* Render 5 stars dynamically based on the rating */}
    {[...Array(5)].map((_, index) => (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        className={`h-3 w-3 ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.455a1 1 0 00-.364 1.118l1.287 3.965c.3.92-.755 1.688-1.54 1.118L10 13.011l-3.369 2.454c-.784.57-1.838-.197-1.539-1.118l1.286-3.965a1 1 0 00-.364-1.118L2.645 9.393c-.784-.57-.38-1.81.588-1.81h4.162a1 1 0 00.951-.69l1.286-3.966z" />
      </svg>
    ))}
  </div>
  )
}

export default Fivestar
