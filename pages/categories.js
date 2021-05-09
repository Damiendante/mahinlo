import Head from 'next/head'
import { titleIfy , slugify } from '../utils/helpers'
import { DisplayMedium } from '../components'
import CartLink from '../components/CartLink'
import { fetchInventory } from '../utils/inventoryProvider'

function Categories ({ categories = [] }) {
  const daniel = {
    backgroundImage: `url("https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80")`
  };
  const daniel1 = {
      backgroundImage: `url("https://via.placeholder.com/500")`
  };
  return (
    <>
      <div className="w-full">
        <CartLink />
        <Head>
          <title>Shop - Mahinlo</title>
          <link rel="icon" href="/mahinlo-cl.png" />
          <meta name="description" content={`Shop - Mahinlo`} />
          <meta property="og:title" content="Shop - Mahinlo" key="title" />
        </Head>
        <div class="bg-cover bg-center  h-auto text-white py-24 px-10 object-fill" style={daniel}>
                <div class="md:w-1/2">
                    <p class="font-bold text-sm uppercase text-white">Mahinlo</p>
                    <p class="text-3xl font-bold text-white">Shop</p>
                
                </div>  
            </div>
        <div className="flex flex-col items-center">
          
          {/* <div className="my-4 lg:my-8 flex flex-col lg:flex-row justify-between"> */}
          <div className="grid gap-4
          lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {
            categories.map((category, index) => (
              <DisplayMedium
                key={index}
                imageSrc={category.image}
                subtitle={`${category.itemCount} items`}
                title={titleIfy(category.name)}
                link={`/category/${slugify(category.name)}`}
              />
            ))
          }
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const inventory = await fetchInventory()
  const inventoryCategories = inventory.reduce((acc, next) => {
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
      categories: inventoryCategories
    }
  }
}

export default Categories