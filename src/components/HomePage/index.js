import Header from '../Header'
import ContactIcons from '../ContactIcons'
import BoxContainer from '../HomeSecondPageBox'
import HomeCard from '../HomeCardContainer'
import StudentReviewSection from '../StudentReviewSection'
import {
  DescriptionParaStyle,
  MainHeadingLayout,
  ButtonStyle,
} from '../StyledComponents'
import './index.css'

const Home = () => (
  <div className="home-main-container">
    <div className="first-pg-cont">
      <Header />
      <div className="first-pg-content-cont">
        <div className="first-pd-cont">
          <h1 className="main-heading">Best Mobile App Showcase</h1>
          <DescriptionParaStyle>
            Aenean dictum odio dapibus turpis dapibus vestibulum. Mauris quis
            massa nisi. Nullam porta lorem at volutpat euismod. Proin in ex
            nunc.
          </DescriptionParaStyle>
          <ButtonStyle>Read More</ButtonStyle>
        </div>
        <img
          className="first-image"
          src="https://s3-alpha-sig.figma.com/img/9640/77bd/cb44a9da3594b4a1ab60adde30459f78?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hzeBJkhghISbW7Vc2NQ7qUw25QboJAraVlhBihBfTSpHNtTh8x6LyYPYhAje3dOvlaWTH9suOR5dlOrB2BSdj9dhAvGZMhCqV1diFWHASJiAYW6dCpUnwfVwNmImQG-IDZRkCBD0oGV0juHNFBddXCiYM9wVd1YL0uBaTH-s0nFLOY3HtReZCRtIJNCyMOB3H3y6i99hMt7ZbWSkCzxkBmISmF3rHVT~DC7f1XZGFWsQr9oDTuE-pisukCGqPEF85xFVnxplNYW0izQLU-Jg~wwcD5-oEgX90fLq0fq9-aVtDbf4tqP5qkt1a8ZEp4PQG62Y2G3sEMjJ4VNvs7By0g__"
          alt="phone showcase"
        />
        <ContactIcons />
      </div>
    </div>
    <div className="second-pg-container">
      <div className="second-pg-header">
        <div className="second-pg-header-content">
          <MainHeadingLayout>
            Engaging & Spacious School Campus
          </MainHeadingLayout>
          <img
            className="design-img"
            src="https://s3-alpha-sig.figma.com/img/b6ea/ff3c/ec9b81a80436f0735f7091fa38ffa5af?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZsGwPmS6vK3f~EuV41gyYXOsyw60xsLxINef8QbuxAggk9uhm6Wmp0wXjC~~RtLcS-rRaAYreUKCzyvrSi8pZjGL0fBVIofm56WdtdSRFJVM4vJRM5oo40fmjlMvNGmDOwO482DNRe2MYaUNihKS3SwZ0o80YUjTVkR7-MtcSwfZsAzOY9bB2TGw0mdIksX9nyBaUTi0N4NtgZD5JNWnLNwnE9e3DuDCV-ZoUUdlzlCI7E7V8pY7W5NsxhFVEpekT1A4UXqlT9rvY9G~HX12JmRJAQXGAdzHGgx8PihsUOce3XTZIT~oipcSRk2JI58Nbj0x5fFeo3vLc7qalu1x7A__"
            alt="design"
          />
          <DescriptionParaStyle>
            Hise sed augue vitae felis pellentesque varius nec quis nunc. Morbi
            mauris augue, pulvinar quis luctus eget. Phasellus gravida lacus
            quis eros lobortis, nec dapibus quam gravida.
          </DescriptionParaStyle>
        </div>
        <img
          className="second-pg-girl-img"
          src="https://s3-alpha-sig.figma.com/img/b1ce/868d/475d43d872e964039e4d6da7013ffa34?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iyKylOzULTOz6pL8wG1n9rEyelcAKbQy8yuO0m0rSGxp5OqWQrvb3UV6pm2Qsb0ncvodvr-4N6Vs5tfcsiPQyfwbWWmHLRX9acNyHC6UhozOlBFGgH86TzaC67DAwVj78GLirop4IOlGC72n77Qt1-cnnWJKfdvRT8fenO~SsAZpSjU7hmiEQJ5HhGHc1WTQQaBxwMKRvSibZrbRSTUS0KlwyHoWYDxOgbTatsvKZbzvV2wew6tySqH5rN271JEl7T-FkgcQ2v~sM131lVqzNeH-dVpMNk9rnkw6wpxn~4BoUDHL08gtTMcG7fQBQl3xsy3YSRHXKPvR2mBKlKnu9Q__"
          alt="girl"
        />
      </div>
      <div className="box-containers">
        <BoxContainer />
        <BoxContainer />
        <BoxContainer />
      </div>
      <img
        className="complete-curl-line"
        alt="curl line"
        src="https://s3-alpha-sig.figma.com/img/263b/4fb3/4d939a4345c390f7b8c6b309140c477d?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Jqx3eQbYyK2fb4fH27HAXW8YUEm6oIpiMi3JRkw938YFzFYE1pYbDJCpGVFDqFURIbasKLpbLEAiRcdG03fMwPzHHorCSpWTBU3I6ef7jDmGoPdafmaiQ~-ln6CTcPTrkewGPpGS77ECrJUhPbznp4G3WtW-2Ebck37E~yXN1oiB9UUBQIVPuPy2Kad4GL1u4xqZw~3GDzQAyW1C2kpQmEvMwHDC~1S-tAIob5iYi3qblJjDGyWTTai0HvDIEVNN-2L-2UDjEgLAGZwS-TzXVSfaG~pF603txAI24ijHq5vrt9wfpYuS1zaqa7rf7emoR41CwMYNdODvpZaaIf-t3A__"
      />
    </div>
    <div className="third-pg-container">
      <img
        className="third-pg-image"
        src="https://s3-alpha-sig.figma.com/img/9b96/ed51/46a8594d73eb95a1265239d5fdf9a23d?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WGfuNG6HbMlWJ98wg52R4WVw-g4ifFS3jBke52O7570NkzMXyArpYyjGhdnor5pPdkvH9NMKJKb~Z-V0o7ucXcPtckSyAxXXgLuiRgrQZ368OW1D6bAbxiPKpvpUcewr0sDZBIzmgG3~E463M0UaD98DDfdoxPBeUHaq3s0iYyxk9zJwg5WXXC2wgn6aMmM~5MvSc6~AZlFHr5VOCES-9GQ2dFxvzU5HIfOF5vxrICSG0iHwLqXY1d3oWLQbjHIH93UsXFYD4UsSjwoKChEqrR7P4Aw35wVLHfpqI76zrsLS-AzVuaVCfuzw0PzHlAlZOVUw0hJ5VAVdd3GTHXXc4A__"
        alt="user and phone"
      />
      <div className="third-pg-content">
        <MainHeadingLayout>
          Easy And Perfect Solution For Your Business App
        </MainHeadingLayout>
        <hr className="green-straight-line" />
        <DescriptionParaStyle>
          Aliquam aliquet purus a est consequat lobortis. Etiam vehicula
          suscipit purus, eget ullamcorper augue blandit vitae. Ut eu euismod
          felis. Etiam at varius quam. Vivamus lacinia pulvinar turpis in
          suscipit. Aenean mattis enim ut pretium gravida. Sed fermentum a lacus
          bibendum convallis. Consequat purus aliquet a est aliquam lobortis.
          Etiam vehicula suscipit purus, eget ullamcorper augue blandit
          vitae....
        </DescriptionParaStyle>
        <ButtonStyle>Read More</ButtonStyle>
      </div>
    </div>
    <div className="fourth-pg-container">
      <div className="fourth-pg-content">
        <MainHeadingLayout>How does This App Work?</MainHeadingLayout>
        <img
          className="design-img"
          src="https://s3-alpha-sig.figma.com/img/b6ea/ff3c/ec9b81a80436f0735f7091fa38ffa5af?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZsGwPmS6vK3f~EuV41gyYXOsyw60xsLxINef8QbuxAggk9uhm6Wmp0wXjC~~RtLcS-rRaAYreUKCzyvrSi8pZjGL0fBVIofm56WdtdSRFJVM4vJRM5oo40fmjlMvNGmDOwO482DNRe2MYaUNihKS3SwZ0o80YUjTVkR7-MtcSwfZsAzOY9bB2TGw0mdIksX9nyBaUTi0N4NtgZD5JNWnLNwnE9e3DuDCV-ZoUUdlzlCI7E7V8pY7W5NsxhFVEpekT1A4UXqlT9rvY9G~HX12JmRJAQXGAdzHGgx8PihsUOce3XTZIT~oipcSRk2JI58Nbj0x5fFeo3vLc7qalu1x7A__"
          alt="design"
        />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </div>
      <img
        className="fourth-image"
        src="https://s3-alpha-sig.figma.com/img/c0a8/6b94/a74ec860739122752600039e2f0e58ce?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ay5t6X4xSOKmhTfUeK5EYeIe18i~ldJF3k0fcwn4ePolpYjCBoFThhgQxr48QLG8Mo2YKTm8jZudIdh69DIVVSsXuMsYsQpLQKghRpoPZKzHa0LiuMI47xbWucI2o5YV~ZWGxlQuhidyBdAPymNL9f2D5nO-AtH4scieywGfmYCNVMcDpR6gQlBBpxaMivcqRTX0SxvJR178t5-PfhxJUDplhnEFDjWT2~mPZ8aENRSL8G3uTu~8m8MK2UU4SUEYwdn02pAlD9DWDMIwSoyWBhPoioKSR-QAgXXwJyc7ZCl7ElxJzZxLClixpySebuLpLsPMdswuozy1a0M-y5aLmQ__"
        alt="user phone"
      />
    </div>
    <StudentReviewSection />
  </div>
)

export default Home
