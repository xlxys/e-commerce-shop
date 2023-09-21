import "./Categories.css";
import CategorieCard from "./Card";
import Card from "./Card";

const categoriesList = [
  {
    title: "Latest Collection",
    image: "/images/categories/news.png",
  },
  {
    title: "Men Collection",
    image: "/images/categories/men.png",
  },
  {
    title: "Women Collection",
    image: "/images/categories/women.png",
  },
  {
    title: "Shoes Collection",
    image: "/images/categories/shoes.png",
  },
];

export default function Categories() {
  return (
    <div className="categories">
      <div className="collenction"> <Card image={categoriesList[0].image} title={categoriesList[0].title} /> </div>
      <div className="men"> <Card image={categoriesList[1].image} title={categoriesList[1].title}/> </div>
      <div className="women"> <Card image={categoriesList[2].image} title={categoriesList[2].title}/> </div>
      <div className="shoes"> <Card image={categoriesList[3].image} title={categoriesList[3].title}/> </div>
    </div>

  );
}

