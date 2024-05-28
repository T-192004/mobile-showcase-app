import {AiOutlineFacebook} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {CiTwitter} from 'react-icons/ci'
import {DescriptionParaStyle} from '../StyledComponents'
import './index.css'

const ContactIcons = () => (
  <div className="contacts-icon-container">
    <DescriptionParaStyle>FOLLOW ME</DescriptionParaStyle>
    <hr className="line" />
    <BsInstagram className="icons" />
    <CiTwitter className="icons" />
    <AiOutlineFacebook className="icons" />
  </div>
)

export default ContactIcons
