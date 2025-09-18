import { Filter } from "lucide-react";
import { Link } from "react-router-dom";

const colorMap = {
  blue: "border-blue-500",
  orange: "border-orange-500",
  red: "border-red-500",
};

export default function TopCardsSection({ cards, sortByDate, setSortByDate }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
      {/* Cards */}
      <div className="w-full md:w-[65%]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card, idx) => {
            const cardContent = (
              <div
                className={`bg-white shadow-sm rounded-lg p-4 border-l-4 ${
                  colorMap[card.color] || "border-gray-300"
                } hover:shadow-md transition`}
              >
                <h3 className="text-sm font-medium text-gray-600">
                  {card.title}
                </h3>
                <p className="text-2xl font-bold text-gray-900">
                  {card.qty}{" "}
                  <span className="text-sm font-normal text-black">Qty</span>
                </p>
              </div>
            );

            return card.link ? (
              <Link to={card.link} key={idx} className="block">
                {cardContent}
              </Link>
            ) : (
              <div key={idx}>{cardContent}</div>
            );
          })}
        </div>
      </div>

      {/* Sort Button */}
      <button
        onClick={() => setSortByDate((prev) => !prev)}
        className="mt-4 md:mt-0 flex items-center px-6 py-3 gap-2 text-sm font-medium text-cyan-800 bg-white rounded-md border border-cyan-800"
      >
        <Filter className="w-4 h-4" />{" "}
        {sortByDate ? "Sorted by Date" : "Sort By Date"}
      </button>
    </div>
  );
}