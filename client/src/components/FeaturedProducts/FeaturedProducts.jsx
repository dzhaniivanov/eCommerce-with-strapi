import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam tempora
          tenetur corrupti quis harum illum praesentium, alias necessitatibus
          quam totam perferendis accusantium atque laboriosam ipsum nemo
          facilis, consequatur vitae quod?
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong..."
          : loading
          ? "Loading"
          : data.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
