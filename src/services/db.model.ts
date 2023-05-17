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

export type Categories =
  | "hot"
  | "mushrooms"
  | "vegetables"
  | "greens"
  | "fruits"
  | "boiled food"
  | "drinks and snacks"
  | "tofu"
  | "peas & beans"
  | "roots & yams"
  | "leaves, herbs & spices"
  | "mangoes"
  | "eggplant"
  | "chillies"
  | "nuts and seeds"
  | "papaya";

export type Product = {
  name: string;
  quantityType: string;
  id: string | number;
  category: string;
  price: number;
  quantity: number;
  imageURL: string;
};

export type Data = {
  [key: string]: Product[];
};
