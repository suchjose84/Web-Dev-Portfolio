import { useEffect } from "react";

export default function ContactPage() {

    useEffect(() => {
        document.title = "Web Dev Portfolio | Contact Information"
    })

    return (
        <>
            <main>
                <h2>Personal and Contact Information</h2>
                <ul>

                    <li>Name: Jose Such</li>
                    <li>Age: 40</li>

                    <li>Address : 18 Lagundi Street CLUPA Calauag, Naga City Zip Code 4400</li>
                    <li>Phone Number: (+63) 998-386-8357</li>
                    <li>Email: suchjose@live.com</li>
                </ul>
            </main>
        </>
    )
}