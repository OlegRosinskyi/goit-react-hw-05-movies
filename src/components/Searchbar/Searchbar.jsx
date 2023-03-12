import { useState } from "react";
import PropTypes from 'prop-types';
import { SearchbarInput } from "./Searchbar.stiled";
import { SearchbarBox } from "./Searchbar.stiled";
import { SearchbarForm } from "./Searchbar.stiled";
import { Searchbarbutton } from "./Searchbar.stiled";
import { toast } from "react-toastify";

export default function Searchbar({ onSubmit }) {

    const [filmName, setFilmName] = useState('');
    const hendleSubmit = (event) => {
        event.preventDefault();

        if (filmName.trim() === '') { toast.error('Введите название фильма'); return; }
        onSubmit(filmName.trim());
        resetSearchImage();
    };
    const searchImage = (event) => { event.preventDefault(); setFilmName(event.currentTarget.value); };
    const resetSearchImage = () => { setFilmName(''); };
return (
            <SearchbarBox>
            <SearchbarForm onSubmit={hendleSubmit}>
                <SearchbarInput
                className="input"
                type="text"
                autocomplete="off"
                placeholder="Search film"
                value={filmName}
                onChange={searchImage}        
                />
                <Searchbarbutton type="submit">
                    <span className="button-label">Search</span>
                </Searchbarbutton>
            </SearchbarForm>
        </SearchbarBox>  
     )
 }
Searchbar.propTypes = {
    onSubmit: PropTypes.func, 
}




   