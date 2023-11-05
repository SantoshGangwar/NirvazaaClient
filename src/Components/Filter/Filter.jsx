
import { Fragment, useEffect, useMemo, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider'
import SmallCard2 from '../Card/SmallCard2'

import Pagination from '@mui/material/Pagination';
const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
const subCategories = [
  { name: 'Totes', href: '#' },
  { name: 'Backpacks', href: '#' },
  { name: 'Travel Bags', href: '#' },
  { name: 'Hip Bags', href: '#' },
  { name: 'Laptop Sleeves', href: '#' },
]


function classNames(...classes) {
  // console.log("hre arrya print", ...classes)
  return classes.filter(Boolean).join(' ')
}


export default function Filter(card2) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const [materialOptions, setMaterialOptions] = useState([]);
  const [categoryOptions, setcategoryOptions] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSortOption, setSelectedSortOption] = useState(sortOptions[0]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  //
  useEffect(() => {
    setcategoryOptions([...new Set(card2.data.map(item => item.categoryName))]);
    setMaterialOptions([...new Set(card2.data.flatMap(item => item.products.map(product => product.Material)))]);
  }, [card2.data])

  const [value, setValue] = useState([0, 10000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);

  };


  const handleMaterialChange = (event) => {
    const material = event.target.value;
    if (event.target.checked) {
      setSelectedMaterials([...selectedMaterials, material]);
    } else {
      setSelectedMaterials(selectedMaterials.filter((item) => item !== material));
    }
  };

  const handleCategoryChange = (event) => {
    const category = event.target.value;

    if (event.target.checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter((item) => item !== category));
    }

  };


  const handleSortOptionClick = (option) => {

    setSelectedSortOption(option.name);
    // Optionally, you can perform any other actions when the sort option changes
  };

  const handlePageChange = (event, value) => {
    console.log("pages change 0", value)
    setCurrentPage(value);
  };

  const sortData = (data, sortOption) => {
    return data.flatMap((category) => category.products).sort((a, b) => {

      switch (sortOption) {

        case 'popularity':
          // Sort by popularity logic (replace 'popularity' with your actual property)

          return b.popularity - a.popularity;
        case 'rating':
          // Sort by rating logic (replace 'rating' with your actual property)
          return b.rating - a.rating;
        case 'date':
          // Sort by date logic (replace 'date' with your actual property)
          return new Date(b.date) - new Date(a.date);
        case 'Price: Low to High':
          // Sort by price low to high logic (replace 'price' with your actual property)

          return a.Price - b.Price;
        case 'Price: High to Low':
          // Sort by price high to low logic (replace 'price' with your actual property)

          return b.Price - a.Price;
        default:
          return 0;
      }
    });
  };

  const filteredData = card2.data.map((category) => {
    const isCategoryMatched = selectedCategories.length === 0 || selectedCategories.includes(category.categoryName);

    let filteredProducts = [];

    if (isCategoryMatched) {
      // If the category matches the selected category, filter products based on selected materials
      filteredProducts = category.products.filter((product) => {
        const normalizedSelectedMaterials = selectedMaterials.map(material => material.toLowerCase());
        const normalizedProductMaterial = product.Material.toLowerCase();
        const Price = product.Price;
        const isPriceMatched = Price >= value[0] && Price <= value[1]
        const isMaterialMatched = normalizedSelectedMaterials.length === 0 || normalizedSelectedMaterials.includes(normalizedProductMaterial)
        return isMaterialMatched && isPriceMatched;
      });
    }
    // console.log("inside filetr", filteredProducts)
    // Return the category with filtered products only if it matches the selected category and at least one product matches the material filter
    if (isCategoryMatched && filteredProducts.length > 0) {
      return {
        ...category,
        products: filteredProducts,
      };
    }

    // If the category doesn't match or no products match the material filter, return null for this category
    return null;
  }).filter(category => category !== null); // Remove null entries from the resulting array




  const filteredAndSortedData = useMemo(() => {
    const sortedData = sortData(filteredData, selectedSortOption);


    return sortedData

  }, [filteredData, selectedSortOption]);

  const currentItems = filteredAndSortedData.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40  lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <a href={category.href} className="block px-2 py-3">
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>


                    <Disclosure as="div" className="border-t border-gray-200 px-4 py-6">
                      {({ open }) => (
                        <>
                          <h3 className="-mx-2 -my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">Material</span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                ) : (
                                  <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-6">
                              {materialOptions.map((option) => (
                                <div key={option} className="flex items-center">
                                  <input
                                    id={`material-${option}`}
                                    name="Material"
                                    type="checkbox"
                                    value={option}
                                    // checked={selectedMaterial === option}
                                    onChange={handleMaterialChange}

                                    defaultChecked={option.checked}
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  />
                                  <label htmlFor={`material-${option}`} className="ml-3 min-w-0 flex-1 text-gray-500">
                                    {option}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    <Disclosure as="div" className="border-t border-gray-200 px-4 py-6">
                      {({ open }) => (
                        <>
                          <h3 className="-mx-2 -my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">categories</span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                ) : (
                                  <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-6">
                              {categoryOptions.map((option) => (
                                <div key={option} className="flex items-center">
                                  <input
                                    id={`material-${option}`}
                                    name="material"

                                    value={option}

                                    type="checkbox"
                                    defaultChecked={option.checked}
                                    onChange={handleCategoryChange}
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  />
                                  <label htmlFor={`material-${option}`} className="ml-3 min-w-0 flex-1 text-gray-500">
                                    {option}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>

                    <Disclosure as="div" className="border-t border-gray-200 px-4 py-6">
                      {({ open }) => (
                        <>
                          <h3 className="-mx-2 -my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">Price</span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                ) : (
                                  <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-6">



                              <div className="flex items-center">

                                <Box sx={{ width: 300 }}>
                                  <Slider
                                    value={value}
                                    onChange={handleChange}
                                    valueLabelDisplay="auto"
                                    min={0}
                                    max={20000}
                                  />
                                </Box>
                              </div>

                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>

                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <button
                              // href={option.href}
                              className={classNames(
                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm'
                              )}
                              onClick={() => handleSortOptionClick(option)}
                            >
                              {option.name}
                            </button>
                          )}
                        </Menu.Item>

                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="mt-4 border-t border-gray-200 hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href} className="block px-2 py-3">
                        {category.name}
                      </a>
                    </li>
                  ))}
                </ul>
                <Disclosure as="div" className="border-t border-gray-200 px-4 py-6">
                  {({ open }) => (
                    <>
                      <h3 className="-mx-2 -my-3 flow-root">
                        <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-gray-900">Material</span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusIcon className="h-5 w-5" aria-hidden="true" />
                            ) : (
                              <PlusIcon className="h-5 w-5" aria-hidden="true" />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel className="pt-6">
                        <div className="space-y-6">
                          {materialOptions.map((option) => (
                            <div key={option} className="flex items-center">
                              <input
                                id={`material-${option}`}
                                name="Material"
                                type="checkbox"
                                value={option}
                                // checked={selectedMaterial === option}
                                onChange={handleMaterialChange}

                                defaultChecked={option.checked}
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label htmlFor={`material-${option}`} className="ml-3 min-w-0 flex-1 text-gray-500">
                                {option}
                              </label>
                            </div>
                          ))}
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="border-t border-gray-200 px-4 py-6">
                  {({ open }) => (
                    <>
                      <h3 className="-mx-2 -my-3 flow-root">
                        <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-gray-900">categories</span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusIcon className="h-5 w-5" aria-hidden="true" />
                            ) : (
                              <PlusIcon className="h-5 w-5" aria-hidden="true" />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel className="pt-6">
                        <div className="space-y-6">
                          {categoryOptions.map((option) => (
                            <div key={option} className="flex items-center">
                              <input
                                id={`material-${option}`}
                                name="material"

                                value={option}

                                type="checkbox"
                                defaultChecked={option.checked}
                                onChange={handleCategoryChange}
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label htmlFor={`material-${option}`} className="ml-3 min-w-0 flex-1 text-gray-500">
                                {option}
                              </label>
                            </div>
                          ))}
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="border-t border-gray-200 px-4 py-6">
                  {({ open }) => (
                    <>
                      <h3 className="-mx-2 -my-3 flow-root">
                        <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-gray-900">Price</span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusIcon className="h-5 w-5" aria-hidden="true" />
                            ) : (
                              <PlusIcon className="h-5 w-5" aria-hidden="true" />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel className="pt-6">
                        <div className="space-y-6">

                          <div className="flex items-center">

                            <Box sx={{ width: 300 }}>
                              <Slider
                                value={value}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                                min={0}
                                max={20000}
                              />
                            </Box>
                          </div>
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">{/* Your content */}
                <div className='md:flex md:flex-wrap md:gap-4 flex flex-wrap'>

                  <div className='md:flex md:flex-wrap md:gap-4 flex flex-wrap'>
                    {/* {filteredAndSortedData.map((product) => (
                      <SmallCard2 key={product._id} product={product} />
                    ))}
                    */}

                    {currentItems.map(product => (
                      <SmallCard2 key={product._id} product={product} />
                    ))}

                    <Pagination
                      count={Math.ceil(filteredAndSortedData.length / itemsPerPage)} // Calculate the total number of pages
                      page={currentPage}
                      onChange={handlePageChange}
                      shape="rounded"
                      className='mx-auto mt-10'
                    />


                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}




