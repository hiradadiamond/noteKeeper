import { MdDeleteForever } from 'react-icons/md';
import React,{useState}from 'react';
import ContentEditable from 'react-contenteditable';

const Note = ({ id, title,text, handleDeleteNote, notes }) => {
	const [curNote, setCurNote] = useState({
		id:id,
		title:title,
		text:text
	});
	return (
		<div className='note'>
		<ContentEditable
              html={curNote.title}     
              onChange={(e)=>{setCurNote({...curNote, title:e.target.value
			  })}} 
              tagName='article' 
            />
			<hr/>
			<ContentEditable
              html={curNote.text}     
              onChange={(e)=>{setCurNote({...curNote, text:e.target.value
			  })}}
              tagName='article' 
            />
			<div className='note-footer'>
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
		</div>
	);
};

export default Note;