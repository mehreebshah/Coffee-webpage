import Image from "next/image";
import Profile1 from "@/public/Image.png";
import Reviews from "@/public/Reviews.png";
const ReviewsSection = () => {
  const reviews = [
    {
      name: "Alex Stanton",
      date: "21 July 2022",
      position: "CEO at Bukalapak",
      Image: "Profile1",
      review:
        "We are very happy with the service from the MORENT App. Morent has a low price . . .",
    },
    {
      name: "Skylar Dias",
      date: "20 July 2022",
      position: "CEO at Amazon",
      review:
        "We are greatly helped by the services of the MORENT Application. Morent has a low . . .",
    },
  ];

  return (
    <section className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 max-w[1016px] mx-auto">
      <div>
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Reviews</h2>
          <p className="text-sm text-white bg-blue-500 rounded-md p-2 ">13</p>
        </div>

        {/* Reviews */}
        <div className="space-y-6">
          {reviews.map((review, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {review.name}
              </h3>
              <Image src={Profile1} alt="Alex Stanton" />
              <Image src={Reviews} alt="Reviews"/>
              <p className="text-sm text-gray-500">{review.date}</p>
              <p className="text-sm text-gray-600">{review.position}</p>
              <p className="text-gray-700 mt-2">{review.review}</p>
            </div>
          ))}
        </div>

        {/* Show All Button */}
        <div className="text-center mt-6">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
            Show All
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
