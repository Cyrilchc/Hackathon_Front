import moment from 'moment'
import React from 'react'
import { MdDeleteForever } from 'react-icons/md'
import 'moment/locale/fr'

const TchatMessage = (props) => {
	moment.locale('fr');

  return (
		<div className='row'>
			{ props.message.person.isAuthor ? (
				<>
					<div className="col-2"></div>
					<div className='form-floating mb-2 col-9'>
						<input type='text' className='form-control' id='message' placeholder='message' defaultValue={props.message.messageContent} />
						<label className='p-3' htmlFor='message'>{props.message.person.givenName} - {moment(props.message.postDateTime).calendar()}</label>
					</div>
					<div className='col-1 align-items-center'>
						<button className='btn btn-primary' style={{width:"100%", height:"80%"}}><MdDeleteForever /></button>
					</div>
				</>
			) : (
				<div className='form-floating mb-2 col-9'>
					<input type='text' className='form-control' id='message' placeholder='message' defaultValue={props.message.messageContent} readOnly={true} disabled={true} style={{backgroundColor:"white"}} />
					<label className='p-3' htmlFor='message'>{props.message.person.givenName} - {moment(props.message.postDateTime).calendar()}</label>
				</div>
			)}
		</div>
  )
}

export default TchatMessage