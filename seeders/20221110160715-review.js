'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reviews', [
      {
        dish: 'Umami Truffle Burger',
        description: 'Sheeeeesh this was a good burger. The truffle? Perfect.',
        rating: 5,
        img: 'https://i.imgur.com/TDI5eVO.png',
        restaurantId: '1',
        userId: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        dish: 'Half Pound Maine Lobster Roll',
        description:
          'Most delicious lobster roll in Boston! The freshest I have had in town, well worth the price.',
        rating: 5,
        img: 'https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/9f04a886-b55f-4313-ad2b-1ed67e4f3760-retina-large.JPG',
        restaurantId: '3',
        userId: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        dish: 'Salty Pig Pizza',
        description:
          'This was a weird dish. Salty pig parts on pizza? And the waiter spit on the pizza before serving it???',
        rating: 2,
        img: 'blob:https://imgur.com/ea0dd1d8-f464-4b77-ac52-220f85a1127b',
        restaurantId: '6',
        userId: '3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        dish: 'Clam Chowder',
        description:
          'Delicious hot cup of corn chowder. It did taste a little oversalted and I could have used more oyster crackers. All in all, a tasty dish at a historic restaurant.',
        rating: 4,
        img: 'https://media-cdn.tripadvisor.com/media/photo-s/16/ad/1e/25/photo6jpg.jpg',
        restaurantId: '5',
        userId: '4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        dish: 'Fried Catfish Basket',
        description:
          'I had to try this unique catfish dish! It was done well but I wish I had tried a more signature dish at this restaurant.',
        rating: 3,
        img: 'https://cloverstatic.com/menu-assets/items/2QZ6KPWCK0EYE_576x576.jpeg',
        restaurantId: '4',
        userId: '5',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        dish: 'Hot Ones Burger',
        description:
          "McDonald's could never. Shake Shack has the superior squiggly fries. In-n-out still clear tho. Sean Evans the goat.",
        rating: 5,
        img: 'https://d2luv1saso99wi.cloudfront.net/2022_Hot-Ones_App-Web-Menu_1500x920_Burger_lg1661364018.jpeg',
        restaurantId: '9',
        userId: '6',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        dish: 'Stifado',
        description:
          'These braised short ribs did not disappoint! I highly recommend pairing this with an earthy red wine. I wish the meat was cooked a little more well done.',
        rating: 4,
        img: 'https://www.danishfoodlovers.com/wp-content/uploads/2022/07/Greek-beef-stifado-5.jpg',
        restaurantId: '10',
        userId: '7',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        dish: 'Crab-Crusted Haddock',
        description:
          'I enjoyed this interesting dish! Crab and haddock, how could you go wrong? So happy I came to this restaurant while visiting Boston.',
        rating: 4,
        img: 'https://citypierseafood.com/media/catalog/product/c/p/cpfcod1000-cod-loin-plated-detail_1.png',
        restaurantId: '2',
        userId: '8',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        dish: 'A5 Wagyu Beef Foie Gras Don',
        description:
          'Do I need to say anything more? This wagyu cow was still mooing fresh from Japan. Highly recommend.',
        rating: 5,
        img: 'https://i.imgur.com/omkmskd.png',
        restaurantId: '7',
        userId: '9',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        dish: 'Sho-yu Ramen',
        description:
          'wen yunnan. I enjoyed a hot bowl of ramen while shopping on Newbury Street. I wish the prices had been lower so I could have customized my dish more. I would come back again.',
        rating: 3,
        img: 'https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=600,height=400,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/9f5f69b4-00cb-4800-8474-17958657b726.jpg',
        restaurantId: '8',
        userId: '10',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reviews', null, {})
  }
}
