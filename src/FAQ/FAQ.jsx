import React, { useState } from 'react';

const FAQ = () => {
    const faqs = [
        { question: "How much does it cost to set up a store?", answer: "Setting up a store on VybStore is completely free. We believe in empowering influencers without any upfront costs." },
        { question: "What kind of digital products can I sell?", answer: "You can sell a wide range of digital products including e-books, courses, templates, presets, and more. If it's digital, you can likely sell it on VybStore." },
        { question: "Do I need technical skills to use the platform?", answer: "No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It's as simple as a few clicks to get started!" },
        { question: "Is there a limit to the number of products I can list?", answer: "There's no limit to the number of products you can list. You're free to grow your store as much as you want." },
        { question: "How do I receive payments for my sales?", answer: "We offer secure payment processing. Once a sale is made, the funds are transferred to your connected account after a short holding period." },
        { question: "Can I sell internationally on this marketplace?", answer: "Absolutely! VybStore is a global platform. You can reach customers worldwide with your digital products." },
        { question: "What support and resources are available for sellers?", answer: "We offer comprehensive support including tutorials, a knowledge base, and responsive customer service to help you succeed." },
        { question: "Is there a review process for uploaded products?", answer: "Yes, we have a brief review process to ensure all products meet our quality standards and guidelines." }
    ];

    return (
        <section className="flex flex-wrap gap-9 justify-center items-center self-center mt-12 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[516px] max-md:max-w-full">
                <h2 className="text-4xl font-bold text-emerald-500 max-md:max-w-full">
                    FREQUENTLY ASKED QUESTIONS
                </h2>
                <p className="mt-4 text-lg font-medium text-white max-md:max-w-full">
                    <span className="font-bold">Quick answers to questions you may have. Can't find what you're looking for?</span>
                    <br />
                    <span className="font-bold text-white">Check out our full documentation</span>
                </p>
            </div>
            <div className="flex flex-col self-stretch my-auto text-base text-black min-w-[240px] w-[619px] max-md:max-w-full">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </section>
    );
};

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`flex flex-col justify-center px-5 py-3.5 ${isOpen ? 'mt-4' : ''} w-full bg-white rounded-2xl max-md:max-w-full`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex flex-wrap gap-3.5 items-start w-full font-bold max-md:max-w-full"
                aria-expanded={isOpen}
            >
                <span className="flex-grow text-left">{question}</span>
                <img
                    loading="lazy"
                    src={isOpen ? "https://cdn.builder.io/api/v1/image/assets/TEMP/eb05e4a5a103a8cdc52cbaf4e4ce139a43dd81281870dbc90ee808c718a050ca?placeholderIfAbsent=true&apiKey=81cb913614704511878cada97e5eac5c" : "https://cdn.builder.io/api/v1/image/assets/TEMP/0e0752137b33f9631c20d4a6f981b4028aa338220eb07f95ba8917dcaf9aa985?placeholderIfAbsent=true&apiKey=81cb913614704511878cada97e5eac5c"}
                    alt={isOpen ? "Collapse" : "Expand"}
                    className="object-contain shrink-0 w-5 aspect-square"
                />
            </button>
            {isOpen && (
                <>
                    <div className="flex mt-3.5 w-full bg-black min-h-[1px] max-md:max-w-full" />
                    <p className="mt-3.5 font-medium max-md:max-w-full">
                        {answer}
                    </p>
                </>
            )}
        </div>
    );
};

export default FAQ;