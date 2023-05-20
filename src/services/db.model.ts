import { Product } from "../models/Product.model";

export const categories = [
  "hot",
  "mushrooms",
  "vegetables",
  "greens",
  "fruits",
  "boiled food",
  "drinks and snacks",
  "tofu",
  "peas & beans",
  "roots & yams",
  "leaves, herbs & spices",
  "mangoes",
  "eggplant",
  "chillies",
  "nuts and seeds",
  "papaya",
];

export type Data = {
  [key: string]: Product[];
};
