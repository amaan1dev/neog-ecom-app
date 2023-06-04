import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/products/1-74_4a4310da-7b21-4768-9947-31d222d6317a.jpg?v=1675978189&width=493",
    _id: uuid(),
    title: "AIR MAX 90 ",
    seller: "Nike",
    price: "₹ 10,795.00",
    categoryName: "Performance",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/products/1-105_8dd3fee3-8300-40b4-8a35-6922a4e2f8d3.jpg?v=1675969206&width=493",
    _id: uuid(),
    title: "VANS OLD SKOOL",
    seller: "Vans",
    price: "₹ 5,999.00",
    categoryName: "Low-Top",
  },
  {
    image:
      "https://www.converse.in/media/catalog/product/m/9/m9621c_01_1_1.jpg",
    _id: uuid(),
    title: "CONVERSE CHUCK HIGH TOP",
    seller: "Converse",
    price: "₹ 4,999.00",
    categoryName: "High-Top",
  },
  {
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d173da2705f14d4a9daaade400c5be0f_9366/Ultraboost_DNA_2.0_Shoes_Black_GV9381_01_standard.jpg",
    _id: uuid(),
    title: "ADIDAS ULTRABOOST DNA",
    seller: "Adidas",
    price: "₹ 14,999.00",
    categoryName: "Performance",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/products/DC9554-201-1.jpg?v=1675964181&width=493",
    _id: uuid(),
    title: "ACG AIR MOWABB TRAILS",
    seller: "Nike",
    price: "₹ 6,999.00",
    categoryName: "Skateboards",
  },

  {
    image: "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_6de175b4-c9fe-41d5-b231-5e1ef267839c.jpg?v=1685617844&width=493",
    _id: uuid(),
    title: "AIR JORDAN 3 RETRO",
    seller: "Nike",
    price: "₹ 13,499.00",
    categoryName: "High-Top",
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0659/0722/8923/products/1-169.jpg?v=1675969206&width=493",
    _id: uuid(),
    title: "OLD SKOOL",
    seller: "Vans",
    price: "₹ 5,499.00",
    categoryName: "High-Top",
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0659/0722/8923/products/1_7c72d0e3-144a-4302-bc2d-2e2f16756f6c.jpg?v=1679642125&width=493",
    _id: uuid(),
    title: "SUEDE 2 STAPLE",
    seller: "Puma",
    price: "₹ 3,999.00",
    categoryName: "Low-Top",
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0659/0722/8923/products/1_fa359ade-7ef6-4760-980c-ddeb8175eb02.jpg?v=1680269920&width=493",
    _id: uuid(),
    title: "CLUB C REVENGE 'NAVY'",
    seller: "Reebok",
    price: "₹ 4,599.00",
    categoryName: "Low-Top",
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_e8f22310-522f-4081-8c18-c36982fc48eb.jpg?v=1685538808&width=493",
    _id: uuid(),
    title: "STAN SMITH LUX 'WHITE'",
    seller: "Adidas",
    price: "₹ 6,499.00",
    categoryName: "Low-Top",
  },
  // Add more products below
  {
    image: "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_5788f982-ee96-4428-9737-61e3bb5ebb85.jpg?v=1685350766&width=493",
    _id: uuid(),
    title: "NIKE AIR FORCE 1",
    seller: "Nike",
    price: "₹ 8,999.00",
    categoryName: "High-Top",
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0659/0722/8923/products/1_403fe654-20b1-471a-afae-d8441db2298f.jpg?v=1679311945&width=493",
    _id: uuid(),
    title: "CHUCK 70 CANVAS",
    seller: "Converse",
    price: "₹ 4,299.00",
    categoryName: "Low-Top",
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0659/0722/8923/products/1-19-1.jpg?v=1675975710&width=493",
    _id: uuid(),
    title: "POKÉMON RS-X PIKACHU",
    seller: "Puma",
    price: "₹ 7,199.00",
    categoryName: "Performance",
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0659/0722/8923/products/1-68_50ee3a5b-8559-493e-a56f-c5248554ba59.jpg?v=1675978061&width=493",
    _id: uuid(),
    title: "HU NMD ANIMAL PRINT",
    seller: "Adidas",
    price: "₹ 9,999.00",
    categoryName: "Performance",
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_c55419eb-d729-40e3-8ef2-a773a4c7af2d.jpg?v=1683120203&width=493",
    _id: uuid(),
    title: "BLAZER LOW '77 VINTAGE",
    seller: "Nike",
    price: "₹ 7,999.00",
    categoryName: "Skateboards",
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0659/0722/8923/products/1-152_00dabb71-03ed-421c-bc14-7ddf7c1ab5a6.jpg?v=1677044396&width=493",
    _id: uuid(),
    title: "CHECKERBOARD SLIP-ON",
    seller: "Vans",
    price: "₹ 5,999.00",
    categoryName: "Skateboards",
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_8b2a286f-964a-440c-8a34-71b4107fde20.jpg?v=1683742047&width=493",
    _id: uuid(),
    title: "RETRO COURT SK8-HI",
    seller: "Vans",
    price: "₹ 6,499.00",
    categoryName: "Skateboards",
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_a39eea6a-e9ae-4831-a1f4-37483707f243.jpg?v=1684224850&width=493",
    _id: uuid(),
    title: "RUN STARMOTION",
    seller: "Converse",
    price: "₹ 5,299.00",
    categoryName: "Skateboards",
  },

  {
    image: "https://cdn.shopify.com/s/files/1/0659/0722/8923/products/1-73_0934655d-a3f3-4813-885d-3a8152ce6687.jpg?v=1677045745&width=493",
    _id: uuid(),
    title: "CONVERSE CHUCK 70 OX",
    seller: "Converse",
    price: "₹ 4,799.00",
    categoryName: "Converse",
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0659/0722/8923/products/36915523-3.jpg?v=1675956835&width=493",
    _id: uuid(),
    title: "NRGY PEACH",
    seller: "Puma",
    price: "₹ 4,199.00",
    categoryName: "Converse",
  }
];
