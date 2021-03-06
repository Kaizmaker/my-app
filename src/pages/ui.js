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
  <div className="Hero1">
<div className="HeroGroup"> 
<h1>UI設計</h1>
<br></br> 
<br></br> 
    <p>分析使用者數據的介面設計</p>
    <p>是介面設計師的重要使命</p>
    <br></br>
    <br></br>
    <br></br>

    <a href="https://www.figma.com/proto/SY1fXMc2FVMsatyPnS2vZfzI/%E4%BD%9C%E5%93%81%E9%9B%86?node-id=0%3A1&viewport=1162%2C509%2C0.47714319825172424&scaling=min-zoom&redirected=1">UI 作品觀賞</a>
{/* <Link to="/page-2/">參觀我的專案</Link>    */}
  {/* <div className="Logos">
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
    image={require('../images/ui.png')}
    logo={require('../images/kaiz.png')}
    title="UI是藝術數據結合體"
    text="UI是感性與理性的交互，透過設計師之手編織出最棒的交響樂曲"
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
