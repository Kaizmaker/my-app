/* 導入相關資源與文件 */
import React from 'react'
import Link from 'gatsby-link'
import logo from '../images/K.svg'
import './Header.css'


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



  render() {
    return (

      // 事件判斷 是否滾動有的話 請找標題 hasScrolle 並執行事件
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
      <div className="HeaderGroup">
      <Link to="/"><img src={logo} width="30"/></Link>
      {/* 第二種寫法<Link to="/"><img src={require('../images/K.svg')} width="30"/></Link> */}
      <Link to="/courses">關於我</Link>
      <Link to="/download">UI設計</Link>
      <Link to="/workshop">UX分析</Link>
      <Link to="/buy"><button>Persona</button></Link>
    </div>   
  </div>
      
    )
  }
}


export default Header
