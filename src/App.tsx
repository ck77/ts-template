import { FC, SetStateAction, useState } from 'react';
import { ThemeProvider, ButtonToolbar, Container, Row, Col, Table, Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './page/home';
import Topic from './page/topic';


const App: FC = () => {

  const [key, setKey] = useState<string>('stock');
  return (

    <Container fluid>
      <Tabs
        id="controlled-tab"
        activeKey={key}
        onSelect={(k: SetStateAction<string>) => setKey(k)}
        className="mb-2">

        <Tab eventKey="stock" title="Stock">
          <Home />
        </Tab>
        <Tab eventKey="sale" title="Sale">
          <Topic />
        </Tab>

      </Tabs>
    </Container>
  )
}

// const style = {
//   // container: { backgroundColor: 'orange' },
//   col: { margin: '10px' }

// }

export default App;