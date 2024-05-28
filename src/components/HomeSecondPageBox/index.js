import {FaArrowRight} from 'react-icons/fa'
import {MainHeadingLayout, RightArrawButtonStyle} from '../StyledComponents'
import './index.css'

const BoxContainer = () => (
  <div className="box-container">
    <img
      className="laptop-img"
      alt="laptop"
      src="https://s3-alpha-sig.figma.com/img/6c88/c17b/31d968588c5beb2ee3c65cb4b5592eed?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y~TlC~wf4yJrPUllHK1WP8lTHHzicoHOJbfHh~yHBGxMvwGWr~PnfLcLiQYjGjIPGWgV2LzDojRjyuAJP~WjzG9IWQ9hA89hSKoyfgi9mzQ0J~2V2B2SY1hxYi~KZuvuyNXracFbHPCh2bn2cqFp-xZpJYi5x3CLR~5CxQ5OE9B64JqD1T5QXM-k8OdgXGZQK3QLNucot0BLXFN5H500-lV9nDWrRD3dzjB5EWcZGkov7s0lM2DZqcEfNrS8v0JHifGXNiQ6d5BxSNh4uAYZFekZCME5sfFlIKlddzSVtysuGoiif~D05j9O5EznWPDXM0ImtD1p15qV7uvkqF-lqQ__"
    />
    <MainHeadingLayout>Perfect UI Design</MainHeadingLayout>
    <img
      className="design-img"
      src="https://s3-alpha-sig.figma.com/img/b6ea/ff3c/ec9b81a80436f0735f7091fa38ffa5af?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZsGwPmS6vK3f~EuV41gyYXOsyw60xsLxINef8QbuxAggk9uhm6Wmp0wXjC~~RtLcS-rRaAYreUKCzyvrSi8pZjGL0fBVIofm56WdtdSRFJVM4vJRM5oo40fmjlMvNGmDOwO482DNRe2MYaUNihKS3SwZ0o80YUjTVkR7-MtcSwfZsAzOY9bB2TGw0mdIksX9nyBaUTi0N4NtgZD5JNWnLNwnE9e3DuDCV-ZoUUdlzlCI7E7V8pY7W5NsxhFVEpekT1A4UXqlT9rvY9G~HX12JmRJAQXGAdzHGgx8PihsUOce3XTZIT~oipcSRk2JI58Nbj0x5fFeo3vLc7qalu1x7A__"
      alt="design"
    />
    <p className="box-desc">
      Praesent ac vehicula sapien. Sed sollicitudin molestie consequat. Ut vitae
      ante ut mi vehicula vulputate.
    </p>
    <RightArrawButtonStyle>
      <FaArrowRight />
    </RightArrawButtonStyle>
  </div>
)

export default BoxContainer
