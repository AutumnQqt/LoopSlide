let index
let timeId
init()

timeId = setTimer()

$('.wrapper').on('mouseenter', () => {
  window.clearInterval(timeId)
})
$('.wrapper').on('mouseleave', () => {
  timeId = setTimer()
})



//初始化
function init() {
  index = 1
  getImg(index).addClass('current')
    .siblings().addClass('enter')
}

function setTimer() {
  return setInterval(() => {
    index += 1
    setCurrent(getImg(index))
    setLeave(getImg(index - 1))
  }, 2000)
}

function getImg(index) {
  index = (index) % ($('.wrapper li').length)
  if (index === 0) {
    index = $('.wrapper li').length
  }
  return $(`.wrapper li:nth-child(${index})`)
}


function setCurrent($node) {
  return $node.addClass('current').removeClass('leave enter')
}
function setEnter($node) {
  return $node.addClass('enter').removeClass('leave current')
}
function setLeave($node) {
  return $node.addClass('leave').removeClass('enter current').one('transitionend', (e) => {
    setEnter($(e.currentTarget))
  })
}