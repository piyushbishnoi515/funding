import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (

        <div className="border-b border-[#DDDDDF]">

            <button
                onClick={toggleAccordion}
                className="flex justify-between items-center w-full py-4 text-left text-lg font-medium text-black"
            >
                <span>{title}</span>
                <span className="text-2xl font-bold">{isOpen ? '-' : '+'}</span>
            </button>
            {isOpen && (
                <div className="py-5 text-gray-600 font-poppins font-medium text-lg ">
                    {content}
                </div>
            )}
        </div>
    );
};

const AccordionGroup = () => {
    return (
        <div className=' bg-Alabaster'>
            <div className="container mx-auto  ">
                <h2 className=' uppercase font-poppins font-medium text-sm text-[#76767F] text-center pt-[70px] pb-[20px]'>still have questions?</h2>
                <p className=' text-center text-black font-abril font-semibold text-[40px] leading-[40px] pb-[24px]'>Learn more with FAQ</p>
                <div className=' pt-[60px] pb-[60px]'>
                    <Accordion
                        title="Who is eligible for a Growth Plan?"
                        content="This is the content of Accordion Item 1. It expands to show more details."
                    />
                    <Accordion
                        title="How much funding can I qualify for?"
                        content="This is the content of Accordion Item 2. It expands to show more details."
                    />
                    <Accordion
                        title="What is the cost of the Growth Plan?										"
                        content="This is the content of Accordion Item 3. It expands to show more details."
                    />
                    <Accordion
                        title="Does 8fig charge money for its services?								"
                        content="This is the content of Accordion Item 3. It expands to show more details."
                    />
                </div>
            </div>
        </div>
    );
};

export default AccordionGroup;
