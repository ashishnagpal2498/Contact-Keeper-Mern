import React, { useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext';

const Alerts = () => {
	const alertContext = useContext(AlertContext);

	return (
		alertContext.alerts.length > 0 && alertContext.alerts.map(item => (
			<div key={item.id} className={`alert alert-${item.type}`}>
				<i className="fas fa-info-circle" /> {item.msg}
			</div>
		))
	)
}

export default Alerts;