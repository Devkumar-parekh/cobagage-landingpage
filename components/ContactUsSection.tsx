import React from "react";
import Link from "next/link";

export default function ContactUsSection() {
    return (
        <section
            id="contact-us"
            className="py-12"
            style={{ background: "var(--background)", color: "var(--foreground)" }}
        >
            <div className="container mx-auto px-4">

                {/* Heading */}
                <div className="mb-10">
                    <h3 className="text-[32px] font-bold">Contact Us</h3>
                    <p className="text-gray-500 text-[32px] dark:text-gray-300 mt-2">
                        Fill out the contact form below and share <br />
                        your project ideas with us.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row md:gap-10 items-start">

                    {/* Left Inputs */}
                    <div className="flex-1 w-full h-[272px] flex flex-col justify-between">
                        {/* Name */}
                        <div>
                            <label className="block text-xs text-[#C7C7C7] uppercase mb-2">Name</label>
                            <input
                                type="text"
                                placeholder="Jonnie Dawson"
                                className="w-full h-[50px] rounded-lg border border-gray-300 px-4 focus:outline-none focus:ring-2"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-xs text-[#C7C7C7] uppercase mb-2">Email</label>
                            <input
                                type="email"
                                placeholder="hello@uiwiki.co"
                                className="w-full h-[50px] rounded-lg border border-gray-300 px-4 focus:outline-none focus:ring-2"
                            />
                        </div>

                        {/* Company Name */}
                        <div>
                            <label className="block text-xs text-[#C7C7C7] uppercase mb-2">Company Name</label>
                            <input
                                type="text"
                                placeholder="UI Wiki"
                                className="w-full h-[50px] rounded-lg border border-gray-300 px-4 focus:outline-none focus:ring-2"
                            />
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1 w-full mt-8 md:mt-0 flex justify-center">
                        <img
                            src="/File_img/source/contactus.jpg"
                            alt="Contact"
                            className="w-[662px] max-w-full h-[272px] object-cover rounded-[12px]"
                        />
                    </div>

                </div>

                {/* About Project - FULL WIDTH */}
                <div className="mt-6 w-full">
                    <label className="block text-xs text-[#C7C7C7] uppercase mb-2">About Project</label>
                    <textarea
                        rows={5}
                        placeholder="Tell us about the project.."
                        className="w-full h-[120px] rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 resize-none"
                    ></textarea>
                </div>

                {/* Button */}
                <div className="py-6 md:py-8">
                    <button
                        className="w-full max-w-[209px] h-[50px] px-[32px] pt-[11.5px] pb-[12.5px] rounded-[6px] bg-[#DB5928] text-white"
                    >
                        Send Now
                    </button>
                </div>
            </div>
        </section>
    );
}