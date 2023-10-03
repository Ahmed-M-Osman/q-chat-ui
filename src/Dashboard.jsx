// chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security
import { Fragment, useState } from "react";
import axios from "axios";
import TextDisplay from "./TextDisplay";
import QpartsLogo from "./assets/qpartslogo.jpg";
import Avatar from "./assets/m-esam.jpg";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  Cog6ToothIcon,
  XMarkIcon,
  //   BellIcon,
  //   CalendarIcon,
  //   ChartPieIcon,
  //   DocumentDuplicateIcon,
  //   FolderIcon,
  //   HomeIcon,
  //   UsersIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon, PaperAirplaneIcon } from "@heroicons/react/20/solid";

// const navigation = [
//   { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
//   { name: "Team", href: "#", icon: UsersIcon, current: false },
//   { name: "Projects", href: "#", icon: FolderIcon, current: false },
//   { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
//   { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
//   { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
// ];
// const teams = [
//   { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
//   { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
//   { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
// ];
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

let chat = [
  {
    text: "Who are you?",
    isClient: true,
  },
  {
    text: "I'm Q Chat!",
    isClient: false,
  },
  {
    text: "Who are you?",
    isClient: true,
  },
  {
    text: "I'm Q Chat!",
    isClient: false,
  },
  {
    text: "Who are you?",
    isClient: true,
  },
  {
    text: "I'm Q Chat!",
    isClient: false,
  },
  {
    text: "Who are you?",
    isClient: true,
  },
  {
    text: "I'm Q Chat!",
    isClient: false,
  },
  {
    text: "Who are you?",
    isClient: true,
  },
  {
    text: "I'm Q Chat!",
    isClient: false,
  },
  {
    text: "Who are you?",
    isClient: true,
  },
  {
    text: "I'm Q Chat!",
    isClient: false,
  },
  {
    text: "Who are you?",
    isClient: true,
  },
  {
    text: "I'm Q Chat!",
    isClient: false,
  },
  {
    text: "Who are you?",
    isClient: true,
  },
  {
    text: "I'm Q Chat!",
    isClient: false,
  },
  {
    text: "Who are you?",
    isClient: true,
  },
  {
    text: "I'm Q Chat!",
    isClient: false,
  },
  {
    text: "Who are you?",
    isClient: true,
  },
  {
    text: "I'm Q Chat!",
    isClient: false,
  },
];

const baseURL = "/ask";
axios.defaults.baseURL = `http://localhost:5000`;

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [chat, setChat] = useState([
    {
      text: "System: How Can I Help You?",
      isClient: false,
    },
  ]);
  const [formData, setFormData] = useState({});
  const [inputValue, setInputValue] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    console.log(formData.prompt);
    const obj1 = { text: "User: " + formData.prompt, isClient: true };
    setChat([...chat, obj1]);
    setInputValue("");
    let user_input = JSON.stringify({
      user_input: formData.prompt,
    });

    try {
      axios
        .post(baseURL, user_input, {
          headers: {
            // Overwrite Axios's automatically set Content-Type
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response.data);
          const obj2 = { text: response.data, isClient: false };
          setChat([...chat, obj1, obj2]);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setInputValue(value);
  };

  return (
    <>
      <div className="bg-green-gray">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-green-gray px-6 pb-4 ring-1 ring-white/10">
                    <div className="h-16 shrink-0 items-center">
                      <img
                        className="h-24 w-auto p-4"
                        src={QpartsLogo}
                        alt="Your Company"
                      />
                      <h2 className="mt-4 font-extrabold text-green text-2xl">
                        Q Chat
                      </h2>
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li className="mt-auto">
                          <a
                            href="#"
                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                          >
                            <Cog6ToothIcon
                              className="h-6 w-6 shrink-0"
                              aria-hidden="true"
                            />
                            Settings
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden  p-3 lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col rounded-lg gap-y-5 overflow-y-auto border border-lightGray bg-white px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <img
                className="h-24 w-auto p-4"
                src={QpartsLogo}
                alt="Your Company"
              />
            </div>
            <h2 className="mt-14 font-extrabold text-green text-6xl">Q Chat</h2>
            <nav className="flex flex-1 flex-col"></nav>
          </div>
        </div>

        <div className="lg:pl-72 mt-3 px-4">
          <div className="sticky bg-green top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 rounded-lg px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div
              className="h-6 w-px bg-gray-900/10 lg:hidden"
              aria-hidden="true"
            />
            {/* Avatar and Notifiation */}
            <div className="flex flex-1 gap-x-4 self-stretch justify-end lg:gap-x-6">
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                {/* Separator */}
                <div
                  className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
                  aria-hidden="true"
                />

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <Menu.Button className="-m-1.5 flex items-center justify-items-end justify-self-end p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-11 w-11 rounded-full bg-gray-50"
                      src={Avatar}
                      alt="Avatar"
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span
                        className="ml-4 text-base font-semibold leading-6 text-white"
                        aria-hidden="true"
                      >
                        Mohamed Essam
                      </span>
                      <ChevronDownIcon
                        className="ml-2 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                        color="#FFFFFF"
                      />
                    </span>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? "bg-gray-50" : "",
                                "block px-3 py-1 text-sm leading-6 text-gray-900"
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <main className="py-10">
            <div className="h-96 bg-white overflow-scroll">
              <TextDisplay chat={chat} />
            </div>
            <div className="">
              <div className="flex flex-1 h-20 gap-x-4 self-stretch lg:gap-x-6">
                <form
                  onSubmit={handleFormSubmit}
                  className="relative flex flex-1"
                  method="GET"
                >
                  <label htmlFor="prompt-field" className="sr-only">
                    Prompt
                  </label>
                  <div className="flex flex-1 justify-evenly">
                    <input
                      id="prompt-field"
                      className=" h-full w-full rounded-md border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                      placeholder="Ask me a question..."
                      type="prompt"
                      name="prompt"
                      onChange={handleInputChange}
                      value={inputValue}
                    />
                    <div className="absolute flex mx-5 self-center h-10 w-10 bg-green rounded-full right-0">
                      <PaperAirplaneIcon
                        className="pointer-events-none mx-2 inset-y-0 right-0 h-full w-full"
                        aria-hidden="true"
                        color="#ffffff"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
