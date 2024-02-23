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
                    <li>Age: 39</li>

                    <li>Address 1: 834-B Balaya Street Dagupan Tondo, Manila Zip Code 1013</li>
                    <li>Address 2: 18 Lagundi Street CLUPA Calauag, Naga City Zip Code 4400</li>
                    <li>Phone Number: (+63) 945-088-0711</li>
                    <li>Email: suchjose@live.com</li>
                </ul>
            </main>
        </>
    )
}