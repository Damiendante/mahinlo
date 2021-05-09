import Head from 'next/head'
import { Center, Footer, Tag, Showcase, DisplaySmall, DisplayMedium } from '../components'
import { titleIfy, slugify } from '../utils/helpers'
import { fetchInventory } from '../utils/inventoryProvider'
import CartLink from '../components/CartLink'

const Work = ({ inventoryData = [], categories: categoryData = [] }) => {
    const inventory = inventoryData.slice(0, 20)
    const categories = categoryData.slice(0, 5)


    return (
        <>
            <CartLink />
            <div className="w-full">
                <Head>
                    <title>Work - Mahinlo</title>
                    <link rel="icon" href="/mahinlo-cl.png" />
                    <meta name="description" content="We provide in-home beauty services and cleaning." />
                    <meta property="og:title" content="Mahinlo" key="title" />
                </Head>

            </div>

            <div class="max-w-6xl mx-auto my-10">
                <div class="flex md:flex-row flex-col p-5">
                    <div class="md:w-1/2">
                        <div class="min-h-64">
                            <div class="text-3xl py-5">Apply and work for Mahinlo</div>
                            <div class="pb-5">Mahinlo is your one-stop solution to sort all your home needs ranging from beauty to massage,
                            quickly, professionally and conveniently. We simplify your everyday living with a variety of at-home services
                            across Kenya, delivered by verified & qualified professionals only. Mahinlo’s home services include Interiors
                            /Renovation/Construction Services, Home Cleaning, Painting, Beauty Services at Home, Appliance Repairs, Pest
                             Control, Plumbing/Electrical/Carpentry services & a lot more.</div>

                            <div class="pb-5">Want to be part of our team? Please fill the form below and we will get back to you for more information.</div>
                        </div>
                        <div class="py-5 flex flex-row justify-center">
                            <div class="flex flex-col w-24 items-center cursor-pointer">
                                <div class="w-6 h-6 flex items-center justify-center">
                                    <div class="rounded-full bg-green-700 text-sm text-green-100 transition-all transform ease-in-out duration-200 w-2 h-2 font-bold flex justify-center relative">
                                        <div class="absolute transition-all transform ease-in-out duration-200 top-50 left-0 border-t-2 w-12 ml-2 border-green-700 border-dashed"></div>
                                    </div>
                                </div>
                                <div class="my-4 text-red-700 text-xs">Apply</div>
                            </div>
                            <div class="flex flex-col w-24 items-center cursor-pointer">
                                <div class="w-6 h-6 flex items-center justify-center">
                                    <div class="rounded-full bg-green-700 text-sm text-green-100 transition-all transform ease-in-out duration-200 w-6 h-6 font-bold flex justify-center relative">
                                        2
                                        <div class="absolute transition-all transform ease-in-out duration-200 top-50 right-0 border-t-2 w-10 mr-6 border-green-700 border-dashed"></div>
                                        <div class="absolute transition-all transform ease-in-out duration-200 top-50 left-0 border-t-2 w-10 ml-6 border-green-700 border-dashed"></div>
                                    </div>
                                </div>
                                <div class="my-4 text-grey-700 text-xs">Review</div>
                            </div>
                            <div class="flex flex-col w-24 items-center cursor-pointer">
                                <div class="w-6 h-6 flex items-center justify-center">
                                    <div class="rounded-full bg-green-700 text-sm text-green-100 transition-all transform ease-in-out duration-200 w-2 h-2 font-bold flex justify-center relative">
                                        <div class="absolute transition-all transform ease-in-out duration-200 top-50 right-0 border-t-2 w-12 mr-2 border-green-700 border-dashed"></div>
                                        <div class="absolute transition-all transform ease-in-out duration-200 top-50 left-0 border-t-2 w-12 ml-2 border-green-700 border-dashed"></div>
                                    </div>
                                </div>
                                <div class="my-4 text-green-700 text-xs">Interview</div>
                            </div>
                            <div class="flex flex-col w-24 items-center cursor-pointer">
                                <div class="w-6 h-6 flex items-center justify-center">
                                    <div class="rounded-full bg-green-700 text-sm text-green-100 transition-all transform ease-in-out duration-200 w-2 h-2 font-bold flex justify-center relative">
                                        <div class="absolute transition-all transform ease-in-out duration-200 top-50 right-0 border-t-2 w-12 mr-2 border-green-700 border-dashed"></div>
                                    </div>
                                </div>
                                <div class="my-4 text-yellow-700 text-xs">Mahinlo worker</div>
                            </div>
                        </div>
                    </div>
                    <div class="md:w-1/2 flex flex-col items-center justify-center h-96">
                        {/* <img src="https://image.flaticon.com/icons/svg/1330/1330216.svg" alt="step" class="h-64 object-scale-down shadow-lg rounded"/> */}
                        <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                            <div class="mb-4">
                                <label class="block mb-2 text-sm font-bold text-gray-700" for="fname">
                                    First Name
								</label>
                                <input
                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Enter First Name"
                                />
                            </div>
                            <div class="mb-4">
                                <label class="block mb-2 text-sm font-bold text-gray-700" for="lname">
                                    Last Name
								</label>
                                <input
                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Enter Last Name"
                                />
                            </div>
                            <div class="mb-4">
                                <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                                    Email
								</label>
                                <input
                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Enter Email Address..."
                                />
                            </div>
                            <div class="mb-4">
                                <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                                    Curriculum Vitae
								</label>
                                <input
                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="file"
                                />
                            </div>
                            <div class="mb-6 text-center">
                                <button
                                    class="w-full px-4 py-2 font-bold text-white bg-yellow-900 rounded-full hover:bg-red-100 focus:outline-none focus:shadow-outline"
                                    type="button"
                                >
                                    Apply
								</button>
                            </div>
                            <hr class="mb-6 border-t" />
                        </form>
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

export default Work