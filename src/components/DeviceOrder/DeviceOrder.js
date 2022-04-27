import React, { useRef, useState } from 'react'
import drStyle from './Styles/DeviceOrder.module.css'
// import drStyle from './ServiceCarrier.module.css';
function DeviceReturnForm() {
    // NOTE 
    const [noteBtn, setNoteBtn] = useState(true);
    const [isNote, setIsNote] = useState(false);
    const [noteTable, setNoteTable] = useState(false)
    const noteRef = useRef('');
    const handleNote = () => {
        setIsNote(!isNote);
        setNoteBtn(!noteBtn)
    };
    // addNote
    const [note, setNote] = useState([]);
    const addNote = () => {
        if (noteRef.current.value === '') {
            alert('Please Enter value for adding plan ')
        }
        else {
            const noteValue = {
                noteName: noteRef.current.value
            }
            setNote([...note, noteValue])
            console.log(note)
            noteRef.current.value = '';
            setNoteTable(true);
        }
    }
    const noteDelete = (index) => {
        let newNote = note.slice(0, index).concat(note.slice(index + 1));
        if (note.length == 1 || note.length == 0) {
            setNoteTable(false);
        }
        setNote(newNote);
    }

    // END 
    return (
        <form action="">
            <div className={drStyle.simreturnData} class="my-5 mx-5">
                <div class="d-flex justify-content-between px-4">
                    <h3>Device Order</h3>
                    <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#devicereturnModal">Add Device Order</button>
                </div>
                <div className={drStyle.TableData}>
                    <table className={drStyle.Table}>
                        <thead>
                            <tr>
                                <th>Device Order Number</th>
                                <th>Order Date</th>
                                <th>Quantity</th>
                                <th>Vendor</th>
                                <th>Received Date</th>
                                <th>Operations</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>324</td>
                                <td>20 April 2022</td>
                                <td>32</td>
                                <td>William</td>
                                <td>20 April 2022</td>
                                <td>
                                    <ul>
                                        <button type="button" data-bs-toggle="modal" data-bs-target="#viewdevicereturnModal">View</button>
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
            <div class="modal fade w-100" id="devicereturnModal" tabindex="-1" aria-labelledby="devicereturnModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title ms-5" id="devicereturnModalLabel">Add Sim Card Return Data
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div style={{ fontFamily: 'sans-serif' }}>
                                <div class="row px-5">
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="mb-3 text-start">
                                            <label f class="form-label"  >Device Order Number</label>
                                            <input type="text" class="form-control" placeholder="Device Order Number" required />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="mb-3 text-start">
                                            <label f class="form-label"> Item</label>
                                            <input type="text" class="form-control" placeholder="Return Reason" required />
                                        </div>
                                    </div>
                                </div>
                                <div class="row px-5">
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="mb-3 text-start">
                                            <label f class="form-label">Oreder Date </label>
                                            <input type="date" class="form-control" required />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="mb-3 text-start">
                                            <label f class="form-label"> Quantity</label>
                                            <input type="number" class="form-control" placeholder="Quantity" required />
                                        </div>
                                    </div>
                                </div>
                                <div class="row px-5">
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="mb-3 text-start">
                                            <label f class="form-label"> SSID</label>
                                            <input type="text" class="form-control" placeholder="SSID" />
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="mb-3 text-start">
                                            <label f class="form-label"> Device Serial Number</label>
                                            <input type="text" class="form-control" placeholder="Device Serial Number" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row px-5">
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="mb-3 text-start">
                                            <label f class="form-label"> IMEI-1</label>
                                            <input type="text" class="form-control" placeholder="IMEI-1" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="mb-3 text-start">
                                            <label f class="form-label"> IMEI-2</label>
                                            <input type="text" class="form-control" placeholder="IMEI-2" />
                                        </div>
                                    </div>

                                </div>
                                <div class="row px-5">
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="mb-3 text-start">
                                            <label f class="form-label"> Shipping Method</label>
                                            <input type="text" class="form-control" placeholder=" Shipping Method" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="mb-3 text-start">
                                            <label f class="form-label"> Tracking Number</label>
                                            <input type="text" class="form-control" placeholder=" Tracking Number" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row px-5">
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="mb-3 text-start">
                                            <label f class="form-label"> Reception Status</label>
                                            <input type="text" class="form-control" placeholder=" Reception Status" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="mb-3 text-start">
                                            <label f class="form-label"> Reception Date</label>
                                            <input type="date" class="form-control" />
                                        </div>
                                    </div>
                                </div>
                                {/* ADD NOTES  */}
                                <div class=" m-3  " >
                                    <div class="d-flex mt-3">
                                        <p class="fs-4 ms-4">Add Notes </p>
                                        {noteBtn && <i onClick={handleNote} style={{ cursor: 'pointer' }} class="bi bi-plus-square fs-4 ms-3 "></i>}
                                        {!noteBtn && <i onClick={handleNote} style={{ cursor: 'pointer' }} class="bi bi-dash-square fs-4 ms-3 "></i>}
                                    </div>
                                </div>
                                {isNote &&
                                    <div class="px-5">
                                        <div style={{ position: "relative", marginBottom: '70px' }}  >
                                            <div class="form-floating mb-3">
                                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" ref={noteRef}></textarea>
                                                <label for="floatingTextarea">Notes</label>
                                            </div>
                                            <div>
                                                <button onClick={addNote} className={drStyle.addBtn} type='button'>ADD</button>
                                            </div>
                                        </div>
                                    </div>
                                }
                                <div class="px-5 mt-3">
                                    {noteTable &&
                                        <div style={{ marginBottom: '20px', marginTop: '0px' }}  >
                                            <table style={{ borderColllaps: 'collapse', width: '100%' }} class="table  border border-1">
                                                <thead>
                                                    <tr>
                                                        <th style={{ backgroundColor: '#ecedf7', width: '5%' }} class="fs-6 fw-normal p-6  border">#</th>
                                                        <th style={{ backgroundColor: '#ecedf7' }} class="fs-6 fw-normal p-6 ps-5 text-center border">Notes</th>
                                                        <th style={{ backgroundColor: '#ecedf7', width: '5%' }} class="fs-6 fw-normal p-6 ps-5 border">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {note.map((note, index) => (
                                                        <tr>
                                                            <td style={{ width: '5%' }} class="fs-6 fw-normal border">{index + 1}</td>
                                                            <td class="fs-6 ps-5 text-start fw-normal border">{note.noteName}</td>
                                                            <td class="fs-5 ps-5 fw-normal border">
                                                                <i style={{ color: '#ff4533', cursor: 'pointer' }} onClick={() => noteDelete(index)} class="bi bi-trash ms-2"></i>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    }
                                </div>
                                {/* END  */}

                                {/* END  */}
                                <div style={{ marginTop: '50px' }} class="col-12 text-center">
                                    <button class="btn btn-primary" type="submit">Add Vendor</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* start  */}
            <div class="modal fade w-100" id="viewdevicereturnModal" tabindex="-1" aria-labelledby="viewModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="viewModalLabel">Device Order Data
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div style={{ width: '100%' }} className={drStyle.serviceView}>
                                <h1 style={{ textAlign: 'start', fontSize: '20px' }}>General Information</h1>
                                <table class="table table-striped ">
                                    <tbody>
                                        <tr>
                                            <td>Device Order Number</td>
                                            <td>321 </td>
                                        </tr>
                                        <tr>
                                            <td>Item</td>
                                            <td>Sim Card </td>
                                        </tr>
                                        <tr>
                                            <td>Order Date</td>
                                            <td>20 April 2022 </td>
                                        </tr>
                                        <tr>
                                            <td>Quantity</td>
                                            <td>323</td>
                                        </tr>
                                        <tr>
                                            <td>Vendor</td>
                                            <td>William</td>
                                        </tr>
                                        <tr>
                                            <td>Tracking Number</td>
                                            <td>abc234</td>
                                        </tr>
                                        <tr>
                                            <td>Received Date</td>
                                            <td>20 April 2022</td>
                                        </tr>
                                        <tr>
                                            <td>Batch Number</td>
                                            <td>abc234</td>
                                        </tr>
                                        <tr>
                                            <td>Device Modal</td>
                                            <td>AM243233</td>
                                        </tr>
                                        <tr>
                                            <td>Notes</td>
                                            <td>SWA connect is a supporting affordable communication</td>
                                        </tr>
                                        <tr>
                                            <td>Files</td>
                                            <td>swaconnect.png</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className={drStyle.button}>
                                    <button className={drStyle.downloadBtn}><i class="fa fa-download" download></i> Download</button>
                                    <button className={drStyle.printBtn}><i class="fa fa-print" download></i> Print</button>
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
export default DeviceReturnForm