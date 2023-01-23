import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';

const AccordionOne = ({customStyle}) => {
    return (
        <Accordion className={`rn-accordion-style ${customStyle}`} defaultActiveKey="0">
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    What is GigaStudios? What do you do?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>"GigaStudios offers a full range of services, whether it be website design or app development, to hosting or maintenance. We help businesses achieve their online goals. </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    What is the process for working with GigaStudios?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>The process for working with GigaStudios typically begins with an initial consultation to understand your business needs and goals. We then create a proposal and project plan, and work closely with you throughout the development process to ensure that the final product meets your expectations. We also provide ongoing maintenance and support services to ensure that your website or application is always running smoothly.</Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    What is the typical timeline for a web development project?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>The timeline for a web development project can vary depending on the complexity of the project and the client's specific requirements. However, in general, a simple website can take anywhere from a few weeks to a couple of months to complete, while a more complex website or application can take several months or even longer. We work with our clients to establish a timeline that meets their needs and budget.</Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                    What is included in your maintenance and support services?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                    <Card.Body>Our maintenance and support services include regular updates to ensure that your website or application is always running smoothly and securely. We also provide troubleshooting and bug fixing, as well as assistance with updating content, adding new features, and integrating with other systems as needed.</Card.Body>
                </Accordion.Collapse>
            </Card>

        </Accordion>
    )
}
export default AccordionOne

