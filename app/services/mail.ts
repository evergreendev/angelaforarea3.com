"use server"
const adminMail = "noreply@angelaforarea3.com"/*todo Change this*/
const toEmails = "joe@egmrc.com"

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_EMAIL_HOST,
    port: Number(process.env.NEXT_PUBLIC_EMAIL_PORT) || 0,
    auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
        pass: process.env.NEXT_PUBLIC_PASSWORD,
    },
});

const sendEmail = async (subject: string, html: string) => {
    await transporter.sendMail({
        from: adminMail,
        to: toEmails,
        subject: subject,
        html: html,
    });
}

export async function handleYardSign(prevState: { isSubmitted: boolean }, formData: FormData) {

    try {
        const rawFormData = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            address: formData.get('address'),
        }

        await fetch("https://hooks.zapier.com/hooks/catch/21684638/2qqexow/", {
            method: "POST",
            body: JSON.stringify(rawFormData),
        });

        // mutate data
        // revalidate cache
        await sendEmail("New Yard Sign Request", `Name: ${rawFormData.name}<br/>Phone: ${rawFormData.phone}<br/>Address: ${rawFormData.address}`);
    } catch (e) {
        return { isSubmitted: false };
    }

    return { isSubmitted: true };
}

export async function handleVolunteer(prevState: { isSubmitted: boolean }, formData: FormData) {

    try {
        const activities = formData.getAll('activity');

        const rawFormData = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            knockOnDoors: activities.includes('knock-on-doors') ? "X" : "",
            signWaving: activities.includes('sign-waving') ? "X" : "",
            other: activities.includes('other') ? "X" : "",
        }

        await fetch("https://hooks.zapier.com/hooks/catch/21684638/2l67a45/", {
            method: "POST",
            body: JSON.stringify(rawFormData),
        });

        await sendEmail("New Volunteer Sign-Up", `Name: ${rawFormData.name}<br/>Phone: ${rawFormData.phone}<br/>Activities: ${activities.join(", ")}`);
    } catch (e) {
        return { isSubmitted: false };
    }

    return { isSubmitted: true };
}

