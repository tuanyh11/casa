export const generateStart = (rating = 0, className) => {
  const filledStars = Math.round(rating);
  const emptyStars = 5 - filledStars;
  const stars = [];

  for (let i = 0; i < filledStars; i++) {
    stars.push(
      <i
        key={i}
        className={`fa-light fa-star text-main text-xs font-medium ${
          className || ""
        }`}
      ></i>
    );
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <i
        key={filledStars + i}
        className={`fa-light fa-star text-[#ccc] text-xs ${className || ""}`}
      ></i>
    );
  }

  return stars;
};