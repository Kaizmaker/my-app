/* 導入相關資源與文件 */
import React from 'react'
import Link from 'gatsby-link'
import logo from '../images/K.svg'
import './Header.css'
import StripeCheckout from 'react-stripe-checkout'


// 原本的標題設定 const Header = ({ siteTitle }) => ( )
  

/* 狀態組建更換 事件設定（替代上方const Header） */
class Header extends React.Component {
  // 構造函數初始化
  constructor(props) {
    super(props)
// 當為以下狀態 （沒在滾動時）
    this.state = {
      hasScrolled: false
    }
  }

componentDidMount() {
  window.addEventListener('scroll',this.handleScroll)
}

handleScroll = (event) => {
  const scrollTop = window.pageYOffset
  if(scrollTop >50) {
    this.setState({hasScrolled:true})
  }
  else {
    this.setState({hasScrolled:false})
  }
}

// 付款設定

handlePurchase = (token) => {
const amount = 5000
const description = "My awesome product"

const bodyObject = {
  tokenId: token.id,
  email: token.email,
  description,
  amount
}

fetch('http://localhost:9000/stripe-charge',{
  method: 'POST',
  body: JSON.stringify(bodyObject)
})

}

  render() {
    return (

      // 事件判斷 是否滾動有的話 請找標題 hasScrolle 並執行事件
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
      <div className="HeaderGroup">
      <Link to="/"><img src={logo} width="30"/></Link>
      {/* 第二種寫法<Link to="/"><img src={require('../images/K.svg')} width="30"/></Link> */}
      <Link to="/">首頁</Link>
      <Link to="/ui">UI設計</Link>
      <Link to="/ux">UX分析</Link>
      {/* <Link to="/ux">專案參與</Link> */}
      <a href="https://kaizmaker.github.io/webdesign/">專案參與</a>

      {/* 運用Stripe 來新增購買連結 */}
      <StripeCheckout
      amount={5000}
      image="https://i.imgur.com/Qkqepcsl.png"
      token={this.handlePurchase}
      stripeKey={'pk_test_bZm5ZwpHCxcyAVA7qSWgal1P0022VniedK'}
>
      <button>支持</button>
      </StripeCheckout>
    </div>   
  </div>
      
    )
  }
}


export default Header
