import React from 'react'
import { Link } from 'react-router-dom'
import { FloatingLabel, Form } from 'react-bootstrap'
import Select from 'react-select'
import moment from 'moment'
import { BiArrowBack } from 'react-icons/bi'

const TchatUpdate = () => {
  let options = [
    {label: 'Etudiant 1', value: '1'},
    {label: 'Etudiant 2', value: '2'},
  ];

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
						<input type='text' className='form-control' id='title' placeholder='title' />
						<label htmlFor='title'>Titre du cours</label>
					</div>
					<div className='form-floating mb-2'>
						<h6>Participants :</h6>
						<Select options={options} isMulti name="students" />
					</div>
					<div className='form-floating mb-2'>
						<input type='text' className='form-control' id='datetime' placeholder='datetime' defaultValue={moment().format("DD/MM/YYYY h:mm")} />
						<label htmlFor='datetime'>Date et heure</label>
					</div>
					<FloatingLabel
						label='Commentaires'
						className='mb-2'
					>
						<Form.Control as="textarea" placeholder="comments"></Form.Control>
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
							<button className='btn btn-danger'>Supprimer</button>
						</div>
						<div className='d-grid gap-2 col-5 mx-auto'>
							<button className='btn btn-primary'>Enregistrer</button>
						</div>
					</div>
				</div>
			</div>
		</div>
  )
}

export default TchatUpdate