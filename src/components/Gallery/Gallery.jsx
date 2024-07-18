<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .navbar {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px 0;
            flex-wrap: wrap;
            position: relative;

        }

        .nav-divider {
            width: calc(100% + 16%);
            height: 1px;
            background-color: #e5e5e5;
            margin-left: -8%;
            margin-bottom: 2%;
        }

        @media (max-width:768px) {
            .nav-divider {
                display: none;
            }
        }

        .search-container {
            display: flex;
            align-items: center;
            background-color: white;
            border-radius: 40px;
            border: 1px solid #ddd;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08),
                0 4px 12px rgba(0, 0, 0, 0.05);
            padding: 6px 8px;
            transition: all 0.3s ease;
            width: 350px;
            max-width: 100%;
            gap: 10px;
            justify-content: center;
            align-items: center;
        }

        @media (max-width:768px) {
            .search-container {
                display: none;
            }
        }

        .search-container.expanded {
            width: 90%;
            max-width: 850px;
            padding: 16px;
            position: absolute;
            top: 60px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 999;
        }

        .search-field {
            border: none;
            background: none;
            font-size: 14px;
            padding: 5px 10px;
            outline: none;
            cursor: pointer;
            width: 100%;
            transition: background-color 0.3s ease;
        }

        .search-field:hover,
        .search-field:focus,
        .search-field.active {
            background-color: #f7f7f7;
            border-radius: 20px;
        }

        .search-section {
            display: flex;
            flex-direction: column;
            flex: 1;
        }

        .search-section:not(:last-of-type) {
            border-right: 1px solid #ddd;
        }

        .search-label {
            font-weight: bold;
            font-size: 12px;
            margin-bottom: 4px;
            display: none;
        }

        .search-container.expanded .search-label {
            display: block;
        }

        .search-button {
            background-color: #ff385c;
            color: white;
            border: none;
            border-radius: 50%;
            height: 32px;
            width: 32px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 8px;
            transition: all 0.3s ease;
        }

        .search-container.expanded .search-button {
            width: auto;
            border-radius: 24px;
            padding: 10px 20px;
        }

        .search-icon {
            width: 12px;
            height: 12px;
            border: 2px solid white;
            border-radius: 50%;
            position: relative;
        }

        .search-icon::after {
            content: '';
            position: absolute;
            top: 10px;
            left: 10px;
            width: 2px;
            height: 6px;
            background-color: white;
            transform: rotate(45deg);
        }

        .search-button-text {
            display: none;
        }

        .search-container.expanded .search-button-text {
            display: block;
        }

        .search-section.hidden {
            display: none;
        }

        .search-container.expanded .search-section.hidden {
            display: flex;
        }
    </style>
</head>

<body>

</body>
<nav class="navbar">
    <div class="search-container" id="searchContainer">
        <div class="search-section">
            <label class="search-label" for="whereInput">Where</label>
            <input type="text" class="search-field" placeholder="Anywhere" id="whereInput" />
        </div>
        <div class="search-section">
            <label class="search-label" for="checkInInput">Check in</label>
            <input type="text" class="search-field" placeholder="Add dates" id="checkInInput" />
        </div>
        <div class="search-section hidden">
            <label class="search-label" for="checkOutInput">Check out</label>
            <input type="text" class="search-field" placeholder="Add dates" id="checkOutInput" />
        </div>
        <div class="search-section">
            <label class="search-label" for="guestsInput">Who</label>
            <input type="text" class="search-field" placeholder="Add guests" id="guestsInput" />
        </div>
        <button class="search-button" id="searchButton">
            <div class="search-icon"></div>
            <span class="search-button-text">Search</span>
        </button>
    </div>

</nav>


<script>

    const searchContainer = document.getElementById('searchContainer')
    const searchFields = document.querySelectorAll('.search-field')
    const searchButton = document.getElementById('searchButton')
    const whereInput = document.getElementById('whereInput')
    const anywhereModal = document.getElementById('anywhereModal')
    const regionItems = document.querySelectorAll('.region-item')





    let isExpanded = false




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
        searchFields.forEach(f => {
            f.classList.remove('active')
            f.value = '' // Clear the input value
        })

        isExpanded = false
    }




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

</script>

</html> i want to expand navbar when click three input field anywhere ,anyweek,add guest and after expand i want to see
anywhere,check in ,check out,add guest field in navbar please do this in react js 