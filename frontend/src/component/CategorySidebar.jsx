import {
  Grid2X2,
  Pill,
  Thermometer,
  Bandage,
  BriefcaseMedical,
  Baby,
  UserRound,
  Droplet,
  HeartPulse,
  ChevronRight
} from "lucide-react";

const sidebarCategories = [
  {
    name: "All Categories",
    icon: <Grid2X2 size={19} />,
    active: true
  },
  {
    name: "Tablets & Capsules",
    icon: <Pill size={19} />
  },
  {
    name: "Fever",
    icon: <Thermometer size={19} />
  },
  {
    name: "Pain Relief",
    icon: <Bandage size={19} />
  },
  {
    name: "First Aid",
    icon: <BriefcaseMedical size={19} />
  },
  {
    name: "Baby Care",
    icon: <Baby size={19} />
  },
  {
    name: "Personal Care",
    icon: <UserRound size={19} />
  },
  {
    name: "Diabetes Care",
    icon: <Droplet size={19} />
  },
  {
    name: "Health Supplements",
    icon: <HeartPulse size={19} />
  }
];

function CategorySidebar() {
  return (
    <aside className="category-sidebar">

      <h2>Shop by Category</h2>

      <div className="sidebar-list">

        {sidebarCategories.map((category, index) => (
          <div
            key={index}
            className={`sidebar-category ${
              category.active ? "sidebar-active" : ""
            }`}
          >

            <div className="sidebar-category-left">
              {category.icon}
              <span>{category.name}</span>
            </div>

            <ChevronRight size={17} />

          </div>
        ))}

      </div>

      {/* Discount Card */}

      <div className="category-discount">

        <h3>Flat 20% OFF</h3>

        <p>On First Order</p>

        <p>
          Use code: <strong>MEDIQ20</strong>
        </p>

        <button>Order Now</button>

        <div className="discount-products">
          💊 💊 💊
        </div>

      </div>

    </aside>
  );
}

export default CategorySidebar;