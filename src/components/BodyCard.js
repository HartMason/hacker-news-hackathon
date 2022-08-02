import React from "react";

const liStyles = {
    width: "100%",
    listStyle: "none",
    marginTop: "8px",
    marginBottom: "8px",
}

const divStyles = {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
}

const titleStyles = {
    fontSize: "14px",
    paddingRight: "8px",
    marginBottom: "5px"
}

const infoDivStyles = {
    width: "480px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "10px"
}

const pointStyles = {
    borderRight: "1px solid black",
    fontSize: "10pt",
    paddingRight: "10px"
}

const BodyCard = (props) => {
    const {title, url, author, points, comments, timePosted, storyTitle} = props;
    // let currentDate = new(Date)
    // let timeElapsed = currentDate - timePosted

    return(
<li className="body-list" style={liStyles}>
    <div style={divStyles}>
        {title ? <p className="article-title" style={titleStyles}>{title}</p>: <p className="article-title" style={titleStyles}>{storyTitle}</p>}
        
        <a href={url}><p className="article-url" style={titleStyles}>({url})</p></a>
    </div>
    <div style={infoDivStyles}>
        <a href={url}><p className="article-points" style={pointStyles}>{points} points</p></a>
        <a href={url}><p className="article-author" style={pointStyles}>{author}</p></a>
        <a href={url}><p className="article-timePosted" style={pointStyles}>{timePosted}</p></a>
        <a href={url}><p className="article-comments" style={pointStyles}>{comments} comments</p></a>
    </div>
</li>
)};

export default BodyCard ;