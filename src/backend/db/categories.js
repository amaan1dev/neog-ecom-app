import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Performance",
    description:
      "These sneakers are designed for specific sports activities, such as running, basketball, soccer, tennis, and more.",
  },
  {
    _id: uuid(),
    categoryName: "High-Top",
    description:
      "High-top sneakers feature a higher upper that extends above the ankle, providing additional support and a distinctive look.",
  },
  {
    _id: uuid(),
    categoryName: "Low-Top",
    description:
      "Low-top sneakers have a lower cut that sits below the ankle, offering a more casual and streamlined appearance.",
  },
  {
    _id: uuid(),
    categoryName: "Skateboards",
    description:
      "Skateboard sneakers provide skaters with improved durability, grip, and flexibility for a better skating experience.",
  },
];
