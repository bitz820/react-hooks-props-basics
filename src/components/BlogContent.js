import React from "react";

function BlogContent(props) {
  console.log(props)
  if (!props.isPublished) {
    return null
  } else {

    return (
      <div>

        <h1>{props.articleText}</h1>
        <p>{props.minutesToRead} Minute to Read</p>
      </div>
    )

  }
}

export default BlogContent;
