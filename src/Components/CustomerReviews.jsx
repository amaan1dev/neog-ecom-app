import "../Components/ComponentsStyleSheets/CustomerReviews.css"
export const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Akash Malhotra",
      review:
        "I recently purchased my Air Jordan 3 Retro sneakers from Inkicks, a fantastic sneaker website. These kicks are a game-changer! The iconic design, coupled with the exceptional quality, makes them worth every penny. Whether you're a collector or just love stylish sneakers, Inkicks is the place to go!",
    },
    {
      id: 2,
      name: "Alex",
      review:
        "I bought my Nike Air Force 1 shoes from Inkicks, and I couldn't be happier with my purchase! These sneakers are a fashion staple, and Inkicks made the buying process a breeze. The shoes are incredibly comfortable, and the classic design is timeless. Thanks, Inkicks, for delivering both style and excellent service!",
    },
    {
      id: 3,
      name: "Shivani Desai",
      review:
        "I recently scored a pair of Converse Chuck sneakers from Inkicks, and I'm thrilled with my purchase! Inkicks offers a wide range of colors and sizes, making it easy to find the perfect pair. The Chucks are comfortable, stylish, and versatile, and Inkicks made the entire shopping experience delightful. Highly recommend!",
    },
    {
      id: 4,
      name: "Rishabh",
      review:
        "Inkicks is my go-to sneaker website, and they didn't disappoint when I purchased my Vans Checkboard shoes. These kicks are a head-turner, and the checkered pattern is simply iconic. Inkicks provided exceptional customer service and a seamless shopping experience. If you're looking for trendy sneakers, Inkicks has got you covered!",
    },
  ];

  
  return (
    <div className="reviews-container">
    <h2>Customer Reviews</h2>
    <div className="carousel">
      {reviews.map((review) => (
        <div key={review.id} className="review-card">
          <p className="review-text">{review.review}</p>
          <p className="review-author">- {review.name}</p>
        </div>
      ))}
    </div>
  </div>
  );
};
