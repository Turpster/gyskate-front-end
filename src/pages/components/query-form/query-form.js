import React from 'react'

import "./query-form.css"
import Container from "../../../components/container/container";

export default class QueryForm extends React.Component
{
    static FormContentId = {
        name: "query-input-name",
        subject: "query-input-subject",
        email: "query-input-email",
        query: "query-input-query",
        submit: "query-input-submit"
    };


    render() {
        return (
            <form onSubmit={this.submit}>
                <Container>
                    <input placeholder={"Name"} name={QueryForm.FormContentId.name} id={QueryForm.FormContentId.name}/>
                    <input placeholder={"Subject"} name={QueryForm.FormContentId.subject} id={QueryForm.FormContentId.subject}/>
                    <input placeholder={"Email"} name={QueryForm.FormContentId.email} id={QueryForm.FormContentId.email}/>
                </Container>
                <Container>
                    <textarea placeholder={"Query"} name={QueryForm.FormContentId.query} id={QueryForm.FormContentId.query} style={{height: "200px"}}>
                    </textarea>
                </Container>
                <Container>
                    <button>Submit</button>
                </Container>
            </form>
        )
    }

    submit()
    {

    }

}