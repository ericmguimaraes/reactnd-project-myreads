import React from "react";

class Book extends React.Component {
    render() {
        const { title, subtitle, imageLinks, shelf } = this.props.book
        const { thumbnail } = imageLinks
        return (<div className="book">
            <div className="book-top">
                <div className="book-cover" style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${thumbnail})`
                }}></div>
                <div className="book-shelf-changer">
                    <select defaultValue={shelf}>
                        <option  value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{subtitle}</div>
        </div>)
    }
}

export default Book