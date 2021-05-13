import Head from 'next/head'
import Image from 'next/image'
import { Center, Footer, Tag, Showcase, DisplaySmall, DisplayMedium } from '../components'
import { titleIfy, slugify } from '../utils/helpers'
import { fetchInventory } from '../utils/inventoryProvider'
import CartLink from '../components/CartLink'

const About = ({ inventoryData = [], categories: categoryData = [] }) => {
  const inventory = inventoryData.slice(0, 20)
  const categories = categoryData.slice(0, 5)
  const daniel = {
    backgroundImage: `url("https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80")`
  };
  const daniel1 = {
    backgroundImage: `url("https://via.placeholder.com/500")`
  };

  return (
    <>
      <CartLink />
      <div className="w-full">
        <Head>
          <title>About - Mahinlo</title>
          <link rel="icon" href="/mahinlo-cl.png" />
          <meta name="description" content="We provide in-home beauty services and cleaning." />
          <meta property="og:title" content="Mahinlo" key="title" />
        </Head>

      </div>

      <div class="bg-cover bg-center  h-auto text-white py-24 px-10 object-fill" style={daniel}>
        <div class="md:w-1/2">
          <p class="text-3xl font-bold text-white">About Us</p>

        </div>
      </div>


      <div class="bg-white">
        <div class="max-w-5xl px-6 py-16 mx-auto">
          <div class="items-center md:flex md:space-x-6">
            <div class="md:w-1/2">
              <h3 class="text-2xl font-semibold text-gray-800">Welcome to Mahinlo</h3>
              <p class="max-w-md mt-4 text-gray-600">Mahinlo is a Home Based service providing company.
              In which we provide all type of home based Repairing Job, Electrical work, Plumbing, Beauty
              Service, A.C. repairing, Stitching, Tailoring, Equipment repairing etc. At your doorstep with
              skilled & verified technician. We are committed to deliver best service at your door step on
                    your budget. We are here to deliver you a hustle free life.</p>

              <p class="max-w-md mt-4 text-gray-600">Mahinlo also gives a opportunity to all service person to expand their own business to be
              the partner of our company. Here they can expand their business without any extra effort. Our
                       company is committed to make a team of qualified person & increase their business.</p>
            </div>

            <div class="mt-8 md:mt-0 md:w-1/2">
              <div class="flex items-center justify-center">
                <div class="max-w-md">
                  <Image
                    src="/products/beauty2.jpg"
                    alt="Picture of the author"
                    width={700}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="antialiased max-w-6xl mx-auto my-12 px-8">

        <div class="relative block md:flex items-center">
          <div class="w-full md:w-1/2 relative z-1 bg-gray-100 rounded shadow-lg overflow-hidden">
            <div class="text-lg font-medium text-yellow-900 uppercase p-8 text-center border-b border-gray-200 tracking-wide">Pricing</div>
            <div class="block sm:flex md:block lg:flex items-center justify-center">
              <div class="mt-8 sm:m-8 md:m-0 md:mt-8 lg:m-8 text-center">
                <div class="inline-flex items-center">
                  <span class="text-xl text-gray-600 ml-2">-</span>
                  <span class="text-3xl font-medium">2.9%</span>

                </div>
                <span class="block text-sm text-gray-600 mt-2">for Mahinlo loyal customers</span>
              </div>
              <div class="mt-4 mb-8 sm:m-8 md:m-0 md:mt-4 md:mb-8 lg:m-8 text-center">
                <div class="inline-flex items-center">
                  <span class="text-xl text-gray-600 ml-2">-</span>
                  <span class="text-3xl font-medium">1.4%</span>

                </div>
                <span class="block text-sm text-gray-600 mt-2">for Mahinlo new customers</span>
              </div>
            </div>
            <div class="flex justify-center mt-3">
              <ul>
                <li class="flex items-center">
                  <div class="bg-yellow-900 rounded-full p-2 fill-current text-yellow-900">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-umbrella"><path class="primary" d="M11 3.05V2a1 1 0 0 1 2 0v1.05A10 10 0 0 1 22 13c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a10 10 0 0 1 9-9.95z" /><path class="secondary" d="M11 14a1 1 0 0 1 2 0v5a3 3 0 0 1-6 0 1 1 0 0 1 2 0 1 1 0 0 0 2 0v-5z" /></svg>
                  </div>
                  <span class="text-gray-700 text-lg ml-3">No setup, or hidden fees</span>
                </li>
                <li class="flex items-center mt-3">
                  <div class="bg-yellow-900 rounded-full p-2 fill-current text-yellow-900">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-shopping-bag"><path class="primary" d="M5 8h14a1 1 0 0 1 1 .92l1 12A1 1 0 0 1 20 22H4a1 1 0 0 1-1-1.08l1-12A1 1 0 0 1 5 8z" /><path class="secondary" d="M9 10a1 1 0 0 1-2 0V7a5 5 0 1 1 10 0v3a1 1 0 0 1-2 0V7a3 3 0 0 0-6 0v3z" /></svg>
                  </div>
                  <span class="text-gray-700 text-lg ml-3">Pay only for the services you need </span>
                </li>
                <li class="flex items-center mt-3">
                  <div class="bg-yellow-900 rounded-full p-2 fill-current text-yellow-900">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-pie-chart"><path class="primary" d="M14 13h6.78a1 1 0 0 1 .97 1.22A10 10 0 1 1 9.78 2.25a1 1 0 0 1 1.22.97V10a3 3 0 0 0 3 3z" /><path class="secondary" d="M20.78 11H14a1 1 0 0 1-1-1V3.22a1 1 0 0 1 1.22-.97c3.74.85 6.68 3.79 7.53 7.53a1 1 0 0 1-.97 1.22z" /></svg>
                  </div>
                  <span class="text-gray-700 text-lg ml-3">Real-time customers support</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-full md:w-1/2 relative z-0 px-8 md:px-0 md:py-16">
            <div class="bg-yellow-900 text-white rounded-b md:rounded-b-none md:rounded-r shadow-lg overflow-hidden">
              <div class="text-lg font-medium uppercase p-8 text-center border-b border-gray-200 tracking-wide">Services</div>
              <div class="text-center text-sm sm:text-md max-w-sm mx-auto mt-8 text-white px-8 lg:px-0">
                Each treatment is tailor-made to your needs, to make you look and feel your best at any age.
          </div>
              <div class="mt-8 border border-white mx-8 lg:mx-16 flex flex-wrap">
                <div class="flex items-center justify-center w-1/2 text-center p-4 border-r border-b border-white">Beauty & Wellness</div>
                <div class="flex items-center justify-center w-1/2 text-center p-4 border-b border-white">Home repairs</div>
                <div class="flex items-center justify-center w-1/2 text-center p-4 border-r border-white">Home cleaning</div>
                <div class="flex items-center justify-center w-1/2 text-center p-4">Massage</div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export async function getStaticProps() {
  const inventory = await fetchInventory()

  const inventoryCategorized = inventory.reduce((acc, next) => {
    const categories = next.categories
    categories.forEach(c => {
      const index = acc.findIndex(item => item.name === c)
      if (index !== -1) {
        const item = acc[index]
        item.itemCount = item.itemCount + 1
        acc[index] = item
      } else {
        const item = {
          name: c,
          image: next.image,
          itemCount: 1
        }
        acc.push(item)
      }
    })
    return acc
  }, [])

  return {
    props: {
      inventoryData: inventory,
      categories: inventoryCategorized
    }
  }
}

export default About