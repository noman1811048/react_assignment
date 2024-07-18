const vanillaJs = () => {
  document.addEventListener('DOMContentLoaded', () => {
 
const searchContainer = document.getElementById('searchContainer')
const searchFields = document.querySelectorAll('.search-field')
const whereInput = document.getElementById('whereInput')
const anywhereModal = document.getElementById('anywhereModal')
const regionItems = document.querySelectorAll('.region-item')

const checkInInput = document.getElementById('checkInInput')
const checkOutInput = document.getElementById('checkOutInput')
const calendarModal = document.getElementById('calendarModal')
const currentMonthElement = document.getElementById('currentMonth')
const calendarGrid = document.getElementById('calendarGrid')
const prevMonthButton = document.getElementById('prevMonth')
const nextMonthButton = document.getElementById('nextMonth')
const guestsInput = document.getElementById('guestsInput')
const guestsModal = document.getElementById('guestsModal')
const guestIncrements = document.querySelectorAll('.guest-increment')
const guestDecrements = document.querySelectorAll('.guest-decrement')

const imageGrid = document.getElementById('imageGrid')
const fullscreenViewer = document.getElementById('fullscreenViewer')
const fullscreenImage = document.getElementById('fullscreenImage')
const closeButton = document.getElementById('closeButton')
const prevButton = document.getElementById('prevButton')
const nextButton = document.getElementById('nextButton')
const imageCounter = document.getElementById('imageCounter')

const shareButton = document.getElementById('shareButton')
const shareModal = document.getElementById('shareModal')
const closeModal = shareModal.querySelector('.close')
const copyLinkButton = document.getElementById('copyLinkButton')
const listingLink = document.getElementById('listingLink')
const listingInfo = document
  .querySelector('.listing-details')
  .textContent.trim()


let guests = {
  adults: 0,
  children: 0,
  infants: 0,
  pets: 0
}

const images = [
  './Image/image1.jpg',
  './Image/image1.jpg',
  './Image/image1.jpg',
  './Image/image1.jpg',
  './Image/image1.jpg'
]

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]
let currentDate = new Date()
let selectedStartDate = null
let selectedEndDate = null

let isExpanded = false

// Function to show guests modal
function showGuestsModal() {
  guestsModal.style.display = 'block'
  const rect = guestsInput.getBoundingClientRect()
  const marginRight = 100 // Set your desired right margin in pixels
  guestsModal.style.top = `${rect.bottom + window.scrollY + 10}px`
  guestsModal.style.left = `${rect.left + window.scrollX - marginRight}px`
}

// Function to update displayed guest counts
function updateGuestCount() {
  document.getElementById('adultCount').textContent = guests.adults
  document.getElementById('childrenCount').textContent = guests.children
  document.getElementById('infantCount').textContent = guests.infants
  document.getElementById('petsCount').textContent = guests.pets
  guestsInput.value = `${guests.adults + guests.children} guests`
}

guestIncrements.forEach(button => {
  button.addEventListener('click', (event) => {
    const type = button.getAttribute('data-type')
    guests[type]++
    updateGuestCount()
    event.stopPropagation()
  })
})

guestDecrements.forEach(button => {
  button.addEventListener('click', (event) => {
    const type = button.getAttribute('data-type')
    if (guests[type] > 0) {
      guests[type]--
      updateGuestCount()
    }
    event.stopPropagation()
  })
})

guestsInput.addEventListener('click', (event) => {
  expandNavbar()
  showGuestsModal()
  event.stopPropagation()
})

document.addEventListener('click', event => {
  if (
    !guestsModal.contains(event.target) &&
    !searchContainer.contains(event.target) &&
    !anywhereModal.contains(event.target) &&
    !calendarModal.contains(event.target)
  ) {
    guestsModal.style.display = 'none'
    collapseNavbar()
  }
})


updateGuestCount()



// Function to expand the navigation bar
function expandNavbar() {
  if (!isExpanded) {
    searchContainer.classList.add('expanded')
    isExpanded = true
  }
}

// Function to collapse the navigation bar and reset states
function collapseNavbar() {
  searchContainer.classList.remove('expanded')
  anywhereModal.style.display = 'none'
  calendarModal.style.display = 'none'
  guestsModal.style.display = 'none'
  searchFields.forEach(f => {
    f.classList.remove('active')
    f.value = '' // Clear the input value
  })

  isExpanded = false


  // Reset guest count
  guests = {
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0
  }
  updateGuestCount()

  // Reset date selection
  selectedStartDate = null
  selectedEndDate = null
  renderCalendar()
}

// Function to show "Anywhere" modal for location selection
function showModal() {
  anywhereModal.style.display = 'block'
  const rect = whereInput.getBoundingClientRect()
  anywhereModal.style.top = `${rect.bottom + window.scrollY + 10}px`
  anywhereModal.style.left = `${rect.left + window.scrollX - 420}px`
}

// Function to show calendar modal for date selection
function showCalendarModal(input) {
  const modalWidth = 600
  const marginOffset = 10
  calendarModal.style.display = 'block'
  const rect = input.getBoundingClientRect()
  const leftPosition =
    rect.left +
    window.scrollX +
    rect.width / 2 -
    modalWidth / 2 +
    marginOffset
  calendarModal.style.top = `${rect.bottom + window.scrollY + 10}px`
  calendarModal.style.left = `${leftPosition}px`
  renderCalendar()
}

// Function to render the calendar grid for the current month
function renderCalendar() {
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()
  currentMonthElement.textContent = `${months[month]} ${year}`

  calendarGrid.innerHTML = ''
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const firstDay = new Date(year, month, 1).getDay()

  for (let i = 0; i < firstDay; i++) {
    calendarGrid.appendChild(document.createElement('div'))
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dayElement = document.createElement('div')
    dayElement.classList.add('calendar-day')
    dayElement.textContent = day
    dayElement.addEventListener('click', (event) => {
      selectDate(new Date(year, month, day))
      event.stopPropagation() // Prevent the click event from bubbling up
    })

    if (
      selectedStartDate &&
      selectedStartDate.getTime() === new Date(year, month, day).getTime()
    ) {
      dayElement.classList.add('selected')
    }
    if (
      selectedEndDate &&
      selectedEndDate.getTime() === new Date(year, month, day).getTime()
    ) {
      dayElement.classList.add('selected')
    }

    calendarGrid.appendChild(dayElement)
  }
}


// Function to select a date on the calendar
function selectDate(date) {
  if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
    selectedStartDate = date
    selectedEndDate = null
    checkInInput.value = formatDate(date)
    checkOutInput.value = ''
    checkOutInput.focus()
  } else {
    if (date > selectedStartDate) {
      selectedEndDate = date
      checkOutInput.value = formatDate(date)
      guestsInput.focus() // Move focus to guests after selecting check-out date
    } else {
      selectedEndDate = selectedStartDate
      selectedStartDate = date
      checkInInput.value = formatDate(date)
      checkOutInput.value = formatDate(selectedEndDate)
      guestsInput.focus() // Move focus to guests after selecting check-out date
    }
  }
  renderCalendar()
}

// Function to format date into a readable string
function formatDate(date) {
  return `${months[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`
}

prevMonthButton.addEventListener('click', (event) => {
  currentDate.setMonth(currentDate.getMonth() - 1)
  renderCalendar()
  event.stopPropagation()
})

nextMonthButton.addEventListener('click', (event) => {
  currentDate.setMonth(currentDate.getMonth() + 1)
  renderCalendar()
  event.stopPropagation()
})

searchFields.forEach(input => {
  input.addEventListener('click', event => {
    expandNavbar()
    searchFields.forEach(f => f.classList.remove('active'))
    event.target.classList.add('active')
    if (event.target === whereInput) {
      showModal()
      calendarModal.style.display = 'none'
      guestsModal.style.display = 'none'
    } else if (
      event.target === checkInInput ||
      event.target === checkOutInput
    ) {
      showCalendarModal(event.target)
      anywhereModal.style.display = 'none'
      guestsModal.style.display = 'none'
    } else if (event.target === guestsInput) {
      showGuestsModal()
      anywhereModal.style.display = 'none'
      calendarModal.style.display = 'none'
    } else {
      anywhereModal.style.display = 'none'
      calendarModal.style.display = 'none'
      guestsModal.style.display = 'none'
    }
    event.stopPropagation()
  })
})

document.addEventListener('click', event => {
  if (
    !searchContainer.contains(event.target) &&
    !calendarModal.contains(event.target) &&
    !anywhereModal.contains(event.target) &&
    !guestsModal.contains(event.target)
  ) {
    collapseNavbar()
  }
})

regionItems.forEach(item => {
  item.addEventListener('click', (event) => {
    const regionName = item.querySelector('.region-name').textContent
    whereInput.value = regionName
    anywhereModal.style.display = 'none'
    whereInput.classList.remove('active')
    checkInInput.focus()
    event.stopPropagation()
  })
})


calendarModal.addEventListener('click', (event) => {
  event.stopPropagation()
})


anywhereModal.addEventListener('click', (event) => {
  event.stopPropagation()
})


guestsModal.addEventListener('click', (event) => {
  event.stopPropagation()
})

// Initialize the calendar
renderCalendar()

let currentImageIndex = 0

function createImageGrid() {
  images.forEach((src, index) => {
    const imageItem = document.createElement('div')
    imageItem.className = 'image-item'

    const img = document.createElement('img')
    img.src = src
    img.alt = `Image ${index + 1}`

    imageItem.appendChild(img)

    if (index === 4) {
      const showAllButton = document.createElement('button')
      showAllButton.className = 'show-all'
      showAllButton.textContent = 'Show all photos'
      showAllButton.onclick = e => {
        e.stopPropagation()
        openFullscreen(0)
      }
      imageItem.appendChild(showAllButton)
    }

    imageItem.onclick = () => openFullscreen(index)
    imageGrid.appendChild(imageItem)
  })
}

function openFullscreen(index) {
  currentImageIndex = index
  updateFullscreenImage()
  fullscreenViewer.style.display = 'block'
}

function closeFullscreen() {
  fullscreenViewer.style.display = 'none'
}

function updateFullscreenImage() {
  fullscreenImage.src = images[currentImageIndex]
  imageCounter.textContent = `${currentImageIndex + 1} / ${images.length}`
}

function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length
  updateFullscreenImage()
}

function showPrevImage() {
  currentImageIndex =
    (currentImageIndex - 1 + images.length) % images.length
  updateFullscreenImage()
}

function updateListingLink() {
  const baseUrl = window.location.href.split('?')[0]
  const encodedInfo = encodeURIComponent(listingInfo)
  const fullUrl = `${baseUrl}?listing=${encodedInfo}`
  listingLink.href = fullUrl
}

updateListingLink()

shareButton.onclick = () => {
  shareModal.style.display = 'block'
}

closeModal.onclick = () => {
  shareModal.style.display = 'none'
}

window.onclick = event => {
  if (event.target == shareModal) {
    shareModal.style.display = 'none'
  }
}

copyLinkButton.onclick = () => {
  const currentURL = listingLink.href
  navigator.clipboard
    .writeText(currentURL)
    .then(() => {
      alert('Link copied to clipboard!')
    })
    .catch(err => {
      console.error('Failed to copy: ', err)
    })
}

const heartButton = document.getElementById('heartButton')
const heartIcon = heartButton.querySelector('.heart-icon')

function updateHeartButton() {
  const isLiked = localStorage.getItem('isLiked') === 'true'
  heartIcon.textContent = isLiked ? '❤' : '♡'
  heartButton.classList.toggle('active', isLiked)
}

heartButton.onclick = () => {
  const isLiked = localStorage.getItem('isLiked') !== 'true'
  localStorage.setItem('isLiked', isLiked.toString())
  updateHeartButton()
}

// Initial setup
createImageGrid()
updateHeartButton()

closeButton.onclick = closeFullscreen
prevButton.onclick = showPrevImage
nextButton.onclick = showNextImage

document.addEventListener('keydown', e => {
  if (fullscreenViewer.style.display === 'block') {
    if (e.key === 'ArrowRight') showNextImage()
    if (e.key === 'ArrowLeft') showPrevImage()
    if (e.key === 'Escape') closeFullscreen()
  }
})

  });
};

export default vanillaJs;
