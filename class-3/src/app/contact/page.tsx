import React from "react";
import Link from "next/link";

const Contact = () => {
    return (
        <>
            <h1>Contact Page</h1>
            <p>
            Phone: [Your Contact Number]<br />
            Email: [Your Contact Email]<br />
            Address: [Your Business Address]
            </p>
            <br />
            <Link href="/">Go back Home</Link>
        </>
    )
};

export default Contact;
