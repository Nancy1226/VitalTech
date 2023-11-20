import '../../assets/styles/Forms.css';
import { Link } from 'react-router-dom';

function GroupLink({ to, txt, msn }) {
  return (
    <div className="container-group">
      <Link to={to} className="link">
        {txt} <span className="span">{msn}</span>
      </Link>
    </div>
  );
}

export default GroupLink;