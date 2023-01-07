import Skeleton from "react-loading-skeleton";

const CardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, index) => (
      <div className="card-skeleton" key={index}>
        <div className="card-media">
          <Skeleton width="240px" height="130px" borderRadius="10px" />
        </div>
        <div className="card-title">
          <Skeleton count={2} style={{ marginBottom: "8px" }} />
        </div>
      </div>
    ));
};

export default CardSkeleton;
