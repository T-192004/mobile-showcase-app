import {FaQuoteLeft} from 'react-icons/fa'
import {
  DescriptionParaStyle,
  MainHeadingLayout,
  ButtonStyle,
} from '../StyledComponents'
import './index.css'

const ReviewCard = () => (
  <div className="review-card-container">
    <p className="review-card-desc">
      Per sed, mattis. Integer viverra euismod maecenas incidunt, phasellus
      consequatur aliquam nihil temporibus in assumenda? Aute praesentium
      fugiat. Perspiciatis, ultrices deserunt convallis, eius at non.
    </p>
    <div className="review-card-content-section">
      <img
        className="review-qotation-img"
        alt="quotation"
        src="https://s3-alpha-sig.figma.com/img/13bf/a120/2796e39c67ec8a116fb037fe9423acb8?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=huxpKlN8IGBShr9ZqUgTk5pVHyMY3km2nwkaigkvrejZbL3T2uEKMWsn46qzBzxufdXfPwSgxS4wQOAIIXcd82hOfqnTtkjf-l0DL304Otk8KtUPCxQrWr4kjsWiLexmjpYzFuUS5S96aFHjdHDvd2fOFIV8Imd~jcVgjDeA4xxzOl22IBnxevt5Apv3PTj8ov5LKJWAI4036VWCWE-l4kjcMEo0u8F9OCMixE7TD0wQ1aEwv98aDsgUxxmfrVcu2Iug3jkP31H5TawH7PKC1gaEc2L0d86KX2MUPTc13KYJIOMNV4SaaL1IOX0Je3J5sCB~Zjwn86ZZ2XqLdop7ng__"
      />
      <div className="card-details">
        <h1 className="card-main-heading">Jenny Wilson</h1>
        <img
          className="card-stars"
          src="https://th.bing.com/th/id/OIP.06hzKH7l8Sauep31FXp-zwHaBu?w=346&h=81&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="stars"
        />
      </div>
      <img
        className="card-profile-img"
        src="https://s3-alpha-sig.figma.com/img/28b2/1318/a39bd5be6888f68d55e523179d1438a4?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MM0wsNye0sp9fc-wN53hUI30fW9EMI-4Rmcx2yAwosLCLc08tGU6sAdH5ovIh9~TtzkL1Tu7R-MRNe5YWYt3ksl3bXkEqRiJ8feVhnApqGbtHGxkXO3xTb~ICP22UI6gtZMgPMKwWYR-2Fn4ZEKJGYv8gCFxBkRxiQbfJ~zopq3dt82r6yzsRFGglQkanN09fPE9e0PKDlXf0RjV7fbWwcefiY8A9LL~DE~-LHgmnhfw23SH22KXV1xCwFKQWxiUzyap4Yzv9IS8HgWgbSrwt5NpbMx37M6gAe6ODYQmsm-5BemXhJKtcQsx9hPBWhkCALn7~t0Z1OC0jJdXPQXcxw__"
        alt="profile"
      />
    </div>
    
  </div>
)
export default ReviewCard
