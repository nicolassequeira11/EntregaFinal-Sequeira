const products = [
  {
    id: 1,
    name: "KOALA - 16CM",
    price: 39.9,
    category: "OnePiece",
    stock: 1,
    img: [
      "https://www.banpresto.es/wp-content/uploads/2024/02/bp88901_frente.jpg",
      "https://www.banpresto.es/wp-content/uploads/2024/02/bp88901_trasera.jpg"
    ],
    description:
      "Banpresto presenta la figura de Koala del popular manga y anime “One Piece The Shukko”. Esta figura está hecha en PVC mide unos 16 cm de alto e incluye una base soporte especial para exposición.",
    licencia: "One Piece",
    fabricante: "Banpresto (Bandai Spirits)",
    altura: "16 cm",
    colección: "The Shukko",
    tipo: "Figura pre-pintada de PVC y ABS en packaging cerrado",
    SKU: "BP88901P",
    video: "https://www.youtube.com/embed/Nxrcnw1FcUg?si=TizJ6jUQ4XjGP0LN",
  },
  {
    id: 2,
    name: "MONKEY D. LUFFY - 20CM",
    price: 89.9,
    category: "OnePiece",
    stock: 1,
    img: [
      "https://www.banpresto.es/wp-content/uploads/2024/02/bp88909_frente.jpg",
      "https://www.banpresto.es/wp-content/uploads/2024/02/bp88909_trasera.jpg"
    ],
    description:
      "Banpresto presenta la figura de Monkey D. Luffy del popular manga y anime “One Piece - King Of Artist - Wanokuni II (Manga Dimensions)”. Esta figura está hecha en PVC mide unos 20 cm de alto e incluye una base soporte especial para exposición.",
    licencia: "One Piece",
    fabricante: "Banpresto (Bandai Spirits)",
    altura: "20 cm",
    colección: "King Of Artist",
    tipo: "Figura pre-pintada de PVC y ABS en packaging cerrado",
    SKU: "BP88909P",
    video: "https://www.youtube.com/embed/-MvCNY0iRt4?si=ZZnB2a6npV0Qylno",
  },
  {
    id: 3,
    name: "TRAFALGAR LAW II - 23CM",
    price: 39.89,
    category: "OnePiece",
    stock: 1,
    img: [
      "https://www.banpresto.es/wp-content/uploads/2023/11/logo_89213_2682785-1.jpg",
      "https://www.banpresto.es/wp-content/uploads/2023/11/logo_89213_2682785-1.jpg"
    ],
    description:
      "Banpresto presenta la figura de Trafalgar Law II del popular manga y anime “One Piece - King Of Artist”. Esta figura está hecha en PVC mide unos 23 cm de alto e incluye una base soporte especial para exposición.",
    licencia: "One Piece",
    fabricante: "Banpresto (Bandai Spirits)",
    altura: "23 cm",
    colección: "King Of Artist",
    tipo: "Figura pre-pintada de PVC y ABS en packaging cerrado",
    SKU: "BP89213P",
    video: "",
  },
  {
    id: 4,
    name: "CHOPPER - 11CM",
    price: 32.9,
    category: "OnePiece",
    stock: 1,
    img: [
      "https://www.banpresto.es/wp-content/uploads/2024/01/logo_89374_2701930_1.jpg",
      "https://www.banpresto.es/wp-content/uploads/2024/01/logo_89374_2701930_3.jpg"
    ],
    description:
      "Banpresto presenta la figura de Chopper del popular manga y anime “One Piece - Sofvimates (Egghead Ver.)”. Esta figura está hecha en PVC mide unos 11 cm de alto e incluye una base soporte especial para exposición.",
    licencia: "One Piece",
    fabricante: "Banpresto (Bandai Spirits)",
    altura: "11 cm",
    colección: "Sofvimates",
    tipo: "Figura pre-pintada de PVC y ABS en packaging cerrado",
    SKU: "BP89374P",
    video: "",
  },
  {
    id: 5,
    name: "SABO - 17CM",
    price: 38.89,
    category: "OnePiece",
    stock: 1,
    img: [
      "https://www.banpresto.es/wp-content/uploads/2023/08/logo_88810_2650636.jpg",
      "https://www.banpresto.es/wp-content/uploads/2023/08/logo_88810_2650636_4.jpg"
    ],
    description:
      "Banpresto presenta la figura de Sabo del popular manga y anime “One Piece – The Shukko”. Esta figura está hecha en PVC mide unos 17 cm de alto e incluye una base soporte especial para exposición.",
    licencia: "One Piece",
    fabricante: "Banpresto (Bandai Spirits)",
    altura: "17 cm",
    colección: "The Shukko",
    tipo: "Figura pre-pintada de PVC y ABS en packaging cerrado",
    SKU: "BP88810P",
    video: "",
  },
  {
    id: 6,
    name: "MONKEY D. LUFFY - 16CM",
    price: 38.89,
    category: "OnePiece",
    stock: 1,
    img: [
      "https://www.banpresto.es/wp-content/uploads/2023/12/logo_89211_2694514.jpg",
      "https://www.banpresto.es/wp-content/uploads/2023/12/logo_89211_2694514.jpg"
    ],
    description:
      "Banpresto presenta la figura de Monkey D. Luffy del popular manga y anime “One Piece – Dxf The Grandline Series”. Esta figura está hecha en PVC mide unos 16 cm de alto e incluye una base soporte especial para exposición.",
    licencia: "One Piece",
    fabricante: "Banpresto (Bandai Spirits)",
    altura: "16 cm",
    colección: "Dxf The Grandline Series",
    tipo: "Figura pre-pintada de PVC y ABS en packaging cerrado",
    SKU: "BP89211P",
    video: "",
  },
  {
    id: 50,
    name: "TANJIRO KAMADO - 9CM",
    price: 34.9,
    category: "DemonSlayer",
    stock: 1,
    img: [
      "https://www.banpresto.es/wp-content/uploads/2023/12/logo_89195_2681417_1.jpg",
      "https://www.banpresto.es/wp-content/uploads/2023/12/logo_89195_2681417_1.jpg"
    ],
    description:
      "Banpresto presenta la figura de Tanjiro Kamado del popular manga y anime “Demon Slayer: Kimetsu No Yaiba - Combination Battle”. Esta figura está hecha en PVC mide unos 9 cm de alto e incluye una base soporte especial para exposición.",
    licencia: "Demon Slayer",
    fabricante: "Banpresto (Bandai Spirits)",
    altura: "9 cm",
    colección: "Combination Battle",
    tipo: "Figura pre-pintada de PVC y ABS en packaging cerrado",
    SKU: "BP89195P",
    video: "",
  },
  {
    id: 51,
    name: "KYOJURO RENGOKU - 17CM",
    price: 34.9,
    category: "DemonSlayer",
    stock: 1,
    img: [
      "https://www.banpresto.es/wp-content/uploads/2024/01/bp88583_frente.jpg",
      "https://www.banpresto.es/wp-content/uploads/2024/01/bp88583_trasera.jpg"
    ],
    description:
      "Banpresto presenta la figura de Kyojuro Rengoku del popular manga y anime “Demon Slayer: Kimetsu No Yaiba Vol.43”. Esta figura está hecha en PVC mide unos 17 cm de alto e incluye una base soporte especial para exposición.",
    licencia: "Demon Slayer",
    fabricante: "Banpresto (Bandai Spirits)",
    altura: "17 cm",
    colección: "Vol.43",
    tipo: "Figura pre-pintada de PVC y ABS en packaging cerrado",
    SKU: "BP88583P",
    video: "https://www.youtube.com/embed/eesPekB3tw8?si=2f-DP_p0t52DDcfj",
  },
  {
    id: 52,
    name: "NEZUKO KAMADO - 22CM",
    price: 32.9,
    category: "DemonSlayer",
    stock: 1,
    img: [
      "https://www.banpresto.es/wp-content/uploads/2023/08/logo_88892_2704717.jpg",
      "https://www.banpresto.es/wp-content/uploads/2023/08/logo_88892_2704717.jpg"
    ],
    description:
      "Banpresto presenta la figura de Nezuko Kamado del popular manga y anime “Demon Slayer: Kimetsu No Yaiba - Glitter&Glamours - Special Color Ver.”. Esta figura está hecha en PVC mide unos 22 cm de alto e incluye una base soporte especial para exposición.",
    licencia: "Demon Slayer",
    fabricante: "Banpresto (Bandai Spirits)",
    altura: "22 cm",
    colección: "Glitter&Glamours – Special Color Ver.",
    tipo: "Figura pre-pintada de PVC y ABS en packaging cerrado",
    SKU: "BP88892P",
    video: "",
  },
  {
    id: 53,
    name: "GIYU TOMIOKA - 17CM",
    price: 34.9,
    category: "DemonSlayer",
    stock: 1,
    img: [
      "https://www.banpresto.es/wp-content/uploads/2024/01/bp88675_frente.jpg",
      "https://www.banpresto.es/wp-content/uploads/2024/01/bp88675_trasera.jpg"
    ],
    description:
      "Banpresto presenta la figura de Giyu Tomioka del popular manga y anime “Demon Slayer: Kimetsu No Yaiba Vol.46”. Esta figura está hecha en PVC mide unos 17 cm de alto e incluye una base soporte especial para exposición.",
    licencia: "Demon Slayer",
    fabricante: "Banpresto (Bandai Spirits)",
    altura: "17 cm",
    colección: "Vol.46",
    tipo: "Figura pre-pintada de PVC y ABS en packaging cerrado",
    SKU: "BP88675P",
    video: "https://www.youtube.com/embed/yb92cY1XYts?si=YR8ieHm6PVOqeSoU",
  },
  {
    id: 54,
    name: "YUSHIRO - 15CM",
    price: 32.98,
    category: "DemonSlayer",
    stock: 1,
    img: [
      "https://www.banpresto.es/wp-content/uploads/2022/07/bp18458_frente-min.jpg",
      "https://www.banpresto.es/wp-content/uploads/2022/07/bp18458_trasera-min.jpg"
    ],
    description:
      "Banpresto nos presenta la potente figura de Yushiro de la colección de figuras de Demon Slayer: Kimetsu no Yaiba vol.21. Figura de 15 cm de altura cuya principal característica es la especial recreación de los detalles del traje de Yushiro y de su pose. Además, al ser una figura de la colección de figuras de Demon Slayer: Kimetsu no Yaiba Vol.21, la hace muy coleccionable e ideal para ponerla al lado del resto de personajes que integran esta colección.",
    licencia: "Demon Slayer",
    fabricante: "Banpresto (Bandai Spirits)",
    altura: "15 cm",
    colección: "Demon Slayer: Kimetsu no Yaiba vol.21",
    tipo: "Figura pre-pintada de PVC y ABS en packaging cerrado",
    SKU: "BP18458",
    video: "",
  },
  {
    id: 55,
    name: "MITSURI KANROJI - 16CM",
    price: 34.9,
    category: "DemonSlayer",
    stock: 1,
    img: [
      "https://www.banpresto.es/wp-content/uploads/2023/08/logo_88890_2688003.jpg",
      "https://www.banpresto.es/wp-content/uploads/2023/08/logo_88890_2688003.jpg"
    ],
    description:
      "Banpresto presenta la figura de Mitsuri Kanroji del popular manga y anime “Demon Slayer: Kimetsu No Yaiba Vol.49”. Esta figura está hecha en PVC mide unos 16 cm de alto e incluye una base soporte especial para exposición.",
    licencia: "Demon Slayer",
    fabricante: "Banpresto (Bandai Spirits)",
    altura: "16 cm",
    colección: "Vol.49",
    tipo: "Figura pre-pintada de PVC y ABS en packaging cerrado",
    SKU: "BP88890P",
    video: "",
  }
];

export default products;

export const getProducts = () => {
  return new Promise((resolve) => {
    resolve(products);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    resolve(products.filter((prod) => prod.category === categoryId));
  });
};

export const getProductById = (itemId) => {
  return new Promise((resolve) => {
    resolve(products.find((prod) => prod.id === itemId));
  });
};
