window.addEventListener('load', () =>
  document.querySelector('.preloader').classList.add('hidePreloader')
)

const CreateCats = (() => {
  // cat data
  const cats = []
  // cat class
  class Cat {
    constructor(
      make,
      country,
      img,
      special,
      breed,
      price,
      type,
      personality,
      age
    ) {
      this.make = make
      this.country = country
      this.img = img
      this.special = special
      this.breed = breed
      this.price = price
      this.type = type
      this.personality = personality
      this.age = age
    }
  }
  //cat creation function
  function makeCat(
    make,
    country,
    img = 'img/cat-default.jpeg',
    special = true,
    breed = 'new breed',
    price = 99,
    type = 'Tabby Cat',
    personality = 'Neuroticism',
    age = '2'
  ) {
    const cat = new Cat(
      make,
      country,
      img,
      special,
      breed,
      price,
      type,
      personality,
      age
    )
    cats.push(cat)
  }
  // produce cats
  function produceCats() {
    makeCat('persian', 'iran')
    makeCat('Bobcat', 'Canada', 'img/cat-wild-1.jpge', true)
    makeCat('Bombay', 'World Wide', 'img/cat-wild-2.jpge')
    makeCat('Black Tiger', 'Asia', 'img/cat-wild-3.jpge')
    makeCat('lion', 'Africa', 'img/cat-wild-4.jpge', false)
    makeCat('Bombay', 'World Wide', 'img/cat-wild-5.jpge', false)
    makeCat('Bombay', 'World Wide', 'img/cat-cute-1.jpge')
    makeCat('Bombay', 'World Wide', 'img/cat-cute-2.jpge', false)
    makeCat('Bombay', 'World Wide', 'img/cat-cute-3.jpge', false)
    makeCat('Bombay', 'World Wide', 'img/cat-cute-4.jpge', false)
    makeCat('Bombay', 'World Wide', 'img/cat-cute-5.jpge', false)
  }
  produceCats()

  // special cats
  const specialCats = cats.filter((cat) => cat.special === true)

  return {
    cats,
    specialCats,
  }
})()

const DisplaySpecialCats = ((CreateCats) => {
  const specialCats = CreateCats.specialCats

  const info = document.querySelector('.featured-info')

  // document loaded event
  document.addEventListener('DOMContentLoaded', () => {
    info.innerHTML = ''

    let data = ''

    specialCats.forEach(item)
  })
})(CreateCats)
