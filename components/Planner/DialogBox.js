import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { FaCheckCircle } from "react-icons/fa";

export default function DialogBox({ date, setDate, isOpen, closeModal }) {
  const [morning, setMorning] = useState("");
  const [noon, setNoon] = useState("");
  const [confirmation, setConfirmation] = useState(false);
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 font-Roboto font-medium"
        onClose={() => {
          closeModal();
        }}
      >
        <div className="fixed inset-0 overflow-y-auto w-full ">
          <div className="flex min-h-full items-center justify-center py-4 px-2 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
              afterLeave={() => {
                setMorning("");
                setNoon("");
                setConfirmation(false);
              }}
            >
              <Dialog.Panel className="max-w-[260px] xs:min-w-min xs:w-[94%] xs:max-w-[371px] bg-white bg-opacity-95 transform overflow-hidden relative -top-12 p-6 text-left align-middle shadow-xl transition-all rounded-[20px]">
                {date && !confirmation ? (
                  <div
                    className={`
                    ${noon === "" && morning === "" ? "" : "xs:h-[490px]"}
                    flex flex-col xs:min-h-[420px]  `}
                  >
                    <div className="mb-2 xs:mb-6">
                      <div className="font-Roboto xs:text-2xl text-center">
                        Indiquez votre présence en télétravail ou au bureau
                      </div>
                    </div>
                    <div className="font-Roboto text-2xl xs:text-4xl translate-x-4 text-[#787878] mb-4 xs:mb-10">
                      Matin
                    </div>
                    <div className="flex flex-row justify-between w-full mb-4 xs:mb-10">
                      <button
                        onClick={() => {
                          setMorning("Télétravail");
                        }}
                        className="font-normal font-Roboto text-xs xs:text-[20px] h-6 xs:h-10 w-20 xs:w-36 rounded-[20px] text-white"
                        style={{
                          background:
                            morning === "Télétravail" || morning === ""
                              ? "linear-gradient(263.44deg, #309AD6 0%, #2B54E6 220.87%)"
                              : "#C5E0DA",
                        }}
                      >
                        Télétravail
                      </button>
                      <button
                        onClick={() => {
                          setMorning("Bureau");
                        }}
                        className="font-normal font-Roboto text-xs xs:text-[20px] h-6 xs:h-10 w-20 xs:w-36 rounded-[20px] text-white"
                        style={{
                          background:
                            morning === "Bureau" || morning === ""
                              ? "linear-gradient(263.44deg, #4EDAB8 0%, #2B54E6 220.87%)"
                              : "#C5E0DA",
                        }}
                      >
                        Bureau
                      </button>
                    </div>
                    <div className="font-Roboto text-2xl xs:text-4xl translate-x-4 text-[#787878] mb-4 xs:mb-10">
                      Après-midi
                    </div>
                    <div className="flex flex-row justify-between w-full mb-4 xs:mb-10">
                      <button
                        onClick={() => {
                          setNoon("Télétravail");
                        }}
                        className="font-normal font-Roboto text-xs xs:text-[20px] h-6 xs:h-10 w-20 xs:w-36 rounded-[20px] text-white"
                        style={{
                          background:
                            noon === "Télétravail" || noon === ""
                              ? "linear-gradient(263.44deg, #309AD6 0%, #2B54E6 220.87%)"
                              : "#C5E0DA",
                        }}
                      >
                        Télétravail
                      </button>
                      <button
                        onClick={() => {
                          setNoon("Bureau");
                        }}
                        className="font-normal font-Roboto text-xs xs:text-[20px] h-6 xs:h-10 w-20 xs:w-36 rounded-[20px] text-white"
                        style={{
                          background:
                            noon === "Bureau" || noon === ""
                              ? "linear-gradient(263.44deg, #4EDAB8 0%, #2B54E6 220.87%)"
                              : "#C5E0DA",
                        }}
                      >
                        Bureau
                      </button>
                    </div>
                    <div className="flex font-normal justify-center mt-4">
                      <button
                        onClick={() => {
                          setDate((current) =>
                            current.map((obj) => {
                              if (obj.date === date.date) {
                                return {
                                  ...obj,
                                  morningMode: morning,
                                  noonMode: noon,
                                  declarationStatus: "declared",
                                };
                              }

                              return obj;
                            })
                          );
                          console.log(date.declarationStatus);
                          // setNoon("");
                          //   closeModal();
                          setConfirmation(true);
                        }}
                        className="font-Roboto text-lg xs:text-3xl text-white rounded-[20px] w-1/2  h-7 xs:h-12"
                        style={{
                          background:
                            "linear-gradient(263.44deg, #30D686 0%, #2B54E6 220.87%)",
                        }}
                      >
                        Confirmer
                      </button>
                    </div>
                  </div>
                ) : (
                  date && (
                    <div className="flex flex-col font-Roboto xs:text-xl xs:h-[380px]">
                      <div className="flex text-center">
                        Votre déclaration a été soumise avec succès.
                      </div>
                      <div className="flex text-[#7ED957] justify-center my-6 xs:my-12">
                        <FaCheckCircle size={80} />
                      </div>

                      <div className="flex-col text-center">
                        <span className="capitalize">
                          {date.timestamp.toLocaleString("fr", {
                            weekday: "short",
                          })}
                          &nbsp;
                        </span>
                        {date.timestamp.toLocaleString("fr", {
                          day: "2-digit",
                        }) +
                          " " +
                          date.timestamp.toLocaleString("fr", {
                            month: "long",
                          }) +
                          " - matinée"}
                        <span className="capitalize block">{morning}</span>
                      </div>
                      <div className="flex-col text-center my-2 xs:my-4">
                        <span className="capitalize">
                          {date.timestamp.toLocaleString("fr", {
                            weekday: "short",
                          })}
                          &nbsp;
                        </span>
                        {date.timestamp.toLocaleString("fr", {
                          day: "2-digit",
                        }) +
                          " " +
                          date.timestamp.toLocaleString("fr", {
                            month: "long",
                          }) +
                          " - après-midi"}
                        <span className="capitalize block">{noon}</span>
                      </div>
                    </div>
                  )
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
