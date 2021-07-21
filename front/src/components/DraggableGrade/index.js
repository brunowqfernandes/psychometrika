import Link from 'next/link'
import { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

import { api } from '../../services/api';

import { StyledGrade } from "./styles";

export function DraggableGrade({ books, title }){

  function handleRestoreOrder(){
    books.forEach(async book => {
      if(book.chaptersOrder)
        await api.put(`books/update_chapters_order/${book._id}`, {
          chaptersOrder: null
        } )
    });
  }
  
  return(
    <StyledGrade>
      <div className="gradeHeader">
        <h2>{title}</h2>
        <button className="restoreOrder" aria-label="restaurar ordem original" onClick={handleRestoreOrder}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C10.2904 21 8.64945 20.5218 7.23081 19.6338C6.65294 19.2721 6.1177 18.8457 5.63566 18.3636C5.1529 17.8808 4.72601 17.3446 4.36401 16.7657C3.4774 15.3478 3 13.7082 3 12C3 11.7258 3.01228 11.4531 3.0367 11.1823C3.07389 10.7697 3.43847 10.4655 3.85101 10.5026C4.26355 10.5398 4.56783 10.9044 4.53064 11.317C4.51026 11.543 4.5 11.7708 4.5 12C4.5 13.4249 4.89727 14.7893 5.63583 15.9704C5.93764 16.453 6.29368 16.9002 6.69639 17.303C7.09848 17.7051 7.5449 18.0608 8.02668 18.3623C9.20844 19.1021 10.5739 19.5 12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C9.60271 4.5 7.39953 5.63281 5.99775 7.50196L8.75419 7.50209C9.1684 7.50209 9.50419 7.83788 9.50419 8.25209C9.50419 8.63179 9.22203 8.94558 8.85596 8.99525L8.75419 9.00209H4.25C3.8703 9.00209 3.55651 8.71994 3.50685 8.35386L3.5 8.25209V3.75209C3.5 3.33788 3.83579 3.00209 4.25 3.00209C4.6297 3.00209 4.94349 3.28425 4.99315 3.65032L5 3.75209L4.999 6.34348C6.68587 4.25603 9.23628 3 12 3ZM11.25 7C11.6295 7 11.9435 7.28233 11.9931 7.64827L12 7.75V12H14.25C14.664 12 15 12.336 15 12.75C15 13.1295 14.7177 13.4435 14.3517 13.4931L14.25 13.5H11.25C10.8705 13.5 10.5565 13.2177 10.5069 12.8517L10.5 12.75V7.75C10.5 7.336 10.836 7 11.25 7Z" fill="#65676B"/>
          </svg>  
        </button>
      </div>
      <div className="gradeWrapper">
        {books.map(book => {
          if(book.chapters.length){
            const [chapters, updateChapters] = useState(book.chaptersOrder ? JSON.parse(book.chaptersOrder) : book.chapters )
            
            async function handleOnDragEnd(result){
              if (!result.destination )
                return

              if(
                result.destination.droppableId === result.source.droppableId && 
                result.destination.index === result.source.index
              )
                return

              const items = Array.from(chapters);
              const [reorderedItem] = items.splice(result.source.index, 1);
              items.splice(result.destination.index, 0, reorderedItem);
              await api.put(`books/update_chapters_order/${book._id}`, {
                chaptersOrder: JSON.stringify(items)
              } )
              
              updateChapters(items);
            }

            return(
              <div 
                className="book"
                key={book._id}
              >
                <h2>{book.title}</h2>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                  <Droppable droppableId="chapters">
                    {(provided) =>(
                      <ul className="chapters" {...provided.droppableProps} ref={provided.innerRef}>
                        {chapters.map((chapter, index) => {
                          return(
                            <Draggable key={chapter._id} draggableId={chapter._id} index={index}>
                              {(provided,snapshot) => (
                                <li
                                  ref={provided.innerRef} 
                                  {...provided.draggableProps}
                                  className={snapshot.isDragging ? "dragging" : ''}
                                >
                                  <span className="order">{index + 1}</span>
                                  <span className="chapName">{ chapter.title }</span>
                                  <span className="reorder" {...provided.dragHandleProps}></span>
                                  <span className="hide chapBtns"></span>
                                  <Link href={chapter._id}><a className="chapBtns"></a></Link>
                                </li>
                              )}
                            </Draggable>
                          )
                        })}
                        {provided.placeholder}
                      </ul>
                    )}
                  </Droppable>
                </DragDropContext>
              </div>
            )
          }
        })}
      </div>
    </StyledGrade>
  )
}