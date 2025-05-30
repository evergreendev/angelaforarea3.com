"use client"
import React from 'react';
import {useActionState} from 'react';
import {useFormStatus} from 'react-dom';
import {handleVolunteer, handleYardSign} from "@/app/services/mail";
import Spinner from '@/app/components/Spinner';

// Submit button component that shows a spinner when the form is being submitted
const SubmitButton: React.FC<{text: string}> = ({ text }) => {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none disabled:bg-blue-400"
        >
            {pending ? (
                <span className="flex items-center justify-center">
                    <Spinner size="sm" className="mr-2" />
                    <span>Submitting...</span>
                </span>
            ) : (
                text
            )}
        </button>
    );
};

const Page: React.FC = () => {
    const [yardSignIsSubmitted, yardSignFormAction] = useActionState(handleYardSign, {isSubmitted:false});
    const [volunteerIsSubmitted, volunteerFormAction] = useActionState(handleVolunteer, {isSubmitted:false});

    return (
        <div>
            <div className="min-h-screen pt-8 bg-slate-700">
                <div className="p-4 max-w-screen-xl mx-auto flex gap-16 flex-wrap">
                    <div className="grow border p-6">
                        <h1 className="text-xl font-bold mb-4">Request a Yard Sign</h1>
                        {yardSignIsSubmitted.isSubmitted ? "Thank you for requesting a yard sign. We will get one out to you as soon as possible"
                            : <form action={yardSignFormAction}>
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
                                <SubmitButton text="Submit Request" />
                            </form>}
                    </div>
                    <div className="grow border p-6">
                        <h1 className="text-xl font-bold mb-4">Volunteer Sign-Up</h1>
                        {volunteerIsSubmitted.isSubmitted ? "Thank you for your request. Someone from our team will contact you shortly with information on how you can get involved." :
                            <form action={volunteerFormAction}>
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
                                <SubmitButton text="Submit Request" />
                            </form>}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Page;
