import React from 'react'

import "./upload-form.css"
import Container from "../../../components/container/container";



export default class UploadForm extends React.Component
{
    static FormContentId = {
        username: "upload-input-username",
        password: "upload-input-password",
        file: "upload-input-file",
        submit: "upload-input-submit"
    };


    render() {
        return (
            <form onSubmit={this.submit}>
                <Container>
                    <input type={"text"} placeholder={"Username"} name={UploadForm.FormContentId.username} id={UploadForm.FormContentId.username}/>
                    <input type={"password"} placeholder={"Password"} name={UploadForm.FormContentId.password} id={UploadForm.FormContentId.password}/>
                </Container>
                <Container>
                    <input type={"file"} name={UploadForm.FormContentId.file} id={UploadForm.FormContentId.file}/>
                </Container>
                <Container>
                    <input type={"submit"} value={"Submit"} name={UploadForm.FormContentId.submit} id={UploadForm.FormContentId.submit}/>
                </Container>
            </form>
        )
    }

    submit()
    {

    }

}