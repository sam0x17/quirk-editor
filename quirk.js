const blessed = require('blessed')

var screen = blessed.screen({ smartCSR: true })
var program = screen.program
screen.title = 'quirk editor'
program.forceEncoding = true
program.alternateBuffer()
program.hideCursor()
program.enableMouse()
program.clear()

program.on('mouse', (data) => {

})

program.on('keypress', function(ch, key) {
  if(key.name === 'q') {
    program.clear()
    program.disableMouse()
    program.showCursor()
    program.normalBuffer()
    process.exit(0)
  }
})

var filetree = blessed.FileManager({
  left: 0,
  top: 0,
  width: "20%",
  height: "100%",
  cwd: '.',
  tags: true
})

var filetree_border = blessed.Line({
  orientation: 'vertical',
  left: "20%",
  height: "100%",
  style: {
    border: {
      fg: '#f0f0f0'
    }
  },
  top: 0
})

screen.append(filetree)
screen.append(filetree_border)
filetree.refresh()
screen.render()
