const Box = props => {
  return <div className={props.class}>{props.boxsize}</div>
}

const element = (
  <div className='container'>
    <h1 className='heading'>Boxes</h1>
    <div className='boxes-container'>
      <Box boxsize='Small' class='small box' />
      <Box boxsize='Medium' class='medium box' />
      <Box boxsize='Large' class='large box' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
