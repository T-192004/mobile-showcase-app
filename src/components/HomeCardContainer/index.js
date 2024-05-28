import {CgProfile} from 'react-icons/cg'
import './index.css'

const HomeCard = () => (
  <div className="card-container">
    <CgProfile className="profile-icon" />
    <div className="card-content">
      <h1 className="card-title">Make A Profile</h1>
      <p className="card-desc">
        Aliquam varius ligula nec leo tempus porta. Vestibulum suscipit leo at
        nunc imperdiet, quis lacinia nisi euismod.
      </p>
    </div>
  </div>
)

export default HomeCard
