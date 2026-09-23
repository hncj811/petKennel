export const initialData = [
  {
    id: 1,
    name: 'Reginald "Reggie" Pickles',
    status: "Hungry",
    image: "/images/reggie-original-hungry.jpg",

    // Professor told me to use arrays so the pictures can cycle.
    // The first one is a saved copy of my original Reggie picture.
    images: [
      "/images/reggie-original-hungry.jpg",
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Rusty_The_Smiling_Guinea_Pig_(235589647).jpeg"
    ],
    statuses: ["Hungry", "Happy"],
    currentIndex: 0
  },
  {
    id: 2,
    name: 'Penelope "Penny" Montgomery',
    status: "Hungry",
    image: "/images/penny-original-hungry.jpg",

    // Same idea for Penny. I kept her original pictures.
    images: [
      "/images/penny-original-hungry.jpg",
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Pet_rabbit_(2).JPG"
    ],
    statuses: ["Hungry", "Happy"],
    currentIndex: 0
  }
];