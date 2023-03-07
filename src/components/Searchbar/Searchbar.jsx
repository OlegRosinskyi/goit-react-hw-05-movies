import { Component } from "react";
import PropTypes from 'prop-types';
//import {AiOutlineSearch} from "react-icons/ai";
import { SearchbarInput } from "./Searchbar.stiled";
import { SearchbarBox } from "./Searchbar.stiled";
import { SearchbarForm } from "./Searchbar.stiled";
import { Searchbarbutton } from "./Searchbar.stiled";
import { toast } from "react-toastify";


export class Searchbar extends Component
{
    state = {
        filmName: '',
    }
//componentDidMount() {console.log('componentDidMount Searchbar') };
  //  componentDidUpdate() { console.log('componentDidUpdate Searchbar') };

    hendleSubmit = (event) => {
        event.preventDefault();
        if (this.state.filmName.trim() === '') {toast.error('Введите название картинки' ); return; }
        this.props.onSubmit(this.state.filmName.trim());
       this.resetSearchImage();
       // event.currentTarget.value = '';
    };
    searchImage = (event) => { this.setState({ filmName: event.currentTarget.value }); };
    resetSearchImage = () => { this.setState({ filmName: '', }); };
    
    render(){
    return (
        
            <SearchbarBox>
            <SearchbarForm onSubmit={this.hendleSubmit}>
                <SearchbarInput
                className="input"
                type="text"
                autocomplete="off"
                placeholder="Search film"
                value={this.state.imageName}
                onChange={this.searchImage}        
                />
                <Searchbarbutton type="submit">
                    <span className="button-label">Search</span>
                </Searchbarbutton>
            </SearchbarForm>
        </SearchbarBox>  
        
     )}
}
 Searchbar.propTypes = {
    onChange: PropTypes.func, 
}