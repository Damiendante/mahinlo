import Head from 'next/head'
import { Center, Footer, Tag, Showcase, DisplaySmall, DisplayMedium } from '../components'
import { titleIfy, slugify } from '../utils/helpers'
import { fetchInventory } from '../utils/inventoryProvider'
import CartLink from '../components/CartLink'
import { colors } from '../theme'

const Contact = ({ inventoryData = [], categories: categoryData = [] }) => {
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
                    <title>Contact - Mahinlo</title>
                    <link rel="icon" href="/mahinlo-cl.png" />
                    <meta name="description" content="We provide in-home beauty services and cleaning." />
                    <meta property="og:title" content="Mahinlo" key="title" />
                </Head>

            </div>

            <div class="bg-cover bg-center h-auto text-white py-24 px-10 object-fill" style={daniel}>
                <div class="md:w-1/2">
                    <p class="font-bold text-sm uppercase text-white">Mahinlo</p>
                    <p class="text-3xl font-bold text-white">Contact Us</p>

                </div>
            </div>

            <div class="pt-10">
                <div class="mx-auto max-w-6xl">
                    <div class="p-2 rounded">
                        <div class="flex flex-col md:flex-row">
                            <div class="md:w-1/3 p-4 text-sm">
                                <div class="text-3xl">Frequently asked <span class="font-medium">Questions</span></div>
                                <div class="my-2">Wondering how our service works ?</div>
                                <div class="mb-2">Confused about how we can improve your business ?</div>
                                <div class="text-xs text-gray-600">Dive into our FAQ for more details</div>
                            </div>
                            <div class="md:w-2/3">
                                <div class="p-4">
                                    <div class="mb-2">
                                        <div class="font-medium rounded-sm text-lg px-2 py-3 flex text-gray-800 flex-row-reverse mt-2 cursor-pointer text-black bg-white hover:bg-white">
                                            <div class="flex-auto">Where do you offer you services ?</div>
                                            <div class="px-2 mt-1">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down w-5 h-5">
                                                        <polyline points="6 9 12 15 18 9"></polyline>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-2">
                                        <div class="font-medium rounded-sm text-lg px-2 py-3 flex text-gray-800 flex-row-reverse mt-2 cursor-pointer text-black bg-white hover:bg-white">
                                            <div class="flex-auto">How are your services safe with the current pandemic?</div>
                                            <div class="px-2 mt-1">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down w-5 h-5">
                                                        <polyline points="6 9 12 15 18 9"></polyline>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-2">
                                        <div class="font-medium rounded-sm text-lg px-2 py-3 flex text-gray-800 flex-row-reverse mt-2 cursor-pointer text-black bg-white hover:bg-white">
                                            <div class="flex-auto">Are you guys proffesionals ?</div>
                                            <div class="px-2 mt-1">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up w-5 h-5">
                                                        <polyline points="18 15 12 9 6 15"></polyline>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="p-2 text-justify text-left text-gray-800 mb-5 bg-white">
                                            Having staff that are well trained in their roles makes a business far better in many different ways. It’s a fact that any manager should know, because it is extremely beneficial to a company, whatever industry it’s in. </div>
                                    </div>
                                    <div class="mb-2">
                                        <div class="font-medium rounded-sm text-lg px-2 py-3 flex text-gray-800 flex-row-reverse mt-2 cursor-pointer text-black bg-white hover:bg-white">
                                            <div class="flex-auto">What is your physical location ?</div>
                                            <div class="px-2 mt-1">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down w-5 h-5">
                                                        <polyline points="6 9 12 15 18 9"></polyline>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-2">
                                        <div class="font-medium rounded-sm text-lg px-2 py-3 flex text-gray-800 flex-row-reverse mt-2 cursor-pointer text-black bg-white hover:bg-white">
                                            <div class="flex-auto">What is the average charge per service ?</div>
                                            <div class="px-2 mt-1">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down w-5 h-5">
                                                        <polyline points="6 9 12 15 18 9"></polyline>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container mx-auto">
                <div class="flex justify-center px-6 my-12">

                    <div class="w-full xl:w-3/4 lg:w-11/12 flex">

                        {/* <div
						class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
						 style={daniel1}
					></div> */}

                        <div class="w-full lg:w-full bg-white p-5 rounded-lg lg:rounded-l-none">
                            <div class="px-8 mb-4 text-center">
                                <h3 class="pt-4 mb-2 text-2xl">Got any questions?</h3>
                                <p class="mb-4 text-sm text-gray-700">
                                    We get it, stuff happens. Just enter your email address below and we'll get in touch.
							</p>
                            </div>
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
                                <div class="mb-6 text-center">
                                    <button
                                        class="w-full px-4 py-2 font-bold text-white bg-yellow-900 rounded-full hover:bg-red-100 focus:outline-none focus:shadow-outline"
                                        type="button"
                                    >
                                        Submit
								</button>
                                </div>
                                <hr class="mb-6 border-t" />
                            </form>
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

export default Contact