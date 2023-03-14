import React, { useRef } from "react";
import '../assets/scss/SearchBar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function SeachBar() {
    const searchInput = useRef()

    const SubmitSearch = (event) => {
        event.preventDefault()
        let slicedText = searchInput.current.value.split(' ').join('+').toString()
        const href = 'https://shop.ahhsn.com/Ar/catalogsearch/result/?q=' + slicedText;
        window.location.href = href;
    }

    return (
        <div className="search-bar">
            <h4>Search in AHHSN Shop  |  ابحث في متجر احسن</h4>
            <form onSubmit={SubmitSearch} >
                <input ref={searchInput} className="search-input" type="text" inputMode="search" required />
                <span>Enter product name or SKU  |  ادخل اسم او رقم المنتج</span>
                <FontAwesomeIcon className={'fa-search'} icon={faSearch} onClick={SubmitSearch} />
            </form>
        </div>
    );
}

export default SeachBar;