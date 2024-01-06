// import house images
import House1 from "./assets/img/houses/house1.png";
import House2 from "./assets/img/houses/house2.png";
import House3 from "./assets/img/houses/house3.png";
import House4 from "./assets/img/houses/house4.png";
import House5 from "./assets/img/houses/house5.png";
import House6 from "./assets/img/houses/house6.png";
import House7 from "./assets/img/houses/house7.png";
import House8 from "./assets/img/houses/house8.png";
import House9 from "./assets/img/houses/house9.png";
import House10 from "./assets/img/houses/house10.png";
import House11 from "./assets/img/houses/house11.png";
import House12 from "./assets/img/houses/house12.png";
// import house large images
import House1Lg from "./assets/img/houses/house1lg.png";
import House2Lg from "./assets/img/houses/house2lg.png";
import House3Lg from "./assets/img/houses/house3lg.png";
import House4Lg from "./assets/img/houses/house4lg.png";
import House5Lg from "./assets/img/houses/house5lg.png";
import House6Lg from "./assets/img/houses/house6lg.png";
import House7Lg from "./assets/img/houses/house7lg.png";
import House8Lg from "./assets/img/houses/house8lg.png";
import House9Lg from "./assets/img/houses/house9lg.png";
import House10Lg from "./assets/img/houses/house10lg.png";
import House11Lg from "./assets/img/houses/house11lg.png";
import House12Lg from "./assets/img/houses/house12lg.png";

// import apartments images
import Apartment1 from "./assets/img/apartments/a1.png";
import Apartment2 from "./assets/img/apartments/a2.png";
import Apartment3 from "./assets/img/apartments/a3.png";
import Apartment4 from "./assets/img/apartments/a4.png";
import Apartment5 from "./assets/img/apartments/a5.png";
import Apartment6 from "./assets/img/apartments/a6.png";
// import apartments large images
import Apartment1Lg from "./assets/img/apartments/a1lg.png";
import Apartment2Lg from "./assets/img/apartments/a2lg.png";
import Apartment3Lg from "./assets/img/apartments/a3lg.png";
import Apartment4Lg from "./assets/img/apartments/a4lg.png";
import Apartment5Lg from "./assets/img/apartments/a5lg.png";
import Apartment6Lg from "./assets/img/apartments/a6lg.png";

// import agents images
import Agent1 from "./assets/img/agents/agent1.png";
import Agent2 from "./assets/img/agents/agent2.png";
import Agent3 from "./assets/img/agents/agent3.png";
import Agent4 from "./assets/img/agents/agent4.png";
import Agent5 from "./assets/img/agents/agent5.png";
import Agent6 from "./assets/img/agents/agent6.png";
import Agent7 from "./assets/img/agents/agent7.png";
import Agent8 from "./assets/img/agents/agent8.png";
import Agent9 from "./assets/img/agents/agent9.png";
import Agent10 from "./assets/img/agents/agent10.png";
import Agent11 from "./assets/img/agents/agent11.png";
import Agent12 from "./assets/img/agents/agent12.png";

export const housesData = [
  {
    id: 1,
    type: "House",
    name: "Argyle St. Lawndale",
    description:
      "A spacious living room with an elegant design, an ideal place for family gatherings and evenings in a cozy atmosphere. Modern kitchen with high quality appliances and equipment, an ideal place for gastronomic experiments. A well-kept garden and a spacious yard create an atmosphere of peace and tranquility.The surrounding area has stunning views and plenty of nature to start every day with beautiful scenery and fresh air.",
    image: House1,
    imageLg: House1Lg,
    country: "United States",
    address: "7240C Argyle St. Lawndale, CA 90260",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2016",
    price: "110000",
    agent: {
      image: Agent1,
      name: "Patricia Tullert",
      phone: "0123 456 78910",
    },
  },
  {
    id: 2,
    type: "House",
    name: "Talbot St. Bridgewater",
    description:
      "6 bathrooms: Each bedroom is equipped with its own bathroom for the convenience and comfort of residents and guests. This allows you to maximize your personal space and provides convenience when there are a large number of guests. 6 cozy bedrooms: Spacious and comfortable bedrooms are designed for rest and relaxation. Each offers comfortable accommodation with ample space and amenities for your enjoyment.",
    image: House2,
    imageLg: House2Lg,
    country: "Canada",
    address: "798 Talbot St. Bridgewater, NJ 08807",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2016",
    price: "140000",
    agent: {
      image: Agent2,
      name: "Daryl Hawker",
      phone: "0123 456 78910",
    },
  },
  {
    id: 3,
    type: "House",
    name: "Glen Creek St. Alexandria",
    description:
      "Individual Wardrobes and Storage: Each bedroom is equipped with its own closets, providing ample storage space for personal items. Large fenced yard with patio and barbecue area: Ideal for organizing family events and outdoor gatherings with friends. Spacious parking for several cars: Convenience and safety of your own vehicle with the ability to park several cars on the premises.",
    image: House3,
    imageLg: House3Lg,
    country: "United States",
    address: "2 Glen Creek St. Alexandria, VA 22304",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2016",
    price: "170000",
    agent: {
      image: Agent3,
      name: "Amado Smith",
      phone: "0123 456 78910",
    },
  },
  {
    id: 4,
    type: "House",
    name: "84 Woodland St. Cocoa",
    description:
      "Spacious Living Room with High Ceilings: An elegant space for entertaining family and guests, with plenty of natural light and stunning views of the surrounding landscape. Luxurious master bedroom with private balcony: A separate cozy corner for the owners of the house with beautiful views of nature and space for relaxation.",
    image: House4,
    imageLg: House4Lg,
    country: "Canada",
    address: "84 Woodland St. Cocoa, FL 32927",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2016",
    price: "200000",
    agent: {
      image: Agent4,
      name: "Kaitlyn Gonzalez",
      phone: "0123 456 78910",
    },
  },
  {
    id: 5,
    type: "House",
    name: "Westport Dr. Warminster",
    description:
      "Modern security system: Ensuring the safety and peace of mind of your family with the help of modern video surveillance systems, motion sensors and alarms. Finnish sauna and jacuzzi: An exclusive opportunity to enjoy relaxing treatments in the Finnish sauna or revitalizing baths in the jacuzzi. Work or Creative Studio: A separate space for creative or creative work, ideal for those who value privacy when performing tasks or creative pursuits.",
    image: House5,
    imageLg: House5Lg,
    country: "United States",
    address: "28 Westport Dr. Warminster, PA 18974",
    bedrooms: "5",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2015",
    price: "210000",
    agent: {
      image: Agent5,
      name: "Grover Robinson",
      phone: "0123 456 78910",
    },
  },
  {
    id: 6,
    type: "House",
    name: "Demel Street Rotte",
    description:
      "Fitness Facilities: Fitness room, swimming pool or other sports facilities to maintain a healthy lifestyle right in the comfort of your own home. Integrated Smart Home System: Control lighting, temperature and other devices with an integrated smart home system for maximum comfort and efficiency.",
    image: House6,
    imageLg: House6Lg,
    country: "Canada",
    address: "32 Demel Street Rotte, MT 59701",
    bedrooms: "6",
    bathrooms: "3",
    surface: "6200 sq ft",
    year: "2014",
    price: "220000",
    agent: {
      image: Agent6,
      name: "Karen Sorensen",
      phone: "0123 456 78910",
    },
  },
  {
    id: 7,
    type: "Apartament",
    name: "Pawnee Street Butte",
    description:
      "Efficient and functional room layout, ensuring maximum use of space. Spacious open plan kitchen or living room for convenience and comfort. Parking space renting or purchasing a parking space in a parking lot.",
    image: Apartment1,
    imageLg: Apartment1Lg,
    country: "Canada",
    address: "32 Pawnee Street Butte, MT 59701",
    bedrooms: "2",
    bathrooms: "1",
    surface: "1200 sq ft",
    year: "2012",
    price: "20000",
    agent: {
      image: Agent7,
      name: "Jawhar Shamil Naser",
      phone: "0123 456 78910",
    },
  },
  {
    id: 8,
    type: "Apartament",
    name: "James Dr. Vanes",
    description:
      "1 bathroom for the convenience and comfort of residents and guests. 3 cozy bedrooms: Spacious and comfortable bedrooms are designed for rest and relaxation. Each room offers comfort with ample space and amenities for your enjoyment.",
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: "United States",
    address: "28 James Dr. Vanes, PA 18974",
    bedrooms: "3",
    bathrooms: "1",
    surface: "1000 sq ft",
    year: "2011",
    price: "30000",
    agent: {
      image: Agent8,
      name: "Juana Douglass",
      phone: "0123 456 78910",
    },
  },
  {
    id: 9,
    type: "Apartament",
    name: "Woorty Sypty",
    description:
      "A spacious living room with an elegant design, an ideal place for family gatherings and evenings in a cozy atmosphere. Modern kitchen with high quality appliances and equipment, an ideal place for gastronomic experiments. A well-kept garden and a spacious yard create an atmosphere of peace and tranquility.The surrounding area has stunning views and plenty of nature to start every day with beautiful scenery and fresh air.",
    image: Apartment3,
    imageLg: Apartment3Lg,
    country: "United States",
    address: "84 Woorty Sypty, FL 12376",
    bedrooms: "2",
    bathrooms: "1",
    surface: "1100 sq ft",
    year: "2011",
    price: "40000",
    agent: {
      image: Agent9,
      name: "Jerry Schenck",
      phone: "0123 456 78910",
    },
  },
  {
    id: 10,
    type: "House",
    name: "Argyle St. Rofor",
    description:
      "Proximity to public transportation, schools, shopping, parks or other amenities. Availability of new household appliances and furniture. Availability of air conditioning and central heating.",
    image: House7,
    imageLg: House7Lg,
    country: "Canada",
    address: "7240C Argyle St. Rofor, CA 160",
    bedrooms: "5",
    bathrooms: "3",
    surface: "3200 sq ft",
    year: "2015",
    price: "117000",
    agent: {
      image: Agent10,
      name: "Vera Levesque",
      phone: "0123 456 78910",
    },
  },
  {
    id: 11,
    type: "House",
    name: "Talbot St. BridgeFlat",
    description:
      "Availability of a pantry and dressing room for additional storag. Possibility of reorganizing or combining rooms to adapt to different needs. Nearby shopping center",
    image: House8,
    imageLg: House8Lg,
    country: "Canada",
    address: "798 Talbot St. BridgeFlat, NJ 34521",
    bedrooms: "7",
    bathrooms: "2",
    surface: "2200 sq ft",
    year: "2019",
    price: "145000",
    agent: {
      image: Agent11,
      name: "Sofia Gomes",
      phone: "0123 456 78910",
    },
  },
  {
    id: 12,
    type: "House",
    name: "Glen Ghost St. Venera, VA 32456",
    description:
      "Location in a quiet area and close to parks and green areas. Availability of a concierge service and the ability to order services from a management company (cleaning, repair work, etc.). Non-standard layout or design that creates a unique and functional interior.",
    image: House9,
    imageLg: House9Lg,
    country: "United States",
    address: "2 Glen Ghost St. Venera, VA 32456",
    bedrooms: "4",
    bathrooms: "4",
    surface: "4600 sq ft",
    year: "2015",
    price: "139000",
    agent: {
      image: Agent12,
      name: "Raymond Hood",
      phone: "0123 456 78910",
    },
  },
  {
    id: 13,
    type: "House",
    name: "Wolaend St. Corea",
    description:
      "Proximity to public transportation, schools, shopping, parks or other amenities. Availability of new household appliances and furniture. Availability of air conditioning and central heating.",
    image: House10,
    imageLg: House10Lg,
    country: "Canada",
    address: "84 Wolaend St. Corea, FL 17",
    bedrooms: "5",
    bathrooms: "2",
    surface: "5200 sq ft",
    year: "2014",
    price: "180000",
    agent: {
      image: Agent1,
      name: "Patricia Tullert",
      phone: "0123 456 78910",
    },
  },
  {
    id: 14,
    type: "House",
    name: "Robert Dr. Rhrew",
    description:
      "Own access to the roof or terrace with the possibility of equipping a summer recreation area or barbecue. Possibility of equipping an office or work/creativity area for professionals or those who work from home in one of the rooms with panoramic windows. Parking near the house",
    image: House11,
    imageLg: House11Lg,
    country: "United States",
    address: "28 Robert Dr. Rhrew, PA 18974",
    bedrooms: "5",
    bathrooms: "2",
    surface: "3200 sq ft",
    year: "2011",
    price: "213000",
    agent: {
      image: Agent2,
      name: "Daryl Hawker",
      phone: "0123 456 78910",
    },
  },
  {
    id: 15,
    type: "House",
    name: "Lon Street Polabo",
    description:
      "Possibility of rational planning of premises to create cozy and comfortable areas for each family member. The presence of three bathrooms for the convenience and comfort of residents. Separate dressing room or pantry for additional storage.",
    image: House12,
    imageLg: House12Lg,
    country: "Canada",
    address: "32 Lon Street Polabo, MT 59701",
    bedrooms: "4",
    bathrooms: "3",
    surface: "5200 sq ft",
    year: "2013",
    price: "221000",
    agent: {
      image: Agent3,
      name: "Amado Smith",
      phone: "0123 456 78910",
    },
  },
  {
    id: 16,
    type: "Apartament",
    name: "Paserte Street Buwer",
    description:
      "Availability of a pantry and dressing room for additional storag. Possibility of reorganizing or combining rooms to adapt to different needs. Nearby shopping center",
    image: Apartment4,
    imageLg: Apartment4Lg,
    country: "Canada",
    address: "32 Paserte Street Buwer, MT 59221",
    bedrooms: "2",
    bathrooms: "1",
    surface: "1300 sq ft",
    year: "2011",
    price: "21000",
    agent: {
      image: Agent4,
      name: "Kaitlyn Gonzalez",
      phone: "0123 456 78910",
    },
  },
  {
    id: 17,
    type: "Apartament",
    name: "Roner Dr. Rimster",
    description:
      "Location in a quiet area and close to parks and green areas. Availability of a concierge service and the ability to order services from a management company (cleaning, repair work, etc.). Non-standard layout or design that creates a unique and functional interior.",
    image: Apartment5,
    imageLg: Apartment5Lg,
    country: "United States",
    address: "28 Roner Dr. Rimster, PA 18974",
    bedrooms: "3",
    bathrooms: "1",
    surface: "1000 sq ft",
    year: "2012",
    price: "32000",
    agent: {
      image: Agent5,
      name: "Grover Robinson",
      phone: "0123 456 78910",
    },
  },
  {
    id: 18,
    type: "Apartament",
    name: "Woreland St. Garogh",
    description:
      "Proximity to public transportation, schools, shopping, parks or other amenities. Availability of new household appliances and furniture. Availability of air conditioning and central heating.",
    image: Apartment6,
    imageLg: Apartment6Lg,
    country: "Canada",
    address: "84 Woreland St. Garogh, FL 32927",
    bedrooms: "3",
    bathrooms: "1",
    surface: "1200 sq ft",
    year: "2010",
    price: "38000",
    agent: {
      image: Agent6,
      name: "Karen Sorensen",
      phone: "0123 456 78910",
    },
  },
];
