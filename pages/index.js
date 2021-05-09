import Head from 'next/head'
import Image from 'next/image'
import { Center, Footer, Tag, Showcase, DisplaySmall, DisplayMedium } from '../components'
import { titleIfy, slugify } from '../utils/helpers'
import { fetchInventory } from '../utils/inventoryProvider'
import CartLink from '../components/CartLink'

const Home = ({ inventoryData = [], categories: categoryData = [] }) => {
  const inventory = inventoryData.slice(0, 20)
  const categories = categoryData.slice(0, 5)
  const daniel1 = {
    backgroundImage: `url("https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80")`
  };

  return (
    <>
      <CartLink />
      <div className="w-full">
        <Head>
          <title>Home - Mahinlo</title>
          <link rel="icon" href="/mahinlo-cl.png" />
          <meta name="description" content="We provide in-home beauty services and cleaning." />
          <meta property="og:title" content="Mahinlo" key="title" />
        </Head>
        <div className="bg-brown-300
        p-6 pb-10 smpb-6
        flex lg:flex-row flex-col">
          <div className="pt-4 pl-2 sm:pt-12 sm:pl-12 flex flex-col">
            <Tag
              year="2021"
              category="Beauty & Wellness"
            />
            <Center
              price="1500"
              title="On-demand services."
              link={`/product/${slugify(inventory[2].name)}`}
            />
            {/* <Footer
              designer="Jason Bourne"
            /> */}
          </div>
          <div className="rounded flex flex-1 justify-center items-center relative">
            <img
                class="rounded-lg"
                src={inventory[11].image}
            />
              
          </div>
        </div>
      </div>

      <div className="pt-10 pb-6 flex flex-col items-center">
        <h2 className="text-4xl mb-3">Why Mahinlo?</h2>
      </div>

      <div className="my-8 flex flex-col flex-col lg:flex-row justify-between">

      <figure class="bg-gray-100 rounded-xl p-8 flex-1">
        {/* <img class="w-32 h-32 rounded-full mx-auto" src="" alt="" width="384" height="512"/> */} 
        <Image
        className="w-50 h-50 rounded-full mx-auto ml-600"
        src="/products/about.jpg"
        alt="Picture of the author"
        width={50}
        height={50}
      />
        <div class="pt-6 te justify-items-center">
          <figcaption class="font-medium text-center">
            <div class="text-cyan-600">
              Transparent Pricing
            </div>
            <div class="text-gray-500">
            See fixed prices before you book. No hidden charges.
            </div>
          </figcaption>
        </div>
      </figure>

      <figure class="ml-16 bg-gray-100 rounded-xl p-8 flex-1">
        <img class="w-32 h-32 rounded-full mx-auto" src="/products/about.jpg" alt="" width="384" height="512"/>
        <div class="pt-6 te space-y-4">
          <figcaption class="font-medium text-center">
            <div class="text-cyan-600">
              Experts Only
            </div>
            <div class="text-gray-500">
            Our proffesionals are well trained and have on-job expertise.
            </div>
          </figcaption>
        </div>
      </figure>

      <figure class="ml-16 bg-gray-100 rounded-xl p-8 flex-1">
        <img class="w-32 h-32 rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512"/>
        <div class="pt-6 te space-y-4">
          <figcaption class="font-medium text-center">
            <div class="text-cyan-600">
              Fully Equipped
            </div>
            <div class="text-gray-500">
            We bring everything needed to get the job done.
            </div>
          </figcaption>
        </div>
      </figure>

      </div>


      <div class="bg-cover bg-center  h-auto text-white py-24 px-10 object-fill" style={daniel1}>
                <div class="md:w-1/2">        
                    <p class="text-3xl font-bold text-white">Contact Us</p>
                    <p class="font-bold text-sm uppercase text-white">Mahinlo</p>
                
                </div>  
      </div>


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
        <h2 className="text-4xl mb-3">Trending Now</h2>
        <p className="text-gray-600 text-sm">Find the perfect piece or accessory to finish off your favorite room in the house.</p>
      </div>
      <div className="my-8 flex flex-col lg:flex-row justify-between">
        <DisplaySmall
          imageSrc={inventory[0].image}
          title={inventory[0].name}
          subtitle={inventory[0].price}
          link={`/product/${slugify(inventory[0].name)}`}
        />

        <DisplaySmall
          imageSrc={inventory[1].image}
          title={inventory[1].name}
          subtitle={inventory[1].price}
          link={`/product/${slugify(inventory[1].name)}`}
        />

        <DisplaySmall
          imageSrc={inventory[2].image}
          title={inventory[2].name}
          subtitle={inventory[2].price}
          link={`/product/${slugify(inventory[2].name)}`}
        />

        <DisplaySmall
          imageSrc={inventory[3].image}
          title={inventory[3].name}
          subtitle={inventory[3].price}
          link={`/product/${slugify(inventory[3].name)}`}
        />
      </div>


    <div class="flex items-center justify-center px-5 py-5">
    <div class="w-full max-w-3xl">
        <div class="-mx-2 md:flex">
            <div class="w-full md:w-1/3 px-2">
                <div class="rounded-lg shadow-sm mb-4">
                    <div class="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
                        <div class="px-3 pt-8 pb-10 text-center relative z-10">
                            <h4 class="text-sm uppercase text-gray-500 leading-tight">Users</h4>
                            <h3 class="text-3xl text-gray-700 font-semibold leading-tight my-3">3,682</h3>
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
                    <div class="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
                        <div class="px-3 pt-8 pb-10 text-center relative z-10">
                            <h4 class="text-sm uppercase text-gray-500 leading-tight">Subscribers</h4>
                            <h3 class="text-3xl text-gray-700 font-semibold leading-tight my-3">11,427</h3>
                            <p class="text-xs text-red-500 leading-tight">▼ 42.8%</p>
                        </div>
                        <div class="absolute bottom-0 inset-x-0">
                            <canvas id="chart2" height="70"></canvas>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/3 px-2">
                <div class="rounded-lg shadow-sm mb-4">
                    <div class="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
                        <div class="px-3 pt-8 pb-10 text-center relative z-10">
                            <h4 class="text-sm uppercase text-gray-500 leading-tight">Comments</h4>
                            <h3 class="text-3xl text-gray-700 font-semibold leading-tight my-3">8,028</h3>
                            <p class="text-xs text-green-500 leading-tight">▲ 8.2%</p>
                        </div>
                        <div class="absolute bottom-0 inset-x-0">
                            <canvas id="chart3" height="70"></canvas>
                        </div>
                    </div>
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

export default Home