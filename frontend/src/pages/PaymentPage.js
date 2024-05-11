import React, { useEffect } from 'react';

function OrderPage() {
    useEffect(() => {
        const etaBox = document.getElementById("eta");
        const foodListETA = document.getElementById("foodListeta");

        const paymentBox = document.getElementById("payment");
        const foodListPay = document.getElementById("foodListpay");

        const paynameBox = document.getElementById("payname");
        const foodListPayName = document.getElementById("foodListpayname");

        const oweBox = document.getElementById("payowe");
        const foodListPayOwe = document.getElementById("foodListpayowe");

        function eta() {
            if (etaBox.value === '') {
                alert("Please write something!");
            } else {
                let li = document.createElement("li");
                li.innerHTML = etaBox.value;
                foodListETA.appendChild(li);
                
                let span = document.createElement('span');
                span.innerHTML = "\u00d7";
                li.appendChild(span);
            }
        
            etaBox.value = '';
            maintainTaskETA();
        }

        function maintainTaskETA() {
            localStorage.setItem("dataETA", foodListETA.innerHTML);
        }

        function saveTaskETA() {
            foodListETA.innerHTML = localStorage.getItem("dataETA");
        }

        document.getElementById("buttoneta").addEventListener("click", eta);

        foodListETA.addEventListener("click", function (e) {
            if (e.target.tagName === "LI") {
                e.target.classList.toggle("completebox");
                maintainTaskETA();
            } else if (e.target.tagName === "SPAN") {
                e.target.parentElement.remove();
                maintainTaskETA();
            }
        }, false);

        saveTaskETA();

        function paymethod() {
            if (paymentBox.value === '') {
                alert("Please write something!");
            } else {
                let li = document.createElement("li");
                li.innerHTML = paymentBox.value;
                foodListPay.appendChild(li);
                
                let span = document.createElement('span');
                span.innerHTML = "\u00d7";
                li.appendChild(span);
            }
        
            paymentBox.value = '';
            maintainTaskPay();
        }

        function maintainTaskPay() {
            localStorage.setItem("dataPay", foodListPay.innerHTML);
        }

        function saveTaskPay() {
            foodListPay.innerHTML = localStorage.getItem("dataPay");
        }

        document.getElementById("buttonpay").addEventListener("click", paymethod);

        foodListPay.addEventListener("click", function (e) {
            if (e.target.tagName === "LI") {
                e.target.classList.toggle("completebox");
                maintainTaskPay();
            } else if (e.target.tagName === "SPAN") {
                e.target.parentElement.remove();
                maintainTaskPay();
            }
        }, false);

        saveTaskPay();

        function payname() {
            if (paynameBox.value === '') {
                alert("Please write something!");
            } else {
                let li = document.createElement("li");
                li.innerHTML = paynameBox.value;
                foodListPayName.appendChild(li);
                
                let span = document.createElement('span');
                span.innerHTML = "\u00d7";
                li.appendChild(span);
            }
        
            paynameBox.value = '';
            maintainTaskPayName();
        }

        function maintainTaskPayName() {
            localStorage.setItem("dataPayName", foodListPayName.innerHTML);
        }

        function saveTaskPayName() {
            foodListPayName.innerHTML = localStorage.getItem("dataPayName");
        }

        document.getElementById("buttonpayname").addEventListener("click", payname);

        foodListPayName.addEventListener("click", function (e) {
            if (e.target.tagName === "LI") {
                e.target.classList.toggle("completebox");
                maintainTaskPayName();
            } else if (e.target.tagName === "SPAN") {
                e.target.parentElement.remove();
                maintainTaskPayName();
            }
        }, false);

        saveTaskPayName();

        function owe() {
            if (oweBox.value === '') {
                alert("Please write something!");
            } else {
                let li = document.createElement("li");
                li.innerHTML = oweBox.value;
                foodListPayOwe.appendChild(li);
                
                let span = document.createElement('span');
                span.innerHTML = "\u00d7";
                li.appendChild(span);
            }
        
            oweBox.value = '';
            maintainTaskOwe();
        }

        function maintainTaskOwe() {
            localStorage.setItem("dataOwe", foodListPayOwe.innerHTML);
        }

        function saveTaskOwe() {
            foodListPayOwe.innerHTML = localStorage.getItem("dataOwe");
        }

        document.getElementById("buttonpayowe").addEventListener("click", owe);

        foodListPayOwe.addEventListener("click", function (e) {
            if (e.target.tagName === "LI") {
                e.target.classList.toggle("completebox");
                maintainTaskOwe();
            } else if (e.target.tagName === "SPAN") {
                e.target.parentElement.remove();
                maintainTaskOwe();
            }
        }, false);

        saveTaskOwe();
    }, []);

    return (
        <>
            <div className="delivery">
                <div className="deliveryeta">
                    <h2>What is the ETA?</h2>
                    <p>(Example: 11:30 AM)</p>
                        <input type="text" id="eta" />
                        <button id="buttoneta">Submit</button> 
                    
                    <ul id="foodListeta"></ul>
                </div> 

            <div className="deliverypay">
                <h2>Enter Payment Method Here!</h2>
                <p>(Example: Venmo, Zelle, Google Pay, etc.)</p>
                    <input type="text" id="payment" />
                    <button id="buttonpay">Submit</button> 
                <ul id="foodListpay"></ul>
            </div> 

            <div className="deliveryname">
                <h2>Enter Pay Me At!</h2>
                <p>(Example: @osubeaver)</p>
                    <input type="text" id="payname" />
                    <button id="buttonpayname">Submit</button> 
                <ul id="foodListpayname"></ul>
            </div> 
            <div className="deliveryowe">
                <h2>What You Owe!</h2>
                <p>(Example: Cindy - $22.74)</p>
                    <input type="text" id="payowe" />
                    <button id="buttonpayowe">Submit</button> 
                <ul id="foodListpayowe"></ul>
            </div> 
            </div>


        </>
    );
}

export default OrderPage;