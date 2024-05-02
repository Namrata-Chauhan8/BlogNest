
const categoryImages = {
    Music: [
      "https://img.freepik.com/free-photo/volumetric-musical-background-with-treble-clef-notes-generative-ai_169016-29576.jpg?t=st=1714632114~exp=1714635714~hmac=efa09e0dd9df77d36e5aaaa5abb2c4d10b1b71052f280f66f5c6fa7ca91af243&w=1380",
      "https://img.freepik.com/free-vector/silhouette-excited-audience-colourful-music-notes-background_1048-14332.jpg?t=st=1714632141~exp=1714635741~hmac=90ce3c8ae0d8e782dd59d0b782c3a55ceff85c6b18c716d796f98e8a4034d490&w=826",
      "https://img.freepik.com/free-photo/man-plays-acoustic-guitar-closeup_169016-20618.jpg?t=st=1714632174~exp=1714635774~hmac=091609bc908de80f24cda3c8ab59a51ec85216d381d7db1823aa1b4d60353947&w=740",
      "https://www.shutterstock.com/shutterstock/photos/681809980/display_1500/stock-photo-a-group-of-musical-instruments-including-a-guitar-drum-keyboard-tambourine-681809980.jpg",
      "https://www.shutterstock.com/shutterstock/photos/2336762037/display_1500/stock-photo-frame-of-different-musical-instruments-on-wooden-background-2336762037.jpg",
      "https://www.shutterstock.com/shutterstock/photos/2335718931/display_1500/stock-photo-music-lesson-school-education-concept-wind-instruments-on-green-chalkboard-2335718931.jpg",
    ],
    Movies: [
  "https://img.freepik.com/free-photo/movie-background-collage_23-2149876032.jpg?t=st=1714632358~exp=1714635958~hmac=2b9b52b48979f0cd6d9d8073d39e1f7da4502cfd9e1c858b446370188ce70d95&w=740",
  "https://img.freepik.com/free-psd/watching-movie-amazed-with-popcorn-3d-illustration_1419-2556.jpg?t=st=1714632376~exp=1714635976~hmac=d07dfb91c787b722fb4a60c8391c37b89c0e0d333f072351a2b843f637c329a1&w=826",
  "https://img.freepik.com/free-photo/assortment-cinema-supplies_23-2147803976.jpg?t=st=1714632392~exp=1714635992~hmac=c7953816aefec864a94126afe426f1c51da3215357621af13a655aa2ebaf2ced&w=1380",
  "https://img.freepik.com/free-vector/film-background-with-hand-drawn-camera_23-2147595207.jpg?t=st=1714632408~exp=1714636008~hmac=5da860c4558646e6b8aeeb4492ad6c1c061bcacf81c3daed00f7dc62bbfa88c5&w=826",
  "https://img.freepik.com/free-photo/filmstrip-tapes-popcorn_23-2147807349.jpg?t=st=1714632427~exp=1714636027~hmac=f4df502f751980b1920a4d46fd09e210526b2247a122737771bca80646c8ced9&w=1380",
  "https://img.freepik.com/free-photo/3d-cinema-seating-with-popcorn_23-2151016113.jpg?t=st=1714632459~exp=1714636059~hmac=a69fbc5fd8cb63c2fef6a16eb80fa182ef7dcdd918cb761af25ba6490d64ef5f&w=1380"
    ],
    Technology: [
  "https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?t=st=1714540149~exp=1714543749~hmac=4601d605059bbbfdd2d694f4e0585a5a5437c3f1feb1c962061ca73b53558be0&w=1380",
  "https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg?t=st=1714540653~exp=1714544253~hmac=73ad729c49e785234c402e1ec5c606864f384548ca6aab5355041ffe7cf72e01&w=1380",
  "https://img.freepik.com/free-photo/cloud-computing-banner-background-smart-city_53876-108504.jpg?t=st=1714542783~exp=1714546383~hmac=f8241a2c04ce1d0a18150570cc9c628a1b0684f73de657508ebc62ab196ea81e&w=1380",
  "https://img.freepik.com/free-photo/side-view-gamer-sitting-chair_23-2149829177.jpg?t=st=1714542949~exp=1714546549~hmac=0f930b1dc0a9dc030f0128b2068e968932193ac86a78438a3f62746e6df04193&w=1380",
  "https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124669.jpg?t=st=1714632525~exp=1714636125~hmac=ef12718170a99a0df6d3f854e02f135ae5e6727332f6050fe1a143b3a8be6117&w=1380",
  "https://img.freepik.com/free-photo/beautiful-cryptocurrwncy-concept_23-2149250224.jpg?t=st=1714632574~exp=1714636174~hmac=f07953d233285da0ce1f2716be0b8c85694ce953b2a266162700dc2028d585b4&w=1380"
    ],
    Sports: [
  "https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?t=st=1714542363~exp=1714545963~hmac=1a778e3d0e328f0365ed22a56276d39b8226466d3278e41fa42e6865bab3fca7&w=1380",
  "https://img.freepik.com/free-photo/side-view-gamer-sitting-chair_23-2149829177.jpg?t=st=1714542949~exp=1714546549~hmac=0f930b1dc0a9dc030f0128b2068e968932193ac86a78438a3f62746e6df04193&w=1380",
  "https://img.freepik.com/free-vector/collection-balls-poster-sports-balls-hand-drawn-sketch-vector-background_460848-14478.jpg?t=st=1714632701~exp=1714636301~hmac=7eb4b102a8b9cb3a65219893387ca2635f24ea01121d31cc612e97dbedbef052&w=1060",
  "https://img.freepik.com/free-vector/green-cricket-sports-background-with-illustration-players-golden-trophy-cup_1302-5494.jpg?w=1060&t=st=1714632942~exp=1714633542~hmac=87d944bbe793d4ffb8ff5c14581eaad4c54847fbc54a6f13027f6211c784dc31",
  "https://img.freepik.com/free-vector/sport-text-banner-poster-design_1308-133174.jpg?t=st=1714632979~exp=1714636579~hmac=11a97fee8d9f60c7d3fd66564e94f221264d2a954a1eb437a326670c8827a5d7&w=1380",
  "https://img.freepik.com/free-photo/different-sport-balls_1048-2681.jpg?t=st=1714633013~exp=1714636613~hmac=858c43dc2d0a007d173d806dbe8a9b59a26b2c7601ae7ea58a999c9ccd97a4c0&w=826"
    ],
    All: [
      "https://cdn.pixabay.com/photo/2016/11/06/02/51/all-1802150_640.jpg"
    ],
    Fashion: [
      "https://as2.ftcdn.net/v2/jpg/02/83/68/41/1000_F_283684148_VUiF5Ei9Uca6ResgLzeORpIu6vF1xsHJ.jpg",
      "https://as1.ftcdn.net/v2/jpg/00/73/03/92/1000_F_73039209_WeQljCiN1OY5cZN7rJ9Z8PxFM2SQvhYH.jpg",
      "https://img.freepik.com/free-vector/fashion-shop-concept-illustration_114360-12306.jpg?t=st=1714633154~exp=1714636754~hmac=78ee9932b8778dd6612a4cd20963f989bb453b119c524a2be1ac517166036c12&w=826",
      "https://img.freepik.com/free-photo/clothing-rack-with-hawaiian-shirts-with-floral-print-hangers-hat_23-2149366082.jpg?t=st=1714633172~exp=1714636772~hmac=3122f655e9712bc2a0144241689fce74161032ee181e0ce65409f62f83833763&w=740",
      "https://img.freepik.com/free-psd/fashion-clothes-banner-template_23-2148578502.jpg?t=st=1714633230~exp=1714636830~hmac=7a7864c32900ef40dd5a7564ebaa8630847e696ea1260e7cf032db3a0cd6993b&w=1380",
    ],
    
};
export default categoryImages