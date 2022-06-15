import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FloatingLabel, Form } from 'react-bootstrap'
import Select from 'react-select'
import moment from 'moment'
import { BiArrowBack } from 'react-icons/bi'
import axios from 'axios'
import 'moment/locale/fr'

const TchatUpdate = () => {
	let { id } = useParams();

	let [tchatData, setTchatData] = useState({});
	let [students, setStudents] = React.useState([]);
	let [selectedParticipants, setSelectedParticipants] = React.useState(null);

	useEffect(() => {
		axios.get('http://172.19.2.11:5000/api/Student/GetStudents').then(res => {
			setStudents(res.data.map(student => { return { value: student.id, label: `${student.lastname} ${student.surname}`}; }));
		});
		
		// setInterval(() => {
			axios.get(`http://172.19.2.11:5000/api/Message/GetChatMessages/${id}`).then(res => {
				setTchatData(res.data);
			});
		// }, 3000);
    }, []);

	let updateTchat = () => {
		let tchat = {
			id,
			name: document.getElementById('title').value,
			comment: document.getElementById('comment').value,
			sendNotification: document.getElementById('notifications').checked,
			chatAffectations: selectedParticipants ? selectedParticipants.map(participant => { return { id: participant.value }; }) : [],
			startDateTime: moment(document.getElementById('startdatetime').value, ["DD/MM/YYYY h:mm"]).toISOString(),
			endDateTime: moment(document.getElementById('enddatetime').value, ["DD/MM/YYYY h:mm"]).toISOString(),
		}
		console.log(tchat);
		axios.put('http://172.19.2.11:5000/api/Chat/CreateChat', tchat);
	}

	let deleteTchat = () => {
		axios.delete(`http://172.19.2.11:5000/api/Chat/DeleteChat/${id}`);
	}

  return (
		<div className='container' style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate3d(-50%,-50%,0)'}}>
			<div className='card'>
				<div className='card-body'>
					<div className='mb-2'>
						<Link to="/tchat">
							<button className='btn btn-primary'><BiArrowBack /> Retour</button>
						</Link>
					</div>
					<h2 className='mb-3'>Modification d'un tchat (Professeur)</h2>
					<div className='form-floating mb-2'>
						<input type='text' className='form-control' id='title' placeholder='title' value={tchatData.name} />
						<label htmlFor='title'>Titre du cours</label>
					</div>
					<div className='form-floating mb-2'>
						<h6>Participants :</h6>
						<Select defaultValue={tchatData.chatAffectations ? tchatData.chatAffectations.map(student => { return { value: student.id, label: `${student.lastname} ${student.surname}`}; }) : []} onChange={setSelectedParticipants} options={students} isMulti name="students" />
					</div>
					<div className='form-floating mb-2'>
						<input type='text' className='form-control' id='startdatetime' placeholder='datetime' defaultValue={moment(tchatData.startDateTime).format("DD/MM/YYYY h:mm")} />
						<label htmlFor='startdatetime'>Date et heure de début</label>
					</div>
					<div className='form-floating mb-2'>
						<input type='text' className='form-control' id='enddatetime' placeholder='datetime' defaultValue={moment(tchatData.endDateTime).format("DD/MM/YYYY h:mm")} />
						<label htmlFor='enddatetime'>Date et heure de fin</label>
					</div>
					<FloatingLabel
						label='Commentaires'
						className='mb-2'
					>
						<Form.Control as="textarea" placeholder="comments" defaultValue={tchatData.comment}></Form.Control>
					</FloatingLabel>
					<div className='form-floating mb-2'>
						<h5>Notifications :</h5>
						<div className='form-check'>
							<input className="form-check-input" type="checkbox" value="" id="notifications" defaultChecked={true} />
							<label className="form-check-label" htmlFor="notifications">Notifier les participants</label>
						</div>
					</div>
					<div className='row'>
						<div className='d-grid gap-2 col-5 mx-auto'>
							<button onClick={deleteTchat} className='btn btn-danger'>Supprimer</button>
						</div>
						<div className='d-grid gap-2 col-5 mx-auto'>
							<button onClick={updateTchat} className='btn btn-primary'>Enregistrer</button>
						</div>
					</div>
				</div>
			</div>
		</div>
  )
}

export default TchatUpdate