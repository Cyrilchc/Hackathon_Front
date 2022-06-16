import React from 'react'
import { Link, useParams } from 'react-router-dom'
import TchatMessage from '../../components/Tchat/TchatMessage'
import { BiArrowBack } from 'react-icons/bi'
import { TbSend } from 'react-icons/tb'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { FloatingLabel, Form } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'

const Tchat = (props) => {
	let { id } = useParams();

	let [tchatData, setTchatData] = useState({});

	useEffect(() => {
		scrollDown();

		// setInterval(() => {
			axios.get(`http://172.19.2.11:5000/api/Message/GetChatMessages/${id}`).then(res => {
				setTchatData(res.data);
			});
		// }, 3000);
    }, []);

	let scrollDown = () => {
		let tchat = document.querySelector('.tchat');
		tchat.scrollTop = tchat.scrollHeight;
	}

	let sendMessage = () => {
		let message = document.querySelector('textarea#message').value;
		let toSend =  {
			textMessage: message,
			fromPersonId: 2,
			sentDate: moment().toISOString(),
			chatId: id,
		}
		axios.post("http://172.19.2.11:5000/api/Message/CreateMessage", toSend).then(res => {
			console.log(res);
		});
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
						<h3>{tchatData.name}{/* - {tchatData.teacher.givenName*/}</h3>
                    </div>
                </div>
				<div className='card'>
					<div className='card-body'>
						<div className='tchat' style={{overflow: "hidden auto", maxHeight:'60vh'}}>
							{tchatData.messages?.map((message) => {
								message.isAuthor = message.from.id === 0 // Replace with login user
								return <TchatMessage key={message.id} message={message} />
							})}
						</div>
						<div className='row d-flex align-items-center'>
							<div className='mt-4 col-9'>
								<FloatingLabel
									label='Message'
								>
									<Form.Control id="message" as="textarea" placeholder="comments" style={{maxHeight:"400px"}}></Form.Control>
								</FloatingLabel>
							</div>
							<button className='btn btn-primary mt-4 col-2' style={{maxHeight:"45px"}} onClick={sendMessage}>Envoyer <TbSend /></button>
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