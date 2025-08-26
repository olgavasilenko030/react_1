import logo from '../logo.svg';
import './App.css';
import Header from'./header/Header.js';
import Footer from './footer/Footer.js';
import Article from'./article/Article.js';
import Nav from './nav/Nav.js';
import data from './db.json';

function App(props) {
let db = data.people;
  return(
    <div className="App">
      <Header/>
      <Nav navigation ={props.navigation} />
      <Article db ={db} />
      <div>
        {/* <Article/>
             <Article title ="Современные десктопные процессоры архитектуры x86
        общие принципы работы (x86 CPU digest 2.0)" content="Этот материал представляет собой обновлённую, существенно переработанную и дополненную версию статьи 2006 года, которая называлась «Современные десктопные процессоры архитектуры x86: общие принципы работы (x86 CPU FAQ 1.0)». Правда, чтобы не вводить потенциальных читателей в заблуждение словом «FAQ», мы решили назвать новый материал более правильным, как нам кажется, термином — «дайджест». Действительно, ведь большая его часть — это не ответы на конкретные вопросы, а разъяснения и краткие выжимки из чего угодно — от технической документации до истории развития микропроцессорной отрасли. Для кого предназначен данный материал? Нам видятся две группы потенциальных читателей.
        "/> */}
      </div>
    </div>
  );
}
{/*Comment testing
 <command />*/}

export default App;
