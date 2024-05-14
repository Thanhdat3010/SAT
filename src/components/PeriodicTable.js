import React from 'react';
import './PeriodicTable.css';

class PeriodicTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          searchText: '',
          suggestionList: [],
          
        };
      }
    
      handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          this.goToUrl();
        }
      };
    
      goToUrl = () => {
  const { searchText } = this.state;
  const url = this.isValidUrl();

    // Nếu URL hợp lệ, chuyển hướng
    if (url !== searchText) {
     window.location.href = url;
    }
    };
    
      isValidUrl = () => {
        let { searchText } = this.state;
        searchText = this.convertToLowerCase(searchText);
        searchText = this.capitalizeFirstLetter(searchText);
        let url = searchText;
        let kt = 0;
        if (searchText === "Hydrogen") {
          url = "https://www.canva.com/design/DAFi_WQ09Ww/E3wAuJWz5psFK-gPmMQBZg/edit?utm_content=DAFi_WQ09Ww&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton";
          kt = 1;
        }
        if (searchText === "Helium") {
          url = "helium.html";
          kt = 1;
        }
        if (kt === 0) {
          return url;
        }
        return url;
      };
    
      convertToLowerCase = (inputString) => {
        return inputString.toLowerCase();
      };
    
      capitalizeFirstLetter = (inputString) => {
        return inputString.charAt(0).toUpperCase() + inputString.slice(1);
      };
    
      handleInputChange = (event) => {
        const inputValue = event.target.value.toLowerCase();
        const suggestions = [
          'Hydrogen', 'Helium', 'Lithium', 'Beryllium', 'Boron', 'Carbon', 'Nitrogen', 'Oxygen', 'Fluorine',
          'Neon', 'Sodium', 'Magnesium', 'Aluminum', 'Silicon', 'Phosphorus', 'Sulfur', 'Chlorine', 'Argon',
          'Potassium', 'Calcium', 'Scandium', 'Titanium', 'Vanadium', 'Chromium', 'Manganese', 'Iron', 'Cobalt',
          'Nickel', 'Copper', 'Zinc', 'Gallium', 'Germanium', 'Arsenic', 'Selenium', 'Bromine', 'Krypton',
          'Rubidium', 'Strontium', 'Yttrium', 'Zirconium', 'Niobium', 'Molybdenum', 'Technetium', 'Ruthenium',
          'Rhodium', 'Palladium', 'Silver', 'Cadmium', 'Indium', 'Tin', 'Antimony', 'Tellurium', 'Iodine', 'Xenon',
          'Caesium', 'Barium', 'Lanthanum', 'Cerium', 'Praseodymium', 'Neodymium', 'Promethium', 'Samarium', 'Europium',
          'Gadolinium', 'Terbium', 'Dysprosium', 'Holmium', 'Erbium', 'Thulium', 'Ytterbium', 'Lutetium', 'Hafnium',
          'Tantalum', 'Tungsten', 'Rhenium', 'Osmium', 'Iridium', 'Platinum', 'Gold', 'Mercury', 'Thallium', 'Lead',
          'Bismuth', 'Polonium', 'Astatine', 'Radon', 'Francium', 'Radium', 'Actinium', 'Thorium', 'Protactinium',
          'Uranium', 'Neptunium', 'Plutonium', 'Americium', 'Curium', 'Berkelium', 'Californium', 'Einsteinium',
          'Fermium', 'Mendelevium', 'Nobelium', 'Lawrencium', 'Rutherfordium', 'Dubnium', 'Seaborgium', 'Bohrium',
          'Hassium', 'Meitnerium', 'Darmstadtium', 'Roentgenium', 'Copernicium', 'Nihonium', 'Flerovium', 'Moscovium',
          'Livermorium', 'Tennessine', 'Oganesson'
        ];
    
        const filteredSuggestions = suggestions.filter(item => item.toLowerCase().includes(inputValue));
        this.setState({ suggestionList: filteredSuggestions });
      };
    
      handleSuggestionClick = (item) => {
        this.setState({ searchText: item, suggestionList: [] });
        this.goToUrl();
      };
    
      render() {
        const { suggestionList } = this.state;

    return (
      <div className="block contactBlock">
        {/* <div className="search-container">
          <input
            type="text"
            id="search-text"
            onKeyDown={this.handleKeyDown}
            onChange={this.handleInputChange}
            placeholder="Search..."
            required
          />
          <ul id="suggestionList">
            {suggestionList.map((item, index) => (
              <li key={index} onClick={() => this.handleSuggestionClick(item)}>{item}</li>
            ))}
          </ul>
        </div> */}
        <h1 style={{ fontFamily: 'Roboto', color: '#1089ff', marginTop: '50px', textAlign: 'center' }}>
          <b>Bảng tuần hoàn hóa học</b>
        </h1>
        <center>
          <table>
        <tr>
            <td className="H"><a href="https://www.canva.com/design/DAFi_WQ09Ww/E3wAuJWz5psFK-gPmMQBZg/edit?utm_content=DAFi_WQ09Ww&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">1<br />H</a></td>
            <td className="noBorder" colSpan="16"></td>
            <td className="He"><a href="https://www.canva.com/design/DAFi_j53d3g/NBCt87ObxlrPTE24MilWfA/edit?utm_content=DAFi_j53d3g&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">2<br />He</a></td>
        </tr>
        <tr>
            <td className="Li"><a href="https://www.canva.com/design/DAFjMcr-8G8/dDzv5HS0lhOeoq9psO4iPA/edit?utm_content=DAFjMcr-8G8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">3<br />Li</a></td>
            <td className="Be"><a href="https://www.canva.com/design/DAFjMo8WZnM/gghYOozsOpt74NNJk491tA/edit?utm_content=DAFjMo8WZnM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">4<br />Be</a></td>
            <td className="noBorder" colSpan="10"></td>
            <td className="B"><a href="https://www.canva.com/design/DAFjjHvbfi0/fIqjvceuM5dDey7azgTB_A/edit?utm_content=DAFjjHvbfi0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">5<br />B</a></td>
            <td className="C"><a href="https://www.canva.com/design/DAFjjAf5AqM/F9KTAbwUC0uMvz8hHGyTqg/edit?utm_content=DAFjjAf5AqM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">6<br />C</a></td>
            <td className="C"><a href="https://www.canva.com/design/DAFjjGRz2qo/O8GOTy8BZz32ySOlmUCtiw/edit?utm_content=DAFjjGRz2qo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">7<br />N</a></td>
            <td className="C"><a href="https://www.canva.com/design/DAFjjAUrndI/Xwdx9WKQPZ7oPrc0ziSE8g/edit?utm_content=DAFjjAUrndI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">8<br />O</a></td>
            <td className="C"><a href="https://www.canva.com/design/DAFjjK9MWGo/e6kSfem35WP2Pvqe4GYi0g/edit?utm_content=DAFjjK9MWGo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">9<br />F</a></td>
            <td className="He"><a href="https://www.canva.com/design/DAFjjGaeMJ8/FPmb7JiB3-t1Hba6DUPOcQ/edit?utm_content=DAFjjGaeMJ8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">10<br />Ne</a></td>
        </tr>
        <tr>
            <td className="Li"><a href="sodium.html">11<br />Na</a></td>
            <td className="Be"><a href="magnesium.html">12<br />Mg</a></td>
            <td className="noBorder" colSpan="10"></td>
            <td className="Al"><a href="aluminium.html">13<br />Al</a></td>
            <td className="B"><a href="silicon.html">14<br />Si</a></td>
            <td className="C"><a href="phosphorus.html">15<br />P</a></td>
            <td className="C"><a href="sulfur.html">16<br />S</a></td>
            <td className="C"><a href="chlorine.html">17<br />Cl</a></td>
            <td className="He"><a href="argon.html">18<br />Ar</a></td>
        </tr>
        <tr>
            <td className="Li"><a href="potassium.html">19<br />K</a></td>
            <td className="Be"><a href="calcium.html">20<br />Ca</a></td>
            <td className="Sc"><a href="scandium.html">21<br />Sc</a></td>
            <td className="Sc"><a href="titanium.html">22<br />Ti</a></td>
            <td className="Sc"><a href="vanadium.html">23<br />V</a></td>
            <td className="Sc"><a href="chromium.html">24<br />Cr</a></td>
            <td className="Sc"><a href="manganese.html">25<br />Mn</a></td>
            <td className="Sc"><a href="iron.html">26<br />Fe</a></td>
            <td className="Sc"><a href="cobalt.html">27<br />Co</a></td>
            <td className="Sc"><a href="nickel.html">28<br />Ni</a></td>
            <td className="Sc"><a href="copper.html">29<br />Cu</a></td>
            <td className="Sc"><a href="zinc.html">30<br />Zn</a></td>
            <td className="Al"><a href="gallium.html">31<br />Ga</a></td>
            <td className="B"><a href="germanium.html">32<br />Ge</a></td>
            <td className="B"><a href="arsenic.html">33<br />As</a></td>
            <td className="C"><a href="selenium.html">34<br />Se</a></td>
            <td className="C"><a href="bromine.html">35<br />Br</a></td>
            <td className="He"><a href="krypton.html">36<br />Kr</a></td>
        </tr>
        <tr>
            <td className="Li"><a href="rubidium.html">37<br />Rb</a></td>
            <td className="Be"><a href="strontium.html">38<br />Sr</a></td>
            <td className="Sc"><a href="yttrium.html">39<br />Y</a></td>
            <td className="Sc"><a href="zirconium.html">40<br />Zr</a></td>
            <td className="Sc"><a href="niobium.html">41<br />Nb</a></td>
            <td className="Sc"><a href="molybdenum.html">42<br />Mo</a></td>
            <td className="Sc"><a href="technetium.html">43<br />Tc</a></td>
            <td className="Sc"><a href="ruthenium.html">44<br />Ru</a></td>
            <td className="Sc"><a href="rhodium.html">45<br />Rh</a></td>
            <td className="Sc"><a href="palladium.html">46<br />Pd</a></td>
            <td className="Sc"><a href="silver.html">47<br />Ag</a></td>
            <td className="Sc"><a href="cadmium.html">48<br />Cd</a></td>
            <td className="Al"><a href="indium.html">49<br />In</a></td>
            <td className="Al"><a href="tin.html">50<br />Sn</a></td>
            <td className="B"><a href="antimony.html">51<br />Sb</a></td>
            <td className="B"><a href="tellurium.html">52<br />Te</a></td>
            <td className="C"><a href="iodine.html">53<br />I</a></td>
            <td className="He"><a href="xenon.html">54<br />Xe</a></td>
        </tr>
        <tr>
            <td className="Li"><a href="caesium.html">55<br />Cs</a></td>
            <td className="Be"><a href="barium.html">56<br />Ba</a></td>
            <td className="La" colSpan="1">57-71<br /></td>
            <td className="Sc"><a href="hafnium.html">72<br />Hf</a></td>
            <td className="Sc"><a href="tantalum.html">73<br />Ta</a></td>
            <td className="Sc"><a href="tungsten.html">74<br />W</a></td>
            <td className="Sc"><a href="rhenium.html">75<br />Re</a></td>
            <td className="Sc"><a href="osmium.html">76<br />Os</a></td>
            <td className="Sc"><a href="iridium.html">77<br />Ir</a></td>
            <td className="Sc"><a href="platinum.html">78<br />Pt</a></td>
            <td className="Sc"><a href="gold.html">79<br />Au</a></td>
            <td className="Sc"><a href="mercury.html">80<br />Hg</a></td>
            <td className="Al"><a href="thallium.html">81<br />Tl</a></td>
            <td className="Al"><a href="lead.html">82<br />Pb</a></td>
            <td className="Al"><a href="bismuth.html">83<br />Bi</a></td>
            <td className="Al"><a href="polonium.html">84<br />Po</a></td>
            <td className="Al"><a href="astatine.html">85<br />At</a></td>
            <td className="He"><a href="radon.html">86<br />Rn</a></td>
        </tr>
        <tr>
            <td className="Li"><a href="francium.html">87<br />Fr</a></td>
            <td className="Be"><a href="radium.html">88<br />Ra</a></td>
            <td className="Ac" colSpan="1">89-103<br /></td>
            <td className="Sc"><a href="rutherfordium.html">104<br />Rf</a></td>
            <td className="Sc"><a href="dubnium.html">105<br />Db</a></td>
            <td className="Sc"><a href="seaborgium.html">106<br />Sg</a></td>
            <td className="Sc"><a href="bohrium.html">107<br />Bh</a></td>
            <td className="Sc"><a href="hassium.html">108<br />Hs</a></td>
            <td className="Mt"><a href="meitnerium.html">109<br />Mt</a></td>
            <td className="Mt"><a href="darmstadtium.html">110<br />Ds</a></td>
            <td className="Mt"><a href="roentgenium.html">111<br />Rg</a></td>
            <td className="Mt"><a href="copernicium.html">112<br />Cn</a></td>
            <td className="Mt"><a href="nihonium.html">113<br />Nh</a></td>
            <td className="Mt"><a href="flerovium.html">114<br />Fl</a></td>
            <td className="Mt"><a href="moscovium.html">115<br />Mc</a></td>
            <td className="Mt"><a href="livermorium.html">116<br />Lv</a></td>
            <td className="Mt"><a href="tennessine.html">117<br />Ts</a></td>
            <td className="Mt"><a href="oganesson.html">118<br />Og</a></td>
        </tr>
        </table>
        <br/>
        <table>
        <tr>
            <td className="La"><a href="lanthanum.html">57<br />La</a></td>
            <td className="La"><a href="cerium.html">58<br />Ce</a></td>
            <td className="La"><a href="praseodymium.html">59<br />Pr</a></td>
            <td className="La"><a href="neodymium.html">60<br />Nd</a></td>
            <td className="La"><a href="promethium.html">61<br />Pm</a></td>
            <td className="La"><a href="samarium.html">62<br />Sm</a></td>
            <td className="La"><a href="europium.html">63<br />Eu</a></td>
            <td className="La"><a href="gadolinium.html">64<br />Gd</a></td>
            <td className="La"><a href="terbium.html">65<br />Tb</a></td>
            <td className="La"><a href="dysprosium.html">66<br />Dy</a></td>
            <td className="La"><a href="holmium.html">67<br />Ho</a></td>
            <td className="La"><a href="erbium.html">68<br />Er</a></td>
            <td className="La"><a href="thulium.html">69<br />Tm</a></td>
            <td className="La"><a href="ytterbium.html">70<br />Yb</a></td>
            <td className="La"><a href="lutetium.html">71<br />Lu</a></td>
        </tr>
        <tr>
            <td className="Ac"><a href="actinium.html">89<br />Ac</a></td>
            <td className="Ac"><a href="thorium.html">90<br />Th</a></td>
            <td className="Ac"><a href="protactinium.html">91<br />Pa</a></td>
            <td className="Ac"><a href="uranium.html">92<br />U</a></td>
            <td className="Ac"><a href="neptunium.html">93<br />Np</a></td>
            <td className="Ac"><a href="plutonium.html">94<br />Pu</a></td>
            <td className="Ac"><a href="americium.html">95<br />Am</a></td>
            <td className="Ac"><a href="curium.html">96<br />Cm</a></td>
            <td className="Ac"><a href="berkelium.html">97<br />Bk</a></td>
            <td className="Ac"><a href="californium.html">98<br />Cf</a></td>
            <td className="Ac"><a href="einsteinium.html">99<br />Es</a></td>
            <td className="Ac"><a href="fermium.html">100<br />Fm</a></td>
            <td className="Ac"><a href="mendelevium.html">101<br />Md</a></td>
            <td className="Ac"><a href="nobelium.html">102<br />No</a></td>
            <td className="Ac"><a href="lawrencium.html">103<br />Lr</a></td>
        </tr>
        </table>
       
        </center>
      </div>
    );
  }
}

export default PeriodicTable;
