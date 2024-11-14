import { useState } from "react";
import FaqData from "../../data";
import DownToggler from "../Icons/ReactIcon";

const AccordionItem = ({ question, answer, isOpen, onToggle }) => {
    return (
        <div className="border-b border-blue-400">
            <div>
                <button
                    onClick={onToggle}
                    className="flex items-center justify-between w-full p-4 text-left bg-blue-100 hover:bg-blue-200 focus:outline-none transition duration-200"
                >
                    <span className="font-bold text-blue-800">{question}</span>
                    <DownToggler
                        isOpen={isOpen}
                    />
                </button>
            </div>
            {isOpen && (
                <p className="p-4 text-blue-700 bg-blue-50 border-t border-blue-400">
                    {answer}
                </p>
            )}
        </div>
    );
};

export const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    function handleToggle(index) {
        setOpenIndex(openIndex === index ? null : index);
    }

    return (
        <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg">
            {FaqData.map((data, index) => (
                <AccordionItem
                    key={data.id}
                    question={data.question}
                    answer={data.answer}
                    isOpen={openIndex === index}
                    onToggle={() => handleToggle(index)}
                />
            ))}
        </div>
    );
};