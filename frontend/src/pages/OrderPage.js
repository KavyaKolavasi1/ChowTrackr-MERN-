import React, { useEffect } from 'react';

function OrderPage() {
    useEffect(() => {
        const nameBox1 = document.getElementById("namebox1");
        const foodList1 = document.getElementById("foodList1");

        const nameBox2 = document.getElementById("namebox2");
        const foodList2 = document.getElementById("foodList2");

        function inputFood1() {
            if (nameBox1.value === '') {
                alert("Please write something!");
            } else {
                let li = document.createElement("li");
                li.innerHTML = nameBox1.value;
                foodList1.appendChild(li);
                console.log(li);
        
                let span = document.createElement('span');
                span.innerHTML = "\u00d7";
                li.appendChild(span);
                console.log(span);
            }
        
            nameBox1.value = '';
            maintainTask1();
        }

        function inputFood2() {
            if (nameBox2.value === '') {
                alert("Please write something!");
            } else {
                let li = document.createElement("li");
                li.innerHTML = nameBox2.value;
                foodList2.appendChild(li);
                console.log(li);
        
                let span = document.createElement('span');
                span.innerHTML = "\u00d7";
                li.appendChild(span);
                console.log(span);
            }
        
            nameBox2.value = '';
            maintainTask2();
        }

        document.getElementById("button1").addEventListener("click", inputFood1);
        document.getElementById("button2").addEventListener("click", inputFood2);

        foodList1.addEventListener("click", function (e) {
            if (e.target.tagName === "LI") {
                e.target.classList.toggle("completebox");
                maintainTask1();
            } else if (e.target.tagName === "SPAN") {
                e.target.parentElement.remove();
                maintainTask1();
            }
        }, false);

        foodList2.addEventListener("click", function (e) {
            if (e.target.tagName === "LI") {
                e.target.classList.toggle("completebox");
                maintainTask2();
            } else if (e.target.tagName === "SPAN") {
                e.target.parentElement.remove();
                maintainTask2();
            }
        }, false);

        function maintainTask1() {
            localStorage.setItem("data1", foodList1.innerHTML);
        }

        function saveTask1() {
            foodList1.innerHTML = localStorage.getItem("data1");
        }

        function maintainTask2() {
            localStorage.setItem("data2", foodList2.innerHTML);
        }

        function saveTask2() {
            foodList2.innerHTML = localStorage.getItem("data2");
        }

        saveTask1();
        saveTask2();
    }, []);

    return (
        <>
            <div className="wrapper1">
                <div className="foodorder1">
                    <h2>Order here!</h2>
                    <div className="row">
                        <input type="text" id="namebox1" placeholder="Enter name first, then items" />
                        <button id="button1">Submit</button> 
                    </div>
                    <ul id="foodList1"></ul>
                </div> 

                <div className="foodorder2">
                    <h2>Order here!</h2>
                    <div className="row">
                        <input type="text" id="namebox2" placeholder="Enter name first, then items" />
                        <button id="button2">Submit</button> 
                    </div>
                    <ul id="foodList2"></ul>
                </div> 
            </div>
        </>
    );
}

export default OrderPage;