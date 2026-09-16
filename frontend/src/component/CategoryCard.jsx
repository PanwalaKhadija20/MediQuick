import { ArrowRight } from "lucide-react";

function CategoryCard({
  icon,
  title,
  description
}) {
  return (
    <div className="category-page-card">

      <div className="category-page-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <button className="category-explore">
        Explore
        <ArrowRight size={16} />
      </button>

    </div>
  );
}

export default CategoryCard;