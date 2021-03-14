import Button, { ButtonType, ButtonSize } from './components/Button/Button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button disabled>Hello</Button>
        <Button autoFocus onClick={() => { console.log(99999) }} btnType={ButtonType.Primary} size='sm'> Hello </Button>
        <Button btnType={ButtonType.Link} href="http: //www.baidu.com" disabled> Baidu Link </Button>
      </header>
    </div>
  );
}

export default App;
