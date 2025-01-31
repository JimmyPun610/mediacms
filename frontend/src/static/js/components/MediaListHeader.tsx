import React, { Props, useRef, useState } from 'react';
import './MediaListHeader.scss'
import { CircleIconButton, MaterialIcon, NavigationContentApp, PopupMain } from './_shared/';
import { csrfToken, postRequest } from '../utils/helpers';
import { PageActions } from '../utils/actions';
import { MemberConsumer } from '../utils/contexts';
import { usePopup } from '../utils/hooks';
import { PopupContent } from '../components/_shared/popup/PopupContent.jsx';
import { PopupTrigger } from '../components/_shared/popup/PopupTrigger.jsx';

interface MediaListHeaderProps {
  title?: string;
  viewAllLink?: string;
  viewAllText?: string;
  className?: string;
  style?: { [key: string]: any };
}

export const MediaListHeader: React.FC<MediaListHeaderProps> = (props) => {

  function AddCategoryButton() {
    const popupContentRef = useRef(null);

    const [categoryTitle, setCategoryTitle] = useState('');
    const [categoryDesc, setCategoryDesc] = useState('');

    function showAddCategoryForm() {
      resetCategoryFormDetails();
      if (popupContentRef.current != null) {
        (popupContentRef.current as any).toggle();
      }
    }
    function cancelAddCategory() {
      if (popupContentRef.current != null) {
        (popupContentRef.current as any).toggle();
      }
    }
    function confirmCreateCategory() {
      let formData: FormData = new FormData();
      formData.append('title', categoryTitle);
      formData.append('description', categoryDesc);
      postRequest(
        'api/v1/categories',
        formData,
        {
          headers: {
            'X-CSRFToken': csrfToken(),
          },
        },
        null,
        (r: any) => {
          PageActions.addNotification(`Create category ${categoryTitle} success.`, 'createCategory');
          setTimeout(() => {
            window.location.reload();
          }, 1000)
        },
        () => { console.log("createCategory Failed") }
      );
    }

    function resetCategoryFormDetails() {
      setCategoryTitle('')
      setCategoryDesc('')
    }

    function onTitleChange(t: string) {
      setCategoryTitle(t)
    }
    function onDescChange(t: string) {
      setCategoryDesc(t);
    }


    return (
      <span>
        <PopupTrigger contentRef={popupContentRef}>
          <button type='button' className='add-category-button' onClick={showAddCategoryForm}>Add Category</button>
        </PopupTrigger>
        <PopupContent contentRef={popupContentRef}>
          <PopupMain>
            <div className='create-category-form'>
              <h3>Create Category</h3>
              <form>
                <div className='form-group'>
                  <label htmlFor='create-category-title'>Title</label>
                  <input type='text' id='create-category-title' name='create-category-title' className='form-control' value={categoryTitle} onChange={e => onTitleChange(e.target.value)} />
                </div>
                <div className='form-group'>
                  <label htmlFor='create-category-desc'>Description</label>
                  <input type='text' id='create-category-desc' name='create-category-desc' className='form-control' value={categoryDesc} onChange={e => onDescChange(e.target.value)} />
                </div>
              </form>
              <button type='button' className='cancel-add-category-button' onClick={cancelAddCategory}>Cancel</button>
              <button type='button' className='confirm-add-category-button' onClick={confirmCreateCategory}>Create</button>
            </div>
          </PopupMain>
        </PopupContent>
      </span>
    )
  }

  const viewAllText = props.viewAllText || 'VIEW ALL';
  return (
    <MemberConsumer>
      {(user) => (
        <div className={(props.className ? props.className + ' ' : '') + 'media-list-header'} style={props.style}>
          <h2>{props.title}</h2>
          {props.title == 'Categories' && !user.is.anonymous ?
            <AddCategoryButton></AddCategoryButton>
            : null
          }

          {props.viewAllLink ? (
            <h3>
              {' '}
              <a href={props.viewAllLink} title={viewAllText}>
                {' '}
                {viewAllText || props.viewAllLink}{' '}
              </a>{' '}
            </h3>
          ) : null}
        </div>
      )}
    </MemberConsumer>
    //   <div className={(props.className ? props.className + ' ' : '') + 'media-list-header'} style={props.style}>
    //     <h2>{props.title}</h2>
    //     {props.title != 'Categories' ? null :
    //       <button type='button' className='add-category-button' onClick={showAddCategoryForm}>Add Category</button>
    //     }
    //     {!showCreateCategoryForm ? null :
    //       <div className='create-category-form'>
    //         <h3>Create Category</h3>
    //         <form>
    //           <div className='form-group'>
    //             <label htmlFor='create-category-title'>Title</label>
    //             <input type='text' id='create-category-title' name='create-category-title' className='form-control' value={categoryTitle} onChange={e => onTitleChange(e.target.value)} />
    //           </div>
    //           <div className='form-group'>
    //             <label htmlFor='create-category-desc'>Description</label>
    //             <input type='text' id='create-category-desc' name='create-category-desc' className='form-control' value={categoryDesc} onChange={e => onDescChange(e.target.value)} />
    //           </div>
    //         </form>
    //         <button className='cancel-add-category-button' onClick={cancelAddCategory}>Cancel</button>
    //         <button className='confirm-add-category-button' onClick={confirmCreateCategory}>Create</button>
    //       </div>
    //     }
    //     {props.viewAllLink ? (
    //       <h3>
    //         {' '}
    //         <a href={props.viewAllLink} title={viewAllText}>
    //           {' '}
    //           {viewAllText || props.viewAllLink}{' '}
    //         </a>{' '}
    //       </h3>
    //     ) : null}
    //   </div>
  )




};
