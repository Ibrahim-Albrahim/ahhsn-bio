import React, { useEffect, useRef, useState } from "react";
import '../assets/scss/SearchBar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons'

function SeachBar() {
    const searchInput = useRef()
    const searchForm = useRef()
    let [loadingClass, setLoadingClass] = useState('')
    const SubmitSearch = event => {
        event.preventDefault()
        if (searchInput.current.value.length !== 0) {
            setLoadingClass('fa-active')
            let slicedText = searchInput.current.value.split(' ').join('+').toString()
            window.location.href = `https://shop.ahhsn.com/Ar/catalogsearch/result/?q=${slicedText}`;
        } else { searchInput.current.setCustomValidity("Enter product name or SKU  |  ادخل اسم او رقم المنتج"); }
    }

    useEffect(() => {
        searchForm.current.reset()
        setLoadingClass('')
    }, [])

    return (
        <div className="search-bar">
            <h4>Search in AHHSN Shop  |  ابحث في متجر احسن</h4>
            <form ref={searchForm} onSubmit={SubmitSearch} >
                <FontAwesomeIcon className={`fa-spinner ${loadingClass}`} icon={faSpinner} />
                <input ref={searchInput} className="search-input" type="text" inputMode="search" required />
                <span>Enter product name or SKU  |  ادخل اسم او رقم المنتج</span>
                <button type="submit"><FontAwesomeIcon className={'fa-search'} icon={faSearch} /></button>
            </form>
        </div>
    );
}

export default SeachBar;