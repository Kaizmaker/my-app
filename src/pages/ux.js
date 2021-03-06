import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell';
import styled from 'styled-components'


const SectionCaption = styled.p`
font-weight:600;
font-size:18px;
text-transform: uppercase;
color: #94A4BA;
text-align: center;
`

const SectionCellGroup = styled.div`
max-width: 800px;
margin: 0 auto 100px;
display: grid;
grid-template-columns: repeat(2,1fr);
grid-gap: 20px;
padding: 0 20px;

@media (max-width: 800px) {
  grid-template-columns: repeat(1,1fr);
}
`






const IndexPage = () => (
  <div>
  <div className="Hero2">
<div className="HeroGroup"> 
<h1>UX分析</h1>
<br></br> 
<br></br> 
    <p>善於數據分析、心理學、行銷企劃</p>
    <p>導出的使用者經驗報告</p>
    <br></br>
    <br></br>
    <br></br>

    <a href="https://trends.uxdesign.cc/">UX趨勢閱讀</a>

    {/* <Link to="/page-3/">參觀我的專案</Link>   
    <div className="Logos">
      <img src={require('../images/logo-sketch.png')}
      width="50" />
      <img src={require('../images/logo-figma.png')}
      width="50" />
      <img src={require('../images/logo-studio.png')}
      width="50" />
      <img src={require('../images/logo-vs.png')}
      width="50" />
      <img src={require('../images/logo-react.png')}
      width="50" />
      <img src={require('../images/logo-trello.png')}
      width="50" />
</div> */}



<Wave />
      </div>
    </div>
    {/* 重要 ： 使用組建的方法 */}
    <div className="Cards">
      <h2>我 的 作 品</h2>
        <div className="CardGroup">
      <Card 
        // title="Credit Card"
        // text="信用卡使用介面"
        image={require('../images/Credit Card.png')}/>
      <Card 
        // title="Landing Page"
        // text="登入介面"
        image={require('../images/Landing Page.jpg')}/>
      <Card 
        // title="Calculator"
        // text="體脂肪計算器"
        image={require('../images/Calculator.jpg')}/>
      <Card 
        // title="APP ICON"
        // text="Jazzi Logo"
        image={require('../images/APP ICON.jpg')}/>
      <Card 
        // title="User Profile"
        // text="履歷介面"
        image={require('../images/User Profile.jpg')}/>
      <Card 
        // title="dashboard"
        // text="儀表板介面"
        image={require('../images/dashboard.jpg')}/>
        </div>
    </div>
    <Section 
    image={require('../images/dashboard2.jpg')}
    logo={require('../images/kaiz.png')}
    title="UX行為經驗分析"
    text="善用UX可以完整開發出真正使用者想要的產品，使執行方向是精準且正確"
    />

{ /* 從jason導入數據設計 */ }
    {/* <SectionCaption>React設計知識</SectionCaption>
    <SectionCellGroup>
    {staticdata.cells.map(cell => (
      <Cell
      title={cell.title}
      image={cell.image} />
    ))}




    </SectionCellGroup> */}
  </div>
)

export default IndexPage
