import React, { useRef, useState } from 'react'
import vsStyle from './Styles/Vendor.module.css'
// import vsStyle from './ServiceCarrier.module.css';
function VendorForm() {
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
    // FILE 
    const [fileBtn, setFileBtn] = useState(true);
    const [isFile, setIsFile] = useState(false);
    const [fileTable, setFileTable] = useState(false)
    const fileRef = useRef('');
    const handleFile = () => {
        setIsFile(!isFile);
        setFileBtn(!fileBtn)
    };
    const [file, setFile] = useState([]);
    const addFile = () => {
        if (fileRef.current.value === '') {
            alert('Please Enter value for adding plan ')
        }
        else {
            const fileValue = {
                fileName: fileRef.current.value
            }
            setFile([...file, fileValue])
            console.log(file)
            fileRef.current.value = '';
            setFileTable(true);
        }
    }
    const fileDelete = (index) => {
        let newFile = file.slice(0, index).concat(file.slice(index + 1));
        if (file.length == 1 || file.length == 0) {
            setFileTable(false);
        }
        setFile(newFile);

    }

    // END 
    return (
        <form action="">
            <div className={vsStyle.vendorData} class="my-5 mx-5">
                <div class="d-flex justify-content-between px-4">
                    <h3>Vendor</h3>
                    <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#vendorModal">Add New Vendor</button>
                </div>
                <div className={vsStyle.TableData}>
                    <table className={vsStyle.Table}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Plane Code</th>
                                <th>Service Carrier</th>
                                <th>Status</th>
                                <th>Operations</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>SWA Connncect</td>
                                <td>321</td>
                                <td>SWA Connncect</td>
                                <td>Active</td>
                                <td>
                                    <ul>
                                        <button type="button" data-bs-toggle="modal" data-bs-target="#viewVendorModal">View</button>
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
            <div class="modal fade w-100" id="vendorModal" tabindex="-1" aria-labelledby="vendorModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title ms-5" id="vendorModalLabel">Add Vendor
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div style={{ fontFamily: 'sans-serif' }}>
                                <div class="row px-5">
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="mb-3 text-start">
                                            <label f class="form-label"  >Company</label>
                                            <input type="text" class="form-control" placeholder="Company" required />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="mb-3 text-start">
                                            <label f class="form-label"> First Name</label>
                                            <input type="text" class="form-control" placeholder="First Name" required />
                                        </div>
                                    </div>
                                </div>
                                <div class="row px-5">
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="mb-3 text-start">
                                            <label f class="form-label"> Last Name</label>
                                            <input type="text" class="form-control" placeholder="Last Name" required />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="mb-3 text-start">
                                            <label f class="form-label"> Phone</label>
                                            <input type="number" class="form-control" placeholder="Phone" required />
                                        </div>
                                    </div>
                                </div>
                                <div class="row px-5">
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="mb-3 text-start">
                                            <label f class="form-label"> Email</label>
                                            <input type="email" class="form-control" placeholder="Email" />
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="mb-3 text-start">
                                            <label f class="form-label"> Address 01</label>
                                            <input type="text" class="form-control" placeholder="Address 01" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row px-5">
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="mb-3 text-start">
                                            <label f class="form-label"> Address 02</label>
                                            <input type="text" class="form-control" placeholder="Address 02" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="mb-3 text-start">
                                            <label f class="form-label"> City</label>
                                            <input type="text" class="form-control" placeholder="City" />
                                        </div>
                                    </div>

                                </div>
                                <div class="row px-5">
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="mb-3 text-start">
                                            <label f class="form-label"> State</label>
                                            <input type="text" class="form-control" placeholder=" State" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="mb-3 text-start">
                                            <label f class="form-label"> Zip Code</label>
                                            <input type="text" class="form-control" placeholder=" Zip Code" />
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
                                                <button onClick={addNote} className={vsStyle.addBtn} type='button'>ADD</button>
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
                                {/* FILE DATA  */}
                                <div class=" m-3  " >
                                    <div class="d-flex mt-3">
                                        <p class="fs-4 ms-4"> Add Files </p>
                                        {fileBtn && <i onClick={handleFile} style={{ cursor: 'pointer' }} class="bi bi-plus-square fs-4 ms-3 "></i>}
                                        {!fileBtn && <i onClick={handleFile} style={{ cursor: 'pointer' }} class="bi bi-dash-square fs-4 ms-3 "></i>}
                                    </div>
                                </div>
                                {isFile &&
                                    <div class="px-5">
                                        <div style={{ position: "relative", marginBottom: '70px' }}  >
                                            <div class=" mb-3">
                                                {/* <label for="formFile" class="form-label"></label> */}
                                                <input class="form-control" type="file" id="formFile" ref={fileRef} />
                                            </div>
                                            <div>
                                                <button onClick={addFile} className={vsStyle.addBtn} type='button'>ADD</button>
                                            </div>
                                        </div>
                                    </div>
                                }
                                <div class="px-5 mt-3">
                                    {fileTable &&
                                        <div style={{ marginBottom: '20px', marginTop: '0px' }}  >
                                            <table style={{ borderColllaps: 'collapse', width: '100%' }} class="table  border border-1">
                                                <thead>
                                                    <tr>
                                                        <th style={{ backgroundColor: '#ecedf7', width: '5%' }} class="fs-6 fw-normal p-6  border">#</th>
                                                        <th style={{ backgroundColor: '#ecedf7' }} class="fs-6 fw-normal p-6 ps-5 text-center border">Files</th>
                                                        <th style={{ backgroundColor: '#ecedf7', width: '5%' }} class="fs-6 fw-normal p-6 ps-5 border">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {file.map((file, index) => (
                                                        <tr>
                                                            <td style={{ width: '5%' }} class="fs-6 fw-normal border">{index + 1}</td>
                                                            <td class="fs-6 ps-5 text-start fw-normal border">{file.fileName}</td>
                                                            <td class="fs-5 ps-5 fw-normal border">
                                                                <i style={{ color: '#ff4533', cursor: 'pointer' }} onClick={() => fileDelete(index)} class="bi bi-trash ms-2"></i>
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
            <div class="modal fade w-100" id="viewVendorModal" tabindex="-1" aria-labelledby="viewModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="viewModalLabel">Vendor Data
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div style={{ width: '100%' }} className={vsStyle.serviceView}>
                                <h1 style={{ textAlign: 'start', fontSize: '20px' }}>General Information</h1>
                                <table class="table table-striped ">
                                    <tbody>
                                        <tr>
                                            <td>Company</td>
                                            <td>321 Communication</td>
                                        </tr>
                                        <tr>
                                            <td>First Name</td>
                                            <td>Najim </td>
                                        </tr>
                                        <tr>
                                            <td>Last Name</td>
                                            <td>Uddin</td>
                                        </tr>
                                        <tr>
                                            <td>Phone</td>
                                            <td>+82943243343</td>
                                        </tr>
                                        <tr>
                                            <td>Email</td>
                                            <td>swaconnect@gamil.com</td>
                                        </tr>
                                        <tr>
                                            <td>Address 01</td>
                                            <td>House, Street,Atalnta</td>
                                        </tr>
                                        <tr>
                                            <td>Address 02</td>
                                            <td>House, Street,Atalnta</td>
                                        </tr>
                                        <tr>
                                            <td>City</td>
                                            <td>Atlanta</td>
                                        </tr>
                                        <tr>
                                            <td>State</td>
                                            <td>Atlanta</td>
                                        </tr>
                                        <tr>
                                            <td>Zip Code</td>
                                            <td>1230</td>
                                        </tr>
                                        <tr>
                                            <td>Description</td>
                                            <td>SWA connect is supporting affordable communication</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className={vsStyle.button}>
                                    <button className={vsStyle.downloadBtn}><i class="fa fa-download" download></i> Download</button>
                                    <button className={vsStyle.printBtn}><i class="fa fa-print" download></i> Print</button>
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
export default VendorForm