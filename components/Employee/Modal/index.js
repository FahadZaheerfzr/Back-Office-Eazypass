import React, { useState, Fragment } from "react";
import styles from "./Modal.module.css";
import { Dialog, Transition } from "@headlessui/react";
import { BsSearch } from "react-icons/bs";
import { IoStar } from "react-icons/io5";

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
                <Dialog.Panel className={`p-4 ${styles.container}`}>
                  <div className="flex flex-col items-center">
                    <div className="capitalize font-Roboto font-bold text-2xl">
                      Collaborateurs au bureau
                      <br />
                      <span className="capitalize">{day}</span>
                      {" " + date + " " + month + " " + year}
                    </div>
                    <div className="w-1/2 flex bg-[rgb(255,255,255,0.93)] rounded-full my-4 px-2">
                      {/* <input
                        type="text"
                        placeholder="Rechercher"
                        className=" text-center bg-pink-500 placeholder-black text-black font-Roboto w-full h-9 rounded-3xl  "
                      >
                        <BsSearch className="w-1/6 my-auto" size={25} />
                      </input> 
                      <div className="w-1/6"></div>*/}
                      <form class="flex items-center">
                        <label for="simple-search" class="sr-only">
                          Search
                        </label>
                        <div class="relative w-full">
                          <div class="flex text-black absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <BsSearch className="my-auto" size={25} />
                          </div>
                          <input
                            type="text"
                            id="simple-search"
                            class="placeholder-black focus:ring-0 text-center font-Roboto rounded-full block w-full pl-10 p-2.5 "
                            placeholder="Rechercher"
                            required
                          />
                        </div>
                      </form>
                    </div>

                    {avatars.map((avatar, index) => {
                      return (
                        <div className="w-5/6 flex px-4 my-4 justify-between">
                          <div className="space-x-4 flex ">
                            <img
                              className="relative  z-20 inline-block h-10 w-10 rounded-full"
                              src={avatar.avatar}
                              alt=""
                            />
                            <div className="font-Roboto text-xl my-auto ">
                              {avatar.name}
                            </div>
                          </div>
                          <div className="my-auto text-yellow-500">
                            <IoStar size={25} />{" "}
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
