import { useState, useEffect, useRef } from "react";

const mapping = [
    {
        id: 0,
        text: "Min."
    },
    {
        id: 1,
        text: "1 jour"
    },
    {
        id: 2,
        text: "2 jours"
    },
    {
        id: 3,
        text: "3 jours"
    },
    {
        id: 4,
        text: "4 jours"
    },
    {
        id: 5,
        text: "5 jours"
    },
    {
        id: 6,
        text: "Max."
    }
]


const RangeSlider = ({ initialMin, initialMax, min, max, step, priceCap }) => {
    const progressRef = useRef(null);
    const [minValue, setMinValue] = useState(initialMin);
    const [maxValue, setMaxValue] = useState(initialMax);

    const handleMin = (e) => {
        if (maxValue - minValue >= priceCap && maxValue <= max) {
            if (parseInt(e.target.value) > parseInt(maxValue)) {
            } else {
                setMinValue(parseInt(e.target.value));
            }
        } else {
            if (parseInt(e.target.value) < minValue) {
                setMinValue(parseInt(e.target.value));
            }
        }
    };

    const handleMax = (e) => {
        if (maxValue - minValue >= priceCap && maxValue <= max) {
            if (parseInt(e.target.value) < parseInt(minValue)) {
            } else {
                setMaxValue(parseInt(e.target.value));
            }
        } else {
            if (parseInt(e.target.value) > maxValue) {
                setMaxValue(parseInt(e.target.value));
            }
        }
    };

    useEffect(() => {
        progressRef.current.style.left = (minValue / max) * step + "%";
        progressRef.current.style.right = step - (maxValue / max) * step + "%";
    }, [minValue, maxValue, max, step]);

    return (
        <div className=" ">
            <div className="flex flex-col w-[95%]">
                <div className="mb-4">
                    <div className="slider relative h-3 rounded-2xl bg-[#E6EEFF]">
                        <div
                            className="progress absolute h-3 bg-[#E6EEFF] rounded "
                            ref={progressRef}
                        ></div>
                    </div>

                    <div className="range-input relative ">
                        <input
                            onChange={handleMin}
                            type="range"
                            min={min}
                            step={step}
                            max={max}
                            value={minValue}
                            className="range-min absolute w-full  -top-2  h-1   bg-transparent  appearance-none pointer-events-none"
                        />
                        <input
                            onChange={handleMax}
                            type="range"
                            min={min}
                            step={step}
                            max={max}
                            value={maxValue}
                            className="range-max absolute w-full  -top-2 h-1  bg-transparent appearance-none  pointer-events-none"
                        />
                    </div>


                </div>
            </div>
            <div className="flex justify-between">
                {mapping.map(item => (
                    <span key={item.id} className={`font-Poppins text-sm ${item.id === minValue || item.id === maxValue || item.id === 0 || item.id === 6? ' text-[#7C8DB5]': 'text-white'}`}>
                        {item.text}
                    </span>
                )
                )}

            </div>
        </div>
    );
};

export default RangeSlider;