import moment from 'moment'
import React from 'react'
import { MdDeleteForever } from 'react-icons/md'
import 'moment/locale/fr'
import axios from 'axios'

const TchatMessage = (props) => {
	moment.locale('fr');

	let updateMessage = (e) => {
		let message = e.target.value;
		let toSend =  {
			id: props.message.id,
			textMessage: message,
			fromPersonId: props.message.fromPersonId,
			chatId: props.message.chatId
		}
		console.log(toSend);
		axios.put("http://172.19.2.11:5000/api/Message/UpdateMessage", toSend).then(res => {
			console.log(res);
		});
	}

	let deleteMessage = () => {
		axios.delete(`http://172.19.2.11:5000/api/Message/DeleteMessage/${props.message.id}`);
	}

	return (
		<div className='row'>
			{ props.message.isAuthor ? (
				<>
					<div className="col-2"></div>
					<div className='form-floating mb-2 col-9'>
						<input onBlur={updateMessage} type='text' className='form-control' id='message' placeholder="message" defaultValue={props.message.textMessage} />
						<label className='p-3' htmlFor='message'>{props.message.from.lastName} - {moment(props.message.sentDate).calendar()}</label>
					</div>
					<div className='col-1 align-items-center'>
						<button onClick={deleteMessage} className='btn btn-primary' style={{width:"100%", height:"80%"}}><MdDeleteForever /></button>
					</div>
				</>
			) : (
				<div className='form-floating mb-2 col-9'>
					<input type='text' className='form-control' id='message' placeholder='message' defaultValue={props.message.textMessage} readOnly={true} disabled={true} style={{backgroundColor:"white"}} />
					<label className='p-3' htmlFor='message'>{props.message.from.lastName} - {moment(props.message.sentDate).calendar()}</label>
				</div>
			)}
		</div>
	)
}

export default TchatMessage