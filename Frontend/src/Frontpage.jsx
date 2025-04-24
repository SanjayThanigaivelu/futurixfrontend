import React, { PureComponent } from 'react';
import logo from '../assets/logo.png';
import first from '../assets/first.png'
import second from '../assets/second.png'
import third from '../assets/third.png'
import fourth from '../assets/fourth.png'
//import fifth from '../assets/fifth.png';
import sixth from '../assets/sixth.png';
import seventh from '../assets/seventh.png';
import eight from '../assets/eight.png';
import ninth from '../assets/ninth.png';
import ten from '../assets/ten.png';
import eleven from '../assets/eleven.png';
import twelve from '../assets/twelve.png';
import thirteen from '../assets/thirteen.png';
import fourtien from '../assets/fourtien.png';
//import fifteen from '../assets/fifteen.png';
//import sixteen from '../assets/sixteen.png';
//import seeventen from '../assets/seeventen.png';
import eighteen from '../assets/eighteen.png';
import '../src/frontpage.css'
const data = [
   {
     name: 'Sun Pharma',
     rating: 'Berish',
     price: 1980,
     change: -2.40,
     pe: 1980,
     pb: 1980,
     yield: 1980,
     debtEquity: 1980,
   },
   
   {
      name: 'Sun Pharma',
      rating: 'Berish',
      price: 1980,
      change: -2.40,
      pe: 1980,
      pb: 1980,
      yield: 1980,
      debtEquity: 1980,
    },
    {
      name: 'Sun Pharma',
      rating: 'Berish',
      price: 1980,
      change: -2.40,
      pe: 1980,
      pb: 1980,
      yield: 1980,
      debtEquity: 1980,
    },
    {
      name: 'Sun Pharma',
      rating: 'Berish',
      price: 1980,
      change: -2.40,
      pe: 1980,
      pb: 1980,
      yield: 1980,
      debtEquity: 1980,
    },
    {
      name: 'Sun Pharma',
      rating: 'Berish',
      price: 1980,
      change: -2.40,
      pe: 1980,
      pb: 1980,
      yield: 1980,
      debtEquity: 1980,
    },
    {
      name: 'Sun Pharma',
      rating: 'Berish',
      price: 1980,
      change: -2.40,
      pe: 1980,
      pb: 1980,
      yield: 1980,
      debtEquity: 1980,
    },
    {
      name: 'Sun Pharma',
      rating: 'Berish',
      price: 1980,
      change: -2.40,
      pe: 1980,
      pb: 1980,
      yield: 1980,
      debtEquity: 1980,
    },
    {
      name: 'Sun Pharma',
      rating: 'Berish',
      price: 1980,
      change: -2.40,
      pe: 1980,
      pb: 1980,
      yield: 1980,
      debtEquity: 1980,
    },
 ];
export class Frontpage extends PureComponent {
  render() {
    return (
      <div>
      <header className='header'>
       <img className='logo' src ={logo} alt='logo'/>
        <h3 className='heading'>AAPL <small className='s2'>Apple Inc.</small></h3>
        <h4 className='ammount'>
         $25,901&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <small className='s1'>  ▲ 0.27%</small> 
        </h4>
        <p>28 January, 4:00pm EST | Market Open</p>
        </header> 
     <hr className='line'/>
     <main className='m1'>
     <p className="m1para">
  Cipla is trading -0.89% lower at Rs 1,459.05 as compared to its last closing price. Cipla has been trading in the price range of 1,482.20 & 1,438.75. 
  Cipla has given   -4.55% in this year & -0.87% in the last 5 days. Cipla has TTM P/E ratio 24.74 as compared to the sect...&nbsp;&nbsp; 
  <span className="addon">see more</span>
</p>
<div className='image-row'>
     <img className='firstImg' src={first} alt='firstImage' />
     <img className='secondImg' src={second} alt='secondImage'/>
</div>
    <article className="article">
  <h2 className="heading-2">News</h2>
  <div className="card-container">
    {[...Array(6)].map((_, index) => (
      <div className="card" key={index}>
        <img className="card-image" src={third} alt="news" />
        <div className="card-text">
        <p className="date">April 5, 2023</p>
        <p className="headline">
          Apple Stock: Insiders Sell Their Shares, Future <br />
          Prospects Not Promising (NASDAQ:AAPL)
        </p>
        </div>
      </div>
    ))}
  </div>
</article>

     <section className='images'>
     <h2 className="heading3">Financials</h2>
  <div className="content-wrapper">
    <img className="fourthimg" src={fourth} alt="fourthimage" />
    <div className="unorder">
      <p className="fifth-heading">
        <strong className='strongg'>Financial</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='smalll'>Valuation</span>
      </p>
      <ul className="unorderlist">
        <li>Lorerh Ipsum is simply dummy text of the printing and typesetting industry.</li>
        <li>Lorerh Ipsum is simply dummy text of the printing and typesetting industry.</li>
        <li>Lorerh Ipsum is simply dummy text of the printing and typesetting industry.</li>
        <li>Lorerh Ipsum is simply dummy text of the printing and typesetting industry.</li>
      </ul>
    </div>
  </div>
 <h2 className='head4'>Forecast</h2>
 <div className='sex-Seven'>
 <img className='sixth' src= {sixth} alt='sixth' />
 <img className='seventh' src= {seventh} alt='seventh' />
 </div>

 <div className='threeflex'>
 <img className='eight' src= {eight} alt='eight'/>
 <img className='nine' src= {ninth} alt= 'ninth'/>
 <img className='ten' src= {ten} alt='ten' />
</div>

 <div className='big1'>
 <h4 className='analysis'>Technical Analysis</h4>
 <img className='eleven' src={eleven} alt='eleven' />
 </div>
<div className='big2'>
 <h2 className='heading5'>Volume Trends</h2>
 <img className='twelve' src= {twelve} alt='twelve' />
</div>

<div className='section-2'>
   <img className='thirteen' src= {thirteen} alt='thirteen'/>
   <img className='fourtien' src= {fourtien} alt='fourtien'/>
   <div className='unorder1'>
   <h4 className='Insights'>Shareholding Insights</h4>
  <ul className='unorderlist'>
<li>Lorerh Ipsum is simply dummy <br/> text of the printing and <br/> typesetting industry.</li>
<li>Lorerh Ipsum is simply dummy <br/> text of the printing and <br/> typesetting industry.</li>
<li>Lorerh Ipsum is simply dummy <br/> text of the printing and <br/> typesetting industry.</li>
<li>Lorerh Ipsum is simply dummy <br/> text of the printing and <br/> typesetting industry.</li>
  </ul>
  </div>
</div>

<div className='section-3'>
   <h2 className='heading6'>Corporate Actions</h2>
  <table className='Corprate-Colloumn'>
   <thead className='corprate-heading'>
      <tr className='corprate-heading-1'>
         <th><h3>Board Meetings</h3></th>
         <th className='child'>AGM</th>
         <th className='child'>Dividents</th>
         <th className='child'>Bonus</th>
         <th className='child'>Split</th>
         <th className='child'>Rights</th>
      </tr>
   </thead>
  </table>

<div className='fullTable'>
  <table className='table2'>
   <thead className='head2'>
      <tr>
         <th>Meeting Date</th>
         <th>Purpose</th>
      </tr>
   </thead>
   <tbody className='body2'>
      <tr className='trr'>
         <td className='tdd'>25-01-28</td>
         <td className='tdd'>Quaterly Results</td>
      </tr>
      <tr className='trr'>
      <td className='tdd'>25-01-28</td>
      <td className='tdd'>Quaterly Results</td>
      </tr>
      <tr className='trr'>
      <td className='tdd'>25-01-28</td>
      <td className='tdd'>Quaterly Results</td>
      </tr>

      <tr className='trr'>
      <td className='tdd'>25-01-28</td>
      <td className='tdd'>Quaterly Results</td>
      </tr>

      <tr className='trr'>
      <td className='tdd'>25-01-28</td>
      <td className='tdd'>Quaterly Results</td>
      </tr>

   </tbody>
  </table>
  </div>
</div>
     </section>
<section className='section-2'>
<div className='table'>

   <h4 className='paraheading'>About the Company Cipla</h4>
  
   <table>
   <thead>
    <tr>
      <th className='heading'>Industry </th>
      <th className='heading'>ISIN </th>
      <th className='heading'>BSE Code </th>
      <th className='heading'>NSE Code </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Tech </strong></td>
      <td><strong>123 </strong></td>
      <td><strong>123 </strong></td>
      <td><strong>123 </strong></td>
    </tr>
  </tbody>
   </table>
   </div>
  <div className='paraa'>
   <p className='cipla'>
   Cipla Limited is an India-based global pharmaceutical company. 
   The Company is engaged in manufacturing, developing and marketing a wide range of branded and 
   generic formulations and Active Pharmaceutical Ingredients (APIs). The Company operates through
    two segments: Pharmaceuticals and New ventures. The Pharmaceuticals segment is engaged in
     developing, manufacturing, selling, and distributing generic or branded generic medicines, 
     as well as Active Pharmaceutical Ingredients (API). The New ventures segment includes the 
     operations of the Company, a consumer healthcare, Biosimilars and specialty business. 
     Its product portfolio spans complex generics, as well as drugs in the respiratory, 
     anti-retroviral, urology, cardiology, anti-infective and central nervous system (CNS).
      Its geographical segments include India, the United States, South Africa, and the Rest of the
       World. It has its network of manufacturing, trading and other incidental operations in
        India and International markets.
   </p>
   </div>
  

<aside className='aside1'>
   <h4 className='Managment'>Managment Info</h4>
   <p className='sidepara'>Cipla Limited is an India-based global pharmaceutical company. 
   The Company is engaged in manufacturing, developing and marketing a wide range of branded
    and generic formulations and Active Pharmaceutical Ingredients (APIs). 
    The Company operates through two segments: Pharmaceuticals and New ventures.
     The Pharmaceuticals segment is engaged in developing, mStates, South Africa, and the Rest of the
      World. It has its network of manufacturing, trading</p>
</aside>
</section>
<section className='section3'>
<h2 className='heading-6'>Peers Comparison</h2>
<table className="pharma-table">
      <thead>
        <tr>
          <th>Names</th>
          <th>Technical Rating</th>
          <th>Price</th>
          <th>%Change</th>
          <th>P/E</th>
          <th>P/B</th>
          <th>Dividend Yield</th>
          <th>Debt to Equity</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>
              <span className="arrow">&#x2198;</span> {item.rating}
            </td>
            <td>{item.price}</td>
            <td className="negative">{item.change}</td>
            <td>{item.pe}</td>
            <td>{item.pb}</td>
            <td>{item.yield}</td>
            <td>{item.debtEquity}</td>
          </tr>
        ))}
      </tbody>
    </table>

<h2 className='heading-7'>Volume Trends</h2>
<img className='eighteen' src={eighteen} alt='eighteen'/>
</section>

<footer className='foot'>
   <h2 className='heading-8'>Cipal Price FAQs</h2>
<div className='firstAbout'>
      <span className='aboutCipla-1'>
 About Cipla
      </span>
      <span className='icon'> + </span>
</div>

<div className='secondCipla'>
   <span className='aboutCipla-2'>
      About Cipla
   </span>
   <span className='icon'> - </span>
</div>
  <p className='last-para'>Cipla Limited is an India-based global pharmaceutical company. 
  The Company is engaged in manufacturing, developing and marketing a wide range of branded and
   generic formulations and Active Pharmaceutical Ingredients (APIs). The Company operates through
    two segments: Pharmaceuticals and New ventures. The Pharmaceuticals segment is engaged in 
    developing, manufacturing, selling, and distributing generic or branded generic medicines, 
    as well as Active Pharmaceutical Ingredients (API). The New ventures segment includes the 
    operations of the Company, a consumer healthcare, Biosimilars and specialty business. 
    Its product portfolio spans complex generics, as well as drugs in the respiratory, 
    anti-retroviral, urology, cardiology, anti-infective and central nervous system (CNS)</p>
</footer>
     </main>
      </div>
    )
  }
}

export default Frontpage
