import Head from "next/head"
import Image from "next/image"
import { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import {
  Center,
  Footer,
  Tag,
  Showcase,
  DisplaySmall,
  DisplayMedium,
} from "../components"
import { titleIfy, slugify } from "../utils/helpers"
import { fetchInventory } from "../utils/inventoryProvider"
import CartLink from "../components/CartLink"

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]


const Home = ({ inventoryData = [], categories: categoryData = [] }) => {
  const inventory = inventoryData.slice(0, 20)
  const categories = categoryData.slice(0, 5)
  const daniel1 = {
    backgroundImage: `url("https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80")`,
  }

  return (
    <>
      <CartLink />
      <div className="w-full relative bg-white overflow-hidden">
        <Head>
          <title>Home - Mahinlo</title>
          <link rel="icon" href="/mahinlo-cl.png" />
          <meta
            name="description"
            content="We provide in-home beauty services and cleaning."
          />
          <meta property="og:title" content="Mahinlo" key="title" />
        </Head>

        <div className="relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <svg
                className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>

              <Popover>
                {({ open }) => (
                  <>
                    <div className="relative pt-6 px-4 sm:px-6 lg:px-8"></div>

                    <Transition
                      show={open}
                      as={Fragment}
                      enter="duration-150 ease-out"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="duration-100 ease-in"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Popover.Panel
                        focus
                        static
                        className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                      >
                        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="px-5 pt-4 flex items-center justify-between">
                            <div>
                              <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                alt=""
                              />
                            </div>
                            <div className="-mr-2">
                              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Close main menu</span>
                                {/* <XIcon className="h-6 w-6" aria-hidden="true" /> */}
                              </Popover.Button>
                            </div>
                          </div>
                          <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                          <a
                            href="#"
                            className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                          >
                            Log in
                          </a>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">
                      Quality home services
                    </span>{" "}
                    <span className="block text-yellow-900 xl:inline">
                      on demand
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    We provide the best services at home at the click of a
                    button. Browse our shop and select the service that you
                    would like.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-sm shadow">
                      <a
                        href="/shop"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-900 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                      >
                        Shop
                      </a>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt=""
            />
          </div>
        </div>
      </div>



      <div class="relative  px-8 py-8">
        <div>
          <h1 class="text-black text-4xl">
            <span class="bg-yellow-900 py-4 px-4 rounded-full text-3xl">WHY</span>MAHINLO
          </h1>
        </div>
      </div>
      <div class="grid grid-cols-12 gap-6 px-8 py-8">
        <div class="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-7 xxl:col-span-7 flex justify-center">
          <img src="/products/expert.png"
            class="w-auto" />
        </div>
        <div class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-5 xxl:col-span-5">
          <div class="py-4">
            <p class="text-lg font-semibold text-yellow-900">
              <span class="font-bold">BEAUTY & WELLNESS</span></p>
            <p class="text-black text-sm">Our bodies are constantly trying to speak to us, and usually we are unable
            to hear it until we have a physical manifestation such as physical pain or illness. As humans, we tend to
            store stagnant energy in certain areas of our bodies, leading to tension, decreased range of motion, pain
            and sensitivity. During an intuitive massage session with Reiki, your massage therapist will be in tune
            with your subtle energy body and use massage techniques as well as Reiki hand positions to promote a better
            flow of circulation and energy for overall physical, energetic and emotional wellbeing.
                        </p>
          </div>
          <div class="py-4">
            <p class="text-lg font-semibold text-yellow-900">
              <span class="font-bold">HOME REPAIRS</span></p>
            <p class="text-black text-sm">Save dramatically on energy costs, enjoy extra comfort at your
            office & increase the exteriors curb appeal.
                        </p>
          </div>
          <div class="py-4">
            <p class="text-lg font-semibold text-yellow-900">
              <span class="font-bold">HOME CLEANING</span></p>
            <p class="text-black text-sm">Working in a clean well sanitized house or office is no longer
            a luxury with the current times we are living in.
                        </p>
          </div>
        </div>

      </div>



      {/* <div class="bg-black text-white py-20">
        <div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
          <div class="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
            <h1 class="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">TechFest</h1>
            <h2 class="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">Space : The Timeless Infinity
				</h2>
            <p class="text-sm md:text-base text-gray-50 mb-4">Explore your favourite events and
					register now to showcase your talent and win exciting prizes.</p>
            <a href="#"
              class="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
              Explore Now</a>
          </div>
          <div class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
            <div class="h-48 flex flex-wrap content-center">
              <div>
                <img class="inline-block mt-28 hidden xl:block" src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png" /></div>
              <div>
                <img class="inline-block mt-24 md:mt-0 p-8 md:p-0" src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png" /></div>
              <div>
                <img class="inline-block mt-28 hidden lg:block" src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png" /></div>
            </div>
          </div>
        </div>
      </div> */}




      {/* <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Transactions</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to send money
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
            accusamus quisquam.
          </p>
        </div>
      </div>
    </div> */}

      {/* <div className="
        lg:my-8 lg:grid-cols-2
        grid-cols-1
        grid gap-4 my-4 
      ">
        <DisplayMedium
          imageSrc={categories[0].image}
          subtitle={`${categories[0].itemCount} items`}
          title={titleIfy(categories[0].name)}
          link={`/category/${slugify(categories[0].name)}`}
        />
        <DisplayMedium
          imageSrc={categories[1].image}
          subtitle={`${categories[1].itemCount} items`}
          title={titleIfy(categories[1].name)}
          link={`/category/${slugify(categories[1].name)}`}
        />
      </div> */}
      <div className="pt-10 pb-6 flex flex-col items-center">
        <h2 className="text-4xl mb-3">Featured Services</h2>
        {/* <p className="text-gray-600 text-sm">
          Find the perfect piece or accessory to finish off your favorite room
          in the house.
        </p> */}
      </div>
      <div className="my-8 flex flex-col lg:flex-row justify-between">
        <DisplaySmall
          imageSrc={inventory[0].image}
          title={inventory[0].name}
          //subtitle={inventory[0].price}
          link={`/product/${slugify(inventory[0].name)}`}
        />

        <DisplaySmall
          imageSrc={inventory[1].image}
          title={inventory[1].name}
          //subtitle={inventory[1].price}
          link={`/product/${slugify(inventory[1].name)}`}
        />

        <DisplaySmall
          imageSrc={inventory[2].image}
          title={inventory[2].name}
          //subtitle={inventory[2].price}
          link={`/product/${slugify(inventory[2].name)}`}
        />

        <DisplaySmall
          imageSrc={inventory[3].image}
          title={inventory[3].name}
          // subtitle={inventory[3].price}
          link={`/product/${slugify(inventory[3].name)}`}
        />
      </div>

      {/* <div class="flex items-center justify-center px-5 py-5">
        <div class="w-full max-w-3xl">
          <div class="-mx-2 md:flex">
            <div class="w-full md:w-1/3 px-2">
              <div class="rounded-lg shadow-sm mb-4">
                <div class="rounded-lg bg-yellow-900 shadow-lg md:shadow-xl relative overflow-hidden">
                  <div class="px-3 pt-8 pb-10 text-center relative z-10">
                    <h4 class="text-sm uppercase text-white leading-tight">
                      Service request
                    </h4>
                    <h3 class="text-3xl text-white font-semibold leading-tight my-3">
                      3,682
                    </h3>
                    <p class="text-xs text-green-500 leading-tight">▲ 57.1%</p>
                  </div>
                  <div class="absolute bottom-0 inset-x-0">
                    <canvas id="chart1" height="70"></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-2">
              <div class="rounded-lg shadow-sm mb-4">
                <div class="rounded-lg bg-yellow-900 shadow-lg md:shadow-xl relative overflow-hidden">
                  <div class="px-3 pt-8 pb-10 text-center relative z-10">
                    <h4 class="text-sm uppercase text-white leading-tight">
                      Procedures
                    </h4>
                    <h3 class="text-3xl text-white font-semibold leading-tight my-3">
                      11,427
                    </h3>
                    <p class="text-xs text-green-500 leading-tight">▲ 42.8%</p>
                  </div>
                  <div class="absolute bottom-0 inset-x-0">
                    <canvas id="chart2" height="70"></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-2">
              <div class="rounded-lg shadow-sm mb-4">
                <div class="rounded-lg bg-yellow-900 shadow-lg md:shadow-xl relative overflow-hidden">
                  <div class="px-3 pt-8 pb-10 text-center relative z-10">
                    <h4 class="text-sm uppercase text-white leading-tight">
                      Happy clients
                    </h4>
                    <h3 class="text-3xl text-white font-semibold leading-tight my-3">
                      8,028
                    </h3>
                    <p class="text-xs text-green-500 leading-tight">▲ 8.2%</p>
                  </div>
                  <div class="absolute bottom-0 inset-x-0">
                    <canvas id="chart3" height="70"></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-2">
              <div class="rounded-lg shadow-sm mb-4">
                <div class="rounded-lg bg-yellow-900 shadow-lg md:shadow-xl relative overflow-hidden">
                  <div class="px-3 pt-8 pb-10 text-center relative z-10">
                    <h4 class="text-sm uppercase text-white leading-tight">
                      Skin treatment
                    </h4>
                    <h3 class="text-3xl text-white font-semibold leading-tight my-3">
                      8,028
                    </h3>
                    <p class="text-xs text-green-500 leading-tight">▲ 6.1%</p>
                  </div>
                  <div class="absolute bottom-0 inset-x-0">
                    <canvas id="chart3" height="70"></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export async function getStaticProps() {
  const inventory = await fetchInventory()

  const inventoryCategorized = inventory.reduce((acc, next) => {
    const categories = next.categories
    categories.forEach((c) => {
      const index = acc.findIndex((item) => item.name === c)
      if (index !== -1) {
        const item = acc[index]
        item.itemCount = item.itemCount + 1
        acc[index] = item
      } else {
        const item = {
          name: c,
          image: next.image,
          itemCount: 1,
        }
        acc.push(item)
      }
    })
    return acc
  }, [])

  return {
    props: {
      inventoryData: inventory,
      categories: inventoryCategorized,
    },
  }
}

export default Home
