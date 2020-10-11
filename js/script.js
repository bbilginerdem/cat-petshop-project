window.addEventListener('load', () =>
  document.querySelector('.preloader').classList.add('hidePreloader')
)

const CreateCats = (() => {
  // cat data
  const cats = []
  // cat class
  class Cat {
    constructor(
      type,
      breed,
      country,
      img,
      special,
      price,
      personality,
      age
    ) {
      this.type = type
      this.breed = breed
      this.country = country
      this.img = img
      this.special = special
      this.price = price
      this.personality = personality
      this.age = age
    }
  }
  //cat creation function
  function makeCat(
    type = 'wild',
    breed = 'Tabby Cat',
    country,
    img = 'img/cat-default.jpg',
    special = true,
    price = 99,
    personality = 'Neuroticism',
    age = '2'
  ) {
    const cat = new Cat(
      type,
      breed,
      country,
      img,
      special,
      price,
      personality,
      age
    )
    cats.push(cat)
  }
  // produce cats
  function produceCats() {
    makeCat('wild', 'persian', 'iran', 'img/cat-wild-1.jpg', true)
    makeCat('wild', 'Bobcat', 'America', 'img/cat-wild-2.jpg')
    makeCat('wild', 'Black Tiger', 'Asia', 'img/cat-wild-3.jpg')
    makeCat('wild', 'lion', 'Africa', 'img/cat-wild-4.jpg', false)
    makeCat('wild', 'Wildy', 'World Wide', 'img/cat-wild-5.jpg', false)
    makeCat('cute','Bombay', 'World Wide', 'img/cat-cute-1.jpg', true)
    makeCat('cute','Bombay', 'World Wide', 'img/cat-cute-2.jpg', false)
    makeCat('cute','Bombay', 'World Wide', 'img/cat-cute-3.jpg', false)
    makeCat('cute','Bombay', 'World Wide', 'img/cat-cute-4.jpg', false)
    makeCat('cute','Bombay', 'World Wide', 'img/cat-cute-5.jpg', false)
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

    specialCats.forEach((item) => {
      data += `          <!-- single item -->
          <div class="featured-item my-3 d-flex p-2 text-capitalize align-items-baseline flex-wrap">
            <span data-img="${item.img}" class="featured-icon mr-2"><i class="fas fa-cat"></i></span>
            <h5 class="font-weight-bold mx-1">${item.make}</h5>
            <h5 class="mx-1">${item.breed}</h5>
          </div>
          <!-- end of single item -->`
    })
    info.innerHTML = data
  })
  // changing picture
  info.addEventListener('click', (event) => {
    if (event.target.parentElement.classList.contains('featured-icon')) {
      const img = event.target.parentElement.dataset.img
      document.querySelector('.featured-photo').src = img
    }
  })
})(CreateCats)

const DisplayCats = ((CreateCats) => {
  // all cats
  const cats = CreateCats.cats
  // cat container
  const inventory = document.querySelector('.inventory-container')

  //content loaded
  document.addEventListener('DOMContentLoaded', () => {
    inventory.innerHTML = ''
    let output = ''
    cats.forEach((cat) => {
      output += `        <!-- single cat -->
        <div class="col-10 mx-auto my-3 col-md-6 col-lg-4 single-cat ${cat.type}">
          <div class="card cat-card">
            <img src="${cat.img}" class="card-img-top cat-img" alt="">
            <!-- card body -->
            <div class="card-body">
              <div class="cat-info d-flex justify-content-between">
                <!-- first flex child -->
                <div class="cat-text text-uppercase">
                  <h6 class="font-weight-bold">${cat.make}</h6>
                  <h6>${cat.make}</h6>
                </div>
                <!-- second flex child -->
                <h5 class="cat-value align-self-center py-2 px-3">
                  $<span class="cat-price">${cat.price}</span>
                </h5>
              </div>
            </div>
            <!-- end of card -->
            <div class="card-footer text-capitalize d-flex justify-content-between">
              <p><span><i class="fas fa-cat"></i>${cat.breed}</span></p>
              <p><span><i class="fas fa-stopwatch"></i>${cat.age}</span></p>
              <p><span><i class="fas fa-user-friends"></i>${cat.personality}</span></p>
            </div>
          </div>
        </div>
        <!-- end of single cat -->`
    })
    inventory.innerHTML = output
  })
})(CreateCats)
// filter cats
const FilterCats = (() => {
  const filter = document.querySelectorAll('.filter-btn')
  filter.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const value = event.target.dataset.filter
      const singleCat = document.querySelectorAll('.single-cat')
      singleCat.forEach((cat) => {
        if (value === 'all') {
          cat.style.display = 'block'
        } else {
          !cat.classList.contains(value)
            ? (cat.style.display = 'none')
            : (cat.style.display = 'block ')
        }
      })
    })
  })
})()
// show modal
