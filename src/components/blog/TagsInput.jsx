import { useState, useEffect } from 'react'
import './blog.css';

function TagsInput(props) {
    const [tags, setTags] = useState([])

    useEffect(() => {
        props.onChange({ id: 'TagsInput', value: tags });
    }, [tags]);

    function handleKeyDown(e) {
        if (e.key !== 'Enter') return
        const value = e.target.value
        if (!value.trim()) return
        setTags([...tags, value])
        e.target.value = ''
    }

    function removeTag(index) {
        setTags(tags.filter((el, i) => i !== index))
    }

    return (
        <div className="tags-input-container">
            {tags.map((tag, index) => (
                <div className="tag-item" key={index}>
                    <span className="text">{tag}</span>
                    <span className="close" onClick={() => removeTag(index)}>&times;</span>
                </div>
            ))}
            <input onKeyDown={handleKeyDown} type="text" className="tags-input" placeholder="e.g (math science physics)" />
        </div>
    )
}

export default TagsInput