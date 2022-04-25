import React from 'react'
import simStyle from './Styles/SimcardAdd.module.css'
function SimcardAdd() {
    return (
        <form action="">
            <div className={simStyle.container} class="m-5">
                <header class="bg-primary h-25%">Add New SIM Card</header>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">SSID</label>
                    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Enter SSID Number" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">PUK1</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="PUK1" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">SIM Card Compatibility</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="SIM Card Compatibility" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">User Name</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="User Name" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Customer ID</label>
                    <input type="Number" class="form-control" id="exampleFormControlInput1" placeholder="Customer ID" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Customer First Name</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Customer First Name" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Customer Last Name</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Customer Last Name" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Vendor (Company Name)</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Vendor (Company Name)" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Create-Date</label>
                    <input type="date" class="form-control" id="exampleFormControlInput1" />
                </div>
                <div>
                </div>
                <div className={simStyle.flex01}>
                    <div >
                        <label for="exampleFormControlInput1" class="form-label">SIM Status</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Select Option</option>
                            <option value="1">Blank</option>
                            <option value="2">Active</option>
                            <option value="3">Inactive</option>
                        </select>
                    </div>
                    <div>
                        <label for="exampleFormControlInput1" class="form-label">Physical Status</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Select Option</option>
                            <option value="1">Good</option>
                            <option value="2">Bad</option>
                        </select>
                    </div>
                </div>
                <div lass="col-12 text-center">
                    <button class="btn btn-primary" type="submit">Submit form</button>
                </div>
            </div>
        </form >
    )
}
export default SimcardAdd