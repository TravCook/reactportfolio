import {Fragment} from "react"
import {Menu, Transition} from "@headlessui/react"
import {MenuIcon} from "@heroicons/react/solid"
import "./navbar.css"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function navBar(){
  return (
      <div className="bg-slate-700 h-14 sticky top-0 rounded shadow-lg flex flex-row">
        <div className="invisible  lg:basis-1/4  lg:visible menuDiv">
          <Menu as="div">
            <div>
              <Menu.Button className="bg-gray-300 rounded">
                <MenuIcon className="h-10 w-10 "/>
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
            <Menu.Items className="bg-gray-300 rounded">
              <div>
              <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-black font-medium' : 'font-medium text-black',
                    'block px-4 py-2 text-xl'
                  )}
                >
                  About Me
                </a>
              )}
              </Menu.Item>
              <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-black font-medium' : 'font-medium text-black',
                    'block px-4 py-2 text-xl'
                  )}
                >
                  My Work
                </a>
              )}
              </Menu.Item>
              <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-black font-medium' : 'font-medium text-black',
                    'block px-4 py-2 text-xl'
                  )}
                >
                  Contact
                </a>
              )}
              </Menu.Item>
              </div>
            </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <div className="lg:basis-3/4 content-center centerText">
          <a href="#" className=" text-white font-semibold text-2xl">TRAVIS M. COOK</a> 
        </div>
      </div>
  )
}

export default navBar