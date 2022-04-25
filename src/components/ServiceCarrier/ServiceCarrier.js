import React, { useRef, useState } from 'react'
import scStyle from './Styles/ServiceCarrier.module.css'
function ServiceCform() {
    const [plusBtn, setPlusBtn] = useState(true);
    const [isShow, setIsshow] = useState(false);
    const handleClick = () => {
        setIsshow(!isShow);
        setPlusBtn(!plusBtn);
    };
    const [plan, setPlan] = useState([]);
    const planNameRef = useRef('');
    const planCodeRef = useRef('');
    const planDesRef = useRef('');
    const addData = () => {
        if (planNameRef.current.value === '' || planCodeRef.current.value === '' || planDesRef.current.value === '') {
            alert('Please Enter value for adding plan ')
        }
        else {
            const planValue = {
                planName: planNameRef.current.value,
                planCode: planCodeRef.current.value,
                planDes: planDesRef.current.value
            }
            setPlan([...plan, planValue])
            console.log(plan)
            planNameRef.current.value = '';
            planCodeRef.current.value = '';
            planDesRef.current.value = '';
        }
    }
    return (
        <form action="">
            <div class="my-5">
                <div class="d-flex justify-content-between px-4">
                    <h3>Service Carriers</h3>
                    <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#serviceModal">Add New Service Carrier</button>
                </div>
                <div className={scStyle.TableData}>
                    <table className={scStyle.Table}>
                        <thead>
                            <tr>
                                <th>Label</th>
                                <th>Name (Company Name)</th>
                                <th>Date-Created</th>
                                <th>Status</th>
                                <th>Operations</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Label</td>
                                <td>SWA Connncect</td>
                                <td>12 April 2022</td>
                                <td>Active</td>
                                <td>
                                    <ul>
                                        <button type="button" data-bs-toggle="modal" data-bs-target="#viewModal">View</button>
                                        <button>Edit</button>
                                        <button>Delete </button>
                                        <button>Active</button>
                                        <button>Deactive</button>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="modal fade w-100" id="serviceModal" tabindex="-1" aria-labelledby="serviceModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="serviceModalLabel">Add Service Carrier
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div style={{ fontFamily: 'sans-serif' }}>
                                <div class="row px-5">
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="mb-3 text-start">
                                            <label f class="form-label"  >Name</label>
                                            <input type="text" class="form-control" placeholder="Name" required />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="mb-3 text-start">
                                            <label f class="form-label">Label</label>
                                            <input type="text" class="form-control" placeholder="Label" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row px-5">
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="mb-3 text-start">
                                            <label f class="form-label">Contact Name</label>
                                            <input type="text" class="form-control" placeholder="Contact Name" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="mb-3 text-start">
                                            <label f class="form-label">Contact Phone</label>
                                            <input type="text" class="form-control" placeholder="Contact Phone" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row px-5">
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="mb-3 text-start">
                                            <label f class="form-label">Contact Email</label>
                                            <input type="email" class="form-control" placeholder="Contact Email" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="mb-3 text-start">
                                            <label f class="form-label">Support Name</label>
                                            <input type="text" class="form-control" placeholder="Support Name" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row px-5">

                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="mb-3 text-start">
                                            <label f class="form-label">Support Phone</label>
                                            <input type="text" class="form-control" placeholder="Support Phone" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="mb-3 text-start">
                                            <label f class="form-label">Support Email</label>
                                            <input type="text" class="form-control" placeholder="Support Email" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row px-5">
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="mb-3 text-start">
                                            <label f class="form-label">Api User Name</label>
                                            <input type="text" class="form-control" placeholder="Api User Name" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="mb-3 text-start">
                                            <label f class="form-label">Api Token Password</label>
                                            <input type="password" class="form-control" placeholder="Api Token Password" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row px-5">
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="mb-3 text-start">
                                            <label f class="form-label">Api Pin</label>
                                            <input type="password" class="form-control" placeholder="Api Pin" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="mb-3 text-start">
                                            <label f class="form-label">CLECID</label>
                                            <input type="text" class="form-control" placeholder="CLECID" />
                                        </div>
                                    </div>
                                </div>
                                {/* Phone Plans  */}
                                <div class=" m-3 " >
                                    <div class="d-flex mt-3">
                                        <p class="fs-4 ms-4">Add Phone Plan </p>
                                        {plusBtn && <i onClick={handleClick} style={{ cursor: 'pointer' }} class="bi bi-plus-square fs-4 ms-3 "></i>}
                                        {!plusBtn && <i onClick={handleClick} style={{ cursor: 'pointer' }} class="bi bi-dash-square fs-4 ms-3 "></i>}
                                        {/* {plusBtn && <i onClick={handleClick} style={{ cursor: 'pointer' }} class=" fa-solid fa-plus-large fs-3 ms-3 "></i>}
                                        {!plusBtn && <i onClick={handleClick} style={{ cursor: 'pointer' }} class="fa-solid fa-minus-large fs-3 ms-3 "></i>} */}
                                    </div>
                                </div>
                                {isShow &&
                                    <div>
                                        <div style={{ position: "relative" }} class="px-5 mb-5">
                                            <div class="row ">
                                                <div class="col-12 col-md-6 col-lg-6">
                                                    <div class="mb-3 text-start">
                                                        <label class="form-label">Name</label>
                                                        <input ref={planNameRef} type="text" class="form-control" placeholder="Name" />
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6 col-lg-6">
                                                    <div class="mb-3 text-start">
                                                        <label class="form-label">Plan Code</label>
                                                        <input ref={planCodeRef} type="text" class="form-control" placeholder="Code" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row  ">
                                                <div class="col-12 col-md-12 col-lg-12">
                                                    <div class="mb-3 text-start">
                                                        <label class="form-label">Description</label>
                                                        <textarea ref={planDesRef} class="form-control" placeholder="Leave a description here" id="floatingTextarea"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div >
                                                <button onClick={addData} className={scStyle.addBtn} type='button'>ADD</button>
                                            </div>
                                        </div>
                                        <div>
                                            <table class="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Plane Code</th>
                                                        <th>Plan Description</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        {plan.map((plan, i) => (
                                                            // <td key={i}>{plan.planName}</td>
                                                            // <td key={i}>{plan.planCode}</td>
                                                            <td key={i}>{plan.planDes}</td>
                                                        ))}
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                }
                                {/* End  */}
                                <div class="row px-5">
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="mb-3 text-start">
                                            <label f class="form-label">SIM Status</label>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Select Option</option>
                                                <option value="1">Active</option>
                                                <option value="2">Inactive</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="mb-3 text-start">
                                            <label for="formFileMultiple" class="form-label">Upload Files</label>
                                            <input class="form-control" type="file" id="formFileMultiple" multiple />
                                        </div>
                                    </div>
                                </div>
                                <div class="row px-5">
                                    <div class="col-12 col-md-12 col-lg-12">
                                        <div class="form-floating">
                                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                            <label for="floatingTextarea">Notes</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 text-center mt-4">
                                    <button class="btn btn-primary" type="submit">Submit form</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* start  */}
            <div class="modal fade w-100" id="viewModal" tabindex="-1" aria-labelledby="viewModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="viewModalLabel">Service Carrier Data
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div style={{ width: '100%' }} className={scStyle.serviceView}>
                                <h1 style={{ textAlign: 'start' }}>General Information</h1>
                                <table class="table table-striped ">
                                    <tbody>
                                        <tr>
                                            <td>Name</td>
                                            <td>321 Communication</td>
                                        </tr>
                                        <tr>
                                            <td>Label</td>
                                            <td>We Provide best service</td>
                                        </tr>
                                        <tr>
                                            <td>Contact Name</td>
                                            <td>Tandolkar</td>
                                        </tr>
                                        <tr>
                                            <td>Contact Phone</td>
                                            <td>+92833243239</td>
                                        </tr>
                                        <tr>
                                            <td>Contact Email</td>
                                            <td>tandul32@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <td>Suppor Name</td>
                                            <td>Rohit Sharma</td>
                                        </tr>
                                        <tr>
                                            <td>Support Phone</td>
                                            <td>+92833243239</td>
                                        </tr>
                                        <tr>
                                            <td>Support Email</td>
                                            <td>sharmal32@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <td>Api User Name</td>
                                            <td>Tandulkar</td>
                                        </tr>
                                        <tr>
                                            <td>Api Token Password</td>
                                            <td>124343</td>
                                        </tr>
                                        <tr>
                                            <td>Api Pin</td>
                                            <td>324233</td>
                                        </tr>
                                        <tr>
                                            <td>CLECID</td>
                                            <td>CLECID</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h1 style={{ textAlign: 'start' }}>Phone Plan</h1>
                                <table class="table table-striped ">
                                    <tbody>
                                        <tr>
                                            <td>Name</td>
                                            <td>321 Communication</td>
                                        </tr>
                                        <tr>
                                            <td>Plan Code</td>
                                            <td>T2345dr</td>
                                        </tr>
                                        <tr>
                                            <td>Created Date</td>
                                            <td>21 April 2022</td>
                                        </tr>

                                        <tr>
                                            <td>Description</td>
                                            <td>We love 321 plan tech communication</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h1 style={{ textAlign: 'start' }}>Notes</h1>
                                <table class="table table-striped ">
                                    <tbody>
                                        <tr>
                                            <td>Note</td>
                                            <td>A virtual SIM is a mobile phone number provided by a mobile network operator that does not require a SIM card to connect phone calls to a user's mobile phone.</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h1 style={{ textAlign: 'start' }}>Files</h1>
                                <table class="table table-striped ">
                                    <tbody>
                                        <tr>
                                            <td>Name</td>
                                            <td>firstslide.pdf</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className={scStyle.button}>
                                    <button className={scStyle.downloadBtn}><i class="fa fa-download" download></i> Download</button>
                                    <button className={scStyle.printBtn}><i class="fa fa-print" download></i> Print</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* end  */}

        </form >
    )
}
export default ServiceCform