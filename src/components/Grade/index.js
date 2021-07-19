import Link from 'next/link'

import { StyledGrade } from "../DraggableGrade/styles";

export function Grade({ books, title }){
  return(
    <StyledGrade>
      <div className="gradeHeader">
        <h2>{title}</h2>
      </div>
      <div className="gradeWrapper">
        
        {books.map(book => {
          const chapters =  book.chaptersOrder ? JSON.parse(book.chaptersOrder) : book.chapters
          if(chapters){
            return(
              <div 
                className="book"
                key={book._id}
              >
                <h2>{book.title}</h2>
                <ul className="chapters">
                  {chapters.map((chapter, index) => {
                    return(
                      <li
                      key={chapter._id}
                      >
                        <span className="order">{index + 1}</span>
                        <span className="chapName">{ chapter.title }</span>
                        <Link href={chapter._id}><a className="chapBtns"></a></Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          }
        })}
      </div>
    </StyledGrade>
  )
}