import {
  Pill,
  Thermometer,
  Bandage,
  BriefcaseMedical,
  Baby,
  UserRound,
  Droplet,
  HeartPulse,
  ShieldCheck,
  Award,
  Truck,
  RotateCcw,
  Headphones
} from "lucide-react";

import CategorySidebar from "../component/CategorySidebar";
import CategoryCard from "../component/CategoryCard";

import "../component/category.css";

const categories = [
  {
    title: "Tablets & Capsules",
    description:
      "Wide range of tablets and capsules for every need.",
    icon: <Pill size={45} />
  },
  {
    title: "Fever",
    description:
      "Medicines to reduce fever and related symptoms.",
    icon: <Thermometer size={45} />
  },
  {
    title: "Pain Relief",
    description:
      "Fast relief from pain, sprains, and inflammation.",
    icon: <Bandage size={45} />
  },
  {
    title: "First Aid",
    description:
      "Essential products for everyday first aid needs.",
    icon: <BriefcaseMedical size={45} />
  },
  {
    title: "Baby Care",
    description:
      "Safe and gentle care essentials for your baby.",
    icon: <Baby size={45} />
  },
  {
    title: "Personal Care",
    description:
      "Personal hygiene and grooming essentials for everyone.",
    icon: <UserRound size={45} />
  },
  {
    title: "Diabetes Care",
    description:
      "Manage and monitor diabetes with trusted products.",
    icon: <Droplet size={45} />
  },
  {
    title: "Health Supplements",
    description:
      "Vitamins, minerals and supplements for a healthy life.",
    icon: <HeartPulse size={45} />
  }
];

const trustItems = [
  {
    icon: <ShieldCheck size={28} />,
    title: "100% Genuine",
    subtitle: "Medicines"
  },
  {
    icon: <Award size={28} />,
    title: "Licensed",
    subtitle: "Pharmacies"
  },
  {
    icon: <Truck size={28} />,
    title: "Fast Delivery",
    subtitle: "in 30 mins"
  },
  {
    icon: <RotateCcw size={28} />,
    title: "Easy Returns",
    subtitle: "& Refunds"
  },
  {
    icon: <Headphones size={28} />,
    title: "24x7 Customer",
    subtitle: "Support"
  }
];

function Categories() {
  return (
    <div className="categories-page">

      {/* Breadcrumb */}

      <div className="category-breadcrumb">
        <span>Home</span>
        <span>›</span>
        <span>Categories</span>
      </div>

      {/* Page Heading */}

      <div className="category-heading">

        <h1>All Categories</h1>

        <p>
          Browse a wide range of medicines and healthcare products
          <br />
          across all categories.
        </p>

      </div>

      {/* Main Category Layout */}

      <div className="category-main-layout">

        {/* LEFT SIDEBAR */}

        <CategorySidebar />

        {/* RIGHT CONTENT */}

        <section className="category-right">

          {/* Hero Banner */}

          <div className="category-hero">

            <div className="category-hero-text">

              <h2>
                Your Health,
                <br />

                <span>Our Priority</span>
              </h2>

              <p>
                Genuine medicines, trusted pharmacies
                <br />
                and doorstep delivery in 30 minutes.
              </p>

            </div>

            <div className="category-hero-visual">

              <div className="medicine-bottles">
                💊
              </div>

              <div className="phone">
                📱
              </div>

              <div className="medical-bag">
                🧰
              </div>

            </div>

          </div>

          {/* Category Cards */}

          <div className="category-cards-grid">

            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                title={category.title}
                description={category.description}
                icon={category.icon}
              />
            ))}

          </div>

        </section>

      </div>

      {/* Trust Bar */}

      <section className="category-trust-bar">

        {trustItems.map((item, index) => (

          <div className="category-trust-item" key={index}>

            <div className="category-trust-icon">
              {item.icon}
            </div>

            <div>
              <strong>{item.title}</strong>
              <span>{item.subtitle}</span>
            </div>

          </div>

        ))}

      </section>

    </div>
  );
}

export default Categories;