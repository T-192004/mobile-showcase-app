import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import {
  DescriptionParaStyle,
  MainHeadingLayout,
  ButtonStyle,
} from '../StyledComponents'
import ReviewCard from '../ReviewCard'
import './index.css'

const StudentReviewSection = () => (
  <div className="review-section">
    <MainHeadingLayout>Review's From Students</MainHeadingLayout>
    <img
      className="design-curl-img"
      src="https://s3-alpha-sig.figma.com/img/b6ea/ff3c/ec9b81a80436f0735f7091fa38ffa5af?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZsGwPmS6vK3f~EuV41gyYXOsyw60xsLxINef8QbuxAggk9uhm6Wmp0wXjC~~RtLcS-rRaAYreUKCzyvrSi8pZjGL0fBVIofm56WdtdSRFJVM4vJRM5oo40fmjlMvNGmDOwO482DNRe2MYaUNihKS3SwZ0o80YUjTVkR7-MtcSwfZsAzOY9bB2TGw0mdIksX9nyBaUTi0N4NtgZD5JNWnLNwnE9e3DuDCV-ZoUUdlzlCI7E7V8pY7W5NsxhFVEpekT1A4UXqlT9rvY9G~HX12JmRJAQXGAdzHGgx8PihsUOce3XTZIT~oipcSRk2JI58Nbj0x5fFeo3vLc7qalu1x7A__"
      alt="design"
    />
    <div className="cards-container">
      <FaChevronLeft />
      <ReviewCard />
      <ReviewCard />
      <FaChevronRight />
    </div>
    <div className="subscribers-container">
      <div className="subscribers-content">
        <MainHeadingLayout>Subscribe Our Newsletter !</MainHeadingLayout>
        <hr className="hori-line" />
        <p className="review-subs-desc">
          Elementum ex similique sollicitudin eveniet sem eveniet proin, iste
          euismod! Quia! Fugiat molestie leo placerat, tenetur.
        </p>
      </div>
      <div className="subscribers-btn-container">
        <ButtonStyle>Subscribe</ButtonStyle>
      </div>
    </div>
  </div>
)

export default StudentReviewSection
