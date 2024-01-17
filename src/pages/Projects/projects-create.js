import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Input,
  FormGroup,
  Label,
  Button,
} from "reactstrap";

// Import Editor
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

//Import Date Picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const ProjectsCreate = () => {
  const inpRow = [{ name: "", file: "" }];
  const [startDate, setstartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());
  const [inputFields, setinputFields] = useState(inpRow);
  const [submittedFormData, setSubmittedFormData] = useState(null); // Ajout de l'état pour stocker les données soumises

  const startDateChange = (date) => {
    setstartDate(date);
  };

  const endDateChange = (date) => {
    setendDate(date);
  };

  // Function for Create Input Fields
  function handleAddFields() {
    const item1 = { name: "", file: "" };
    setinputFields([...inputFields, item1]);
  }

  // Function for Remove Input Fields
  function handleRemoveFields(idx) {
    document.getElementById("nested" + idx).style.display = "none";
  }

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the form data
    const formData = new FormData(e.target);
    const data = {};
    for (let entry of formData.entries()) {
      data[entry[0]] = entry[1];
    }

    // Update the submitted form data state
    setSubmittedFormData(data);
  };

  return (
    <>
      <div className="page-content">
        {/* Render Breadcrumbs */}
        <Breadcrumbs title="Projects" breadcrumbItem="Create Project" />

        <Row>
          <Col lg="12">
            <Card>
              <CardBody>
                <CardTitle className="mb-4">Create New Project</CardTitle>
                <form className="outer-repeater">
                  <div data-repeater-list="outer-group" className="outer">
                    <div data-repeater-item className="outer">
                      <FormGroup className="mb-4" row>
                        <Label
                          htmlFor="projectname"
                          className="col-form-label col-lg-2"
                        >
                          Project Name
                        </Label>
                        <Col lg="10">
                          <Input
                            id="projectname"
                            name="projectName"
                            type="text"
                            className="form-control"
                            placeholder="Enter Project Name..."
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup className="mb-4" row>
                        <Label className="col-form-label col-lg-2">
                          Project Description
                        </Label>
                        <Col lg="10">
                          <Input
                            // toolbarClassName="toolbarClassName"
                            // wrapperClassName="wrapperClassName"
                            // editorClassName="editorClassName"
                            placeholder="Place Your Content Here..."
                          />
                        </Col>
                      </FormGroup>

                      <FormGroup className="mb-4" row>
                        <Label className="col-form-label col-lg-2">
                          Project Date
                        </Label>
                        <Col lg="10">
                          <Row>
                            <Col md={6} className="pr-0">
                              <DatePicker
                                className="form-control"
                                selected={startDate}
                                onChange={startDateChange}
                              />
                            </Col>
                            <Col md={6} className="pl-0">
                              <DatePicker
                                className="form-control"
                                selected={endDate}
                                onChange={endDateChange}
                              />
                            </Col>
                          </Row>
                        </Col>
                      </FormGroup>

                      <div className="inner-repeater mb-4">
                        <div className="inner form-group mb-0 row">
                          <Label className="col-form-label col-lg-2">
                            Add Team Member
                          </Label>
                          <div
                            className="inner col-lg-10 ml-md-auto"
                            id="repeater"
                          >
                            {inputFields.map((field, key) => (
                              <div
                                key={key}
                                id={"nested" + key}
                                className="mb-3 row align-items-center"
                              >
                                <Col md="6">
                                  <input
                                    type="text"
                                    className="inner form-control"
                                    defaultValue={field.name}
                                    name={`teamMemberName${key}`}
                                    placeholder="Enter Name..."
                                  />
                                </Col>
                                <Col md="4">
                                  <div className="mt-4 mt-md-0">
                                    <Input
                                      type="file"
                                      className="form-control"
                                      name={`teamMemberFile${key}`}
                                    />
                                  </div>
                                </Col>
                                <Col md="2">
                                  <div className="mt-2 mt-md-0 d-grid">
                                    <Button
                                      color="primary"
                                      className="inner"
                                      onClick={() => {
                                        handleRemoveFields(key);
                                      }}
                                      block
                                    >
                                      Delete
                                    </Button>
                                  </div>
                                </Col>
                              </div>
                            ))}
                          </div>
                        </div>
                        <Row className="justify-content-end">
                          <Col lg="10">
                            <Button
                              color="success"
                              className="inner"
                              onClick={() => {
                                handleAddFields();
                              }}
                            >
                              Add Number
                            </Button>
                          </Col>
                        </Row>
                      </div>
                      <FormGroup className="mb-4" row>
                        <label
                          htmlFor="projectbudget"
                          className="col-form-label col-lg-2"
                        >
                          Budget
                        </label>
                        <div className="col-lg-10">
                          <Input
                            id="projectbudget"
                            name="projectBudget"
                            type="text"
                            placeholder="Enter Project Budget..."
                            className="form-control"
                          />
                        </div>
                      </FormGroup>
                    </div>
                  </div>
                  <Row className="justify-content-end">
                    <Col lg="10">
                      <Button
                        type="submit"
                        color="primary"
                        onSubmit={handleSubmit}
                      >
                        Create Project
                      </Button>
                    </Col>
                  </Row>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ProjectsCreate;

// import React, { useState } from "react";
// import {
//   Row,
//   Col,
//   Card,
//   CardBody,
//   CardTitle,
//   Input,
//   FormGroup,
//   Label,
//   Button,
// } from "reactstrap";

// // Import Editor
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// //Import Date Picker
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// //Import Breadcrumb
// import Breadcrumbs from "../../components/Common/Breadcrumb";

// const ProjectsCreate = () => {
//   const inpRow = [{ name: "", file: "" }];
//   const [startDate, setstartDate] = useState(new Date());
//   const [endDate, setendDate] = useState(new Date());
//   const [inputFields, setinputFields] = useState(inpRow);

//   const startDateChange = (date) => {
//     setstartDate(date);
//   };

//   const endDateChange = (date) => {
//     setendDate(date);
//   };

//   // Function for Create Input Fields
//   function handleAddFields() {
//     const item1 = { name: "", file: "" };
//     setinputFields([...inputFields, item1]);
//   }

//   // Function for Remove Input Fields
//   function handleRemoveFields(idx) {
//     document.getElementById("nested" + idx).style.display = "none";
//   }

//   return (
//     <>
//       <div className="page-content">
//         {/* Render Breadcrumbs */}
//         <Breadcrumbs title="Projects" breadcrumbItem="Create Project" />

//         <Row>
//           <Col lg="12">
//             <Card>
//               <CardBody>
//                 <CardTitle className="mb-4">Create New Project</CardTitle>
//                 <form className="outer-repeater">
//                   <div data-repeater-list="outer-group" className="outer">
//                     <div data-repeater-item className="outer">
//                       <FormGroup className="mb-4" row>
//                         <Label
//                           htmlFor="projectname"
//                           className="col-form-label col-lg-2"
//                         >
//                           Project Name
//                         </Label>
//                         <Col lg="10">
//                           <Input
//                             id="projectname"
//                             name="projectname"
//                             type="text"
//                             className="form-control"
//                             placeholder="Enter Project Name..."
//                           />
//                         </Col>
//                       </FormGroup>
//                       <FormGroup className="mb-4" row>
//                         <Label className="col-form-label col-lg-2">
//                           Project Description
//                         </Label>
//                         <Col lg="10">
//                           <Input
//                             toolbarClassName="toolbarClassName"
//                             wrapperClassName="wrapperClassName"
//                             editorClassName="editorClassName"
//                             placeholder="Place Your Content Here..."
//                           />
//                         </Col>
//                       </FormGroup>

//                       <FormGroup className="mb-4" row>
//                         <Label className="col-form-label col-lg-2">
//                           Project Date
//                         </Label>
//                         <Col lg="10">
//                           <Row>
//                             <Col md={6} className="pr-0">
//                               <DatePicker
//                                 className="form-control"
//                                 selected={startDate}
//                                 onChange={startDateChange}
//                               />
//                             </Col>
//                             <Col md={6} className="pl-0">
//                               <DatePicker
//                                 className="form-control"
//                                 selected={endDate}
//                                 onChange={endDateChange}
//                               />
//                             </Col>
//                           </Row>
//                         </Col>
//                       </FormGroup>

//                       <div className="inner-repeater mb-4">
//                         <div className="inner form-group mb-0 row">
//                           <Label className="col-form-label col-lg-2">
//                             Add Team Member
//                           </Label>
//                           <div
//                             className="inner col-lg-10 ml-md-auto"
//                             id="repeater"
//                           >
//                             {inputFields.map((field, key) => (
//                               <div
//                                 key={key}
//                                 id={"nested" + key}
//                                 className="mb-3 row align-items-center"
//                               >
//                                 <Col md="6">
//                                   <input
//                                     type="text"
//                                     className="inner form-control"
//                                     defaultValue={field.name}
//                                     placeholder="Enter Name..."
//                                   />
//                                 </Col>
//                                 <Col md="4">
//                                   <div className="mt-4 mt-md-0">
//                                     <Input
//                                       type="file"
//                                       className="form-control"
//                                       defaultValue={field.file}
//                                     />
//                                   </div>
//                                 </Col>
//                                 <Col md="2">
//                                   <div className="mt-2 mt-md-0 d-grid">
//                                     <Button
//                                       color="primary"
//                                       className="inner"
//                                       onClick={() => {
//                                         handleRemoveFields(key);
//                                       }}
//                                       block
//                                     >
//                                       Delete
//                                     </Button>
//                                   </div>
//                                 </Col>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                         <Row className="justify-content-end">
//                           <Col lg="10">
//                             <Button
//                               color="success"
//                               className="inner"
//                               onClick={() => {
//                                 handleAddFields();
//                               }}
//                             >
//                               Add Number
//                             </Button>
//                           </Col>
//                         </Row>
//                       </div>
//                       <FormGroup className="mb-4" row>
//                         <label
//                           htmlFor="projectbudget"
//                           className="col-form-label col-lg-2"
//                         >
//                           Budget
//                         </label>
//                         <div className="col-lg-10">
//                           <Input
//                             id="projectbudget"
//                             name="projectbudget"
//                             type="text"
//                             placeholder="Enter Project Budget..."
//                             className="form-control"
//                           />
//                         </div>
//                       </FormGroup>
//                     </div>
//                   </div>
//                 </form>
//                 <Row className="justify-content-end">
//                   <Col lg="10">
//                     <Button type="submit" color="primary">
//                       Create Project
//                     </Button>
//                   </Col>
//                 </Row>
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
//       </div>
//     </>
//   );
// };

// export default ProjectsCreate;
