import React from 'react';

function AboutPage() {
    return (
        <>     
            <div className="heading">
                <h1>About Us!</h1>
                <p>Do you have issues with large doordash or ubereats orders? Always having to 
                    spend large amounts of time to input orders from an excel sheet or gathering
                    everything in one place! Well, here is why ChowTrackr is the right app for you!</p>
            </div>
            <section className="about-us">
                <div className="content">
                    <div className="content1">
                        <h2>How it Works!</h2>
                        <ul>
                            <li>Have each person input their name followed by their order in the Order Tracker!</li>
                            <li>Once all orders gathered, one person can input into delivery app of choice with ease!</li>
                            <li>Now input the ETA and your payment information (ex. Venmo, Zelle, etc) into Delivery tab</li>
                            <li>Enter what everyone owes!</li>
                            <li>Now everyone is aware of delivery times and cost!</li>
                            <li>It's as easy as that and wait for delivery to arrive!</li>
                        </ul>
                    </div>
                    <div className="content2">
                        <h2>Benefits of Using ChowTrackr!</h2>
                        <ul>
                            <li>We reduce the time to input all orders into your delivery app of choice!</li>
                            <li>No more creating unnecessary group chats for large orders!</li>
                            <li>Make things more organized by having everything in one place!</li>
                            <li>We all know orders can be complicated so enter as many details as needed!</li>
                            <li>Take up to 18 orders total by entering in a "NAME" followed by the order!</li>
                            <li>No more passing around phones to have everyone place their orders!</li>
                            <li>Have ETA and payment information available for everyone!</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutPage;