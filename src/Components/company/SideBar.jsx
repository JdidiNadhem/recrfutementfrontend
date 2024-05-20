import React from 'react'

const SideBar = ({ onSelect }) => {
    return (
        <aside className="w-1/4 bg-gray-100 p-4">
            <ul>
                <li>
                    <button onClick={() => onSelect('posts')} className="w-full text-left py-2 px-4 hover:bg-gray-300">Manage Posts</button>
                </li>
                <li>
                    <button onClick={() => onSelect('info')} className="w-full text-left py-2 px-4 hover:bg-gray-300">Manage Company Info</button>
                </li>
            </ul>
        </aside>
    );
}

export default SideBar
