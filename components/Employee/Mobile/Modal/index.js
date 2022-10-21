import React, { useState, Fragment } from "react";
import styles from "./Modal.module.css";
import { Dialog, Transition } from "@headlessui/react";
import { BsSearch } from "react-icons/bs";
import { IoStar } from "react-icons/io5";
import Image from "next/image";
export default function index({ isOpen, setIsOpen, avatars }) {
  const month = new Date().toLocaleString("fr", { month: "long" });
  const date = new Date().toLocaleString("fr", { day: "2-digit" });
  const day = new Date().toLocaleString("fr", { weekday: "short" });
  const year = new Date().toLocaleString("fr", { year: "numeric" });

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            setIsOpen(false);
          }}
        >
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={`p-2 xs:p-4 xs:w-[85%] w-full min-h-[400px] xs:min-h-[442px]  ${styles.container}`}
                >
                  <div className="flex flex-col items-center ">
                    <div className="capitalize font-Roboto font-medium text-lg xs:text-2xl">
                      Collaborateurs au bureau
                      <br />
                      <span className="capitalize">{day}</span>
                      {" " + date + " " + month + " " + year}
                    </div>

                    <div className="xs:w-52 w-40 flex rounded-full my-4 px-2">
                      <form className="flex items-center ">
                        <label htmlFor="simple-search" className="sr-only">
                          Search
                        </label>
                        <div className="relative w-full ">
                          <div className="flex text-black absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <BsSearch className="my-auto " />
                          </div>
                          <input
                            type="text"
                            id="simple-search"
                            className="placeholder-black bg-opacity-10 bg-white text-center font-Roboto font-light rounded-full block w-full pl-10 p-1 xs:p-2.5 "
                            placeholder="Rechercher"
                            required
                          />
                        </div>
                      </form>
                    </div>

                    {avatars.map((avatar, index) => {
                      return (
                        <div
                          key={index}
                          className="w-full px-2 xs:w-11/12 flex xs:px-4 my-4 justify-between text-left bg"
                        >
                          <div className="space-x-1 xs:space-x-4 flex ">
                            <Image
                              width={50}
                              height={50}
                              className="relative  z-20 inline-block h-8 xs:h-10 w-8 xs:w-10 rounded-full"
                              src={avatar.avatar}
                              alt=""
                            />
                            <div className="font-Roboto text-base xs:text-xl my-auto ">
                              {avatar.name}
                            </div>
                          </div>
                          <div className="my-auto text-[#F4C01E]">
                            <IoStar className="text-lg xs:text-2xl" />{" "}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
