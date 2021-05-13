import { v4 as uuid } from 'uuid'

let inventory = [
  {
    categories: ['beauty wellness'],
    no: ['0'],
    name: 'Swedish Massage',
    price: '2500',
    image: '/products/massage_3.jpg',
    description: 'Stay a while. The Timber charme chocolat sofa is set atop an oak trim and flaunts fluffy leather back and seat cushions. Over time, this brown leather sofa’s full-aniline upholstery will develop a worn-in vintage look. Snuggle up with your cutie (animal or human) and dive into a bowl of popcorn. This sofa is really hard to leave. Natural color variations, wrinkles and creases are part of the unique characteristics of this leather. It will develop a relaxed vintage look with regular use.', brand: 'Jason Bourne', currentInventory: 4
  },
  {
    categories: ['beauty wellness'],
    no: ['1'],
    name: 'Deep Tissue Massage',
    price: '2500',
    image: '/products/massage_2.jpg',
    description: 'Stay a while. The Timber charme chocolat sofa is set atop an oak trim and flaunts fluffy leather back and seat cushions. Over time, this brown leather sofa’s full-aniline upholstery will develop a worn-in vintage look. Snuggle up with your cutie (animal or human) and dive into a bowl of popcorn. This sofa is really hard to leave. Natural color variations, wrinkles and creases are part of the unique characteristics of this leather. It will develop a relaxed vintage look with regular use.', brand: 'Jason Bourne', currentInventory: 2
  },
  {
    categories: ['beauty wellness'],
    no: ['2'],
    name: 'Prenatal Massage',
    price: '2500',
    image: '/products/massage_5.jpg',
    description: 'Easy to love. The Sven in birch ivory looks cozy and refined, like a sweater that a fancy lady wears on a coastal vacation. This ivory loveseat has a tufted bench seat, loose back pillows and bolsters, solid walnut legs, and is ready to make your apartment the adult oasis you dream of. Nestle it with plants, an ottoman, an accent chair, or 8 dogs. Your call.', brand: 'Jason Bourne', currentInventory: 8
  },
  {
    categories: ['beauty wellness'],
    no: ['3'],
    name: 'Bikini Brazillian Waxing',
    price: '2500',
    image: '/products/wax4.jpg',
    description: 'You know your dad’s incredible vintage bomber jacket? The Nirvana dakota tan leather sofa is that jacket, but in couch form. With super-plush down-filled cushions, a corner-blocked wooden frame, and a leather patina that only gets better with age, the Nirvana will have you looking cool and feeling peaceful every time you take a seat. Looks pretty great with a sheepskin throw, if we may say so. With use, this leather will become softer and more wrinkled and the cushions will take on a lived-in look, like your favorite leather jacket.', brand: 'Jason Bourne', currentInventory: 10
  },
  {
    categories: ['beauty wellness'],
    no: ['4'],
    name: 'Full Arms Waxing',
    price: '1500',
    image: '/products/wax3.jpg',
    description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.', brand: 'Jason Bourne', currentInventory: 7
  },
  {
    categories: ['beauty wellness'],
    no: ['5'],
    name: 'Full Legs & Underarm Waxing',
    price: '1500',
    image: '/products/wax5.jpg',
    description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.', brand: 'Jason Bourne', currentInventory: 13
  },
  {
    categories: ['beauty wellness'],
    no: ['6'],
    name: 'Manicure',
    price: '1500',
    image: '/products/mani1.jpg',
    description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.', brand: 'Jason Bourne', currentInventory: 9
  },
  {
    categories: ['beauty wellness'],
    no: ['7'],
    name: 'Pedicure',
    price: '1500',
    image: '/products/pedi1.jpeg',
    description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.', brand: 'Jason Bourne', currentInventory: 24
  },

  {
    categories: ['beauty wellness'],
    id: ['8'],
    name: 'Full Facial Makeup',
    price: '2500',
    image: '/products/makeup_1.jpg',
    description: 'Easy to love. The Sven in birch ivory looks cozy and refined, like a sweater that a fancy lady wears on a coastal vacation. This ivory loveseat has a tufted bench seat, loose back pillows and bolsters, solid walnut legs, and is ready to make your apartment the adult oasis you dream of. Nestle it with plants, an ottoman, an accent chair, or 8 dogs. Your call.', brand: 'Jason Bourne', currentInventory: 43
  },
  {
    categories: ['home cleaning'],
    no: ['9'],
    name: 'Carpet Cleaning',
    price: '1000',
    image: '/products/carpet1.jpeg',
    description: 'You know your dad’s incredible vintage bomber jacket? The Nirvana dakota tan leather sofa is that jacket, but in couch form. With super-plush down-filled cushions, a corner-blocked wooden frame, and a leather patina that only gets better with age, the Nirvana will have you looking cool and feeling peaceful every time you take a seat. Looks pretty great with a sheepskin throw, if we may say so. With use, this leather will become softer and more wrinkled and the cushions will take on a lived-in look, like your favorite leather jacket.', brand: 'Jason Bourne', currentInventory: 2
  },
  {
    categories: ['home cleaning'],
    no: ['10'],
    name: 'Floor Scrubbing',
    price: '2000',
    image: '/products/floor1.jpeg',
    description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.', currentInventory: 14
  },

  {
    categories: ['home cleaning'],
    no: ['11'],
    name: 'Floor Scrubbing',
    price: '2000',
    image: '/products/cleaning.jpg',
    description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.', currentInventory: 20
  },
  {
    categories: ['home cleaning'],
    no: ['12'],
    name: 'Sofaset Cleaning',
    price: '2000',
    image: '/products/sofa1.jpg',
    description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.', brand: 'Jason Bourne', currentInventory: 12
  },
  {
    categories: ['home cleaning'],
    no: ['13'],
    name: 'Pest Control',
    price: '2000',
    image: '/products/pest1.jpeg',
    description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.', brand: 'Jason Bourne', currentInventory: 13
  },
  {
    categories: ['home repairs'],
    no: ['14'],
    name: 'Kitchen & Bathroom Repair',
    price: '2000',
    image: '/products/kitchen1.jpg',
    description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.', brand: 'Jason Bourne', currentInventory: 33
  },
  {
    categories: ['home repairs'],
    no: ['15'],
    name: 'Lights & Basic Home Wirings',
    price: '2000', image: '/products/lights1.jpg',
    description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.', brand: 'Jason Bourne', currentInventory: 23
  },
  {
    categories: ['home repairs'],
    no: ['16'],
    name: 'Fridge & Freezer Repairs',
    price: '2000', image: '/products/fridge1.jpg',
    description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.', brand: 'Jason Bourne', currentInventory: 13
  },
  {
    categories: ['home repairs'],
    no: ['17'],
    name: 'Instant Shower Repair',
    price: '2000', image: '/products/shower1.jpg',
    description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.', brand: 'Jason Bourne', currentInventory: 15
  },
  {
    categories: ['home repairs'],
    no: ['18'],
    name: 'Banner Image',
    price: '600', image: '/products/banner_1.jpg',
    description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.', brand: 'Jason Bourne', currentInventory: 15
  }

]

inventory.map(i => {
  i.id = uuid()
  return i
})

export default inventory