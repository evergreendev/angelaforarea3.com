"use client"
import React from 'react';
import {handleVolunteer, handleYardSign} from "@/app/services/mail";

const Page: React.FC = () => {

    const [yardSignIsSubmitted, setYardSignIsSubmitted] = React.useState(false);
    const [volunteerIsSubmitted, setVolunteerIsSubmitted] = React.useState(false);

    return (
        <div>
            <div className="min-h-screen pt-8 bg-slate-700">
                <div className="p-4 max-w-screen-xl mx-auto flex gap-16 flex-wrap">
                    <div className="grow border p-6">
                        <h1 className="text-xl font-bold mb-4">Request a Yard Sign</h1>
                        {yardSignIsSubmitted ? "Thank you for requesting a yard sign. We will get one out to you as soon as possible": <form action={(formData) => handleYardSign(formData, setYardSignIsSubmitted)}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium white">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="text-gray-900 mt-1 p-2 w-full border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-sm font-medium white">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="text-gray-900 mt-1 p-2 w-full border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="address" className="block text-sm font-medium white">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    className="text-gray-900 mt-1 p-2 w-full border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none"
                            >
                                Submit Request
                            </button>
                        </form>}
                    </div>
                    <div className="grow border p-6">
                        <h1 className="text-xl font-bold mb-4">Volunteer Sign-Up</h1>
                        {volunteerIsSubmitted ? "Thank you for your request. Someone from our team will contact you shortly with information on how you can get involved." :<form action={(formData) => handleVolunteer(formData, setVolunteerIsSubmitted)}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium white">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="text-gray-900 mt-1 p-2 w-full border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-sm font-medium white">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="text-gray-900 mt-1 p-2 w-full border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <h2 className="font-bold">I want to:</h2>
                                <div className="flex flex-col gap-2 mt-2">
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id="knock-on-doors"
                                            name="activity"
                                            value="knock-on-doors"
                                            className="mr-2"
                                        />
                                        <label htmlFor="knock-on-doors">Knock on Doors</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id="sign-waving"
                                            name="activity"
                                            value="sign-waving"
                                            className="mr-2"
                                        />
                                        <label htmlFor="sign-waving">Wave Signs</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id="other"
                                            name="activity"
                                            value="other"
                                            className="mr-2"
                                        />
                                        <label htmlFor="other">Other</label>
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none"
                            >
                                Submit Request
                            </button>
                        </form>}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Page;
