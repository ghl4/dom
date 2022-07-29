const div = dom.create("<div>新建的div</div>")
console.log(div)

dom.after(test,div)

const div2 = dom.create("<div>新建的div2</div>")
dom.append(test,div2)

dom.style(test, {border: '1px solid red', color: 'blue'})
console.log(dom.style(test, 'border'))
dom.style(test, 'border', '1px solid black')

const testDiv = dom.find('#test')[0]
dom.find('.red',testDiv)
console.log(testDiv)
console.log(dom.find('.red',testDiv))

const t = dom.find('#travel')[0]
console.log(t)
dom.each(dom.children(t), (n)=> dom.style(n, 'color', 'red'))




