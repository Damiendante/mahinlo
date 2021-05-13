import Head from 'next/head'
import ListItem from '../../components/ListItem'
import { titleIfy, slugify } from '../../utils/helpers'
import { Center, Footer, Tag, Showcase, DisplaySmall, DisplayMedium } from '../../components'
import fetchCategories from '../../utils/categoryProvider'
import inventoryForCategory from '../../utils/inventoryForCategory'
import CartLink from '../../components/CartLink'

const Category = (props) => {
  const { inventory, title } = props
  const daniel = {
    backgroundImage: `url("https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80")`
  };
  const daniel1 = {
    backgroundImage: `url("https://via.placeholder.com/500")`
  };
  return (
    <>
      <CartLink />
      <Head>
        <title>Mahinlo - {title}</title>
        <link rel="icon" href="/mahinlo-cl.png" />
        <meta name="description" content={`Mahinlo - ${title}`} />
        <meta property="og:title" content={`Mahinlo - ${title}`} key="title" />
      </Head>
      <div className="flex flex-col items-center">
        <div className="max-w-fw flex flex-col w-full">
          {/* <div className="pt-4 sm:pt-10 pb-8">
            <h1 className="text-5xl font-light">{titleIfy(title)}</h1>
          </div> */}
          <div class="bg-cover bg-center  h-auto text-white py-24 px-10 object-fill" style={daniel}>
            <div class="md:w-1/2">
              <p class="font-bold text-sm uppercase text-white">Mahinlo</p>
              <p class="text-3xl font-bold text-white">{titleIfy(title)}</p>

            </div>
          </div>

          <div>
            <div className="flex flex-1 flex-wrap flex-row">
              {
                inventory.map((item, index) => {
                  return (
                    <ListItem
                      key={index}
                      link={`/product/${slugify(item.name)}`}
                      title={item.name}
                      price={item.price}
                      imageSrc={item.image}
                    />
                  )
                })
              }
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const categories = await fetchCategories()
  const paths = categories.map(category => {
    return { params: { name: slugify(category) } }
  })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const category = params.name.replace(/-/g, " ")
  const inventory = await inventoryForCategory(category)
  return {
    props: {
      inventory,
      title: category
    }
  }
}

export default Category