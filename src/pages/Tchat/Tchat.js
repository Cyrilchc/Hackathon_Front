import React from 'react'
import { Link } from 'react-router-dom'
import TchatMessage from '../../components/Tchat/TchatMessage'
import { BiArrowBack } from 'react-icons/bi'
import { TbSend } from 'react-icons/tb'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { FloatingLabel, Form } from 'react-bootstrap'

const Tchat = () => {
	const tchatData = {
		"chatId": 0,
		"chatName": "Cours",
		"chatComment": "string",
		"messages": [
			{
				"messageId": 0,
				"messageContent": "Message Test",
				"postDateTime": "2022-06-14T12:02:46.290Z",
				"person": {
					"personId": 1,
					"givenName": "Élève",
					"surname": "string",
					"mail": "string",
					"password": "string",
					"birthDate": "2022-06-14T12:02:46.290Z",
					"isAdmin": true,
					"isProfessor": true
				},
				"attachment": {
					"attachmentId": 0,
					"content": "string"
				}
			},
			{
				"messageId": 1,
				"messageContent": "Autre Message Test",
				"postDateTime": "2022-06-14T12:02:46.290Z",
				"person": {
					"personId": 0,
					"givenName": "Élève",
					"surname": "string",
					"mail": "string",
					"password": "string",
					"birthDate": "2022-06-14T12:02:46.290Z",
					"isAdmin": true,
					"isProfessor": true
				},
				"attachment": {
					"attachmentId": 0,
					"content": "string"
				}
			},
			{
				"messageId": 2,
				"messageContent": "Autre Message Test",
				"postDateTime": "2022-06-14T12:02:46.290Z",
				"person": {
					"personId": 1,
					"givenName": "Élève",
					"surname": "string",
					"mail": "string",
					"password": "string",
					"birthDate": "2022-06-14T12:02:46.290Z",
					"isAdmin": true,
					"isProfessor": true
				},
				"attachment": {
					"attachmentId": 0,
					"content": "string"
				}
			},
			{
				"messageId": 3,
				"messageContent": "Autre Message Test",
				"postDateTime": "2022-06-14T12:02:46.290Z",
				"person": {
					"personId": 1,
					"givenName": "Élève",
					"surname": "string",
					"mail": "string",
					"password": "string",
					"birthDate": "2022-06-14T12:02:46.290Z",
					"isAdmin": true,
					"isProfessor": true
				},
				"attachment": {
					"attachmentId": 0,
					"content": "string"
				}
			},
			{
				"messageId": 4,
				"messageContent": "Autre Message Test",
				"postDateTime": "2022-06-14T12:02:46.290Z",
				"person": {
					"personId": 1,
					"givenName": "Élève",
					"surname": "string",
					"mail": "string",
					"password": "string",
					"birthDate": "2022-06-14T12:02:46.290Z",
					"isAdmin": true,
					"isProfessor": true
				},
				"attachment": {
					"attachmentId": 0,
					"content": "string"
				}
			},
			{
				"messageId": 5,
				"messageContent": "Autre Message Test",
				"postDateTime": "2022-06-14T12:02:46.290Z",
				"person": {
					"personId": 0,
					"givenName": "Élève",
					"surname": "string",
					"mail": "string",
					"password": "string",
					"birthDate": "2022-06-14T12:02:46.290Z",
					"isAdmin": true,
					"isProfessor": true
				},
				"attachment": {
					"attachmentId": 0,
					"content": "string"
				}
			},
			{
				"messageId": 6,
				"messageContent": "Autre Message Test",
				"postDateTime": "2022-06-14T12:02:46.290Z",
				"person": {
					"personId": 1,
					"givenName": "Élève",
					"surname": "string",
					"mail": "string",
					"password": "string",
					"birthDate": "2022-06-14T12:02:46.290Z",
					"isAdmin": true,
					"isProfessor": true
				},
				"attachment": {
					"attachmentId": 0,
					"content": "string"
				}
			},
			{
				"messageId": 7,
				"messageContent": "Autre Message Test",
				"postDateTime": "2022-06-14T12:02:46.290Z",
				"person": {
					"personId": 1,
					"givenName": "Élève",
					"surname": "string",
					"mail": "string",
					"password": "string",
					"birthDate": "2022-06-14T12:02:46.290Z",
					"isAdmin": true,
					"isProfessor": true
				},
				"attachment": {
					"attachmentId": 0,
					"content": "string"
				}
			},
			{
				"messageId": 8,
				"messageContent": "Autre Message Test",
				"postDateTime": "2022-06-14T12:02:46.290Z",
				"person": {
					"personId": 0,
					"givenName": "Élève",
					"surname": "string",
					"mail": "string",
					"password": "string",
					"birthDate": "2022-06-14T12:02:46.290Z",
					"isAdmin": true,
					"isProfessor": true
				},
				"attachment": {
					"attachmentId": 0,
					"content": "string"
				}
			},
			{
				"messageId": 9,
				"messageContent": "Autre Message Test",
				"postDateTime": "2022-06-14T12:02:46.290Z",
				"person": {
					"personId": 1,
					"givenName": "Élève",
					"surname": "string",
					"mail": "string",
					"password": "string",
					"birthDate": "2022-06-14T12:02:46.290Z",
					"isAdmin": true,
					"isProfessor": true
				},
				"attachment": {
					"attachmentId": 0,
					"content": "string"
				}
			},
			{
				"messageId": 10,
				"messageContent": "Autre Message Test",
				"postDateTime": "2022-06-14T12:02:46.290Z",
				"person": {
					"personId": 0,
					"givenName": "Élève",
					"surname": "string",
					"mail": "string",
					"password": "string",
					"birthDate": "2022-06-14T12:02:46.290Z",
					"isAdmin": true,
					"isProfessor": true
				},
				"attachment": {
					"attachmentId": 0,
					"content": "string"
				}
			},
			{
				"messageId": 11,
				"messageContent": "Autre Message Test",
				"postDateTime": "2022-06-14T12:02:46.290Z",
				"person": {
					"personId": 0,
					"givenName": "Élève",
					"surname": "string",
					"mail": "string",
					"password": "string",
					"birthDate": "2022-06-14T12:02:46.290Z",
					"isAdmin": true,
					"isProfessor": true
				},
				"attachment": {
					"attachmentId": 0,
					"content": "string"
				}
			},
			{
				"messageId": 12,
				"messageContent": "Autre Message Test",
				"postDateTime": "2022-06-14T12:02:46.290Z",
				"person": {
					"personId": 1,
					"givenName": "Élève",
					"surname": "string",
					"mail": "string",
					"password": "string",
					"birthDate": "2022-06-14T12:02:46.290Z",
					"isAdmin": true,
					"isProfessor": true
				},
				"attachment": {
					"attachmentId": 0,
					"content": "string"
				}
			},
		],
		"students": [
			{
				"personId": 0,
				"givenName": "string",
				"surname": "string",
				"mail": "string",
				"password": "string",
				"birthDate": "2022-06-14T12:02:46.290Z",
				"isAdmin": true,
				"isProfessor": true
			}
		],
		"teacher": {
			"personId": 0,
			"givenName": "Professeur",
			"surname": "string",
			"mail": "string",
			"password": "string",
			"birthDate": "2022-06-14T12:02:46.290Z",
			"isAdmin": true,
			"isProfessor": true
		},
		"startDateTime": "2022-06-14T12:02:46.290Z",
		"endDateTime": "2022-06-14T12:02:46.290Z"
	}

	let scrollDown = () => {
		let tchat = document.querySelector('.tchat');
		tchat.scrollTop = tchat.scrollHeight;
	}

  return (
    <div className="container-xl" style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate3d(-50%,-50%,0)'}}>
        <div className="card">
            <div className="card-body">
                <div className='row mb-3'>
                    <div className='d-grid col-4'>
						<Link to="/tchat">
							<button className='btn btn-primary'><BiArrowBack /> Retour</button>
						</Link>
                    </div>
					<div className='d-grid col-4' />
                    <div className='d-grid col-4'>
						<h3>{tchatData.chatName} - {tchatData.teacher.givenName}</h3>
                    </div>
                </div>
				<div className='card'>
					<div className='card-body'>
						<div className='tchat' style={{overflow: "hidden auto", maxHeight:'60vh'}}>
							{tchatData.messages.map((message) => {
								message.person.isAuthor = message.person.personId === 0 // Replace with login user
								return <TchatMessage key={message.messageId} message={message} />
							})}
						</div>
						<div className='row d-flex align-items-center'>
							<div className='mt-4 col-9'>
								<FloatingLabel
									label='Message'
								>
									<Form.Control as="textarea" placeholder="comments" style={{maxHeight:"400px"}}></Form.Control>
								</FloatingLabel>
							</div>
							<button className='btn btn-primary mt-4 col-2' style={{maxHeight:"45px"}}>Envoyer <TbSend /></button>
							<div className='col-1 d-flex align-items-center'>
								<button className='btn btn-primary mt-4' style={{maxHeight:"45px", maxWidth:"45px"}} onClick={scrollDown}><AiOutlineArrowDown /></button>
							</div>
						</div>
					</div>
				</div>
            </div>
        </div>
    </div>
  )
}

export default Tchat